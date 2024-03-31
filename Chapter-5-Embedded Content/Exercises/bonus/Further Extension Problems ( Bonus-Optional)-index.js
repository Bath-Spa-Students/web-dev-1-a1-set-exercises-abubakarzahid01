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
document.addEventListener("DOMContentLoaded", function() {
    const textToSpeechInput = document.getElementById("text-to-speech");
    const speakButton = document.getElementById("speak-button");
    function textToAudio() {
        let msg = textToSpeechInput.value;
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = msg;
        speech.volume = 3;
        speech.rate = 0.5;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }
    speakButton.addEventListener("click", function() {
        textToSpeechInput.classList.add("animate-input");
        speakButton.classList.add("animate-button");

        setTimeout(textToAudio, 500);
        setTimeout(function() {
            textToSpeechInput.classList.remove("animate-input");
            speakButton.classList.remove("animate-button");
        }, 1000);
    });
});
