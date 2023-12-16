//Background audio function
// function aud_play_pause() {
//     var myAudio = document.getElementById("myTune");
//     if (myAudio.paused) {
//         myAudio.play();
//     } else {
//     myAudio.pause();
//     }
// }

// 'Ge' header tagline
var textWrapper = document.querySelector('.line2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.line2 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 1890 + 30 * i
  })