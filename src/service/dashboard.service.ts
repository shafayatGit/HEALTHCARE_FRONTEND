/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { httpClient } from "@/src/lib/axios/httpClient";
import { IAdminDashboardData } from "@/src/types/dashboard.types";

export async function getDashboardData() {
  try {
    const response = await httpClient.get<IAdminDashboardData>("/stats");

    return response;
  } catch (error: any) {
    console.log(error, "From Dashboard Server Action");
    return {
      success: false,
      message:
        error.message || "An error occurred while fetching dashboard data.",
      data: null,
      meta: null,
    };
  }
}
