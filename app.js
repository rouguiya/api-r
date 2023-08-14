const express= require("express");
const cors= require("cors");
const mongoose = require("mongoose");
const validator = require("validator");
require("dotenv").config({path: "./config/.env"})
require("./config/db");
const User = require("./model/User");

const app = express();

//var user= mongoose.model('User', userSchema);


app.use(cors());
app.use(express.json());

const port= process.env.PORT 
/* Route POST pour ajouter un nouvel utilisateur
app.post("/users", async (req, res) => {
    const user = new User(req.body);
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Route GET pour récupérer tous les utilisateurs
  app.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Route GET pour récupérer un seul utlisateur par ID
  app.get("/users/:id", async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: error.message });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  // Route PUT pour modifier un utilisateur par ID
  app.put("/users/:id", async (req, res) => {
    const userId = req.params.id;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Route PATCH pour mettre à jour un utilisateur par ID
  app.patch("/users/:id", async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) return res.status(404).json("User not found");
      res.send(user);
    } catch (error) {
      res.status(500).json("Error updating the post");
    }
  });
  
  // Route DELETE pour supprimer un utilisateur par ID
  app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndRemove(id);
      res.json(deletedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });*/
  // Route POST to add a new user
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route GET to retrieve all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route GET to retrieve a single user by ID
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route PUT to modify a user by ID
app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route PATCH to update a user by ID
app.patch("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.send(user);
  } catch (error) {
    res.status(500).json("Error updating the user");
  }
});

// Route DELETE to delete a user by ID
app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.listen(port , () => {
    console.log(`server is renning on http://localhost:${port}`);
});
