import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Building,
  DollarSign,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample data
const admissionData = [
  { month: "Jan", approved: 45, pending: 12, rejected: 8 },
  { month: "Feb", approved: 52, pending: 18, rejected: 5 },
  { month: "Mar", approved: 61, pending: 15, rejected: 7 },
  { month: "Apr", approved: 38, pending: 22, rejected: 9 },
  { month: "May", approved: 55, pending: 19, rejected: 6 },
  { month: "Jun", approved: 48, pending: 14, rejected: 4 },
];

const performanceData = [
  { month: "Jan", performance: 78 },
  { month: "Feb", performance: 82 },
  { month: "Mar", performance: 79 },
  { month: "Apr", performance: 85 },
  { month: "May", performance: 88 },
  { month: "Jun", performance: 91 },
];

const statsCards = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12%",
    icon: Users,
    color: "text-blue-accent",
    bgColor: "bg-blue-accent/10",
  },
  {
    title: "Total Teachers",
    value: "156",
    change: "+3%",
    icon: GraduationCap,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Hostels",
    value: "8",
    change: "0%",
    icon: Building,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Revenue",
    value: "$1.2M",
    change: "+8%",
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

const chartConfig = {
  approved: {
    label: "Approved",
    color: "hsl(var(--primary))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--warning))",
  },
  rejected: {
    label: "Rejected",
    color: "hsl(var(--destructive))",
  },
  performance: {
    label: "Performance",
    color: "hsl(var(--blue-accent))",
  },
};

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening at your school today.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            <Card className="hover:shadow-medium transition-all duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}>
                    {stat.change}
                  </span>{' '}
                  from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Admissions Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Admissions Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={admissionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="approved"
                    fill="var(--color-approved)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="pending"
                    fill="var(--color-pending)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="rejected"
                    fill="var(--color-rejected)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-accent" />
                Student Performance Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    stroke="var(--color-performance)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-performance)", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Schedule Exam</h3>
                  <p className="text-sm text-muted-foreground">Create new exam schedule</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-accent/5 hover:bg-blue-accent/10 transition-colors cursor-pointer">
                <Users className="h-8 w-8 text-blue-accent" />
                <div>
                  <h3 className="font-medium text-foreground">Add Student</h3>
                  <p className="text-sm text-muted-foreground">Register new student</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-success/5 hover:bg-success/10 transition-colors cursor-pointer">
                <BookOpen className="h-8 w-8 text-success" />
                <div>
                  <h3 className="font-medium text-foreground">Library Books</h3>
                  <p className="text-sm text-muted-foreground">Manage book inventory</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};