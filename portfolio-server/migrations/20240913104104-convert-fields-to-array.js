const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    // Zmiana typu danych na ARRAY(DataTypes.STRING)
    await queryInterface.changeColumn('project', 'image', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    });

    await queryInterface.changeColumn('project', 'likes', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    });

    await queryInterface.changeColumn('project', 'technologies', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    // Przywracanie wcześniejszych typów danych w razie cofania migracji
    await queryInterface.changeColumn('project', 'image', {
      type: DataTypes.STRING,
    });

    await queryInterface.changeColumn('project', 'likes', {
      type: DataTypes.STRING,
    });

    await queryInterface.changeColumn('project', 'technologies', {
      type: DataTypes.STRING,
    });
  },
};
