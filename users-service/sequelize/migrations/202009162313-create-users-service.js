module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'users',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    }
  );
};
