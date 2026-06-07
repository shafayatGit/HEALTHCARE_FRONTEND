"use client";
import { getDoctors } from "@/src/app/(commonLayout)/consultation/_actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const DoctorsList = () => {
  const { data } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => getDoctors(),
  });
  //   console.log("Doctors data:", data);
  return <div>Doctors List</div>;
};

export default DoctorsList;
