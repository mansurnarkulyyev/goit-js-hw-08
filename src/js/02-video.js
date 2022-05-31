
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });

// function saveVideo(evt) {
//     localStorage.setItem('videoplayer-current-time', Vimeo.value);
//     updateOutput();
// }
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.

// player.on('eventName', function (data) {
//     // data is an object containing properties specific to that event
// });
const onPlay = function (data) {
    // data is an object containing properties specific to that event
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
};

player.on('timeupdate', onPlay);


const videoPlayStop = JSON.parse(localStorage.getItem('videoplayer-current-time'))
const { seconds } = videoPlayStop;

player.setCurrentTime(seconds);

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

