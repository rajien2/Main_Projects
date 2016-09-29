(function () {

    let startUrl = 'http://swapi.co/api/people/?format=json    ';
    let characters = [];

    getCharacters(startUrl);

    console.log(characters);

    function getCharacters(url) {

        getPeople(url, function (people) {
            people.results.forEach(function (person) {
                characters.push(person);
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