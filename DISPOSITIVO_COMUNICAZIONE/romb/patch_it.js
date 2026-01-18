// A series of monkey patches to make the interactive script work with our website, and translate some strings
// Figured out by reverse engineering the frameworks the page uses (Stimulus and Howl) using the Firefox debugger.

var controller = window.Stimulus.controllers[0];
controller.locale["it"] = {
    rumble: "Non potrai mai sconfiggerci! Che la sfida abbia inizio!"
};
controller.localeValue = "it";
// Redirect audio links to point upstream
controller.slam = new Howl({
    src: [
        'https://deltarune.com/assets/audio/slam.ogg',
        'https://deltarune.com/assets/audio/slam.mp3'
    ],
    volume: 0.5
});
controller.ma = new Howl({
    src: [
        'https://deltarune.com/assets/audio/ma.ogg',
        'https://deltarune.com/assets/audio/ma.mp3'
    ],
    volume: 0.5
});
controller.click = function () {
    this.clickedValue == !1 &&
        (
            this.clickedValue = !0,
            this.squareTarget.classList.add('animate-fly-off'),
            this.squareTarget.classList.remove('cursor-pointer'),
            this.ma.play(),
            document.title = this.locale[this.localeValue].rumble,
            setTimeout(() => {
                window.location.href = '../capitolo3/index.html'
            }, 3000)
        )
}
