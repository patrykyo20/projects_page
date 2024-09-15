module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('comment', 'message', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.changeColumn('comment', 'authorImage', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('comment', 'message', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });
    await queryInterface.changeColumn('comment', 'authorImage', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });
  },
};
