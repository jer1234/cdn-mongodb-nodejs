module.exports = app => {
    const user = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", user.create);
  
    // Retrieve all user
    router.get("/", user.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", user.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", user.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", user.delete);
  
    // // Retrieve all published user
    // router.get("/published", user.findAllPublished);

  
    // // Delete all user
    // router.delete("/", user.deleteAll);
  
    app.use('/api/user', router);
  };