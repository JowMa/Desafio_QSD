'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Produtos', [
        {
        nome: 'Manta Microflanelada One For All',
        descricao: 'A Manta One for All tem a missão de manter seu quarto ainda mais aconchegante e quentinho. De alta durabilidade, seu tecido microflanelado é perfeito para aquecer seus dias e noites mais frios.',
        categoria: 'Cama',
        preco: 449,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Produtos', null, {});
  }
};
