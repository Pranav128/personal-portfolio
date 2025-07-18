import mongoose from 'mongoose';
import { z } from 'zod';

// MongoDB User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// MongoDB Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// MongoDB Blog Post Schema
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  category: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now },
  imageUrl: { type: String },
});

// MongoDB Models
export const UserModel = mongoose.model('User', userSchema);
export const ContactModel = mongoose.model('Contact', contactSchema);
export const BlogPostModel = mongoose.model('BlogPost', blogPostSchema);

// Zod validation schemas
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export const insertBlogPostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  excerpt: z.string().min(1),
  category: z.string().min(1),
  imageUrl: z.string().optional(),
});

// TypeScript types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = {
  _id: string;
  username: string;
  password: string;
};

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
};

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  publishedAt: Date;
  imageUrl?: string;
};
