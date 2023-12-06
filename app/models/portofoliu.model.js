module.exports = mongoose => {
  const Portofoliu = mongoose.model(
    "portofoliu",
    mongoose.Schema(
      {
        id: Number,
  imagine: String,
  titlu: String,
  descriere: String,
  link: String
      },
      { timestamps: true }
    )
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Portofoliu = mongoose.model("portofoliu", schema);
  return Portofoliu;
};
