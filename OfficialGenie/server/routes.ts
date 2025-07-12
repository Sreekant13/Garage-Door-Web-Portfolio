import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all dealers
  app.get("/api/dealers", async (req, res) => {
    try {
      const dealers = await storage.getAllDealers();
      res.json(dealers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dealers" });
    }
  });

  // Get dealers by county
  app.get("/api/dealers/county/:county", async (req, res) => {
    try {
      const { county } = req.params;
      const dealers = await storage.getDealersByCounty(county);
      res.json(dealers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dealers by county" });
    }
  });

  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get products by category
  app.get("/api/products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const products = await storage.getProductsByCategory(category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
