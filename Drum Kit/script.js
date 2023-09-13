document.addEventListener('keydown' , function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return ; // Stops the function running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('keypress');
})

const keys = document.querySelectorAll(".key");
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('keypress');
}

keys.forEach(key => key.addEventListener('transitionend' , removeTransition ))