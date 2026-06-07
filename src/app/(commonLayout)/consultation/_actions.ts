"use server";
import { httpClient } from "@/src/lib/axios/httpClient";

export const getDoctors = async () => {
  try {
    const response = await httpClient.get("/doctors");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    throw error;
  }
};
