const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

//seção de variáveis auxiliares para o meu código
const asYouWere = {
  songName: "As You Were",
  file: "as_you_were",
  artist: "TrackTribe",
};
const cantHide = {
  songName: "Can't Hide",
  file: "cant_hide",
  artist: "Otis McDonald",
};
const boomBapFlick = {
  songName: "Boom Bap Flick",
  file: "boom_bap_flick",
  artist: "Quincas Moreira",
};
let isPlaying = false;
const playlist = [asYouWere, cantHide, boomBapFlick];
let currentSong = 0;

function playSong() {
  isPlaying = true;
  play.querySelector("i.bi").classList.remove("bi-play-circle-fill");
  play.querySelector("i.bi").classList.add("bi-pause-circle-fill");
  song.play();
}

function pauseSong() {
  isPlaying = false;
  play.querySelector("i.bi").classList.add("bi-play-circle-fill");
  play.querySelector("i.bi").classList.remove("bi-pause-circle-fill");
  song.pause();
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
    songName.innerText = playlist[currentSong].songName;
    bandName.innerText = playlist[currentSong].artist;
    song.src = `/songs/${playlist[currentSong].file}.mp3`;
    cover.src = `/images/${playlist[currentSong].file}.webp`;
}

function nextSong() {
    if(currentSong === playlist.length -1){
        currentSong = 0;
    }
    else {
        currentSong += 1;
    }
    initializeSong();
    playSong();
}

function previousSong() {
    if(currentSong === 0){
        currentSong = playlist.length - 1;
    }
    else {
        currentSong -= 1;
    }
    initializeSong();
    playSong();
}

initializeSong();

play.addEventListener("click", playPauseDecider);
next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);
