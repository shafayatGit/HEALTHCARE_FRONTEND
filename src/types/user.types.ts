import { UserRole } from "@/src/lib/authUtils";

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
