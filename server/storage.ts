import { UserModel, ContactModel, BlogPostModel, type User, type InsertUser, type Contact, type InsertContact, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { connectToMongoDB } from "./mongodb";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
}

export class MongoDBStorage implements IStorage {
  private isMongoConnected = false;
  private memoryStorage: Map<string, any> = new Map();
  private currentId = 4;
  private initialized = false;

  constructor() {
    // Initialize connection and sample blog posts
    this.initialize();
  }

  private async initialize() {
    try {
      await connectToMongoDB();
      this.isMongoConnected = true;
      console.log('Successfully connected to MongoDB');
      await this.initializeBlogPosts();
    } catch (error) {
      console.log('MongoDB connection failed, falling back to memory storage');
      this.isMongoConnected = false;
      this.initializeMemoryStorage();
    }
    this.initialized = true;
  }

  private async ensureInitialized() {
    if (!this.initialized) {
      await this.initialize();
    }
  }

  private initializeMemoryStorage() {
    this.memoryStorage.set('blogPosts', []);
    this.memoryStorage.set('contacts', []);
    this.memoryStorage.set('users', []);
  }

  private async initializeBlogPosts() {
    try {
      const existingPosts = await BlogPostModel.find();
    } catch (error) {
      console.error('Error initializing blog posts:', error);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    if (this.isMongoConnected) {
      const user = await UserModel.findById(id);
      return user ? { _id: user._id.toString(), username: user.username, password: user.password } : undefined;
    } else {
      const users = this.memoryStorage.get('users') || [];
      return users.find((user: User) => user._id === id);
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (this.isMongoConnected) {
      const user = await UserModel.findOne({ username });
      return user ? { _id: user._id.toString(), username: user.username, password: user.password } : undefined;
    } else {
      const users = this.memoryStorage.get('users') || [];
      return users.find((user: User) => user.username === username);
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (this.isMongoConnected) {
      const user = new UserModel(insertUser);
      const savedUser = await user.save();
      return { _id: savedUser._id.toString(), username: savedUser.username, password: savedUser.password };
    } else {
      const users = this.memoryStorage.get('users') || [];
      const newUser: User = { _id: (this.currentId++).toString(), ...insertUser };
      users.push(newUser);
      this.memoryStorage.set('users', users);
      return newUser;
    }
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    if (this.isMongoConnected) {
      const contact = new ContactModel(insertContact);
      const savedContact = await contact.save();
      return {
        _id: savedContact._id.toString(),
        name: savedContact.name,
        email: savedContact.email,
        subject: savedContact.subject,
        message: savedContact.message,
        createdAt: savedContact.createdAt
      };
    } else {
      const contacts = this.memoryStorage.get('contacts') || [];
      const newContact: Contact = { 
        _id: (this.currentId++).toString(), 
        ...insertContact, 
        createdAt: new Date() 
      };
      contacts.push(newContact);
      this.memoryStorage.set('contacts', contacts);
      return newContact;
    }
  }

  async getContacts(): Promise<Contact[]> {
    if (this.isMongoConnected) {
      const contacts = await ContactModel.find().sort({ createdAt: -1 });
      return contacts.map(contact => ({
        _id: contact._id.toString(),
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        createdAt: contact.createdAt
      }));
    } else {
      return this.memoryStorage.get('contacts') || [];
    }
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    await this.ensureInitialized();
    if (this.isMongoConnected) {
      const posts = await BlogPostModel.find().sort({ publishedAt: -1 });
      return posts.map(post => ({
        _id: post._id.toString(),
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        category: post.category,
        publishedAt: post.publishedAt,
        imageUrl: post.imageUrl || undefined,
        url: post.url || ""
      }));
    } else {
      return this.memoryStorage.get('blogPosts') || [];
    }
  }
}

export const storage = new MongoDBStorage();
