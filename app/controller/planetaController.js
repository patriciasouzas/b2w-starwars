const Planeta = require("../model/planetaSchema")

// exports.post = (req, res) => {

//     let planeta = new Planeta(req.body);

//     planeta.save(function (error) {
//         if (error)
//             res.send('Erro ao tentar salvar o planeta' + error);
//         res.json({ message: 'Planeta cadastrado com sucesso!' });
//     });

// };

exports.post = (req, res) => {
    let planeta = new Planeta(req.body)
    planeta.save()
        .then(() => {
            return res.status(201).send({
                mensagem: "Planeta cadastrado com sucesso"
            })
        }).catch((err) => {
            return res.status(500).send(err)
        })
}

exports.get = async (req, res) => {
    let planetas = await Planeta.find()
    res.status(200).send(planetas)

}


// exports.put(function (req, res) {

//     //Primeiro: para atualizarmos, precisamos primeiro achar 'Id' do 'Planeta':
//     Planeta.findById(req.params.planeta_id, function (error, planeta) {
//         if (error)
//             res.send("Id do planeta não encontrado....: " + error);

//         //Segundo: 
//         planeta.nome = req.body.nome;
//         planeta.clima = req.body.clima;
//         planeta.terreno = req.body.terreno;
//         planeta.id = req.body.id;

//         //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
//         planeta.save(function (error) {
//             if (error)
//                 res.send('Erro ao atualizar o planeta....: ' + error);

//             res.json({ message: 'planeta atualizado com sucesso!' });
//         });
//     });
// });

// /* 5) Método: Excluir por Id (acessar: http://localhost:8000/api/planetas/:planeta_id) */
// exports.delete(function (req, res) {

//     Planeta.remove({
//         _id: req.params.planeta_id
//     }, function (error) {
//         if (error)
//             res.send("Id do planeta não encontrado....: " + error);

//         res.json({ message: 'planeta excluído com Sucesso!' });
//     });
// });

