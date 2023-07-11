
const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Username can not be empty!" });
    return;
  }

  //check for user exist
  let userExist = await User.find({'username':req.body.username}).exec()
  if(userExist.length > 0) {
    res.status(400).send({ message: "Username exist! " });
    return;
  }

  // Create a User
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    skillsets: req.body.skillsets,
    hobby: req.body.hobby
  });

  // Save User in the database
  await user.save(user).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

};




// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  // const username = req.query.username;

  User.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    const username = req.params.id;
    await User.findOne({'username':username})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with username = " + username });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with username=" + username });
      });
  };

// Update a User by the id in the request
exports.update = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const username = req.params.id;
  
    await User.findOneAndUpdate({'username':username}, req.body, { useFindAndModify: true })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with username=${username}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with username=" + username
        });
      });
  };

// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
    const username = req.params.id;
  
   await  User.findOneAndRemove({'username':username})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with username=${username}. Maybe User was not found!`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with username=" + username
        });
      });
  };

// // Delete all Users from the database.
// exports.deleteAll = (req, res) => {
//     User.deleteMany({})
//       .then(data => {
//         res.send({
//           message: `${data.deletedCount} Users were deleted successfully!`
//         });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while removing all Users."
//         });
//       });
//   };

// // Find all published Users
// exports.findAllPublished = (req, res) => {
//     User.find({ published: true })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving Users."
//         });
//       });
//   };