const SequelizeSlugify = require("sequelize-slugify");

const Todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      name: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      priority: {
        type: DataTypes.STRING,
      },
      deadlineata: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
  SequelizeSlugify.slugifyModel(Todo, { source: ["name"] });
  return Todo;
};

module.exports = Todo;
