
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    id: 'vimeo-player',
});
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
    setTime('videoplayer-current-time', data.seconds);
}
function setTime(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getTime(key) {
    if (!localStorage.getItem(key)) {
        return 0;
    }
    return JSON.parse(localStorage.getItem(key));
}
player.setCurrentTime(getTime('videoplayer-current-time'));







// // Описан в документации
// import throttle from "lodash.throttle";
// import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import "simplelightbox/dist/simple-lightbox.min.css";


// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// const onPlay = function (data) {
//     localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
// };

// player.on('timeupdate', onPlay);

// const videoPlayStop = JSON.parse(localStorage.getItem('videoplayer-current-time'))
// const { seconds } = videoPlayStop;

// player.setCurrentTime(seconds, throttle(onPlay, 500));
