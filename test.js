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
    console.log(asciiToChar(key))
    const doc = elementById(asciiToChar(key))

    if(remove) {
        doc.classList.remove('pressing')
    }

    doc.classList.add(status)
}

function asciiToChar(ascii) {
    return String.fromCharCode(ascii)
}

function elementById(id) {
    return document.getElementById(id)
}

var pressing = []