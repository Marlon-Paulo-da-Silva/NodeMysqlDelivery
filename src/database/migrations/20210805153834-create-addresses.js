'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('adresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_establishment_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users_establishments', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street:{
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
      });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     return queryInterface.dropTable('adresses');
    
  }
};
