$(document).on("keydown", function (e) {
    console.log(e.key, e.which)
    return
    const key = confereKey(e.key, e.which)
    if (!pressing.includes(key)) {
        pressing.push(key)
        setBackgroundColor(key, 'pressing', 'pressed')
    }
});

$(document).on("keyup", function (e) {
    return;
    const key = confereKey(e.key, e.which)
    const index = pressing.indexOf(key);
    if (index > -1) {
        pressing.splice(index, 1);
    }
    setBackgroundColor(key, 'pressed', 'pressing')
});

function confereKey(key, which){
    if (key === 'Dead') {
        return which
    }
    return key
}

const mappedKeys = new Array(400)

mappedKeys
const keydownToKeyHTML = {
    '27': 'key0', //esc
    '112': 'key1', //F1
    '113': 'key2', //f2
    '114': 'key3', //f3
    '115': 'key4', //f4
    '116': 'key5', //f5
    '117': 'key6', //f6
    '118': 'key7', //f7
    '119': 'key8', //f8
    '120': 'key9', //f9
    '121': 'key10', //f10
    '122': 'key11', //f11
    '123': 'key12', //f12
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
    '27': 'key0',
}

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
        //specials
        'key49': ['Tab'],
        'key50': ['CapsLock'],
        'key51': ['Shift'],
        'key52': ['Shift']
    }
}
const mapped = {}
function mapCharsAsKeys() {
    const a = keysType.abnt2;
    for(var b in a) {
        const keys = a[b]
        for(var key of keys) {
            if (mapped[key] === undefined)
                mapped[key] = [];
            mapped[key].push(b)
        }
    }
}

mapCharsAsKeys()

function setBackgroundColor(key, status, remove) {
    const keyIndex = mapped[key]
    console.log(key)
    console.log(keyIndex)
    console.log(mapped)

    const docs = elementById(keyIndex)

    if (!docs) return

    if (remove) {
        for(var doc of docs) {
            doc.classList.remove(remove)
        }
    }

    for(var docAdd of docs) 
        docAdd.classList.add(status)
}

function asciiToChar(ascii) {
    return String.fromCharCode(ascii)
}

function elementById(id) {
    const a = []
    for(var element of id) {
        a.push(document.getElementById(element))
    }
    return a
}

function resetKeyboard() {
    const keyDivs = document.getElementsByClassName('keycontainer')

    for (const element of keyDivs) {
        element.classList.remove('pressed')
    }
}

var pressing = []