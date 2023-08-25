import { IUser } from "./types";
import { baseApi } from "shared/api";

const api = baseApi.enhanceEndpoints({
  addTagTypes: ['AllUsers', 'User'],
}).injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<IUser[], null>({
      query: () => 'users',
      providesTags: ['AllUsers']
    }),
    getUser: build.query<IUser, number>({
      query: (id) => `users/${id}`,
      providesTags: ['User'],
    })
  })
});

export const getAllUsers = () => api.useGetAllUsersQuery(undefined);
export const getUserById = (id: number) => api.useGetUserQuery(id);
