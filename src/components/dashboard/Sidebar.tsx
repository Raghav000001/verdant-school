import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  ClipboardList,
  Award,
  CreditCard,
  Building,
  BookOpen,
  Users,
  GraduationCap,
  Settings,
  Menu,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Admissions", url: "/admissions", icon: UserPlus },
  { title: "Exams", url: "/exams", icon: ClipboardList },
  { title: "Results", url: "/results", icon: Award },
  { title: "Fees", url: "/fees", icon: CreditCard },
  { title: "Hostel", url: "/hostel", icon: Building },
  { title: "Library", url: "/library", icon: BookOpen },
  { title: "Students", url: "/students", icon: Users },
  { title: "Teachers", url: "/teachers", icon: GraduationCap },
  { title: "Settings", url: "/settings", icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col bg-card">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <motion.div
          initial={false}
          animate={{ opacity: collapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          <School className="h-8 w-8 text-primary" />
          {!collapsed && (
            <span className="text-xl font-bold text-foreground">EduMax</span>
          )}
        </motion.div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="hover:bg-accent"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.url;
          
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-soft"
                )
              }
            >
              <item.icon className={cn("h-5 w-5 flex-shrink-0", collapsed && "mx-auto")} />
              <motion.span
                initial={false}
                animate={{
                  opacity: collapsed ? 0 : 1,
                  width: collapsed ? 0 : "auto",
                }}
                transition={{ duration: 0.2 }}
                className={cn("overflow-hidden", collapsed && "hidden")}
              >
                {item.title}
              </motion.span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <motion.div
        initial={false}
        animate={{ opacity: collapsed ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="p-4 border-t border-border"
      >
        {!collapsed && (
          <div className="text-xs text-muted-foreground text-center">
            EduMax v1.0
          </div>
        )}
      </motion.div>
    </div>
  );
};