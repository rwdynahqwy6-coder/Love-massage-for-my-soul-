const correctCode = "1406"; 

function openEnvelopePrompt() {
    document.getElementById("passcode-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("passcode-modal").classList.add("hidden");
    document.getElementById("error-msg").textContent = "";
    document.getElementById("passcode").value = "";
}

function checkPasscode() {
    const inputCode = document.getElementById("passcode").value;
    const errorMsg = document.getElementById("error-msg");

    if (inputCode === correctCode) {
        document.getElementById("passcode-modal").classList.add("hidden");
        document.getElementById("message-screen").classList.remove("hidden");
        errorMsg.textContent = "";
        document.getElementById("passcode").value = "";
    } else {
        errorMsg.textContent = "الرمز غير صحيح، حاولي مجدداً! ❌";
        document.getElementById("passcode").value = "";
    }
}

function lockApp() {
    document.getElementById("message-screen").classList.add("hidden");
}
