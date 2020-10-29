$(document).on("keydown", function (e) {

    const key = keydownToKeyHTML[e.which]
    console.log('apertou', key, e.which, e.key, e)

    if(Array.isArray(key)) {
        for(var i of key){
            if (!pressing.includes(i)) {
                pressing.push(i)
                setBackgroundColor(i, 'pressing', 'pressed')
            }
        }
    }
    else {
        if (!pressing.includes(key)) {
            pressing.push(key)
            setBackgroundColor(key, 'pressing', 'pressed')
        }
    }

    e.preventDefault()
});

$(document).on("keyup", function (e) {
    const key = keydownToKeyHTML[e.which]

    if(Array.isArray(key)) {
        for(var i of key){
            let index = pressing.indexOf(i);
            if (index > -1) {
                pressing.splice(index, 1);
            }
            setBackgroundColor(i, 'pressed', 'pressing')
        }
    }
    else {
        const index = pressing.indexOf(key);
        if (index > -1) {
            pressing.splice(index, 1);
        }
        setBackgroundColor(key, 'pressed', 'pressing')
    }
    
});

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
    //
    '192': 'key13', // ' ""
    '49': 'key14', // 1
    '50': 'key15', // 2
    '51': 'key16', //3
    '52': 'key17', //4 
    '53': 'key18', //5
    '54': 'key19', //6
    '55': 'key20', //7
    '56': 'key21', //8
    '57': 'key22', //9
    '48': 'key23', //0
    '189': 'key24', // - _
    '187': 'key25', // = +
    '8': 'key26', // backspace <-
    //
    '9': 'key27', // tab
    '81': 'key28', // q
    '87': 'key29', // w
    '69': 'key30', // e
    '82': 'key31', // r
    '84': 'key32', // t
    '89': 'key33', // y
    '85': 'key34', // u
    '73': 'key35', // i
    '79': 'key36', // o
    '80': 'key37', // p
    '219': 'key38', // ´`
    '221': 'key39', //[{
    //
    '20': 'key40', // capslock
    '65': 'key41', // a
    '83': 'key42', // s
    '68': 'key43', // d
    '70': 'key44', // f
    '71': 'key45', // g
    '72': 'key46', // h
    '74': 'key47', // j
    '75': 'key48', // k
    '76': 'key49', // L
    '186': 'key50', // ç
    '222': 'key51', // ~ ^
    '220': 'key52', // ]}
    '13': 'key74', // Enter
    //
    '16': ['key53', 'key66'], // Shift LR
    '226': 'key54', // \ |
    '90': 'key55', // z
    '88': 'key56', // x
    '67': 'key57', // c
    '86': 'key58', // v
    '66': 'key59', // b
    '78': 'key60', // n
    '77': 'key61', // m
    '188': 'key62', // , <
    '190': 'key63', // . >
    '191': 'key64', // ; :
    '193': 'key65', // / ?
    //
    '17': ['key67', 'key73'], // ctrl
    '91': 'key68', // windows
    '18': 'key69', // alt
    '32': 'key70', // space
    '18': 'key71', // alt gr
    '93': 'key72' // menu
    // TODO: Conferir situação ALT GR disparando dois event keydown
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
    const doc = elementById(key)

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