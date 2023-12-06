module.exports = mongoose => {
  const Imagine = mongoose.model(
    "imagine",
    mongoose.Schema(
      {
        id: Number,
 src: String,
 alt: String
      },
      { timestamps: true }
    )
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Imagine = mongoose.model("imagine", schema);
  return Imagine;
};
