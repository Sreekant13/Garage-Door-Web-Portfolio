import { 
  users, 
  appointments, 
  products,
  type User, 
  type InsertUser,
  type Appointment,
  type InsertAppointment,
  type Product,
  type InsertProduct
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private products: Map<number, Product>;
  private currentUserId: number;
  private currentAppointmentId: number;
  private currentProductId: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.products = new Map();
    this.currentUserId = 1;
    this.currentAppointmentId = 1;
    this.currentProductId = 1;
    this.initializeProducts();
  }

  private initializeProducts() {
    const initialProducts: Omit<Product, 'id'>[] = [
      {
        name: "Genie Belt Drive 750",
        brand: "Genie",
        price: 770,
        horsepower: "1-1/4 HP",
        driveType: "Belt Drive",
        features: ["Integrated Battery Backup", "Ultra-Quiet DC Motor", "Intellicode Security", "HomeLink Compatible", "Safe-T-Beam System"],
        modelNumber: "7055-TKV",
        description: "Ultra-quiet garage door opener with steel-reinforced belt, making it ideal for homes where sound could be an issue.",
        isSmart: false,
        isPremium: false,
      },
      {
        name: "Belt Drive Connect",
        brand: "Genie",
        price: 840,
        horsepower: "1-1/4 HP",
        driveType: "Belt Drive",
        features: ["Aladdin Connect Wi-Fi", "Smartphone Control", "Alexa & Google Compatible", "Battery Backup Included", "Steel-Reinforced Belt"],
        modelNumber: "7155-TKV",
        description: "Smart garage door opener with built-in Wi-Fi smartphone technology allowing your garage door to be part of your smart home.",
        isSmart: true,
        isPremium: false,
      },
      {
        name: "Signature Series",
        brand: "Genie",
        price: 915,
        horsepower: "2 HP",
        driveType: "Screw Drive",
        features: ["Premium Screw Drive", "Wi-Fi Enabled", "Battery Backup", "Lifetime Drive Warranty", "140-Volt DC Motor"],
        modelNumber: "4063B-TKV",
        description: "Premium screw drive smart garage door opener with ultra-quiet 2 HPc DC motor providing ultimate combination of power and speed.",
        isSmart: true,
        isPremium: true,
      },
      {
        name: "1/2 HP Smart Belt Drive",
        brand: "Chamberlain",
        price: 740,
        horsepower: "1/2 HP",
        driveType: "Belt Drive",
        features: ["Ultra-quiet operation", "myQ smartphone control", "Amazon Key compatible", "Battery backup included", "Security+ 2.0"],
        modelNumber: "B2211T",
        description: "Ultra-quiet DC motor and soft start/stop smooth operation ensures comfortable living spaces near the garage.",
        isSmart: true,
        isPremium: false,
      },
      {
        name: "1/2 HP Smart Chain Drive",
        brand: "Chamberlain",
        price: 755,
        horsepower: "1/2 HP",
        driveType: "Chain Drive",
        features: ["Reliable chain drive", "myQ smartphone control", "Security+ 2.0 encryption", "6-year motor warranty", "Bluetooth technology"],
        modelNumber: "C2212T",
        description: "Reliable chain drive system with integrated myQ technology for smartphone control and monitoring.",
        isSmart: true,
        isPremium: false,
      }
    ];

    initialProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
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

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = { 
      id,
      name: insertAppointment.name,
      phone: insertAppointment.phone,
      email: insertAppointment.email,
      preferredModel: insertAppointment.preferredModel || null,
      message: insertAppointment.message || null,
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
}

export const storage = new MemStorage();
