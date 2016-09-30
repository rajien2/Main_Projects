//(function () {
    let peopleUrl = 'http://swapi.co/api/people/?format=json';
    let planetUrl = 'http://swapi.co/api/planets/?format=json';
    let characters = [];
    let planetArray = []

    console.log(characters)
    console.log(planetArray)

    function buildPlanet(){

                 $('#field').empty()
            $('#field').append('<table class="table table-inverse"><thead><tr><th>Name</th><th>climate</th><th>terrain</th></tr></thead><tbody id=tbody></tbody></table>')

        planetArray.forEach(function (data) {
            $('#tbody').append('<tr><td>' + data.name + '</td><td>' + data.climate + '</td><td>' + data.terrain + '</td></tr>')


        });

    }

    function buildPeople() {
            $('#field').empty()
            $('#field').append('<table class="table table-inverse"><thead><tr><th>Name</th><th>DOB</th><th>Height</th></tr></thead><tbody id=tbody></tbody></table>')

        characters.forEach(function (data) {
            $('#tbody').append('<tr><td>' + data.name + '</td><td>' + data.birth_year + '</td><td>' + data.height + '</td></tr>')


        });
    }

    getCharacters(peopleUrl);
    getPlanet(planetUrl)


    function getPlanet(url) {

        getWorld(url, function (planet) {
            planet.results.forEach(function (world) {
                planetArray.push(world);
            });
            if (planet.next) {
                getPlanet(planet.next);
            }
            else{
            //buildPlanet()
            console.log(planet)
            }
        });
    }

    function getCharacters(url) {

        getPeople(url, function (people) {
            people.results.forEach(function (person) {
                characters.push(person);
            });

            if (people.next) {
                getCharacters(people.next);
            }
            else{
            //buildPeople()
            }
        });
    }


    function getWorld(url, callback) {
  $.getJSON(url, callback);
    }
    function getPeople(url, callback) {

        $.getJSON(url, callback);

    }


//})();