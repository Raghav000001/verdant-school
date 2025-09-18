import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Navbar } from "@/components/dashboard/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        <motion.aside
          initial={{ x: -280 }}
          animate={{ x: sidebarOpen ? 0 : -240 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className={`fixed left-0 top-0 z-40 h-screen bg-card border-r border-border shadow-medium ${
            sidebarOpen ? "w-64" : "w-16"
          }`}
        >
          <Sidebar 
            collapsed={!sidebarOpen} 
            onToggle={() => setSidebarOpen(!sidebarOpen)} 
          />
        </motion.aside>
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        {/* Navigation */}
        <Navbar 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        />

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};