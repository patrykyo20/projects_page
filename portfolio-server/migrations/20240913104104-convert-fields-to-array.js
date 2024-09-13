const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    // Krok 1: Dodaj nowe tymczasowe kolumny
    await queryInterface.addColumn('project', 'temp_image', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    });

    await queryInterface.addColumn('project', 'temp_likes', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    });

    await queryInterface.addColumn('project', 'temp_technologies', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    });

    // Krok 2: Skonwertuj dane z STRING na ARRAY
    await queryInterface.sequelize.query(`
      UPDATE project
      SET temp_image = ARRAY[image], 
          temp_likes = ARRAY[likes],
          temp_technologies = ARRAY[technologies]
      WHERE image IS NOT NULL OR likes IS NOT NULL OR technologies IS NOT NULL
    `);

    // Krok 3: Usuń stare kolumny
    await queryInterface.removeColumn('project', 'image');
    await queryInterface.removeColumn('project', 'likes');
    await queryInterface.removeColumn('project', 'technologies');

    // Krok 4: Zmień nazwy tymczasowych kolumn na oryginalne
    await queryInterface.renameColumn('project', 'temp_image', 'image');
    await queryInterface.renameColumn('project', 'temp_likes', 'likes');
    await queryInterface.renameColumn('project', 'temp_technologies', 'technologies');
  },

  down: async (queryInterface) => {
    // Przywróć pierwotne typy danych w razie rollbacka

    // Krok 1: Dodaj z powrotem stare kolumny
    await queryInterface.addColumn('project', 'temp_image', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('project', 'temp_likes', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('project', 'temp_technologies', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    // Krok 2: Skonwertuj dane z ARRAY na STRING
    await queryInterface.sequelize.query(`
      UPDATE project
      SET temp_image = image[1],
          temp_likes = likes[1],
          temp_technologies = technologies[1]
      WHERE image IS NOT NULL OR likes IS NOT NULL OR technologies IS NOT NULL
    `);

    // Krok 3: Usuń nowe kolumny
    await queryInterface.removeColumn('project', 'image');
    await queryInterface.removeColumn('project', 'likes');
    await queryInterface.removeColumn('project', 'technologies');

    // Krok 4: Zmień nazwy z powrotem na oryginalne
    await queryInterface.renameColumn('project', 'temp_image', 'image');
    await queryInterface.renameColumn('project', 'temp_likes', 'likes');
    await queryInterface.renameColumn('project', 'temp_technologies', 'technologies');
  },
};
