// src/api/utils/projectApi.ts
import { IProject } from "@/app/models/Project.model";
import apiClient from "@/lib/apiClient";

export const projectApi = {
  async getAll(params?: Record<string, any>): Promise<IProject[]> {
    const res = await apiClient.get("/projects", { params });
    return res.data.data.data; // note: double .data (due to nested {data: {data: []}})
  },

  async getBySlug(slug: string): Promise<IProject> {
    const res = await apiClient.get(`/projects/${slug}`);
    return res.data.data;
  },

  async getTopProjects(limit: number = 10): Promise<IProject[]> {
    const res = await apiClient.get("/projects", {
      params: { limit, sortBy: "rank", sortOrder: "desc" },
    });
    console.log("api response", res);
    return res.data.data.data; // nested data from pagination response
  },
};
