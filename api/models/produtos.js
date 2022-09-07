'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    nome: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        funcaoValidadora: function(dado) {
          if(dado.length < 2) throw new Error('O campo nome deve ter mais de 2 caracteres')
        }
      }
    }, 
    descricao: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        funcaoValidadora: function(dado) {
          if(dado.length < 10) throw new Error('O campo descrição deve ter mais de 10 caracteres')
        }
      }
    },
    categoria: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        funcaoValidadora: function(dado) {
          if(dado.length < 4) throw new Error('O campo categoria deve ter mais de 4 caracteres')
        }
      }
    },
    preco: {
      type: DataTypes.DECIMAL,
      notNull: true,
      validate: {
        funcaoValidadora: function(dado) {
          if(dado <= 0) throw new Error('O valor do produto deve ser maior que 0')
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};