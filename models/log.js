module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define("log", {
    //user is table name
    title: {
      //what type of column is this? you want a string. email is the name of the column
      type: DataTypes.STRING,
      allowNull: false, //won't allow null
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.INTEGER,
    },
  });
  return Log; //returning what we created
};
