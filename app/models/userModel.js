module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        username: String,
        email: String,
        phoneNumber: String,
        skillsets:String,
        hobby:String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
  };