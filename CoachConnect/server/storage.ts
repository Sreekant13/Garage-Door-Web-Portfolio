import { 
  type User, type InsertUser, type Client, type InsertClient,
  type Program, type InsertProgram, type Workout, type InsertWorkout,
  type Exercise, type InsertExercise, type Food, type InsertFood,
  type MealPlan, type InsertMealPlan, type Meal, type InsertMeal,
  type ClientProgress, type InsertClientProgress,
  type ClientAssignment, type InsertClientAssignment
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Client operations
  getClient(id: string): Promise<Client | undefined>;
  getClientsByCoach(coachId: string): Promise<Client[]>;
  createClient(client: InsertClient): Promise<Client>;
  updateClient(id: string, client: Partial<Client>): Promise<Client | undefined>;
  deleteClient(id: string): Promise<boolean>;

  // Program operations
  getProgram(id: string): Promise<Program | undefined>;
  getProgramsByCoach(coachId: string): Promise<Program[]>;
  createProgram(program: InsertProgram): Promise<Program>;
  updateProgram(id: string, program: Partial<Program>): Promise<Program | undefined>;
  deleteProgram(id: string): Promise<boolean>;

  // Workout operations
  getWorkout(id: string): Promise<Workout | undefined>;
  getWorkoutsByProgram(programId: string): Promise<Workout[]>;
  createWorkout(workout: InsertWorkout): Promise<Workout>;
  updateWorkout(id: string, workout: Partial<Workout>): Promise<Workout | undefined>;
  deleteWorkout(id: string): Promise<boolean>;

  // Exercise operations
  getExercise(id: string): Promise<Exercise | undefined>;
  getExercisesByWorkout(workoutId: string): Promise<Exercise[]>;
  createExercise(exercise: InsertExercise): Promise<Exercise>;
  updateExercise(id: string, exercise: Partial<Exercise>): Promise<Exercise | undefined>;
  deleteExercise(id: string): Promise<boolean>;

  // Food operations
  getFood(id: string): Promise<Food | undefined>;
  searchFoods(query: string): Promise<Food[]>;
  getAllFoods(): Promise<Food[]>;
  createFood(food: InsertFood): Promise<Food>;

  // Meal plan operations
  getMealPlan(id: string): Promise<MealPlan | undefined>;
  getMealPlansByCoach(coachId: string): Promise<MealPlan[]>;
  createMealPlan(mealPlan: InsertMealPlan): Promise<MealPlan>;
  updateMealPlan(id: string, mealPlan: Partial<MealPlan>): Promise<MealPlan | undefined>;
  deleteMealPlan(id: string): Promise<boolean>;

  // Meal operations
  getMeal(id: string): Promise<Meal | undefined>;
  getMealsByMealPlan(mealPlanId: string): Promise<Meal[]>;
  createMeal(meal: InsertMeal): Promise<Meal>;
  updateMeal(id: string, meal: Partial<Meal>): Promise<Meal | undefined>;
  deleteMeal(id: string): Promise<boolean>;

  // Client progress operations
  getClientProgress(clientId: string): Promise<ClientProgress[]>;
  createClientProgress(progress: InsertClientProgress): Promise<ClientProgress>;

  // Client assignment operations
  getClientAssignments(clientId: string): Promise<ClientAssignment[]>;
  createClientAssignment(assignment: InsertClientAssignment): Promise<ClientAssignment>;
  updateClientAssignment(id: string, assignment: Partial<ClientAssignment>): Promise<ClientAssignment | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private clients: Map<string, Client>;
  private programs: Map<string, Program>;
  private workouts: Map<string, Workout>;
  private exercises: Map<string, Exercise>;
  private foods: Map<string, Food>;
  private mealPlans: Map<string, MealPlan>;
  private meals: Map<string, Meal>;
  private clientProgress: Map<string, ClientProgress>;
  private clientAssignments: Map<string, ClientAssignment>;

  constructor() {
    this.users = new Map();
    this.clients = new Map();
    this.programs = new Map();
    this.workouts = new Map();
    this.exercises = new Map();
    this.foods = new Map();
    this.mealPlans = new Map();
    this.meals = new Map();
    this.clientProgress = new Map();
    this.clientAssignments = new Map();

    // Seed with some food data
    this.seedFoodDatabase();
  }

  private seedFoodDatabase() {
    const sampleFoods: InsertFood[] = [
      {
        name: "Chicken Breast, Grilled",
        servingSize: "100",
        servingUnit: "g",
        calories: 165,
        protein: 31,
        carbs: 0,
        fats: 3.6,
        fiber: 0,
        category: "Meat & Poultry"
      },
      {
        name: "Brown Rice, Cooked",
        servingSize: "1",
        servingUnit: "cup (195g)",
        calories: 216,
        protein: 5,
        carbs: 45,
        fats: 1.8,
        fiber: 3.5,
        category: "Grains"
      },
      {
        name: "Avocado",
        servingSize: "1",
        servingUnit: "medium (150g)",
        calories: 234,
        protein: 2.9,
        carbs: 12,
        fats: 21,
        fiber: 10,
        category: "Fruits"
      },
      {
        name: "Greek Yogurt, Plain",
        servingSize: "1",
        servingUnit: "cup (245g)",
        calories: 130,
        protein: 23,
        carbs: 9,
        fats: 0.4,
        fiber: 0,
        category: "Dairy"
      },
      {
        name: "Spinach, Fresh",
        servingSize: "100",
        servingUnit: "g",
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fats: 0.4,
        fiber: 2.2,
        category: "Vegetables"
      },
      {
        name: "Salmon Fillet",
        servingSize: "100",
        servingUnit: "g",
        calories: 208,
        protein: 25,
        carbs: 0,
        fats: 12,
        fiber: 0,
        category: "Fish & Seafood"
      },
      {
        name: "Sweet Potato",
        servingSize: "1",
        servingUnit: "medium (128g)",
        calories: 112,
        protein: 2,
        carbs: 26,
        fats: 0.1,
        fiber: 3.9,
        category: "Vegetables"
      },
      {
        name: "Oatmeal, Cooked",
        servingSize: "1",
        servingUnit: "cup (234g)",
        calories: 154,
        protein: 6,
        carbs: 28,
        fats: 3,
        fiber: 4,
        category: "Grains"
      },
      {
        name: "Almonds",
        servingSize: "28",
        servingUnit: "g (1 oz)",
        calories: 164,
        protein: 6,
        carbs: 6,
        fats: 14,
        fiber: 3.5,
        category: "Nuts & Seeds"
      },
      {
        name: "Broccoli, Steamed",
        servingSize: "1",
        servingUnit: "cup (156g)",
        calories: 55,
        protein: 4,
        carbs: 11,
        fats: 0.6,
        fiber: 5,
        category: "Vegetables"
      }
    ];

    sampleFoods.forEach(food => {
      this.createFood(food);
    });
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      role: insertUser.role || "coach"
    };
    this.users.set(id, user);
    return user;
  }

  // Client operations
  async getClient(id: string): Promise<Client | undefined> {
    return this.clients.get(id);
  }

  async getClientsByCoach(coachId: string): Promise<Client[]> {
    return Array.from(this.clients.values()).filter(client => client.coachId === coachId);
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const id = randomUUID();
    const client: Client = { 
      ...insertClient,
      id,
      phone: insertClient.phone || null,
      goals: insertClient.goals || null,
      currentProgram: insertClient.currentProgram || null,
      joinedDate: new Date() 
    };
    this.clients.set(id, client);
    return client;
  }

  async updateClient(id: string, clientData: Partial<Client>): Promise<Client | undefined> {
    const existing = this.clients.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...clientData };
    this.clients.set(id, updated);
    return updated;
  }

  async deleteClient(id: string): Promise<boolean> {
    return this.clients.delete(id);
  }

  // Program operations
  async getProgram(id: string): Promise<Program | undefined> {
    return this.programs.get(id);
  }

  async getProgramsByCoach(coachId: string): Promise<Program[]> {
    return Array.from(this.programs.values()).filter(program => program.coachId === coachId);
  }

  async createProgram(insertProgram: InsertProgram): Promise<Program> {
    const id = randomUUID();
    const program: Program = { 
      ...insertProgram, 
      id,
      description: insertProgram.description || null,
      workouts: insertProgram.workouts || []
    };
    this.programs.set(id, program);
    return program;
  }

  async updateProgram(id: string, programData: Partial<Program>): Promise<Program | undefined> {
    const existing = this.programs.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...programData };
    this.programs.set(id, updated);
    return updated;
  }

  async deleteProgram(id: string): Promise<boolean> {
    return this.programs.delete(id);
  }

  // Workout operations
  async getWorkout(id: string): Promise<Workout | undefined> {
    return this.workouts.get(id);
  }

  async getWorkoutsByProgram(programId: string): Promise<Workout[]> {
    return Array.from(this.workouts.values()).filter(workout => workout.programId === programId);
  }

  async createWorkout(insertWorkout: InsertWorkout): Promise<Workout> {
    const id = randomUUID();
    const workout: Workout = { 
      ...insertWorkout, 
      id,
      warmup: insertWorkout.warmup || null,
      cooldown: insertWorkout.cooldown || null,
      exercises: insertWorkout.exercises || []
    };
    this.workouts.set(id, workout);
    return workout;
  }

  async updateWorkout(id: string, workoutData: Partial<Workout>): Promise<Workout | undefined> {
    const existing = this.workouts.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...workoutData };
    this.workouts.set(id, updated);
    return updated;
  }

  async deleteWorkout(id: string): Promise<boolean> {
    return this.workouts.delete(id);
  }

  // Exercise operations
  async getExercise(id: string): Promise<Exercise | undefined> {
    return this.exercises.get(id);
  }

  async getExercisesByWorkout(workoutId: string): Promise<Exercise[]> {
    return Array.from(this.exercises.values())
      .filter(exercise => exercise.workoutId === workoutId)
      .sort((a, b) => a.orderIndex - b.orderIndex);
  }

  async createExercise(insertExercise: InsertExercise): Promise<Exercise> {
    const id = randomUUID();
    const exercise: Exercise = { 
      ...insertExercise, 
      id,
      sets: insertExercise.sets || null,
      reps: insertExercise.reps || null,
      weight: insertExercise.weight || null,
      rest: insertExercise.rest || null,
      instructions: insertExercise.instructions || null
    };
    this.exercises.set(id, exercise);
    return exercise;
  }

  async updateExercise(id: string, exerciseData: Partial<Exercise>): Promise<Exercise | undefined> {
    const existing = this.exercises.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...exerciseData };
    this.exercises.set(id, updated);
    return updated;
  }

  async deleteExercise(id: string): Promise<boolean> {
    return this.exercises.delete(id);
  }

  // Food operations
  async getFood(id: string): Promise<Food | undefined> {
    return this.foods.get(id);
  }

  async searchFoods(query: string): Promise<Food[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.foods.values()).filter(food => 
      food.name.toLowerCase().includes(lowerQuery) ||
      (food.brand && food.brand.toLowerCase().includes(lowerQuery))
    );
  }

  async getAllFoods(): Promise<Food[]> {
    return Array.from(this.foods.values());
  }

  async createFood(insertFood: InsertFood): Promise<Food> {
    const id = randomUUID();
    const food: Food = { 
      ...insertFood, 
      id,
      brand: insertFood.brand || null,
      fiber: insertFood.fiber || null,
      sugar: insertFood.sugar || null,
      sodium: insertFood.sodium || null,
      category: insertFood.category || null
    };
    this.foods.set(id, food);
    return food;
  }

  // Meal plan operations
  async getMealPlan(id: string): Promise<MealPlan | undefined> {
    return this.mealPlans.get(id);
  }

  async getMealPlansByCoach(coachId: string): Promise<MealPlan[]> {
    return Array.from(this.mealPlans.values()).filter(plan => plan.coachId === coachId);
  }

  async createMealPlan(insertMealPlan: InsertMealPlan): Promise<MealPlan> {
    const id = randomUUID();
    const mealPlan: MealPlan = { 
      ...insertMealPlan, 
      id,
      description: insertMealPlan.description || null,
      clientId: insertMealPlan.clientId || null,
      targetCalories: insertMealPlan.targetCalories || null,
      targetProtein: insertMealPlan.targetProtein || null,
      targetCarbs: insertMealPlan.targetCarbs || null,
      targetFats: insertMealPlan.targetFats || null,
      meals: insertMealPlan.meals || []
    };
    this.mealPlans.set(id, mealPlan);
    return mealPlan;
  }

  async updateMealPlan(id: string, mealPlanData: Partial<MealPlan>): Promise<MealPlan | undefined> {
    const existing = this.mealPlans.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...mealPlanData };
    this.mealPlans.set(id, updated);
    return updated;
  }

  async deleteMealPlan(id: string): Promise<boolean> {
    return this.mealPlans.delete(id);
  }

  // Meal operations
  async getMeal(id: string): Promise<Meal | undefined> {
    return this.meals.get(id);
  }

  async getMealsByMealPlan(mealPlanId: string): Promise<Meal[]> {
    return Array.from(this.meals.values())
      .filter(meal => meal.mealPlanId === mealPlanId)
      .sort((a, b) => a.orderIndex - b.orderIndex);
  }

  async createMeal(insertMeal: InsertMeal): Promise<Meal> {
    const id = randomUUID();
    const meal: Meal = { 
      ...insertMeal, 
      id,
      time: insertMeal.time || null,
      foods: insertMeal.foods || []
    };
    this.meals.set(id, meal);
    return meal;
  }

  async updateMeal(id: string, mealData: Partial<Meal>): Promise<Meal | undefined> {
    const existing = this.meals.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...mealData };
    this.meals.set(id, updated);
    return updated;
  }

  async deleteMeal(id: string): Promise<boolean> {
    return this.meals.delete(id);
  }

  // Client progress operations
  async getClientProgress(clientId: string): Promise<ClientProgress[]> {
    return Array.from(this.clientProgress.values()).filter(progress => progress.clientId === clientId);
  }

  async createClientProgress(insertProgress: InsertClientProgress): Promise<ClientProgress> {
    const id = randomUUID();
    const progress: ClientProgress = { 
      ...insertProgress, 
      id,
      programId: insertProgress.programId || null,
      workoutId: insertProgress.workoutId || null,
      notes: insertProgress.notes || null,
      compliance: insertProgress.compliance || null,
      completedDate: new Date() 
    };
    this.clientProgress.set(id, progress);
    return progress;
  }

  // Client assignment operations
  async getClientAssignments(clientId: string): Promise<ClientAssignment[]> {
    return Array.from(this.clientAssignments.values()).filter(assignment => assignment.clientId === clientId);
  }

  async createClientAssignment(insertAssignment: InsertClientAssignment): Promise<ClientAssignment> {
    const id = randomUUID();
    const assignment: ClientAssignment = { 
      ...insertAssignment, 
      id,
      programId: insertAssignment.programId || null,
      mealPlanId: insertAssignment.mealPlanId || null,
      startDate: insertAssignment.startDate || null,
      active: insertAssignment.active !== undefined ? insertAssignment.active : true,
      assignedDate: new Date() 
    };
    this.clientAssignments.set(id, assignment);
    return assignment;
  }

  async updateClientAssignment(id: string, assignmentData: Partial<ClientAssignment>): Promise<ClientAssignment | undefined> {
    const existing = this.clientAssignments.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...assignmentData };
    this.clientAssignments.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
