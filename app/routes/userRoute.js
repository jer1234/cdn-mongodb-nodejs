module.exports = app => {
    const user = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", user.create);
  
    // Retrieve all user
    router.get("/", user.findAll);

    // Retrieve a single a user with id : username
    router.get("/:id", user.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", user.update);
  
    // Delete a user with id : username
    router.delete("/:id", user.delete);
  

    
    app.use('/api/user', router);
  };