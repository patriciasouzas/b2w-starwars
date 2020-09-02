const request = require('axios');

<<<<<<< HEAD
class StarWarsService {

    static getPlanetsFilmsByName(name) {
        return request.get(`http://swapi.dev/api/planets/?search=${name}`)
            .then((response) => {
                response.data.results.length !== 0 ? response.data.results[0].films.length : 0;
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    }
}

module.exports = StarWarsService;

//bloco pra testar local

// function getPlanetsFilmsByName(name) {
// return request.get(`http://swapi.dev/api/planets/?search=${name}`)
//     .then((response) => {
//         response.data.results.length !== 0 ? response.data.results[0].films.length : console.log('não encontrado');
//         // if(response.data.results.length !== 0){
//         //     console.log(response.data.results);
//         //     console.log(response.data.results[0].films.length);
//         //     return response.data.results[0].films.length
//         // }
//         // console.log('não encontrado');
//         // return 0;
//     })
//     .catch((error) => {
//         console.log(error);
//         return Promise.reject(error);
//     });
// }
//
// let data = getPlanetsFilmsByName('terra');
=======
// class StarWarsService {

//     static getPlanetsFilmsByName(name) {
//         return request.get(`http://swapi.dev/api/planets/?search=${name}`)
//             .then((response) => {
//                 response.data.results.length !== 0 ? response.data.results[0].films.length : 0;
//             })
//             .catch((error) => {
//                 console.log(error);
//                 return Promise.reject(error);
//             });
//     }
// }

// module.exports = StarWarsService;

// bloco pra testar local

function getPlanetsFilmsByName(name) {
return request.get(`http://swapi.dev/api/planets/?search=${name}`)
    .then((response) => {
        return response.data.results.length !== 0 ? response.data.results[0].films.length : 0;
        // if(response.data.results.length !== 0){
        //     console.log(response.data.results);
        //     console.log(response.data.results[0].films.length);
        //     return response.data.results[0].films.length
        // }
        // console.log('não encontrado');
        // return 0;
    })
    .catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
}

let data = getPlanetsFilmsByName('Tatooine');
>>>>>>> 2be699d76022e41439fe13e9cd0fbb04027ac611
