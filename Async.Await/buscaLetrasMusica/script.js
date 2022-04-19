function findLyrics(artist, song) {
    return fetch(`http://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {
    el.preventDefault();
})

async function doSubmit() {
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    lyrics_el.innerHTML = `<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>`;

    // //.then
    // findLyrics(artist.ariaValueMax, song.value)
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.lyrics) {
    //             lyrics_el.innerHTML = data.lyrics;
    //         } else {
    //             lyrics_el.innerHTML = data.error;
    //         }
    //     })
    //     .catch(err => {
    //         lyrics_el.innerHTML = `Oops! ${err}`;
    //     })

    //async/await
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if (data.lyrics)
        lyrics_el.innerHTML = data.lyrics;
        else
            lyrics_el.innerHTML = data.error;
    } catch (err) {
        console.log(err);
    }
}