import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  model: text("model").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  category: text("category").notNull(),
  isSmartEnabled: boolean("is_smart_enabled").notNull().default(false),
  hp: text("hp").notNull(),
  driveType: text("drive_type").notNull(),
});

export const dailyDeals = pgTable("daily_deals", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  dealAmount: integer("deal_amount").notNull(),
  dealType: text("deal_type").notNull(),
  description: text("description").notNull(),
});

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  yearsInBusiness: integer("years_in_business").notNull(),
  happyCustomers: integer("happy_customers").notNull(),
  customerSatisfaction: integer("customer_satisfaction").notNull(),
  emergencyService: text("emergency_service").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertDailyDealSchema = createInsertSchema(dailyDeals).omit({
  id: true,
});

export const insertStatsSchema = createInsertSchema(stats).omit({
  id: true,
  lastUpdated: true,
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type DailyDeal = typeof dailyDeals.$inferSelect;
export type InsertDailyDeal = z.infer<typeof insertDailyDealSchema>;
export type Stats = typeof stats.$inferSelect;
export type InsertStats = z.infer<typeof insertStatsSchema>;
