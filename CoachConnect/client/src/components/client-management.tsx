import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Search, UserPlus, Dumbbell, Utensils, MessageCircle, Calendar, TrendingUp, MoreVertical } from "lucide-react";
import type { Client } from "@shared/schema";

interface ClientManagementProps {
  coachId: string;
}

interface NewClientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  goals: string;
}

export default function ClientManagement({ coachId }: ClientManagementProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newClientData, setNewClientData] = useState<NewClientData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goals: "",
  });

  // Fetch clients
  const { data: clients = [], isLoading } = useQuery({
    queryKey: ["/api/clients", { coachId }],
  });

  // Create client mutation
  const createClientMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/clients", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Client Added",
        description: "New client has been successfully added to your roster.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/clients", coachId] });
      setIsDialogOpen(false);
      setNewClientData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        goals: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to add client. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCreateClient = () => {
    if (!newClientData.firstName || !newClientData.lastName || !newClientData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    createClientMutation.mutate({
      ...newClientData,
      coachId,
    });
  };

  // Filter clients based on search
  const filteredClients = clients.filter((client: Client) =>
    `${client.firstName} ${client.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock compliance calculation (in real app, this would come from progress data)
  const getClientCompliance = (client: Client) => {
    // Mock compliance percentages for demo
    const mockCompliances: { [key: string]: number } = {};
    const hash = client.id.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return Math.abs(hash % 30) + 70; // 70-100% range
  };

  const getComplianceColor = (compliance: number) => {
    if (compliance >= 90) return "text-green-600";
    if (compliance >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const getComplianceBgColor = (compliance: number) => {
    if (compliance >= 90) return "bg-green-500";
    if (compliance >= 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Mock recent workout data
  const getLastWorkout = (client: Client) => {
    const options = ["Today", "Yesterday", "2 days ago", "3 days ago", "1 week ago"];
    const hash = client.id.split('').reduce((a, b) => {
      a = ((a << 6) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return options[Math.abs(hash) % options.length];
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center py-12">
          <div className="text-slate-500">Loading clients...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-slate-900">Client Management</h2>
        <div className="flex space-x-3 mt-4 sm:mt-0">
          <div className="relative">
            <Input
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2"
              data-testid="input-search-clients"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="btn-primary" data-testid="button-add-client">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Client
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Client</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={newClientData.firstName}
                      onChange={(e) => setNewClientData({ ...newClientData, firstName: e.target.value })}
                      placeholder="Adrian"
                      className="mt-1"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={newClientData.lastName}
                      onChange={(e) => setNewClientData({ ...newClientData, lastName: e.target.value })}
                      placeholder="Example"
                      className="mt-1"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newClientData.email}
                    onChange={(e) => setNewClientData({ ...newClientData, email: e.target.value })}
                    placeholder="john.doe@email.com"
                    className="mt-1"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={newClientData.phone}
                    onChange={(e) => setNewClientData({ ...newClientData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="goals">Goals</Label>
                  <Textarea
                    id="goals"
                    value={newClientData.goals}
                    onChange={(e) => setNewClientData({ ...newClientData, goals: e.target.value })}
                    placeholder="What are the client's fitness goals?"
                    rows={3}
                    className="mt-1"
                    data-testid="textarea-goals"
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    data-testid="button-cancel-client"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleCreateClient}
                    disabled={createClientMutation.isPending}
                    className="btn-primary"
                    data-testid="button-save-client"
                  >
                    {createClientMutation.isPending ? "Adding..." : "Add Client"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {filteredClients.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <UserPlus className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {searchQuery ? "No clients found" : "No clients yet"}
            </h3>
            <p className="text-slate-600 mb-6">
              {searchQuery 
                ? `No clients match "${searchQuery}". Try a different search term.`
                : "Start building your client roster by adding your first client."
              }
            </p>
            {!searchQuery && (
              <Button 
                className="btn-primary"
                onClick={() => setIsDialogOpen(true)}
                data-testid="button-add-first-client"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Add Your First Client
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client: Client) => {
            const compliance = getClientCompliance(client);
            const lastWorkout = getLastWorkout(client);
            const joinedAgo = Math.floor((Date.now() - new Date(client.joinedDate).getTime()) / (1000 * 60 * 60 * 24 * 30));
            
            return (
              <Card key={client.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {client.firstName[0]}{client.lastName[0]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 truncate" data-testid={`client-name-${client.id}`}>
                        {client.firstName} {client.lastName}
                      </h3>
                      <p className="text-sm text-slate-600 truncate" data-testid={`client-email-${client.id}`}>
                        {client.email}
                      </p>
                      <p className="text-xs text-slate-500" data-testid={`client-joined-${client.id}`}>
                        Joined {joinedAgo === 0 ? "this month" : `${joinedAgo} month${joinedAgo > 1 ? 's' : ''} ago`}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                      <MoreVertical className="h-4 w-4 text-slate-400" />
                    </Button>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Current Program</span>
                      <span className="text-sm font-medium text-slate-900" data-testid={`client-program-${client.id}`}>
                        {client.currentProgram || "No Program"}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Compliance Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-slate-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getComplianceBgColor(compliance)}`}
                            style={{ width: `${compliance}%` }}
                          />
                        </div>
                        <span className={`text-sm font-medium ${getComplianceColor(compliance)}`} data-testid={`client-compliance-${client.id}`}>
                          {compliance}%
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Last Workout</span>
                      <span className="text-sm font-medium text-slate-900" data-testid={`client-last-workout-${client.id}`}>
                        {lastWorkout}
                      </span>
                    </div>

                    {client.goals && (
                      <div>
                        <span className="text-sm text-slate-600">Goals</span>
                        <p className="text-sm text-slate-900 mt-1 line-clamp-2" data-testid={`client-goals-${client.id}`}>
                          {client.goals}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
                      data-testid={`button-assign-program-${client.id}`}
                    >
                      <Dumbbell className="h-4 w-4 mr-1" />
                      Assign Program
                    </Button>
                    <Button 
                      className="flex-1 bg-secondary-50 text-secondary-700 hover:bg-secondary-100 transition-colors"
                      data-testid={`button-meal-plan-${client.id}`}
                    >
                      <Utensils className="h-4 w-4 mr-1" />
                      Meal Plan
                    </Button>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="flex-shrink-0"
                      data-testid={`button-message-${client.id}`}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
