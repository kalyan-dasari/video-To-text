document.getElementById('video-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoInput = document.getElementById('video-input');
    const videoPlayer = document.getElementById('video-player');

    if (videoInput.files && videoInput.files[0]) {
        const fileURL = URL.createObjectURL(videoInput.files[0]);
        videoPlayer.src = fileURL;
        videoPlayer.style.display = 'block';
        alert('Video uploaded successfully!');
    } else {
        alert('Please select a video file.');
    }
});

document.getElementById('video-upload-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const videoInput = document.getElementById('video-input');
    const videoPlayer = document.getElementById('video-player');

    if (videoInput.files && videoInput.files[0]) {
        const fileURL = URL.createObjectURL(videoInput.files[0]);
        videoPlayer.src = fileURL;
        videoPlayer.style.display = 'block';
        alert('Video uploaded successfully!');
    } else {
        alert('Please select a video file.');
    }
});

document.getElementById('video-upload-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const videoInput = document.getElementById('video-input');
    const videoPlayer = document.getElementById('video-player');

    if (videoInput.files && videoInput.files[0]) {
        const fileURL = URL.createObjectURL(videoInput.files[0]);
        videoPlayer.src = fileURL;
        videoPlayer.style.display = 'block';
        alert('Video uploaded successfully!');
    } else {
        alert('Please select a video file.');
    }
});

const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const output = document.getElementById("output");
const copyButton = document.getElementById("copy-btn");
const clearButton = document.getElementById("clear-btn");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "te-IN";
    recognition.interimResults = true;
    recognition.continuous = false;

    let finalTranscript = "";

    startButton.addEventListener("click", () => {
        if (output.innerHTML === "Speech will appear here...") {
            finalTranscript = ""; // Reset transcript only if it was cleared previously
        }
        recognition.start();
        output.innerHTML = finalTranscript || "Listening...";
        startButton.disabled = true;
        stopButton.disabled = false;
    });

    recognition.onresult = (event) => {
        let interim = "";

        for (let i = 0; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript + ". ";
            } else {
                interim += transcript;
            }
        }
        output.innerHTML = finalTranscript + `<span style="color:gray;">${interim}</span>`;
    };

    recognition.onend = () => {
        if (!stopButton.disabled) {
            recognition.start();
        }
    };

    stopButton.addEventListener("click", () => {
        recognition.stop();
        stopButton.disabled = true;
        startButton.disabled = false;
    });

    recognition.onerror = (event) => {
        output.innerHTML += `<p style="color:red;"><b>Error:</b> ${event.error}</p>`;
    };
} else {
    output.innerText = "Speech Recognition is not supported in this browser.";
}

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerText).then(() => {
        alert("Text copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text", err);
    });
});

clearButton.addEventListener("click", () => {
    output.innerHTML = "Speech will appear here...";
    finalTranscript = ""; // Clear the stored transcript as well
});

