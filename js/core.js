$(document).on("keydown", function (e) {
    console.log('keydown', e.which, e.keyCode)
    if (!pressing.includes(e.which)) {
        pressing.push(e.which)
        setBackgroundColor(e.which, 'pressing', 'pressed')
    }
});

$(document).on("keypress", function (e) {
    console.log('keypress', e.which, e.keyCode, asciiToChar(e.keyCode))
});

const keysType = {
    "abnt2": {
        'key0': ["'", '"'],
        'key1': ['1', '!', '¹'],
        'key2': ['2', '@', '²'],
        'key3': ['3', '#', '³'],
        'key4': ['4', '$', '£'],
        'key5': ['5', '%', '¢'],
        'key6': ['6', '¨', '¬'],
        'key7': ['7', '&'],
        'key8': ['8', '*'],
        'key9': ['9', '('],
        'key10': ['0', ')'],
        'key11': ['-', '_'],
        'key12': ['=', '+', '§'],
        //
        'key13': ['q', 'Q'],
        'key14': ['w', 'W'],
        'key15': ['e', 'E'],
        'key16': ['r', 'R'],
        'key17': ['t', 'T'],
        'key18': ['y', 'Y'],
        'key19': ['u', 'U'],
        'key20': ['i', 'I'],
        'key21': ['o', 'O'],
        'key22': ['p', 'P'],
        'key23': ['´', '`'],
        'key24': ['[', '{', 'ª'],
        //
        'key25': ['a', 'A'],
        'key26': ['s', 'S'],
        'key27': ['d', 'D'],
        'key28': ['f', 'F'],
        'key29': ['g', 'G'],
        'key30': ['h', 'H'],
        'key31': ['j', 'J'],
        'key32': ['k', 'K'],
        'key33': ['l', 'L'],
        'key34': ['ç', 'Ç'],
        'key35': ['~', '^'],
        'key36': [']', '}', 'º'],
        //
        'key37': ['\\', '|'],
        'key38': ['z', 'Z'],
        'key39': ['x', 'X'],
        'key40': ['c', 'C'],
        'key41': ['v', 'V'],
        'key42': ['b', 'B'],
        'key43': ['n', 'N'],
        'key44': ['m', 'M'],
        'key45': [',', '<'],
        'key46': ['.', '>'],
        'key47': [';', ':'],
        'key48': ['/', '?', '°'],
    }
}

console.log(keysType['ª'])

$(document).on("keyup", function (e) {
    const index = pressing.indexOf(e.which);
    if (index > -1) {
        pressing.splice(index, 1);
    }
    setBackgroundColor(e.which, 'pressed', 'pressing')
});

function setBackgroundColor(key, status, remove) {
    const doc = elementById(asciiToChar(key))

    if (!doc) return

    if (remove) {
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

    for (const element of keyDivs) {
        element.classList.remove('pressed')
    }
}

var pressing = []