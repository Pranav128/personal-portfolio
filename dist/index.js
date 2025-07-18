// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
import mongoose from "mongoose";
import { z } from "zod";
var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
var contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
var blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  category: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now },
  imageUrl: { type: String },
  url: { type: String, required: true }
});
var UserModel = mongoose.model("User", userSchema);
var ContactModel = mongoose.model("Contact", contactSchema);
var BlogPostModel = mongoose.model("BlogPost", blogPostSchema);
var insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1)
});
var insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1)
});
var insertBlogPostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  excerpt: z.string().min(1),
  category: z.string().min(1),
  imageUrl: z.string().optional(),
  url: z.string().url().optional(),
  publishedAt: z.date().optional()
});

// server/mongodb.ts
import mongoose2 from "mongoose";
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://temp:temp123@democluster.pzdiz.mongodb.net/portfolio";
async function connectToMongoDB() {
  try {
    await mongoose2.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// server/storage.ts
var MongoDBStorage = class {
  isMongoConnected = false;
  memoryStorage = /* @__PURE__ */ new Map();
  currentId = 4;
  initialized = false;
  constructor() {
    this.initialize();
  }
  async initialize() {
    try {
      await connectToMongoDB();
      this.isMongoConnected = true;
      console.log("Successfully connected to MongoDB");
      await this.initializeBlogPosts();
    } catch (error) {
      console.log("MongoDB connection failed, falling back to memory storage");
      this.isMongoConnected = false;
      this.initializeMemoryStorage();
    }
    this.initialized = true;
  }
  async ensureInitialized() {
    if (!this.initialized) {
      await this.initialize();
    }
  }
  initializeMemoryStorage() {
    this.memoryStorage.set("blogPosts", []);
    this.memoryStorage.set("contacts", []);
    this.memoryStorage.set("users", []);
  }
  async initializeBlogPosts() {
    try {
      const existingPosts = await BlogPostModel.find();
    } catch (error) {
      console.error("Error initializing blog posts:", error);
    }
  }
  async getUser(id) {
    if (this.isMongoConnected) {
      const user = await UserModel.findById(id);
      return user ? { _id: user._id.toString(), username: user.username, password: user.password } : void 0;
    } else {
      const users = this.memoryStorage.get("users") || [];
      return users.find((user) => user._id === id);
    }
  }
  async getUserByUsername(username) {
    if (this.isMongoConnected) {
      const user = await UserModel.findOne({ username });
      return user ? { _id: user._id.toString(), username: user.username, password: user.password } : void 0;
    } else {
      const users = this.memoryStorage.get("users") || [];
      return users.find((user) => user.username === username);
    }
  }
  async createUser(insertUser) {
    if (this.isMongoConnected) {
      const user = new UserModel(insertUser);
      const savedUser = await user.save();
      return { _id: savedUser._id.toString(), username: savedUser.username, password: savedUser.password };
    } else {
      const users = this.memoryStorage.get("users") || [];
      const newUser = { _id: (this.currentId++).toString(), ...insertUser };
      users.push(newUser);
      this.memoryStorage.set("users", users);
      return newUser;
    }
  }
  async createContact(insertContact) {
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
      const contacts = this.memoryStorage.get("contacts") || [];
      const newContact = {
        _id: (this.currentId++).toString(),
        ...insertContact,
        createdAt: /* @__PURE__ */ new Date()
      };
      contacts.push(newContact);
      this.memoryStorage.set("contacts", contacts);
      return newContact;
    }
  }
  async getContacts() {
    if (this.isMongoConnected) {
      const contacts = await ContactModel.find().sort({ createdAt: -1 });
      return contacts.map((contact) => ({
        _id: contact._id.toString(),
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        createdAt: contact.createdAt
      }));
    } else {
      return this.memoryStorage.get("contacts") || [];
    }
  }
  async getBlogPosts() {
    await this.ensureInitialized();
    if (this.isMongoConnected) {
      const posts = await BlogPostModel.find().sort({ publishedAt: -1 });
      return posts.map((post) => ({
        _id: post._id.toString(),
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        category: post.category,
        publishedAt: post.publishedAt,
        imageUrl: post.imageUrl || void 0,
        url: post.url || ""
      }));
    } else {
      return this.memoryStorage.get("blogPosts") || [];
    }
  }
};
var storage = new MongoDBStorage();

// server/routes.ts
import { z as z2 } from "zod";
import nodemailer from "nodemailer";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        // or use custom SMTP: host, port, auth
        auth: {
          user: "pranavpisal2528@gmail.com",
          // your email
          pass: "guyenbcflncqxdpf"
          // app password (not your real password)
        }
      });
      const mailOptions = {
        from: "pranavpisal2528@gmail.com",
        to: "pranavpisal2528@gmail.com",
        // owner email
        subject: `New Contact Form Submission from ${contact.name}`,
        text: `Name: ${contact.name}
Email: ${contact.email}
Subject: ${contact.subject}
Message: ${contact.message}`
      };
      await transporter.sendMail(mailOptions);
      const userMailOptions = {
        from: "pranavpisal2528@gmail.com",
        to: contact.email,
        // user's email
        subject: "Thank You for Contacting Us",
        text: `Dear ${contact.name},

Thank you for reaching out! We have received your message and will get back to you shortly.

Best regards,
Pranav Pisal`
      };
      await transporter.sendMail(userMailOptions);
      res.json({ success: true, contact });
    } catch (error) {
      console.error("Error in /api/contact:", error);
      if (error instanceof z2.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form", details: error.message });
      }
    }
  });
  app2.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });
  app2.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "public")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
