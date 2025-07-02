import { products, dailyDeals, stats, type Product, type InsertProduct, type DailyDeal, type InsertDailyDeal, type Stats, type InsertStats } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getDailyDeal(date: string): Promise<DailyDeal | undefined>;
  createDailyDeal(deal: InsertDailyDeal): Promise<DailyDeal>;
  
  getStats(): Promise<Stats | undefined>;
  updateStats(stats: InsertStats): Promise<Stats>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private dailyDeals: Map<string, DailyDeal>;
  private stats: Stats | undefined;
  private currentProductId: number;
  private currentDealId: number;
  private currentStatsId: number;

  constructor() {
    this.products = new Map();
    this.dailyDeals = new Map();
    this.currentProductId = 1;
    this.currentDealId = 1;
    this.currentStatsId = 1;
    
    // Initialize with real product data from the document
    this.initializeProducts();
    this.initializeStats();
    this.initializeDailyDeals();
  }

  private initializeProducts() {
    const initialProducts: Omit<Product, 'id'>[] = [
      {
        name: "Genie Belt Drive 750",
        brand: "Genie",
        model: "7055-TKV",
        price: 770,
        description: "Ultra-quiet garage door opener with steel-reinforced belt, making it ideal for homes where sound could be an issue.",
        features: [
          "1-1/4 HP DC motor",
          "Integrated battery backup (50 cycles)",
          "Intellicode security technology",
          "HomeLink + Car2U integration",
          "Safe-T-Beam system",
          "Ultra-quiet operation"
        ],
        category: "belt-drive",
        isSmartEnabled: false,
        hp: "1-1/4",
        driveType: "Belt"
      },
      {
        name: "Belt Drive Connect Smart Opener",
        brand: "Genie",
        model: "7155-TKV",
        price: 840,
        description: "Smartphone-controlled ultra-quiet smart garage door opener with Alexa & Google Assistant compatibility.",
        features: [
          "1-1/4 HP DC motor",
          "Aladdin Connect Wi-Fi technology",
          "Battery backup included",
          "Compatible with Alexa & Google Assistant",
          "Smartphone app control",
          "Steel-reinforced belt drive"
        ],
        category: "smart",
        isSmartEnabled: true,
        hp: "1-1/4",
        driveType: "Belt"
      },
      {
        name: "Signature Series 2 HP Premium Screw Drive",
        brand: "Genie",
        model: "4063B-TKV",
        price: 915,
        description: "Premium screw drive smart garage door opener with ultimate combination of power and speed.",
        features: [
          "2 HP DC motor",
          "Aladdin Connect Wi-Fi built-in",
          "Premium screw drive technology",
          "Limited lifetime warranty on drive components",
          "Works with Amazon Alexa and Google Assistant",
          "Dual-frequency remotes (315 and 390 MHz)"
        ],
        category: "premium",
        isSmartEnabled: true,
        hp: "2",
        driveType: "Screw"
      },
      {
        name: "Chamberlain Smart Belt Drive",
        brand: "Chamberlain",
        model: "B2211T",
        price: 740,
        description: "Trusted brand garage door opener with myQ technology and ultra-quiet operation.",
        features: [
          "1/2 HP DC motor",
          "myQ smartphone control",
          "Battery backup included",
          "Works with Amazon Key",
          "Security+ 2.0 encryption",
          "Ultra-quiet operation"
        ],
        category: "smart",
        isSmartEnabled: true,
        hp: "1/2",
        driveType: "Belt"
      },
      {
        name: "Chamberlain Smart Chain Drive",
        brand: "Chamberlain",
        model: "C2212T",
        price: 755,
        description: "Reliable chain drive with smart features and proven durability.",
        features: [
          "1/2 HP DC motor",
          "myQ smartphone control",
          "Battery backup included",
          "Security+ 2.0 encryption",
          "Durable chain drive",
          "Works with Amazon Key"
        ],
        category: "chain-drive",
        isSmartEnabled: true,
        hp: "1/2",
        driveType: "Chain"
      }
    ];

    initialProducts.forEach(product => {
      const productWithId: Product = { ...product, id: this.currentProductId++ };
      this.products.set(productWithId.id, productWithId);
    });
  }

  private initializeStats() {
    this.stats = {
      id: this.currentStatsId++,
      yearsInBusiness: 47,
      happyCustomers: 15000,
      customerSatisfaction: 99,
      emergencyService: "24/7",
      lastUpdated: new Date()
    };
  }

  private initializeDailyDeals() {
    const today = new Date().toISOString().split('T')[0];
    const deals = [
      { amount: 50, type: "Dollar Off", description: "Save $50 on any garage door opener installation" },
      { amount: 75, type: "Dollar Off", description: "Save $75 on premium models" },
      { amount: 100, type: "Dollar Off", description: "Save $100 on smart connected openers" },
      { amount: 125, type: "Dollar Off", description: "Save $125 on same-day installation" }
    ];
    
    const todayDeal = deals[new Date().getDay() % deals.length];
    const dailyDeal: DailyDeal = {
      id: this.currentDealId++,
      date: today,
      dealAmount: todayDeal.amount,
      dealType: todayDeal.type,
      description: todayDeal.description
    };
    
    this.dailyDeals.set(today, dailyDeal);
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getDailyDeal(date: string): Promise<DailyDeal | undefined> {
    let deal = this.dailyDeals.get(date);
    if (!deal) {
      // Generate deal for the date if it doesn't exist
      const deals = [
        { amount: 50, type: "Dollar Off", description: "Save $50 on any garage door opener installation" },
        { amount: 75, type: "Dollar Off", description: "Save $75 on premium models" },
        { amount: 100, type: "Dollar Off", description: "Save $100 on smart connected openers" },
        { amount: 125, type: "Dollar Off", description: "Save $125 on same-day installation" }
      ];
      
      const dayOfYear = Math.floor((new Date(date).getTime() - new Date(new Date(date).getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      const selectedDeal = deals[dayOfYear % deals.length];
      
      deal = {
        id: this.currentDealId++,
        date,
        dealAmount: selectedDeal.amount,
        dealType: selectedDeal.type,
        description: selectedDeal.description
      };
      
      this.dailyDeals.set(date, deal);
    }
    return deal;
  }

  async createDailyDeal(insertDeal: InsertDailyDeal): Promise<DailyDeal> {
    const id = this.currentDealId++;
    const deal: DailyDeal = { ...insertDeal, id };
    this.dailyDeals.set(deal.date, deal);
    return deal;
  }

  async getStats(): Promise<Stats | undefined> {
    return this.stats;
  }

  async updateStats(insertStats: InsertStats): Promise<Stats> {
    if (this.stats) {
      this.stats = { ...this.stats, ...insertStats, lastUpdated: new Date() };
    } else {
      this.stats = { ...insertStats, id: this.currentStatsId++, lastUpdated: new Date() };
    }
    return this.stats;
  }
}

export const storage = new MemStorage();
