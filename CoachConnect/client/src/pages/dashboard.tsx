import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../components/header";
import ProgramBuilder from "../components/program-builder";
import NutritionPlanner from "../components/nutrition-planner";
import ClientManagement from "../components/client-management";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Dumbbell, Users, Calendar, Utensils, BarChart3, TrendingUp, CheckCircle, DollarSign } from "lucide-react";

const MOCK_COACH_ID = "coach-1";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock dashboard metrics
  const metrics = {
    totalClients: 47,
    activePrograms: 23,
    compliance: 87,
    revenue: 12450,
  };

  const recentActivity = [
    {
      id: "1",
      clientName: "Sarah Johnson",
      description: "Completed Upper Body Strength workout",
      timestamp: "2 hours ago",
      type: "workout",
    },
    {
      id: "2",
      clientName: "Mike Chen",
      description: "Logged nutrition for today - exceeded protein goals",
      timestamp: "4 hours ago",
      type: "nutrition",
    },
    {
      id: "3",
      clientName: "Emma Davis",
      description: "Started Week 3 of Transformation Program",
      timestamp: "1 day ago",
      type: "program",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "programs":
        return <ProgramBuilder coachId={MOCK_COACH_ID} />;
      case "nutrition":
        return <NutritionPlanner coachId={MOCK_COACH_ID} />;
      case "clients":
        return <ClientManagement coachId={MOCK_COACH_ID} />;
      default:
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Welcome back, John!</h1>
                <p className="text-slate-600 mt-1">Here's what's happening with your clients today</p>
              </div>
              <div className="flex space-x-3 mt-4 sm:mt-0">
                <Button className="btn-primary" data-testid="button-new-client">
                  <Plus className="h-4 w-4 mr-2" />
                  New Client
                </Button>
                <Button className="btn-secondary" data-testid="button-create-program">
                  <Dumbbell className="h-4 w-4 mr-2" />
                  Create Program
                </Button>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="metric-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 text-sm font-medium">Total Clients</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1" data-testid="metric-total-clients">
                        {metrics.totalClients}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="text-primary-500 h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 text-sm font-medium">+12%</span>
                    <span className="text-slate-500 text-sm ml-2">vs last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="metric-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 text-sm font-medium">Active Programs</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1" data-testid="metric-active-programs">
                        {metrics.activePrograms}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Calendar className="text-secondary-500 h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 text-sm font-medium">+5</span>
                    <span className="text-slate-500 text-sm ml-2">this week</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="metric-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 text-sm font-medium">Avg Compliance</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1" data-testid="metric-compliance">
                        {metrics.compliance}%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-green-500 h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 text-sm font-medium">+3%</span>
                    <span className="text-slate-500 text-sm ml-2">improvement</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="metric-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 text-sm font-medium">This Month</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1" data-testid="metric-revenue">
                        ${metrics.revenue.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="text-yellow-500 h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 text-sm font-medium">+18%</span>
                    <span className="text-slate-500 text-sm ml-2">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-slate-900">Recent Client Activity</h3>
                      <Button variant="ghost" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                        View All
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                            {activity.type === "workout" && <Dumbbell className="h-5 w-5 text-primary-600" />}
                            {activity.type === "nutrition" && <Utensils className="h-5 w-5 text-secondary-600" />}
                            {activity.type === "program" && <Calendar className="h-5 w-5 text-green-600" />}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-slate-900" data-testid={`activity-client-${activity.id}`}>
                              {activity.clientName}
                            </p>
                            <p className="text-sm text-slate-600" data-testid={`activity-description-${activity.id}`}>
                              {activity.description}
                            </p>
                            <p className="text-xs text-slate-500" data-testid={`activity-timestamp-${activity.id}`}>
                              {activity.timestamp}
                            </p>
                          </div>
                          <div className="text-green-500">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button 
                        className="w-full text-left p-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-colors justify-start"
                        onClick={() => setActiveTab("programs")}
                        data-testid="quick-action-new-program"
                      >
                        <div className="flex items-center space-x-3">
                          <Plus className="h-5 w-5" />
                          <div>
                            <p className="font-medium">New Workout Program</p>
                            <p className="text-primary-100 text-sm">Create custom training plan</p>
                          </div>
                        </div>
                      </Button>

                      <Button 
                        className="w-full text-left p-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-lg hover:from-secondary-600 hover:to-secondary-700 transition-colors justify-start"
                        onClick={() => setActiveTab("nutrition")}
                        data-testid="quick-action-meal-plan"
                      >
                        <div className="flex items-center space-x-3">
                          <Utensils className="h-5 w-5" />
                          <div>
                            <p className="font-medium">Design Meal Plan</p>
                            <p className="text-secondary-100 text-sm">Build nutrition program</p>
                          </div>
                        </div>
                      </Button>

                      <Button 
                        className="w-full text-left p-4 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors justify-start"
                        onClick={() => setActiveTab("clients")}
                        data-testid="quick-action-add-client"
                      >
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5" />
                          <div>
                            <p className="font-medium">Add New Client</p>
                            <p className="text-slate-500 text-sm">Expand your roster</p>
                          </div>
                        </div>
                      </Button>

                      <Button 
                        className="w-full text-left p-4 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors justify-start"
                        data-testid="quick-action-analytics"
                      >
                        <div className="flex items-center space-x-3">
                          <BarChart3 className="h-5 w-5" />
                          <div>
                            <p className="font-medium">View Analytics</p>
                            <p className="text-slate-500 text-sm">Client progress reports</p>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderTabContent()}
      </div>
    </div>
  );
}
