// Utility functions for authentication

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('todo_auth_token');
  }
  return null;
};

export const setToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('todo_auth_token', token);
  }
};

export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('todo_auth_token');
  }
};

export const decodeToken = (token: string): any => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded) return true;

  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp < currentTime;
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  if (!token) return false;

  return !isTokenExpired(token);
};

export const getCurrentUserId = (): string | null => {
  const token = getToken();
  if (!token) return null;

  const decoded = decodeToken(token);
  return decoded?.sub || decoded?.userId || null;
};