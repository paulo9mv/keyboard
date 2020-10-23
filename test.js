$(document).on("keydown", function (e) {
    if (!pressing.includes(e.which)) {
        pressing.push(e.which)
        setBackgroundColor(e.which, 'pressing', 'pressed')
    }
});

$(document).on("keyup", function (e) {
    const index = pressing.indexOf(e.which);
    if (index > -1) {
        pressing.splice(index, 1);
    }
    setBackgroundColor(e.which, 'pressed', 'pressing')
});

function setBackgroundColor(key, status, remove) {
    const doc = elementById(asciiToChar(key))

    if(!doc) return

    if(remove) {
        doc.classList.remove(remove)
    }

    doc.classList.add(status)
}

function asciiToChar(ascii) {
    return String.fromCharCode(ascii)
}

function elementById(id) {
    return document.getElementById(id)
}

function resetKeyboard() {
    const keyDivs = document.getElementsByClassName('keycontainer')

    for(const element of keyDivs) {
        element.classList.remove('pressed')
    }
}

var pressing = []