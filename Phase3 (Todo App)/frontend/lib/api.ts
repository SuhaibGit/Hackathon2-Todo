import { Task, User, ApiResponse, AuthResponse } from '@/types';

// Configuration for API endpoints
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8001';
const AUTH_TOKEN_KEY = 'todo_auth_token';

// Helper function to get JWT token from localStorage
const getAuthToken = (): string | null => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  // Check if it's a mock token and clear it if so
  if (token && token.startsWith('mock.')) {
    console.log('Found mock token, clearing it');
    localStorage.removeItem(AUTH_TOKEN_KEY);
    return null;
  }

  return token;
};

// Helper function to get user ID from token
const getCurrentUserId = (): string | null => {
  const token = getAuthToken();
  if (!token) return null;

  try {
    // Decode JWT payload (second part after the dot)
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) return null;

    const payload = tokenParts[1];
    const decodedPayload = atob(payload);
    const parsed = JSON.parse(decodedPayload);
    return parsed.sub || parsed.userId;
  } catch (e) {
    console.error('Error parsing token:', e);
    // If there's an error parsing the token, remove it from storage
    localStorage.removeItem(AUTH_TOKEN_KEY);
    return null;
  }
};

// Generic API request helper
const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const token = getAuthToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export class ApiClient {
  private loadingStates: Map<string, boolean> = new Map();

  isLoading(operation: string): boolean {
    return this.loadingStates.get(operation) || false;
  }

  private setLoading(operation: string, loading: boolean): void {
    this.loadingStates.set(operation, loading);
  }

  // Authentication methods
  async signup(email: string, password: string): Promise<AuthResponse> {
    this.setLoading('signup', true);
    try {
      // Clear any existing mock tokens before signing up
      localStorage.removeItem(AUTH_TOKEN_KEY);

      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok && result.token) {
        localStorage.setItem(AUTH_TOKEN_KEY, result.token);
        return { success: true, user: result.user, token: result.token };
      } else {
        return { success: false, error: result.detail || 'Signup failed' };
      }
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('signup', false);
    }
  }

  async signin(email: string, password: string): Promise<AuthResponse> {
    this.setLoading('signin', true);
    try {
      // Clear any existing mock tokens before signing in
      localStorage.removeItem(AUTH_TOKEN_KEY);

      const response = await fetch(`${API_BASE_URL}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok && result.token) {
        localStorage.setItem(AUTH_TOKEN_KEY, result.token);
        return { success: true, user: result.user, token: result.token };
      } else {
        return { success: false, error: result.detail || 'Signin failed' };
      }
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('signin', false);
    }
  }

  async signout(): Promise<ApiResponse> {
    this.setLoading('signout', true);
    try {
      // Remove token from localStorage
      localStorage.removeItem(AUTH_TOKEN_KEY);

      // In a real app, we might also call a backend logout endpoint
      return { success: true, message: 'Successfully signed out' };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('signout', false);
    }
  }

  getCurrentUser(): User | null {
    const token = getAuthToken();
    if (!token) return null;

    try {
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) return null;

      const payload = tokenParts[1];
      const decodedPayload = atob(payload);
      const parsed = JSON.parse(decodedPayload);

      return {
        id: parsed.sub || parsed.userId,
        email: parsed.email,
        createdAt: new Date(parsed.iat * 1000),
        lastLoginAt: new Date()
      };
    } catch (e) {
      console.error('Error getting current user:', e);
      return null;
    }
  }

  isAuthenticated(): boolean {
    const token = getAuthToken();
    if (!token) return false;

    try {
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        // If the token format is wrong, remove it
        localStorage.removeItem(AUTH_TOKEN_KEY);
        return false;
      }

      const payload = tokenParts[1];
      const decodedPayload = atob(payload);
      const parsed = JSON.parse(decodedPayload);
      const now = Math.floor(Date.now() / 1000);
      const isValid = parsed.exp > now; // Check if token is not expired

      // If token is expired, remove it
      if (!isValid) {
        localStorage.removeItem(AUTH_TOKEN_KEY);
      }

      return isValid;
    } catch (e) {
      // If there's an error parsing the token, remove it
      localStorage.removeItem(AUTH_TOKEN_KEY);
      return false;
    }
  }

  // Task methods
  async getTasks(): Promise<ApiResponse<Task[]>> {
    this.setLoading('getTasks', true);
    try {
      if (!this.isAuthenticated()) {
        return { success: false, error: 'Unauthorized' };
      }

      const userId = getCurrentUserId();
      if (!userId) {
        return { success: false, error: 'No user ID found' };
      }

      const tasks = await apiRequest(`/api/${userId}/tasks/`);
      this.cacheTasks(tasks);
      return { success: true, data: tasks };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('getTasks', false);
    }
  }

  async getTask(taskId: string): Promise<ApiResponse<Task>> {
    this.setLoading('getTask', true);
    try {
      if (!this.isAuthenticated()) {
        return { success: false, error: 'Unauthorized' };
      }

      const userId = getCurrentUserId();
      if (!userId) {
        return { success: false, error: 'No user ID found' };
      }

      const task = await apiRequest(`/api/${userId}/tasks/${taskId}`);
      this.cacheTask(task);
      return { success: true, data: task };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('getTask', false);
    }
  }

  async createTask(title: string, description?: string): Promise<ApiResponse<Task>> {
    this.setLoading('createTask', true);
    try {
      if (!this.isAuthenticated()) {
        return { success: false, error: 'Unauthorized' };
      }

      if (!title || title.trim().length < 1 || title.trim().length > 200) {
        return { success: false, error: 'Title must be between 1 and 200 characters' };
      }

      const userId = getCurrentUserId();
      if (!userId) {
        return { success: false, error: 'No user ID found' };
      }

      const taskData = {
        title: title.trim(),
        description: description?.trim(),
        completed: false
      };

      const newTask = await apiRequest(`/api/${userId}/tasks/`, {
        method: 'POST',
        body: JSON.stringify(taskData)
      });

      this.cacheTask(newTask);
      return { success: true, data: newTask };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('createTask', false);
    }
  }

  public addToCache(task: Task): void {
    this.cacheTask(task);
  }

  public async refreshTasks(): Promise<ApiResponse<Task[]>> {
    return await this.getTasks();
  }

  async updateTask(taskId: string, updates: Partial<Task>): Promise<ApiResponse<Task>> {
    this.setLoading('updateTask', true);
    try {
      if (!this.isAuthenticated()) {
        return { success: false, error: 'Unauthorized' };
      }

      const userId = getCurrentUserId();
      if (!userId) {
        return { success: false, error: 'No user ID found' };
      }

      const updatedTask = await apiRequest(`/api/${userId}/tasks/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
      });

      this.cacheTask(updatedTask);
      return { success: true, data: updatedTask };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('updateTask', false);
    }
  }

  async toggleTask(taskId: string): Promise<ApiResponse<Task>> {
    this.setLoading('toggleTask', true);
    try {
      if (!this.isAuthenticated()) {
        return { success: false, error: 'Unauthorized' };
      }

      const userId = getCurrentUserId();
      if (!userId) {
        return { success: false, error: 'No user ID found' };
      }

      // Optimistic update: temporarily flip the completed status
      const tempTask = { id: taskId, completed: !this.getCachedTaskCompletionStatus(taskId) } as Task;
      if (typeof window !== 'undefined') {
        // Update loading state to indicate optimistic update
        this.optimisticUpdates.set(taskId, { completed: tempTask.completed });
      }

      const toggledTask = await apiRequest(`/api/${userId}/tasks/${taskId}/toggle`, {
        method: 'PATCH'
      });

      // Remove optimistic update marker
      if (typeof window !== 'undefined') {
        this.optimisticUpdates.delete(taskId);
      }

      return { success: true, data: toggledTask };
    } catch (error: any) {
      // Revert optimistic update if there was an error
      if (typeof window !== 'undefined') {
        this.optimisticUpdates.delete(taskId);
      }
      return { success: false, error: error.message };
    } finally {
      this.setLoading('toggleTask', false);
    }
  }

  private optimisticUpdates: Map<string, Partial<Task>> = new Map();
  private taskCache: Map<string, Task> = new Map();

  private getCachedTaskCompletionStatus(taskId: string): boolean {
    const cached = this.taskCache.get(taskId);
    if (cached) return cached.completed;

    const optimistic = this.optimisticUpdates.get(taskId);
    if (optimistic) return !!optimistic.completed;

    return false; // default value
  }

  private cacheTask(task: Task): void {
    this.taskCache.set(task.id, task);
  }

  private cacheTasks(tasks: Task[]): void {
    tasks.forEach(task => this.cacheTask(task));
  }

  private removeCachedTask(taskId: string): void {
    this.taskCache.delete(taskId);
  }

  public getCachedTask(taskId: string): Task | undefined {
    return this.taskCache.get(taskId);
  }

  public getAllCachedTasks(): Task[] {
    return Array.from(this.taskCache.values());
  }

  async deleteTask(taskId: string): Promise<ApiResponse> {
    this.setLoading('deleteTask', true);
    try {
      if (!this.isAuthenticated()) {
        return { success: false, error: 'Unauthorized' };
      }

      const userId = getCurrentUserId();
      if (!userId) {
        return { success: false, error: 'No user ID found' };
      }

      await apiRequest(`/api/${userId}/tasks/${taskId}`, {
        method: 'DELETE'
      });

      this.removeCachedTask(taskId);
      return { success: true, message: 'Task deleted successfully' };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      this.setLoading('deleteTask', false);
    }
  }
}

export const apiClient = new ApiClient();