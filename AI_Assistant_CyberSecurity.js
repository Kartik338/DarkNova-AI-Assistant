document.addEventListener("DOMContentLoaded", function () {

    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    sendBtn.addEventListener("click", function () {

        const message = userInput.value.trim();
        if (message === "") return;

        const userMsg = document.createElement("p");
        userMsg.innerHTML = "<b>You:</b> " + message;
        chatBox.appendChild(userMsg);

        const aiMsg = document.createElement("p");
        aiMsg.innerHTML = "<b>DarkNova:</b> System Active. Processing -> " + message;
        chatBox.appendChild(aiMsg);

        userInput.value = "";
    });

});
