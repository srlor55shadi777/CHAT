document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message !== "") {
        addMessageToChat(message, "user-message");
        userInput.value = "";
        scrollToBottom();
    }
}

function handleQuickReply(reply) {
    addMessageToChat(reply, "user-message");
    scrollToBottom();
}

function addMessageToChat(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
}

function scrollToBottom() {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}
