import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Project {
  id: string;
  title: string;
  description: string;
}

export const projectApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getAllProjects: builder.query<Project[], void>({
      query: () => 'projects',
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;
