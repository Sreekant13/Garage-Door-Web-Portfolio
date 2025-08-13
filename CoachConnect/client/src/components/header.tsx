import { Button } from "@/components/ui/button";
import { Dumbbell, Bell, Users, Calendar, Utensils, BarChart3 } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "clients", label: "Clients", icon: Users },
    { id: "programs", label: "Programs", icon: Calendar },
    { id: "nutrition", label: "Nutrition", icon: Utensils },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="text-white h-4 w-4" />
              </div>
              <span className="text-xl font-bold text-slate-900">FitCoach Pro</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`flex items-center space-x-2 ${
                    activeTab === tab.id 
                      ? "bg-primary-50 text-primary-700 hover:bg-primary-100" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => onTabChange(tab.id)}
                  data-testid={`tab-${tab.id}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" data-testid="button-notifications">
              <Bell className="h-4 w-4 text-slate-400" />
            </Button>
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
