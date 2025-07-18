import { users, contacts, blogPosts, type User, type InsertUser, type Contact, type InsertContact, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DatabaseStorage implements IStorage {
  constructor() {
    // Initialize with sample blog posts if they don't exist
    this.initializeBlogPosts();
  }

  private async initializeBlogPosts() {
    try {
      const existingPosts = await db.select().from(blogPosts);
      if (existingPosts.length === 0) {
        const samplePosts: InsertBlogPost[] = [
          {
            title: "Best Practices for Java Development",
            content: "Exploring modern Java development practices and design patterns that can help you write cleaner, more maintainable code...",
            excerpt: "Exploring modern Java development practices and design patterns that can help you write cleaner, more maintainable code.",
            category: "Java",
            imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
          },
          {
            title: "Building Scalable APIs with Spring Boot",
            content: "Learn how to build robust and scalable REST APIs using Spring Boot with proper architecture and best practices...",
            excerpt: "Learn how to build robust and scalable REST APIs using Spring Boot with proper architecture and best practices.",
            category: "Spring Boot",
            imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
          },
          {
            title: "Database Optimization Techniques",
            content: "Essential database optimization strategies to improve application performance and ensure efficient data management...",
            excerpt: "Essential database optimization strategies to improve application performance and ensure efficient data management.",
            category: "Database",
            imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
          }
        ];

        await db.insert(blogPosts).values(samplePosts);
      }
    } catch (error) {
      console.error('Error initializing blog posts:', error);
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [blogPost] = await db
      .insert(blogPosts)
      .values(insertBlogPost)
      .returning();
    return blogPost;
  }
}

export const storage = new DatabaseStorage();
