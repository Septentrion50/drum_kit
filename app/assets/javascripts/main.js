window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind element every time a key is pressed
    audio.play();
    key.classList.add("playing");

    function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    };

    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
});