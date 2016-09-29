

(function () {
    $.get("https://raw.githubusercontent.com/BoiseCodeWorks/EveningWebDev/master/data/contacts.json", function (data) {
        $(".result").html(data);
        alert("Load was performed.");
    });




   $.get(function (data) {
        let table = $('.table');

        var num = 0
        data.forEach(function (item) {
            num += 1
            table.append($('<tr><td>' + item.firstName + '</td><td>' + item.lastName + '</td><td>' + item.phone + '</td><td>' + item.email + '</td><td>'))

        });
    })


})();