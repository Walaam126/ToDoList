const Todo = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
        name: {
            type: DataTypes.STRING,
          },
          status: {
            type: DataTypes.BOOLEAN,
          },
          priority: {
            type: DataTypes.STRING,
          },
          deadlineata: {
            type: DataTypes.STRING,
          },
        });
        return Todo;
    
};

module.exports = Todo;