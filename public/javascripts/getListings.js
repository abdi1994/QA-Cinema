
function movieSearch(theSwitch){

    document.getElementById("theList").innerHTML = ""
    var movieInfo = [
        {
            movieID:"284053",
            moviename: "Thor: Ragnarok",
            movieyear: "2017"
        },{
            movieID: "315635",
            moviename: "Spider-Man: Homecoming",
            movieyear: "2017",
        },{
            movieID: "374720",
            moviename: "Dunkirk",
            movieyear: "2017",
        },{
            movieID: "339964",
            moviename: "Valerian and the City of a Thousand Planets",
            movieyear: "2017"
        },{
            movieID: "281338",
            moviename: "War For The Planet Of The Apes",
            movieyear: "2017"
        },{
            movieID: "324852",
            moviename: "Despicable Me 3",
            movieyear: "2017"
        },{
            movieID: "283995",
            moviename: "Guardians of the Galaxy Vol. 2",
            movieyear: "2017"
        },{
            movieID: "378236",
            moviename: "The Emoji Movie",
            movieyear: "2017"
        },{
            movieID: "416477",
            moviename: "The Big Sick",
            movieyear: "2017"
        },{
            movieID: "353491",
            moviename: "The Dark Tower",
            movieyear: "2017"
        },{
            movieID: "297762",
            moviename: "Wonder Woman",
            movieyear: "2017"
        },{
            movieID: "395834",
            moviename: "Wind River",
            movieyear: "2017"
        },{
            movieID: "562",
            moviename: "Die Hard",
            movieyear: "1988"
        },{
            movieID: "251516",
            moviename: "Kung Fury",
            movieyear: "2015"
        },{
            movieID:"37833",
            moviename: "Reefer Madness",
            movieyear: "1936"
        },{
            movieID:"245891",
            moviename: "John Wick",
            movieyear: "2014"
        },{
            movieID:"324552",
            moviename: "John Wick: Chapter 2",
            movieyear: "2017"
        },{
            movieID:"341013",
            moviename: "Atomic Blonde",
            movieyear: "2017"
        },{
            movieID:"76341",
            moviename: "Mad Max: Fury Road",
            movieyear: "2015"
        },{
            movieID:" 263115",
            moviename: "Logan",
            movieyear: "2017"
        },{
            movieID:" 335984",
            moviename: "Blade Runner 2049",
            movieyear: "2017"
        }

    ];

    $.each(movieInfo, function(key, movie) {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/movie/"+movie.movieID+"?api_key=324938bccc324fb58e236a92cb0a9bc3",
            "method": "GET",
            "headers": {},
            "data": "{}"
        };

        $.ajax(settings).done(function (response) {

            var theDate = new Date()
            var movDate = new Date(response.release_date)

            if(theSwitch == 0)
            {
                if(movDate <= theDate)
                {
                    document.getElementById("theList").innerHTML += '<div class="col-20"><div class="item"><div><h3><a class="hyperColour" href="/movieInfo?movieID=' + response.id + '">' + response.original_title + '</a></h3><img id="img' + response.movieID + '" class="listImg" src="https://image.tmdb.org/t/p/original' + response.poster_path + '"></div></div>';
                }
            }
            else if(theSwitch == 1)
            {
                if(movDate > theDate)
                {
                    document.getElementById("theList").innerHTML += '<div class="col-20"><div class="item"><div><h3><a class="hyperColour" href="/movieInfo?movieID=' + response.id + '">' + response.original_title + '</a></h3><img id="img' + response.movieID + '" class="listImg" src="https://image.tmdb.org/t/p/original' + response.poster_path + '"></div></div>';
                }
            }

            console.log(response);

        });

    });
    document.getElementById("theList").innerHTML += '<div class="divTitle"><div class="listMiddle"><div id="leftTab" class="listBottom"  onclick="doNowShowing()"><a class="listTitle" href="javascript:void(0);"  text-align="center"><b>NOW SHOWING</b></a></div><div ID="rightTab" class="listBottom"  onclick="doUpcoming()"><a class="listTitle" href="javascript:void(0);"  text-align="center"><b>UPCOMING RELEASES</b></a></div></div></div>'

}
/*
$(document).ready(function(){

    movieSearch()

});
*/