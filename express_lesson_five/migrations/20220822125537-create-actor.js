'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('actor',  {
      actor_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      last_update: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      } });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
