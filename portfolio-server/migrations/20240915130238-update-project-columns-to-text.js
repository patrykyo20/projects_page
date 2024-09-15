'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Zmieniamy typ kolumn na TEXT
    await queryInterface.changeColumn('project', 'description', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('project', 'repository', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('project', 'linkedin', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Przywracamy oryginalne typy (jeśli to potrzebne)
    await queryInterface.changeColumn('project', 'description', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });

    await queryInterface.changeColumn('project', 'repository', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });

    await queryInterface.changeColumn('project', 'linkedin', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });
  },
};
