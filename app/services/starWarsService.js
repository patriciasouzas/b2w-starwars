const request = require('axios');

exports.getPlanetsFilmsByName = (name) => {
return request.get(`http://swapi.dev/api/planets/?search=${name}`)
    .then((response) => {
        return response.data.results.length !== 0 ? response.data.results[0].films.length : 0;
    })
    .catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
};

