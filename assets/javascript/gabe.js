$(document).ready(function () {

    var queryURL = 'https://developers.zomato.com/api/v2.1/categories';
    $.ajax({
        url: queryURL,
        method: 'GET',
        dataType: 'JSON',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('user-key', 'c81fcbb8bdb56196b1c05bb81e9c85d6');
        }
            .then(function (response) {
                event.preventDefault();
                response($("#grub").val().trim());

                $("#grub").append("#foodOption").val("");
                console.log(response)
            })
    });
});

