"use client";

import StatsCard from "@/src/components/shared/StatsCard";
import { getDashboardData } from "@//src/service/dashboard.service";
import { ApiResponse } from "@/src/types/api.types";
import { IAdminDashboardData } from "@/src/types/dashboard.types";
import { useQuery } from "@tanstack/react-query";
import AppointmentBarChart from "../../shared/AppointmentBarChart";
import AppointmentPieChart from "../../shared/AppointmentPieChart";

const AdminDashboardContent = () => {
  const { data: adminDashboardData } = useQuery({
    queryKey: ["admin-dashboard-data"],
    queryFn: getDashboardData,
    refetchOnWindowFocus: "always", // Refetch the data when the window regains focus
  });

  const { data } = adminDashboardData as ApiResponse<IAdminDashboardData>;

  console.log(data);
  return (
    <div className="flex flex-wrap">
      <StatsCard
        title="Total Appointments"
        value={data?.appointmentCount || 0}
        iconName="CalendarDays"
        description="Number of appointments scheduled"
      />
      <StatsCard
        title="Total Patients"
        value={data?.patientCount || 0}
        iconName="Users"
        description="Number of patients registered"
      />

      <AppointmentBarChart data={data?.barChartData || []} />

      <AppointmentPieChart data={data?.pieChartData || []} />
    </div>
  );
};

export default AdminDashboardContent;
