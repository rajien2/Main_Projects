(function () {

    let startUrl = 'http://swapi.co/api/people/?format=json';
    let characters = [];


    function runIt() {
        characters.forEach(function (data) {
            console.log(data.name)
        });
    }
console.log(characters)
    for (i = 0; i <= characters.length; i++) {
        console.log()
    }

    getCharacters(startUrl);

    console.log(characters[0]);

    function getCharacters(url) {

        getPeople(url, function (people) {
            people.results.forEach(function (person) {
                characters.push(person);
                //runIt()
            });

            if (people.next) {
                getCharacters(people.next);
            }
        });
    }

    function getPeople(url, callback) {

        $.getJSON(url, callback);
    }


})();