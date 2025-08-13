import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Search, Plus, Download, Share, Sun, Clock, Moon, Cookie, Edit, Trash2 } from "lucide-react";
import type { Food, MealPlan, Meal } from "@shared/schema";

interface NutritionPlannerProps {
  coachId: string;
}

interface MealData {
  id?: string;
  name: string;
  time: string;
  foods: FoodItem[];
  orderIndex: number;
}

interface FoodItem {
  food: Food;
  quantity: number;
  unit: string;
}

export default function NutritionPlanner({ coachId }: NutritionPlannerProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  
  const [mealPlanData, setMealPlanData] = useState({
    name: "Daily Meal Plan",
    description: "Balanced nutrition plan for optimal performance",
    targetCalories: 2000,
    targetProtein: 150,
    targetCarbs: 200,
    targetFats: 75,
  });

  const [meals, setMeals] = useState<MealData[]>([
    {
      name: "Breakfast",
      time: "07:30",
      foods: [
        {
          food: {
            id: "1",
            name: "Oatmeal, Cooked",
            servingSize: "1",
            servingUnit: "cup (234g)",
            calories: 154,
            protein: 6,
            carbs: 28,
            fats: 3,
            fiber: 4,
            category: "Grains",
          } as Food,
          quantity: 1,
          unit: "cup",
        },
        {
          food: {
            id: "2",
            name: "Greek Yogurt, Plain",
            servingSize: "1",
            servingUnit: "cup (245g)",
            calories: 130,
            protein: 23,
            carbs: 9,
            fats: 0.4,
            fiber: 0,
            category: "Dairy",
          } as Food,
          quantity: 0.5,
          unit: "cup",
        },
      ],
      orderIndex: 0,
    },
    {
      name: "Lunch",
      time: "12:30",
      foods: [
        {
          food: {
            id: "3",
            name: "Chicken Breast, Grilled",
            servingSize: "100",
            servingUnit: "g",
            calories: 165,
            protein: 31,
            carbs: 0,
            fats: 3.6,
            fiber: 0,
            category: "Meat & Poultry",
          } as Food,
          quantity: 150,
          unit: "g",
        },
      ],
      orderIndex: 1,
    },
    {
      name: "Dinner",
      time: "18:30",
      foods: [
        {
          food: {
            id: "4",
            name: "Salmon Fillet",
            servingSize: "100",
            servingUnit: "g",
            calories: 208,
            protein: 25,
            carbs: 0,
            fats: 12,
            fiber: 0,
            category: "Fish & Seafood",
          } as Food,
          quantity: 150,
          unit: "g",
        },
      ],
      orderIndex: 2,
    },
    {
      name: "Snacks",
      time: "15:00",
      foods: [
        {
          food: {
            id: "5",
            name: "Almonds",
            servingSize: "28",
            servingUnit: "g (1 oz)",
            calories: 164,
            protein: 6,
            carbs: 6,
            fats: 14,
            fiber: 3.5,
            category: "Nuts & Seeds",
          } as Food,
          quantity: 1,
          unit: "oz",
        },
      ],
      orderIndex: 3,
    },
  ]);

  // Fetch foods from API
  const { data: foods = [], isLoading: foodsLoading } = useQuery<Food[]>({
    queryKey: ["/api/foods", { q: searchQuery }],
    enabled: searchQuery.length > 0,
  });

  const { data: allFoods = [] } = useQuery<Food[]>({
    queryKey: ["/api/foods"],
  });

  const createMealPlanMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/meal-plans", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Meal Plan Created",
        description: "Your nutrition plan has been successfully created.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/meal-plans", coachId] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create meal plan. Please try again.",
        variant: "destructive",
      });
    },
  });

  const displayFoods = searchQuery ? foods : allFoods.slice(0, 10);

  // Calculate totals
  const calculateTotals = () => {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    meals.forEach(meal => {
      meal.foods.forEach(item => {
        const multiplier = item.quantity / parseFloat(item.food.servingSize);
        totalCalories += item.food.calories * multiplier;
        totalProtein += item.food.protein * multiplier;
        totalCarbs += item.food.carbs * multiplier;
        totalFats += item.food.fats * multiplier;
      });
    });

    return { totalCalories, totalProtein, totalCarbs, totalFats };
  };

  const totals = calculateTotals();

  const addFoodToMeal = (mealIndex: number, food: Food) => {
    const newFoodItem: FoodItem = {
      food,
      quantity: parseFloat(food.servingSize),
      unit: food.servingUnit,
    };
    
    const updated = [...meals];
    updated[mealIndex].foods.push(newFoodItem);
    setMeals(updated);
  };

  const removeFoodFromMeal = (mealIndex: number, foodIndex: number) => {
    const updated = [...meals];
    updated[mealIndex].foods.splice(foodIndex, 1);
    setMeals(updated);
  };

  const updateMeal = (mealIndex: number, updates: Partial<MealData>) => {
    const updated = [...meals];
    updated[mealIndex] = { ...updated[mealIndex], ...updates };
    setMeals(updated);
  };

  const addMeal = () => {
    const newMeal: MealData = {
      name: "New Meal",
      time: "09:00",
      foods: [],
      orderIndex: meals.length,
    };
    setMeals([...meals, newMeal]);
  };

  const getMealIcon = (mealName: string) => {
    const name = mealName.toLowerCase();
    if (name.includes("breakfast")) return Sun;
    if (name.includes("lunch")) return Clock;
    if (name.includes("dinner")) return Moon;
    return Cookie;
  };

  const handleSaveMealPlan = () => {
    const mealPlanWithMeals = {
      ...mealPlanData,
      coachId,
      meals: meals,
    };
    
    createMealPlanMutation.mutate(mealPlanWithMeals);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-slate-900">Nutrition Planner</h2>
        <div className="flex space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" data-testid="button-export-plan">
            <Download className="h-4 w-4 mr-2" />
            Export Plan
          </Button>
          <Button 
            className="btn-secondary" 
            onClick={handleSaveMealPlan}
            disabled={createMealPlanMutation.isPending}
            data-testid="button-assign-client"
          >
            <Share className="h-4 w-4 mr-2" />
            Assign to Client
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Food Database Search */}
        <div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-semibold text-slate-900 mb-4">Food Database</h3>
              
              <div className="relative mb-4">
                <Input
                  placeholder="Search 33,000+ foods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-food-search"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {displayFoods.map((food) => (
                  <div key={food.id} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer border border-transparent hover:border-slate-200">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 text-sm" data-testid={`food-name-${food.id}`}>
                        {food.name}
                      </p>
                      <p className="text-xs text-slate-500">{food.servingSize} {food.servingUnit}</p>
                      <p className="text-xs text-slate-600">
                        {Math.round(food.calories)} cal | {Math.round(food.protein)}g protein
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => addFoodToMeal(0, food)}
                      className="text-secondary-500 hover:text-secondary-600"
                      data-testid={`button-add-food-${food.id}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Macro Goals */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-slate-900 mb-4">Daily Targets</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">Calories</span>
                    <span className="font-medium" data-testid="calories-progress">
                      {Math.round(totals.totalCalories)} / {mealPlanData.targetCalories}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-secondary-500 h-2 rounded-full" 
                      style={{ width: `${Math.min((totals.totalCalories / mealPlanData.targetCalories) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">Protein</span>
                    <span className="font-medium" data-testid="protein-progress">
                      {Math.round(totals.totalProtein)}g / {mealPlanData.targetProtein}g
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${Math.min((totals.totalProtein / mealPlanData.targetProtein) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">Carbs</span>
                    <span className="font-medium" data-testid="carbs-progress">
                      {Math.round(totals.totalCarbs)}g / {mealPlanData.targetCarbs}g
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${Math.min((totals.totalCarbs / mealPlanData.targetCarbs) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">Fats</span>
                    <span className="font-medium" data-testid="fats-progress">
                      {Math.round(totals.totalFats)}g / {mealPlanData.targetFats}g
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full" 
                      style={{ width: `${Math.min((totals.totalFats / mealPlanData.targetFats) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Meal Plan Builder */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Daily Meal Plan</h3>
                <div className="flex space-x-2">
                  <Button variant="ghost" className="text-secondary-600 text-sm font-medium hover:text-secondary-700">
                    <Plus className="h-4 w-4 mr-1" />
                    Copy Day
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-secondary-600 text-sm font-medium hover:text-secondary-700"
                    onClick={addMeal}
                    data-testid="button-add-meal"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Meal
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {meals.map((meal, mealIndex) => {
                  const MealIcon = getMealIcon(meal.name);
                  const mealCalories = meal.foods.reduce((total, item) => {
                    const multiplier = item.quantity / parseFloat(item.food.servingSize);
                    return total + (item.food.calories * multiplier);
                  }, 0);

                  return (
                    <Card key={mealIndex} className="border border-slate-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <MealIcon className="h-5 w-5 text-orange-500" />
                            <Input
                              value={meal.name}
                              onChange={(e) => updateMeal(mealIndex, { name: e.target.value })}
                              className="font-semibold bg-transparent border-none p-0 h-auto focus-visible:ring-0"
                              data-testid={`input-meal-name-${mealIndex}`}
                            />
                            <Input
                              type="time"
                              value={meal.time}
                              onChange={(e) => updateMeal(mealIndex, { time: e.target.value })}
                              className="text-sm border border-slate-200 rounded px-2 py-1 w-24"
                              data-testid={`input-meal-time-${mealIndex}`}
                            />
                          </div>
                          <div className="text-sm text-slate-600">
                            <span className="font-medium" data-testid={`meal-calories-${mealIndex}`}>
                              {Math.round(mealCalories)}
                            </span> calories
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {meal.foods.map((item, foodIndex) => {
                            const multiplier = item.quantity / parseFloat(item.food.servingSize);
                            const itemCalories = item.food.calories * multiplier;
                            const itemProtein = item.food.protein * multiplier;

                            return (
                              <div key={foodIndex} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                <div className="flex-1">
                                  <p className="font-medium text-slate-900 text-sm" data-testid={`food-item-name-${mealIndex}-${foodIndex}`}>
                                    {item.food.name}
                                  </p>
                                  <p className="text-xs text-slate-600">
                                    {item.quantity} {item.unit} | {Math.round(itemCalories)} cal | {Math.round(itemProtein)}g protein
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-slate-600">
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={() => removeFoodFromMeal(mealIndex, foodIndex)}
                                    className="h-6 w-6 text-slate-400 hover:text-red-500"
                                    data-testid={`button-remove-food-${mealIndex}-${foodIndex}`}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <Button 
                          className="w-full mt-3 bg-secondary-50 text-secondary-700 hover:bg-secondary-100"
                          onClick={() => {
                            // For demo, add first available food
                            if (allFoods.length > 0) {
                              addFoodToMeal(mealIndex, allFoods[0]);
                            }
                          }}
                          data-testid={`button-add-food-to-meal-${mealIndex}`}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Food to {meal.name}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
