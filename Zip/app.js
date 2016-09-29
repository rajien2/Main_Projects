(function () {

$('#cityList').on('click', '.close', function(event){
    event.target.closest('.panel').remove();
})

    $('#addCityBtn').on('click', function () {
        let zip = $('#newZipCode').val();
        getCity(zip, function (cityData) {
            console.log(cityData);

            getWeather(zip, function (weatherData) {
                console.log(weatherData);

                let template = $('#cityTemplate').html();
                template = template.replace('{{ city }}', cityData.places[0]['place name'])
                template = template.replace('{{ id }}', cityData.places[0]['place name'])
                template = template.replace('{{ state }}', cityData.places[0].state)
                template = template.replace('{{ temp }}', weatherData.main.temp)
                template = template.replace('{{ conditions }}', weatherData.weather[0].description)

                $('#cityList').append($(template));
            })

        })
    });

    function getCity(zip, callback) {

        var urlBase = 'http://api.zippopotam.us/us/';
        var url = urlBase + zip;

        $.get(url, callback);

    }

    function getWeather(zip, callback) {

        var urlBase = 'http://api.openweathermap.org/data/2.5/';
        var appId = 'bd82255fd0a21fa1238699b9eda2ee35';
        var url = urlBase + 'weather?appid=' + appId + '&units=imperial&zip=' + zip;

        // add jQuery AJAX call here
        $.get(url, callback);

    }


})();