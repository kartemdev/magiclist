export const API_BASE = process.env.API_HOST || 'http://localhost/api';

export const config = {
  API_BASE,
} as const;
