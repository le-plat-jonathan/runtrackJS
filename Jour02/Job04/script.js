document.addEventListener('keypress', function(event) {
    let key = event.key.toLowerCase();
    let textarea = document.getElementById('keylogger');

    if (document.activeElement === textarea) {
        textarea.value += key;
    } else if (/^[a-z]$/.test(key)) {
        textarea.value += key;
    }
});