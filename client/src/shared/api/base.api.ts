import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from './base-query.api';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['UserInfo', 'UserVerifie'],
  endpoints: () => ({}),
});
