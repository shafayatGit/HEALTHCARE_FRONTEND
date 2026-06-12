import { getDefaultDashboardRoute } from "@/src/lib/authUtils";
import { getNavItemsByRole } from "@/src/lib/navItems";
import { getUserInfo } from "@/src/service/auth.service";
import { NavSection } from "@/src/types/dashboard.types";
import DashboardSidebarContent from "./DashboardSidebarContent";

const DashboardSidebar = async () => {
  const userInfo = await getUserInfo();
  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);

  const dashboardHome = getDefaultDashboardRoute(userInfo.role);
  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardSidebar;
