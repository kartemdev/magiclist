import { baseApi } from "shared/api";
import { ITodo } from "./types";

const api = baseApi.enhanceEndpoints({
  addTagTypes: ['TodoByUser',]
}).injectEndpoints({
  endpoints: (build) => ({
    getTodoByUser: build.query<ITodo[], number>({
      query: (id) => ({
        url: 'todos',
        params: { userId: id }
      }),
      providesTags: ['TodoByUser'],
    })
  })
});

export const getTodoByUser = (id: number) => api.useGetTodoByUserQuery(id);
