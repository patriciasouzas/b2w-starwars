const Planeta = require("../model/planetaSchema");
const starWarsService = require('../services/starWarsService');


exports.post = (req, res) => {

    let planeta = new Planeta(req.body);

    planeta.save(function (error) {
        if (error)
            res.send('Erro ao tentar salvar o planeta' + error);
        res.json({ message: 'Planeta cadastrado com sucesso!' });
    });
    
exports.post = (req, res) => {
    const {name, climate, terrain} = req.body;
    const films = starWarsService.getPlanetsFilmsByName(name);
    const planet = new Planeta(req.body, films);
    planet.save()
        .then(() => {
            return res.status(201).json({
                name: name,
                climate: climate,
                terrain: terrain,
                films: films === 0 ? 'Não encontrado' : films.toString()
            })
        }).catch((err) => {
            return res.status(500).send(err)
        })
};

exports.get = async (req, res) => {
    let planetas = await Planeta.find()
    res.status(200).send(planetas)

};

exports.getNome = async (req, res, next) => {
    try {
        const nome = req.params.nome
        const response = await Planeta.findOne({ nome })
        res.status(200).send(response)
    } catch (e) {
        return res.status(400).send({
            mensagem: "Planeta não encontrado",
            data: e
        })

    }
}

exports.getByID = (req, res) => {
    const planetaId = req.params.id
    Planeta.findById(planetaId, function (err, planeta) {
        if (err) return res.status(500).send(err)
        if (!planeta) {
            return res.status(200).send({ message: `Planeta  não encontrada` })
        }
        res.status(200).send(planeta)
    })

}

exports.deletePlaneta = (req, res, next) => {
    try {
        const planetaId = req.params.id
        console.log(planetaId)
        const response = Planeta.findById(planetaId)
        console.log(response)
        response.remove(function (error) {
            if (!error) {
                res.status(200).send({ mensagem: `Planeta foi removido com sucesso ` })
            }
        })

    } catch (error) {
        return res.status(500).send({ mensagem: Error })

    }
}