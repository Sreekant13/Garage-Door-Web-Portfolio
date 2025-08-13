import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Plus, Save, Check, MoreVertical, Thermometer, Trash2 } from "lucide-react";
import type { Program, Workout, Exercise } from "@shared/schema";

interface ProgramBuilderProps {
  coachId: string;
}

interface WorkoutData {
  id?: string;
  name: string;
  dayNumber: number;
  warmup: string;
  exercises: ExerciseData[];
  cooldown: string;
}

interface ExerciseData {
  id?: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  rest: string;
  instructions: string;
  orderIndex: number;
}

export default function ProgramBuilder({ coachId }: ProgramBuilderProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [programData, setProgramData] = useState({
    name: "Upper Body Strength & Conditioning",
    description: "A comprehensive 8-week upper body focused program designed to build strength, muscle mass, and improve functional movement patterns.",
    duration: 8,
    frequency: 3,
    difficulty: "intermediate" as const,
  });

  const [workouts, setWorkouts] = useState<WorkoutData[]>([
    {
      name: "Day 1 - Chest & Triceps",
      dayNumber: 1,
      warmup: "5 minutes light cardio + dynamic arm circles and band pull-aparts",
      exercises: [
        {
          name: "Barbell Bench Press",
          sets: "4",
          reps: "8-10",
          weight: "",
          rest: "2-3min",
          instructions: "Focus on controlled movement. Lower bar to chest with 2-second eccentric, pause briefly, then press explosively.",
          orderIndex: 0,
        },
        {
          name: "Incline Dumbbell Press",
          sets: "3",
          reps: "10-12",
          weight: "",
          rest: "90sec",
          instructions: "Incline bench at 30-45 degrees. Full range of motion with emphasis on chest stretch at bottom.",
          orderIndex: 1,
        },
      ],
      cooldown: "",
    },
    {
      name: "Day 2 - Back & Biceps",
      dayNumber: 2,
      warmup: "Cat-cow stretches, band pull-aparts, and light rowing",
      exercises: [
        {
          name: "Pull-ups/Lat Pulldowns",
          sets: "4",
          reps: "6-8",
          weight: "",
          rest: "2-3min",
          instructions: "Wide grip, focus on pulling elbows down and back. If unable to do pull-ups, use lat pulldown machine.",
          orderIndex: 0,
        },
      ],
      cooldown: "",
    },
    {
      name: "Day 3 - Shoulders & Core",
      dayNumber: 3,
      warmup: "Arm circles, shoulder dislocations with band, light cardio",
      exercises: [
        {
          name: "Overhead Press",
          sets: "4",
          reps: "8-10",
          weight: "",
          rest: "2min",
          instructions: "Standing military press. Keep core tight, press straight overhead without arching back excessively.",
          orderIndex: 0,
        },
      ],
      cooldown: "",
    },
  ]);

  const createProgramMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/programs", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Program Created",
        description: "Your workout program has been successfully created.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/programs", coachId] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create program. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSaveProgram = () => {
    const programWithWorkouts = {
      ...programData,
      coachId,
      workouts: workouts,
    };
    
    createProgramMutation.mutate(programWithWorkouts);
  };

  const addWorkout = () => {
    const newWorkout: WorkoutData = {
      name: `Day ${workouts.length + 1} - New Workout`,
      dayNumber: workouts.length + 1,
      warmup: "",
      exercises: [],
      cooldown: "",
    };
    setWorkouts([...workouts, newWorkout]);
  };

  const updateWorkout = (index: number, updates: Partial<WorkoutData>) => {
    const updated = [...workouts];
    updated[index] = { ...updated[index], ...updates };
    setWorkouts(updated);
  };

  const addExercise = (workoutIndex: number) => {
    const newExercise: ExerciseData = {
      name: "New Exercise",
      sets: "3",
      reps: "10",
      weight: "",
      rest: "60sec",
      instructions: "",
      orderIndex: workouts[workoutIndex].exercises.length,
    };
    
    const updated = [...workouts];
    updated[workoutIndex].exercises.push(newExercise);
    setWorkouts(updated);
  };

  const updateExercise = (workoutIndex: number, exerciseIndex: number, updates: Partial<ExerciseData>) => {
    const updated = [...workouts];
    updated[workoutIndex].exercises[exerciseIndex] = {
      ...updated[workoutIndex].exercises[exerciseIndex],
      ...updates,
    };
    setWorkouts(updated);
  };

  const removeExercise = (workoutIndex: number, exerciseIndex: number) => {
    const updated = [...workouts];
    updated[workoutIndex].exercises.splice(exerciseIndex, 1);
    // Update order indices
    updated[workoutIndex].exercises.forEach((exercise, idx) => {
      exercise.orderIndex = idx;
    });
    setWorkouts(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-slate-900">Workout Program Builder</h2>
        <div className="flex space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" data-testid="button-save-draft">
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button 
            className="btn-primary" 
            onClick={handleSaveProgram}
            disabled={createProgramMutation.isPending}
            data-testid="button-publish-program"
          >
            <Check className="h-4 w-4 mr-2" />
            Publish Program
          </Button>
        </div>
      </div>
      
      {/* Program Details */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div>
                <Label htmlFor="program-name">Program Name</Label>
                <Input
                  id="program-name"
                  value={programData.name}
                  onChange={(e) => setProgramData({ ...programData, name: e.target.value })}
                  className="mt-1"
                  data-testid="input-program-name"
                />
              </div>
              
              <div>
                <Label htmlFor="program-description">Program Description</Label>
                <Textarea
                  id="program-description"
                  rows={3}
                  value={programData.description}
                  onChange={(e) => setProgramData({ ...programData, description: e.target.value })}
                  placeholder="Describe the goals and methodology of this program..."
                  className="mt-1"
                  data-testid="textarea-program-description"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Select 
                  value={programData.duration.toString()} 
                  onValueChange={(value) => setProgramData({ ...programData, duration: parseInt(value) })}
                >
                  <SelectTrigger className="mt-1" data-testid="select-duration">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">4 weeks</SelectItem>
                    <SelectItem value="6">6 weeks</SelectItem>
                    <SelectItem value="8">8 weeks</SelectItem>
                    <SelectItem value="12">12 weeks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Select 
                  value={programData.frequency.toString()} 
                  onValueChange={(value) => setProgramData({ ...programData, frequency: parseInt(value) })}
                >
                  <SelectTrigger className="mt-1" data-testid="select-frequency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2x per week</SelectItem>
                    <SelectItem value="3">3x per week</SelectItem>
                    <SelectItem value="4">4x per week</SelectItem>
                    <SelectItem value="5">5x per week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <Select 
                  value={programData.difficulty} 
                  onValueChange={(value) => 
                    setProgramData({ ...programData, difficulty: value as "beginner" | "intermediate" | "advanced" })
                  }
                >
                  <SelectTrigger className="mt-1" data-testid="select-difficulty">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workout Days Builder */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Week 1 Workouts</h3>
            <Button 
              className="btn-primary" 
              onClick={addWorkout}
              data-testid="button-add-workout"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Workout Day
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workouts.map((workout, workoutIndex) => (
              <Card key={workoutIndex} className="border border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Input
                      value={workout.name}
                      onChange={(e) => updateWorkout(workoutIndex, { name: e.target.value })}
                      className="font-semibold border-none p-0 h-auto focus-visible:ring-0"
                      data-testid={`input-workout-name-${workoutIndex}`}
                    />
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Warmup Section */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-slate-700">Warmup</span>
                    </div>
                    <Textarea
                      rows={2}
                      value={workout.warmup}
                      onChange={(e) => updateWorkout(workoutIndex, { warmup: e.target.value })}
                      placeholder="Enter warmup routine..."
                      className="text-sm"
                      data-testid={`textarea-warmup-${workoutIndex}`}
                    />
                  </div>

                  {/* Exercise List */}
                  <div className="space-y-3 mb-4">
                    {workout.exercises.map((exercise, exerciseIndex) => (
                      <div key={exerciseIndex} className="bg-slate-50 rounded-md p-3">
                        <div className="flex items-center justify-between mb-2">
                          <Input
                            value={exercise.name}
                            onChange={(e) => updateExercise(workoutIndex, exerciseIndex, { name: e.target.value })}
                            className="font-medium bg-transparent border-none p-0 h-auto focus-visible:ring-0"
                            data-testid={`input-exercise-name-${workoutIndex}-${exerciseIndex}`}
                          />
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeExercise(workoutIndex, exerciseIndex)}
                            className="h-6 w-6 text-slate-400 hover:text-red-500"
                            data-testid={`button-remove-exercise-${workoutIndex}-${exerciseIndex}`}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                          <div>
                            <Label className="text-xs text-slate-500">Sets</Label>
                            <Input
                              value={exercise.sets}
                              onChange={(e) => updateExercise(workoutIndex, exerciseIndex, { sets: e.target.value })}
                              className="text-center h-8"
                              data-testid={`input-sets-${workoutIndex}-${exerciseIndex}`}
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-slate-500">Reps</Label>
                            <Input
                              value={exercise.reps}
                              onChange={(e) => updateExercise(workoutIndex, exerciseIndex, { reps: e.target.value })}
                              className="text-center h-8"
                              data-testid={`input-reps-${workoutIndex}-${exerciseIndex}`}
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-slate-500">Rest</Label>
                            <Input
                              value={exercise.rest}
                              onChange={(e) => updateExercise(workoutIndex, exerciseIndex, { rest: e.target.value })}
                              className="text-center h-8"
                              data-testid={`input-rest-${workoutIndex}-${exerciseIndex}`}
                            />
                          </div>
                        </div>
                        
                        <Textarea
                          rows={2}
                          value={exercise.instructions}
                          onChange={(e) => updateExercise(workoutIndex, exerciseIndex, { instructions: e.target.value })}
                          placeholder="Exercise instructions..."
                          className="text-xs"
                          data-testid={`textarea-instructions-${workoutIndex}-${exerciseIndex}`}
                        />
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-primary-100 text-primary-700 hover:bg-primary-200" 
                    onClick={() => addExercise(workoutIndex)}
                    data-testid={`button-add-exercise-${workoutIndex}`}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Exercise
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
