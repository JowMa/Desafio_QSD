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
  
        },
        {
          nome: 'Jogo de Toalhas Fio Egípcio Oasis 2 Peças',
          descricao: 'Um pós-banho excelente te espera. O Jogo de Toalhas Oasis contém uma toalha de rosto e outra de corpo com gramatura de 500g/m2.',
          categoria: 'Banho',
          preco: 248,
          createdAt: new Date(),
          updatedAt: new Date()
  
        },
        {
          nome: 'Vaso em Cerâmica Rugo',
          descricao: 'Moderno e sofisticado: assim é o Vaso Rugo. Com detalhes impecáveis e dignos de admiração, a peça é ideal para quem deseja renovar a decoração.',
          categoria: 'Decoração',
          preco: 449,
          createdAt: new Date(),
          updatedAt: new Date()
  
        },
        {
          nome: 'Tapete Scroll',
          descricao: 'Capaz de abafar sons, aquecer e levar maior conforto para o ambiente, o Tapete Scroll leva um ar de modernidade ao espaço.',
          categoria: 'Tapetes',
          preco: 1290,
          createdAt: new Date(),
          updatedAt: new Date()
  
        },
        {
          nome: 'Travesseiro Basic',
          descricao: 'Maciez e conforto para as suas noites de sono são garantidos com o Travesseiro Basic.',
          categoria: 'Cama',
          preco: 129,
          createdAt: new Date(),
          updatedAt: new Date()
  
        }
    ], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Produtos', null, {});
  }
};
