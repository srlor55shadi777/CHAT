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
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بوت خدمة العملاء</title>
    <!-- ربط ملف CSS -->
    <link rel="stylesheet" href="CHAT.css">
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">
            <h2>بوت ماريا - خدمة العملاء</h2>
        </div>
        <div class="chat-box" id="chat-box">
            <div class="message bot-message">
                مرحباً اهـلا بـك انا بـوت ماريا مساعدة خدمة العملاء بماذا أساعدك؟
            </div>
            <div class="message bot-message" id="inquiry">
                استفسار
            </div>
            <div class="buttons" id="inquiry-buttons">
                <button onclick="handleQuickReply('من هو مطور عشوائيات لور؟')">من هو مطور عشوائيات لور؟</button>
                <button onclick="handleQuickReply('ماذا يقدم التطبيق!')">ماذا يقدم التطبيق!</button>
            </div>
        </div>
        <div class="input-container">
            <input type="text" id="user-input" placeholder="اكتب رسالتك هنا...">
            <button id="send-btn">إرسال</button>
        </div>
    </div>
    <!-- ربط ملف JavaScript -->
    <script src="CHAT.js"></script>
</body>
</html>
