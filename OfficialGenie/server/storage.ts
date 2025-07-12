import { users, dealers, products, type User, type InsertUser, type Dealer, type InsertDealer, type Product, type InsertProduct } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllDealers(): Promise<Dealer[]>;
  getDealersByCounty(county: string): Promise<Dealer[]>;
  getDealer(id: number): Promise<Dealer | undefined>;
  createDealer(dealer: InsertDealer): Promise<Dealer>;
  
  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private dealers: Map<number, Dealer>;
  private products: Map<number, Product>;
  private currentUserId: number;
  private currentDealerId: number;
  private currentProductId: number;

  constructor() {
    this.users = new Map();
    this.dealers = new Map();
    this.products = new Map();
    this.currentUserId = 1;
    this.currentDealerId = 1;
    this.currentProductId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize Los Angeles dealers
    const losAngelesDealers: InsertDealer[] = [
      {
        name: "Best Garage Door Repair",
        address: "1125 E Broadway # 267",
        city: "Glendale",
        state: "CA",
        zipCode: "91205",
        phone: "(323) 270-5387",
        county: "Los Angeles",
        website: "http://www.bestgaragedoor.com"
      },
      {
        name: "Universal Garage Door",
        address: "2290 Pepperwood Ave",
        city: "Lakewood",
        state: "CA",
        zipCode: "90815",
        phone: "(562) 506-1367",
        county: "Los Angeles"
      },
      {
        name: "Cerritos Garage Door",
        address: "17000 Shoemaker Ave",
        city: "Cerritos",
        state: "CA",
        zipCode: "90703",
        phone: "(562) 506-1367",
        county: "Los Angeles"
      },
      {
        name: "Bell Genie Garage Door Repair",
        address: "6455 Corona Ave",
        city: "Bell",
        state: "CA",
        zipCode: "90201",
        phone: "(562) 506-1376",
        county: "Los Angeles"
      },
      {
        name: "Culver City Garage Door Repair",
        address: "5100 Sepulveda Blvd",
        city: "Culver City",
        state: "CA",
        zipCode: "90230",
        phone: "(310) 734-0925",
        county: "Los Angeles"
      },
      {
        name: "Downey Garage Door Repair",
        address: "9100 Imperial Hwy",
        city: "Downey",
        state: "CA",
        zipCode: "90242",
        phone: "(562) 506-1373",
        county: "Los Angeles"
      },
      {
        name: "Gardena Garage Door Repair",
        address: "15000 Western Ave",
        city: "Gardena",
        state: "CA",
        zipCode: "90249",
        phone: "(310) 734-0918",
        county: "Los Angeles"
      },
      {
        name: "Hollywood Garage Door Repair",
        address: "5600 3rd St",
        city: "Hollywood",
        state: "CA",
        zipCode: "90068",
        phone: "(310) 734-9011",
        county: "Los Angeles"
      },
      {
        name: "Lakewood Garage Door Repair",
        address: "4500 Woodruff Ave",
        city: "Lakewood",
        state: "CA",
        zipCode: "90713",
        phone: "(562) 506-1367",
        county: "Los Angeles"
      },
      {
        name: "Torrance Genie Garage Door Repair",
        address: "3200 190th St",
        city: "Torrance",
        state: "CA",
        zipCode: "90503",
        phone: "(310) 734-0919",
        county: "Los Angeles"
      }
    ];

    // Initialize Orange County dealers
    const orangeCountyDealers: InsertDealer[] = [
      {
        name: "Orange County Spring Repair",
        address: "Brookhurst Street",
        city: "Garden Grove",
        state: "CA",
        zipCode: "92843",
        phone: "(714) 782-9570",
        county: "Orange"
      },
      {
        name: "Buena Park Garage Door Genie Repair",
        address: "6944 Crescent Ave",
        city: "Buena Park",
        state: "CA",
        zipCode: "90620",
        phone: "(714) 782-9568",
        county: "Orange"
      },
      {
        name: "Brea Garage Door Genie Repair",
        address: "685 Berry Lane",
        city: "Brea",
        state: "CA",
        zipCode: "92821",
        phone: "(714) 782-0107",
        county: "Orange"
      }
    ];

    // Initialize products
    const productData: InsertProduct[] = [
      { name: "Trilo G 1500", category: "Chain Drive", description: "Premium chain drive opener" },
      { name: "Trilo G 1200", category: "Chain Drive", description: "Reliable chain drive opener" },
      { name: "G Power 900", category: "Chain Drive", description: "Powerful chain drive opener" },
      { name: "Intelli G 1200", category: "Belt Drive", description: "Smart belt drive opener" },
      { name: "Intelli G 1000", category: "Belt Drive", description: "Intelligent belt drive opener" },
      { name: "Relia G 800", category: "Screw Drive", description: "Reliable screw drive opener" },
      { name: "Relia G 600", category: "Screw Drive", description: "Compact screw drive opener" },
      { name: "GPS1200-IC", category: "Belt Drive", description: "Professional belt drive model" },
      { name: "GPS700-IC", category: "Belt Drive", description: "Efficient belt drive model" },
      { name: "PRO99-2IC", category: "Screw Drive", description: "Professional screw drive model" }
    ];

    // Add all dealers
    [...losAngelesDealers, ...orangeCountyDealers].forEach(dealer => {
      this.createDealer(dealer);
    });

    // Add all products
    productData.forEach(product => {
      this.createProduct(product);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllDealers(): Promise<Dealer[]> {
    return Array.from(this.dealers.values());
  }

  async getDealersByCounty(county: string): Promise<Dealer[]> {
    return Array.from(this.dealers.values()).filter(
      (dealer) => dealer.county === county
    );
  }

  async getDealer(id: number): Promise<Dealer | undefined> {
    return this.dealers.get(id);
  }

  async createDealer(insertDealer: InsertDealer): Promise<Dealer> {
    const id = this.currentDealerId++;
    const dealer: Dealer = { ...insertDealer, id };
    this.dealers.set(id, dealer);
    return dealer;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
