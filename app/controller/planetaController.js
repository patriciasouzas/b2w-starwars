const Planeta = require("../model/planetaSchema");
const starWarsService = require('../services/starWarsService');

exports.post = async (req, res) => {
    const {nome, clima, terreno} = req.body;

  starWarsService.getPlanetsFilmsByName(nome)
        .then((film) => {
            const filme = film === 0 ? 'Não encontrado' : String(film);
            const planeta = {...req.body, total_de_filmes: filme};
            const newPlaneta = new Planeta(planeta);
            newPlaneta.save();
            return res.status(201).json({
                nome: nome,
                clima: clima,
                terreno: terreno,
                total_de_filmes: newPlaneta.total_de_filmes
        }).catch((err) => {
                return res.status(500).send(err)
            })
        })
};

exports.get = async (req, res) => {
    res.status(200).send(await Planeta.find());

};

exports.getNome = async (req, res, next) => {
    try {
        const {nome} = req.params;
        res.status(200).send(await Planeta.findOne({ nome }));
    } catch (e) {
        return res.status(400).send({
            mensagem: "Planeta não encontrado",
            data: e
        })
    }
};

exports.getByID = (req, res) => {
    const {planetaId} = req.params;
    Planeta.findById(planetaId, function (err, planeta) {
        if (err) return res.status(500).send(err);
        if (!planeta) {
            return res.status(200).send({ message: `Planeta  não encontrado` })
        }
        res.status(200).send(planeta)
    })
};

exports.deletePlaneta = (req, res, next) => {
    try {
        const {planetaId} = req.params;
        const response = Planeta.findById(planetaId);
        response.remove(function (error) {
            if (!error) {
                res.status(200).send({ mensagem: `Planeta foi removido com sucesso ` })
            }
        })

    } catch (error) {
        return res.status(500).send({ mensagem: Error })

    }
};