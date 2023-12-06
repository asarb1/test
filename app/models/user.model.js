module.exports = mongoose => {
  const User = mongoose.model(
    "imagine",
    mongoose.Schema(
      {
        email: String,
  parola: String,
      },
      { timestamps: true }
    )
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const User = mongoose.model("user", schema);
  return User;
};
