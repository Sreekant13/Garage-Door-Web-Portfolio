import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real, jsonb, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  role: text("role").notNull().default("coach"),
});

export const clients = pgTable("clients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  coachId: varchar("coach_id").notNull().references(() => users.id),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  goals: text("goals"),
  currentProgram: text("current_program"),
  joinedDate: timestamp("joined_date").notNull().default(sql`NOW()`),
});

export const programs = pgTable("programs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  coachId: varchar("coach_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  description: text("description"),
  duration: integer("duration").notNull(), // weeks
  frequency: integer("frequency").notNull(), // times per week
  difficulty: text("difficulty").notNull(), // beginner, intermediate, advanced
  workouts: jsonb("workouts").notNull().default('[]'),
});

export const workouts = pgTable("workouts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  programId: varchar("program_id").notNull().references(() => programs.id),
  name: text("name").notNull(),
  dayNumber: integer("day_number").notNull(),
  warmup: text("warmup"),
  exercises: jsonb("exercises").notNull().default('[]'),
  cooldown: text("cooldown"),
});

export const exercises = pgTable("exercises", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  workoutId: varchar("workout_id").notNull().references(() => workouts.id),
  name: text("name").notNull(),
  sets: text("sets"),
  reps: text("reps"),
  weight: text("weight"),
  rest: text("rest"),
  instructions: text("instructions"),
  orderIndex: integer("order_index").notNull(),
});

export const foods = pgTable("foods", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  brand: text("brand"),
  servingSize: text("serving_size").notNull(),
  servingUnit: text("serving_unit").notNull(),
  calories: real("calories").notNull(),
  protein: real("protein").notNull(),
  carbs: real("carbs").notNull(),
  fats: real("fats").notNull(),
  fiber: real("fiber"),
  sugar: real("sugar"),
  sodium: real("sodium"),
  category: text("category"),
});

export const mealPlans = pgTable("meal_plans", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  coachId: varchar("coach_id").notNull().references(() => users.id),
  clientId: varchar("client_id").references(() => clients.id),
  name: text("name").notNull(),
  description: text("description"),
  targetCalories: integer("target_calories"),
  targetProtein: real("target_protein"),
  targetCarbs: real("target_carbs"),
  targetFats: real("target_fats"),
  meals: jsonb("meals").notNull().default('[]'),
});

export const meals = pgTable("meals", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  mealPlanId: varchar("meal_plan_id").notNull().references(() => mealPlans.id),
  name: text("name").notNull(),
  time: text("time"),
  foods: jsonb("foods").notNull().default('[]'),
  orderIndex: integer("order_index").notNull(),
});

export const clientProgress = pgTable("client_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  programId: varchar("program_id").references(() => programs.id),
  workoutId: varchar("workout_id").references(() => workouts.id),
  completedDate: timestamp("completed_date").notNull().default(sql`NOW()`),
  notes: text("notes"),
  compliance: real("compliance"),
});

export const clientAssignments = pgTable("client_assignments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").notNull().references(() => clients.id),
  programId: varchar("program_id").references(() => programs.id),
  mealPlanId: varchar("meal_plan_id").references(() => mealPlans.id),
  assignedDate: timestamp("assigned_date").notNull().default(sql`NOW()`),
  startDate: timestamp("start_date"),
  active: boolean("active").notNull().default(true),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export const insertClientSchema = createInsertSchema(clients).omit({
  id: true,
  joinedDate: true,
});

export const insertProgramSchema = createInsertSchema(programs).omit({
  id: true,
});

export const insertWorkoutSchema = createInsertSchema(workouts).omit({
  id: true,
});

export const insertExerciseSchema = createInsertSchema(exercises).omit({
  id: true,
});

export const insertFoodSchema = createInsertSchema(foods).omit({
  id: true,
});

export const insertMealPlanSchema = createInsertSchema(mealPlans).omit({
  id: true,
});

export const insertMealSchema = createInsertSchema(meals).omit({
  id: true,
});

export const insertClientProgressSchema = createInsertSchema(clientProgress).omit({
  id: true,
  completedDate: true,
});

export const insertClientAssignmentSchema = createInsertSchema(clientAssignments).omit({
  id: true,
  assignedDate: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Client = typeof clients.$inferSelect;
export type InsertClient = z.infer<typeof insertClientSchema>;
export type Program = typeof programs.$inferSelect;
export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Workout = typeof workouts.$inferSelect;
export type InsertWorkout = z.infer<typeof insertWorkoutSchema>;
export type Exercise = typeof exercises.$inferSelect;
export type InsertExercise = z.infer<typeof insertExerciseSchema>;
export type Food = typeof foods.$inferSelect;
export type InsertFood = z.infer<typeof insertFoodSchema>;
export type MealPlan = typeof mealPlans.$inferSelect;
export type InsertMealPlan = z.infer<typeof insertMealPlanSchema>;
export type Meal = typeof meals.$inferSelect;
export type InsertMeal = z.infer<typeof insertMealSchema>;
export type ClientProgress = typeof clientProgress.$inferSelect;
export type InsertClientProgress = z.infer<typeof insertClientProgressSchema>;
export type ClientAssignment = typeof clientAssignments.$inferSelect;
export type InsertClientAssignment = z.infer<typeof insertClientAssignmentSchema>;
