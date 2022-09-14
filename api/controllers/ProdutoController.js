const database = require('../models');

class ProdutoController {
    static async retornaProdutos(req, res) {
        try {
            const todosProdutos = await database.Produtos.findAll();
            if(todosProdutos) {
                return res.status(200).json(todosProdutos);
            } else {
                return res.status(204).json({message: 'Não há produtos cadastrados'});
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // static async retornaUmProduto(req, res) {
    //     const { id } = req.params;
    //     try {
    //         const umProduto = await database.Produtos.findOne( {
    //             where: {
    //                  id:Number(id) 
    //             }
    //         })
    //         return res.status(200).json(umProduto);
    //     } catch (error) {
    //         return res.status(500).json(error.message);
    //     }
    // }

    static async cadastraProduto(req, res) {
        const novoProduto = req.body;
        try {
            const novoProdutoCadastrado = await database.Produtos.create(novoProduto);
            return res.status(200).json(novoProdutoCadastrado);
        }catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaProduto(req, res) {
        const { id } = req.params;
        const novasInfos = req.body; 
        try {
            await database.Produtos.update(novasInfos, { where: { id: Number(id) }});
            const produtoAtualizado = await database.Produtos.findOne( { where: { id: Number(id)}});
            return res.status(200).json(produtoAtualizado);
        } catch (erro) {
            return res.status(500).json(error.message);
        }
    }

    // static async apagaProduto(req, res) {
    //     const { id } = req.params;
    //     try {
    //         await database.Produtos.destroy( { where: { id: Number(id) }} );
    //         return res.status(200).json( { message: `id ${id} foi deletado`} );s
    //     } catch (error) {
    //         return res.status(500).json(error.message);
    //     }
    // }

    static async buscaProduto(req, res) {
        const { Op } = require("sequelize");
        const { nome } = req.query;
        try {
            const retorno = await database.Produtos.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${nome}%`
                    }
                }
            });
        return res.status(200).json(retorno);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}


module.exports = ProdutoController;