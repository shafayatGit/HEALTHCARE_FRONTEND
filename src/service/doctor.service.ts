"use server";

import { httpClient } from "@/src/lib/axios/httpClient";
import { IDoctor } from "@/src/types/doctor.types";

export const getDoctors = async () => {
  try {
    const doctors = await httpClient.get<IDoctor[]>("/doctors");
    return doctors;
  } catch (error) {
    console.log("Error fetching doctors:", error);
    throw error;
  }
};
