function getArtistInfo (artist){
    fetch ("https://deezerdevs-deezer.p.rapidapi.com/artist/" +(artist) , {
        "method": "GET",
        headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "b0f442ef2fmsh48d14fda6e39b49p1ce2f7jsnf2274d03026e"
        }
    }) 
        .then(response => response.json())
        .then(responseArtist =>{
            console.log(responseArtist)
            let artistId = responseArtist.id
            console.log (artistId)
        
            var row = document.querySelector("#content");
            row.innerHTML= "";

            responseArtist.name.forEach(info => {
                row.innerHTML += `
                <div class="jumbotron" style = "background-image:url(${info.picture_big}) ">
                    <p class="lead">${info.nb_fan}</p>
                    <h1 class="display-4">${info.name}</h1>
                    <a class="btn btn-primary btn-lg" href="#" role="button">OVERVIEW</a>
                    <a class="btn btn-primary btn-lg" href="#" role="button">RELATED ARTISTS</a>
                    <a class="btn btn-primary btn-lg" href="#" role="button">ABOUT</a>
                </div>
                <h2>TRACKS<h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                `
            })
        })

    

}