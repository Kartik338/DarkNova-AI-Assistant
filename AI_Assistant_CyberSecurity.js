// ===== GLOBAL =====
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");

let recognition = null;
let isListening = false;

// ===== ADD MESSAGE =====
function addMessage(sender, text, className) {
    const div = document.createElement("div");
    div.classList.add("message", className);
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ===== AI RESPONSE =====
function getAIResponse(message) {
    message = message.toLowerCase();

    if (message.includes("brute force")) {
        return "Brute force attack means trying many password combinations. Use strong passwords to stay safe.";
    } else if (message.includes("black hat")) {
        return "Black hat hackers work illegally. Ethical hackers protect systems.";
    } else if (message.includes("cyber")) {
        return "Cybersecurity protects networks, systems, and data from digital attacks.";
    } else {
        return "Keep learning. Stay ethical. Think like a defender.";
    }
}

// ===== HANDLE SEND =====
function handleUserInput() {
    const text = input.value.trim();
    if (!text) return;

    addMessage("You", text, "user");

    const response = getAIResponse(text);
    addMessage("DarkNova", response, "bot");

    speak(response);

    input.value = "";
}

sendBtn.addEventListener("click", handleUserInput);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") handleUserInput();
});

// ===== TEXT TO SPEECH =====
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
}

// ===== SPEECH RECOGNITION =====
if ('webkitSpeechRecognition' in window) {

    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-IN";

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        input.value = transcript;
        handleUserInput();
    };

    recognition.onend = function() {
        isListening = false;
    };

    micBtn.addEventListener("click", function() {
        if (!isListening) {
            recognition.start();
            isListening = true;
        }
    });
}