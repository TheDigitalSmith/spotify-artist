function getArtistInfo (artist){
    fetch ("https://deezerdevs-deezer.p.rapidapi.com/artist/" +(artist) , {
        "method": "GET",
        headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "b0f442ef2fmsh48d14fda6e39b49p1ce2f7jsnf2274d03026e"
        }
    }) 
        .then(response => response.json())
        .then(responseArtist => console.log(responseArtist))

    let artistId = responseArtist.id
    console.log(artistId);

}