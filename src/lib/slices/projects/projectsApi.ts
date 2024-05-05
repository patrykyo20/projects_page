import Project from '@/types/Project';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/projects' }),
  endpoints: (builder) => ({
    getAllProjects: builder.query<Project[], { page: number; pagePerSize: number; order: string; sort: string }>({
      query: ({ page, pagePerSize, order, sort }) => ({
        url: `?page=${page}&pagePerSize=${pagePerSize}&order=${order}&sort=${sort}`,
      }),    
    }),
    getProjectsLength: builder.query({
      query: () => ({
        url: '/length',
      }),    
    }),
    getProject: builder.query<Project, {id: number}>({
      query: (id) => ({
        url: `/${id}`
      })
    }),
    getUserProjects: builder.query<Project[], { userId: string | undefined; page: number; pagePerSize: number; order: string; sort: string }>({
      query: ({ userId, page, pagePerSize, order, sort }) => ({
        url: `/user/${userId}?page=${page}&pagePerSize=${pagePerSize}&order=${order}&sort=${sort}`,
      }),
    }),
    addLikes: builder.mutation<Project, { id: number | undefined; data: Project | undefined }>({
      query: ({ id, data }) => ({
          url: `/${id}`,
          method: 'PATCH',
          body: data,
      }),
    }),
    addVisits: builder.mutation<Project, { id: number | undefined; data: Project | undefined }>({
      query: ({ id, data }) => ({
          url: `/${id}`,
          method: 'PATCH',
          body: data,
      }),
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetProjectsLengthQuery,
  useGetProjectQuery,
  useGetUserProjectsQuery,
  useAddLikesMutation,
  useAddVisitsMutation,
} = projectApi;
