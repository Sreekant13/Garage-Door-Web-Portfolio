import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  address: text("address").notNull(),
  serviceType: text("service_type").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  firstName: true,
  lastName: true,
  phone: true,
  email: true,
  address: true,
  serviceType: true,
  message: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
