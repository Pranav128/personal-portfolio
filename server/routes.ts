import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertBlogPostSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      // Create transporter (Use your email provider SMTP)
      const transporter = nodemailer.createTransport({
        service: "gmail", // or use custom SMTP: host, port, auth
        auth: {
          user: "pranavpisal2528@gmail.com", // your email
          pass: "guyenbcflncqxdpf"  // app password (not your real password)
        }
      });

      // Send email notification
      const mailOptions = {
        from: "pranavpisal2528@gmail.com",
        to: "pranavpisal2528@gmail.com", // owner email
        subject: `New Contact Form Submission from ${contact.name}`,
        text: `Name: ${contact.name}\nEmail: ${contact.email}\nSubject: ${contact.subject}\nMessage: ${contact.message}`,
      };
      await transporter.sendMail(mailOptions);

      //Send the User a Thank You Email
      const userMailOptions = {
        from: "pranavpisal2528@gmail.com",
        to: contact.email, // user's email
        subject: "Thank You for Contacting Us",
        text: `Dear ${contact.name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nPranav Pisal`,
      };
      await transporter.sendMail(userMailOptions);
      
      res.json({ success: true, contact });
    } catch (error) {
      console.error("Error in /api/contact:", error); // ✅ add this
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form", details: error.message });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Get blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
