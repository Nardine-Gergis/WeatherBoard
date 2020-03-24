$(document).ready(function () {
    var apiKye = '6a3615e1d7f97b49a730b7a21c9f7320';
    $(document).click(function (event) {
        var city = $(event.target)[0].attributes[2].value;
        console.log(city);
        var basUrl =
            `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKye}`
        $.ajax({
            url: basUrl,
            method: "Get",
            contentType: "application/json",
            dataType: 'json',
        }).then(res => {
            document.getElementById("name").innerHTML =  res.city.name;
            // List Of Time 5 Dyas
            document.getElementById("time").innerHTML =  res.list[0].dt_txt;
            document.getElementById("time1").innerHTML =  res.list[8].dt_txt;
            document.getElementById("time2").innerHTML =  res.list[16].dt_txt;
            document.getElementById("time3").innerHTML =  res.list[24].dt_txt;
            document.getElementById("time4").innerHTML =  res.list[32].dt_txt;
            // List Of Temp 5 Dyas
            document.getElementById("temp").innerHTML =  res.list[0].main.temp;
                    document.getElementById("temp1").innerHTML =  res.list[8].main.temp;
                    document.getElementById("temp2").innerHTML =  res.list[16].main.temp;
                    document.getElementById("temp3").innerHTML =  res.list[24].main.temp;
                    document.getElementById("temp4").innerHTML =  res.list[32].main.temp;
                    //  List Of humidity 5 Dyas
                    document.getElementById("humidity").innerHTML =  res.list[0].main.humidity;
                    document.getElementById("humidity1").innerHTML =  res.list[8].main.humidity;
                    document.getElementById("humidity2").innerHTML =  res.list[16].main.humidity;
                    document.getElementById("humidity3").innerHTML =  res.list[24].main.humidity;
                    document.getElementById("humidity4").innerHTML =  res.list[32].main.humidity;
                    // Time
                    document.getElementById("wind").innerHTML =  res.list[0].wind.speed;

                })

            });

            // Input Search

            $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myList li").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
