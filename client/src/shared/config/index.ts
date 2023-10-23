export const API_BASE = window?._env_?.API_HOST || 'http://localhost:3000/api';

export const config = {
  API_BASE,
} as const;
