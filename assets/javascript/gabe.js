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
    }).then(function (data) {
        console.log(data);
        

            for (var x=0; x<data.categories.length; x++) {
                var i = data.categories[x];
                var zomatoData = "<option value=" + i.categories.id + ">" + i.categories.name + "</option>";
                $(zomatoData).appendTo('#foodOption');
            }
            $("#foodOption").on('click', function(){
                event.preventDefault();
                var queryURL = '"https://developers.zomato.com/api/v2.1/searchCity"' + zomatoData;
                $.ajax({
                    url:  queryURL,
                    method: 'GET',
                    dataType: 'JSON',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Accept', 'application/json');
                        xhr.setRequestHeader('user-key', 'c81fcbb8bdb56196b1c05bb81e9c85d6');
                    }
                }).then(function (select) {
                    console.log(select);
        
        
                })
        });
    });

    })

