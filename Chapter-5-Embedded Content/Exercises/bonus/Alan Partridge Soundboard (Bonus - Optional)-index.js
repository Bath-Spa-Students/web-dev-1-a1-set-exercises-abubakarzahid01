document.addEventListener("DOMContentLoaded", function() {
    const samples = document.querySelectorAll('.sample');

    samples.forEach(sample => {
        sample.addEventListener('click', function() {
            const audioFile = this.getAttribute('data-audio');
            playSound(audioFile);
        });
    });

    function playSound(audioFile) {
        const audio = new Audio(audioFile);
        audio.play();
    }
});
