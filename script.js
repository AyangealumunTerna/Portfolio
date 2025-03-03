function sendMessage(){
    let subject = document.getElementById('subject').value;
    let messageBody = document.getElementById('message').value;

    let url = 'https://wa.me/+2349060740128?text='
    + 'Subject: ' + subject + '%0a' + '%0a'
    + 'Message: ' + messageBody;

        return window.open(url, "_blank").focus();
}

document.getElementById('sentBtn').addEventListener("click", (e)=> {
    e.preventDefault();
    sendMessage();
})

console.log(sendMessage)