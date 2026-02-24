/* ── i18n ── */
var translations = {
    'pt-BR': {
        pageTitle:      'Teste seu teclado',
        resetBtn:       'Reiniciar',
        langBtn:        'EN',
        layoutBtnAbnt2: 'ABNT2 (PT-BR)',
        layoutBtnAnsi:  'ANSI (EN)',
        footerYear:     'Teste seu Teclado - 2024',
        footerContrib:  'Você pode contribuir neste projeto em'
    },
    'en': {
        pageTitle:      'Test your keyboard',
        resetBtn:       'Reset',
        langBtn:        'PT-BR',
        layoutBtnAbnt2: 'ABNT2 (PT-BR)',
        layoutBtnAnsi:  'ANSI (EN)',
        footerYear:     'Test your Keyboard - 2024',
        footerContrib:  'You can contribute to this project at'
    }
};

/* ── Keyboard layout definitions ── */
var keyboardLayouts = {
    abnt2: [
        // Row 1 – Esc + F-keys
        [
            { id: 'key0',  label: 'Esc' },
            { id: 'key1',  label: 'F1'  },
            { id: 'key2',  label: 'F2'  },
            { id: 'key3',  label: 'F3'  },
            { id: 'key4',  label: 'F4'  },
            { id: 'key5',  label: 'F5'  },
            { id: 'key6',  label: 'F6'  },
            { id: 'key7',  label: 'F7'  },
            { id: 'key8',  label: 'F8'  },
            { id: 'key9',  label: 'F9'  },
            { id: 'key10', label: 'F10' },
            { id: 'key11', label: 'F11' },
            { id: 'key12', label: 'F12' }
        ],
        // Row 2 – number row
        [
            { id: 'key13', label: "' \""    },
            { id: 'key14', label: '1'       },
            { id: 'key15', label: '2'       },
            { id: 'key16', label: '3'       },
            { id: 'key17', label: '4'       },
            { id: 'key18', label: '5'       },
            { id: 'key19', label: '6'       },
            { id: 'key20', label: '7'       },
            { id: 'key21', label: '8'       },
            { id: 'key22', label: '9'       },
            { id: 'key23', label: '0'       },
            { id: 'key24', label: '- _'     },
            { id: 'key25', label: '= +'     },
            { id: 'key26', label: 'Backspace', cls: 'keybackspace' }
        ],
        // Row 3 – QWERTY
        [
            { id: 'key27', label: 'Tab', cls: 'keytab' },
            { id: 'key28', label: 'Q'  },
            { id: 'key29', label: 'W'  },
            { id: 'key30', label: 'E'  },
            { id: 'key31', label: 'R'  },
            { id: 'key32', label: 'T'  },
            { id: 'key33', label: 'Y'  },
            { id: 'key34', label: 'U'  },
            { id: 'key35', label: 'I'  },
            { id: 'key36', label: 'O'  },
            { id: 'key37', label: 'P'  },
            { id: 'key38', label: '´`' },
            { id: 'key39', label: '[{' }
        ],
        // Row 4 – ASDF
        [
            { id: 'key40', label: 'CapsLock', cls: 'keycapslock' },
            { id: 'key41', label: 'A'  },
            { id: 'key42', label: 'S'  },
            { id: 'key43', label: 'D'  },
            { id: 'key44', label: 'F'  },
            { id: 'key45', label: 'G'  },
            { id: 'key46', label: 'H'  },
            { id: 'key47', label: 'J'  },
            { id: 'key48', label: 'K'  },
            { id: 'key49', label: 'L'  },
            { id: 'key50', label: 'Ç'  },
            { id: 'key51', label: '~^' },
            { id: 'key52', label: ']}' },
            { id: 'key74', label: 'Enter', cls: 'keyenter' }
        ],
        // Row 5 – ZXCV
        [
            { id: 'key53', label: 'Shift', cls: 'keyshift'      },
            { id: 'key54', label: '\\|'                          },
            { id: 'key55', label: 'Z'  },
            { id: 'key56', label: 'X'  },
            { id: 'key57', label: 'C'  },
            { id: 'key58', label: 'V'  },
            { id: 'key59', label: 'B'  },
            { id: 'key60', label: 'N'  },
            { id: 'key61', label: 'M'  },
            { id: 'key62', label: ',<' },
            { id: 'key63', label: '.>' },
            { id: 'key64', label: ';:' },
            { id: 'key65', label: '/?' },
            { id: 'key66', label: 'Shift', cls: 'keyshift'      }
        ],
        // Row 6 – bottom row
        [
            { id: 'key67', label: 'Ctrl',   cls: 'keyctrl'  },
            { id: 'key68', label: 'Win',    cls: 'keywin'   },
            { id: 'key69', label: 'Alt',    cls: 'keyalt'   },
            { id: 'key70', label: 'Space',  cls: 'keyspace' },
            { id: 'key71', label: 'Alt Gr', cls: 'keyalt'   },
            { id: 'key72', label: 'Menu',   cls: 'keymenu'  },
            { id: 'key73', label: 'Ctrl',   cls: 'keyctrl'  }
        ]
    ],

    ansi: [
        // Row 1 – same
        [
            { id: 'key0',  label: 'Esc' },
            { id: 'key1',  label: 'F1'  },
            { id: 'key2',  label: 'F2'  },
            { id: 'key3',  label: 'F3'  },
            { id: 'key4',  label: 'F4'  },
            { id: 'key5',  label: 'F5'  },
            { id: 'key6',  label: 'F6'  },
            { id: 'key7',  label: 'F7'  },
            { id: 'key8',  label: 'F8'  },
            { id: 'key9',  label: 'F9'  },
            { id: 'key10', label: 'F10' },
            { id: 'key11', label: 'F11' },
            { id: 'key12', label: 'F12' }
        ],
        // Row 2 – `~ instead of '"
        [
            { id: 'key13', label: '`~'                            },
            { id: 'key14', label: '1'                             },
            { id: 'key15', label: '2'                             },
            { id: 'key16', label: '3'                             },
            { id: 'key17', label: '4'                             },
            { id: 'key18', label: '5'                             },
            { id: 'key19', label: '6'                             },
            { id: 'key20', label: '7'                             },
            { id: 'key21', label: '8'                             },
            { id: 'key22', label: '9'                             },
            { id: 'key23', label: '0'                             },
            { id: 'key24', label: '- _'                           },
            { id: 'key25', label: '= +'                           },
            { id: 'key26', label: 'Backspace', cls: 'keybackspace'}
        ],
        // Row 3 – ends with [{ ]} \|
        [
            { id: 'key27', label: 'Tab', cls: 'keytab' },
            { id: 'key28', label: 'Q'   },
            { id: 'key29', label: 'W'   },
            { id: 'key30', label: 'E'   },
            { id: 'key31', label: 'R'   },
            { id: 'key32', label: 'T'   },
            { id: 'key33', label: 'Y'   },
            { id: 'key34', label: 'U'   },
            { id: 'key35', label: 'I'   },
            { id: 'key36', label: 'O'   },
            { id: 'key37', label: 'P'   },
            { id: 'key38', label: '[{'  },
            { id: 'key39', label: ']}'  },
            { id: 'key52', label: '\\|' }
        ],
        // Row 4 – ;: and '" instead of Ç ~^ ]}
        [
            { id: 'key40', label: 'CapsLock', cls: 'keycapslock' },
            { id: 'key41', label: 'A'   },
            { id: 'key42', label: 'S'   },
            { id: 'key43', label: 'D'   },
            { id: 'key44', label: 'F'   },
            { id: 'key45', label: 'G'   },
            { id: 'key46', label: 'H'   },
            { id: 'key47', label: 'J'   },
            { id: 'key48', label: 'K'   },
            { id: 'key49', label: 'L'   },
            { id: 'key50', label: ';:'  },
            { id: 'key51', label: '\'"' },
            { id: 'key74', label: 'Enter', cls: 'keyenter' }
        ],
        // Row 5 – no extra \| key; wider right Shift
        [
            { id: 'key53', label: 'Shift', cls: 'keyshift'      },
            { id: 'key55', label: 'Z'   },
            { id: 'key56', label: 'X'   },
            { id: 'key57', label: 'C'   },
            { id: 'key58', label: 'V'   },
            { id: 'key59', label: 'B'   },
            { id: 'key60', label: 'N'   },
            { id: 'key61', label: 'M'   },
            { id: 'key62', label: ',<'  },
            { id: 'key63', label: '.>'  },
            { id: 'key65', label: '/?'  },
            { id: 'key66', label: 'Shift', cls: 'keyshift-wide' }
        ],
        // Row 6 – same
        [
            { id: 'key67', label: 'Ctrl',   cls: 'keyctrl'  },
            { id: 'key68', label: 'Win',    cls: 'keywin'   },
            { id: 'key69', label: 'Alt',    cls: 'keyalt'   },
            { id: 'key70', label: 'Space',  cls: 'keyspace' },
            { id: 'key71', label: 'Alt Gr', cls: 'keyalt'   },
            { id: 'key72', label: 'Menu',   cls: 'keymenu'  },
            { id: 'key73', label: 'Ctrl',   cls: 'keyctrl'  }
        ]
    ]
};

/* ── Key code → key ID maps ── */
var keyMaps = {
    abnt2: {
        '27':  'key0',
        '112': 'key1',
        '113': 'key2',
        '114': 'key3',
        '115': 'key4',
        '116': 'key5',
        '117': 'key6',
        '118': 'key7',
        '119': 'key8',
        '120': 'key9',
        '121': 'key10',
        '122': 'key11',
        '123': 'key12',
        '192': 'key13',
        '49':  'key14',
        '50':  'key15',
        '51':  'key16',
        '52':  'key17',
        '53':  'key18',
        '54':  'key19',
        '55':  'key20',
        '56':  'key21',
        '57':  'key22',
        '48':  'key23',
        '189': 'key24',
        '187': 'key25',
        '8':   'key26',
        '9':   'key27',
        '81':  'key28',
        '87':  'key29',
        '69':  'key30',
        '82':  'key31',
        '84':  'key32',
        '89':  'key33',
        '85':  'key34',
        '73':  'key35',
        '79':  'key36',
        '80':  'key37',
        '219': 'key38',
        '221': 'key39',
        '20':  'key40',
        '65':  'key41',
        '83':  'key42',
        '68':  'key43',
        '70':  'key44',
        '71':  'key45',
        '72':  'key46',
        '74':  'key47',
        '75':  'key48',
        '76':  'key49',
        '186': 'key50',
        '222': 'key51',
        '220': 'key52',
        '13':  'key74',
        '16':  ['key53', 'key66'],
        '226': 'key54',
        '90':  'key55',
        '88':  'key56',
        '67':  'key57',
        '86':  'key58',
        '66':  'key59',
        '78':  'key60',
        '77':  'key61',
        '188': 'key62',
        '190': 'key63',
        '191': 'key64',
        '193': 'key65',
        '17':  ['key67', 'key73'],
        '91':  'key68',
        '18':  ['key69', 'key71'],
        '32':  'key70',
        '93':  'key72'
    },
    ansi: {
        '27':  'key0',
        '112': 'key1',
        '113': 'key2',
        '114': 'key3',
        '115': 'key4',
        '116': 'key5',
        '117': 'key6',
        '118': 'key7',
        '119': 'key8',
        '120': 'key9',
        '121': 'key10',
        '122': 'key11',
        '123': 'key12',
        '192': 'key13',
        '49':  'key14',
        '50':  'key15',
        '51':  'key16',
        '52':  'key17',
        '53':  'key18',
        '54':  'key19',
        '55':  'key20',
        '56':  'key21',
        '57':  'key22',
        '48':  'key23',
        '189': 'key24',
        '187': 'key25',
        '8':   'key26',
        '9':   'key27',
        '81':  'key28',
        '87':  'key29',
        '69':  'key30',
        '82':  'key31',
        '84':  'key32',
        '89':  'key33',
        '85':  'key34',
        '73':  'key35',
        '79':  'key36',
        '80':  'key37',
        '219': 'key38',
        '221': 'key39',
        '20':  'key40',
        '65':  'key41',
        '83':  'key42',
        '68':  'key43',
        '70':  'key44',
        '71':  'key45',
        '72':  'key46',
        '74':  'key47',
        '75':  'key48',
        '76':  'key49',
        '186': 'key50',
        '222': 'key51',
        '220': 'key52',
        '13':  'key74',
        '16':  ['key53', 'key66'],
        '90':  'key55',
        '88':  'key56',
        '67':  'key57',
        '86':  'key58',
        '66':  'key59',
        '78':  'key60',
        '77':  'key61',
        '188': 'key62',
        '190': 'key63',
        '191': 'key65',
        '17':  ['key67', 'key73'],
        '91':  'key68',
        '18':  ['key69', 'key71'],
        '32':  'key70',
        '93':  'key72'
    }
};

/* ── State ── */
var currentLayout = 'abnt2';
var currentLang   = 'pt-BR';
var pressing      = [];

/* ── Render keyboard from layout data ── */
function renderKeyboard(layout) {
    var wrapper = document.getElementById('keyboard-wrapper');
    wrapper.innerHTML = '';

    var rows = keyboardLayouts[layout];
    for (var r = 0; r < rows.length; r++) {
        var row  = rows[r];
        var tbl  = document.createElement('table');
        tbl.className = 'keyboard';
        var tr = document.createElement('tr');
        tr.className = 'keyrow';

        for (var k = 0; k < row.length; k++) {
            var key = row[k];
            var th  = document.createElement('th');
            th.id        = key.id;
            th.className = 'keycontainer' + (key.cls ? ' ' + key.cls : '');

            var div = document.createElement('div');
            div.className   = 'keyname';
            div.textContent = key.label;

            th.appendChild(div);
            tr.appendChild(th);
        }
        tbl.appendChild(tr);
        wrapper.appendChild(tbl);
    }

    scaleKeyboard();
}

/* ── Scale keyboard to fit the viewport ── */
function scaleKeyboard() {
    var wrapper   = document.getElementById('keyboard-wrapper');
    var container = document.getElementById('keyboard-container');
    if (!wrapper || !container) return;

    // Reset first so we can measure natural size
    wrapper.style.transform      = '';
    wrapper.style.marginBottom   = '';

    var available = container.offsetWidth - 32;
    var natural   = wrapper.scrollWidth;

    if (natural > available) {
        var scale = available / natural;
        wrapper.style.transform    = 'scale(' + scale + ')';
        wrapper.style.transformOrigin = 'top left';
        // Compensate layout height (transform doesn't affect flow)
        var naturalH = wrapper.scrollHeight;
        wrapper.style.marginBottom = (naturalH * (scale - 1)) + 'px';
    }
}

/* ── Toggle layout ── */
function toggleLayout() {
    currentLayout = (currentLayout === 'abnt2') ? 'ansi' : 'abnt2';
    resetKeyboard();
    renderKeyboard(currentLayout);
    updateLayoutButton();
}

function updateLayoutButton() {
    var btn = document.getElementById('layoutToggle');
    var t   = translations[currentLang];
    // Show the name of the layout you will switch TO
    btn.textContent = (currentLayout === 'abnt2') ? t.layoutBtnAnsi : t.layoutBtnAbnt2;
}

/* ── Toggle language ── */
function toggleLanguage() {
    currentLang = (currentLang === 'pt-BR') ? 'en' : 'pt-BR';
    applyLanguage();
}

function applyLanguage() {
    var t = translations[currentLang];
    document.getElementById('pageTitle').textContent    = t.pageTitle;
    document.getElementById('resetBtn').textContent     = t.resetBtn;
    document.getElementById('langToggle').textContent   = t.langBtn;
    document.getElementById('footerYear').textContent   = t.footerYear;
    document.getElementById('footerContrib').textContent= t.footerContrib;
    document.documentElement.lang = currentLang;
    updateLayoutButton();
}

/* ── Key event helpers ── */
function setBackgroundColor(key, status, remove) {
    var el = document.getElementById(key);
    if (!el) return;
    if (remove) el.classList.remove(remove);
    el.classList.add(status);
}

function resetKeyboard() {
    var keyDivs = document.getElementsByClassName('keycontainer');
    for (var i = 0; i < keyDivs.length; i++) {
        keyDivs[i].classList.remove('pressed');
        keyDivs[i].classList.remove('pressing');
    }
    pressing = [];
}

/* ── Key event listeners ── */
$(document).on('keydown', function (e) {
    var key = keyMaps[currentLayout][e.which];

    if (Array.isArray(key)) {
        for (var keyIndex = 0; keyIndex < key.length; keyIndex++) {
            if (pressing.indexOf(key[keyIndex]) === -1) {
                pressing.push(key[keyIndex]);
                setBackgroundColor(key[keyIndex], 'pressing', 'pressed');
            }
        }
    } else {
        if (key && pressing.indexOf(key) === -1) {
            pressing.push(key);
            setBackgroundColor(key, 'pressing', 'pressed');
        }
    }

    e.preventDefault();
});

$(document).on('keyup', function (e) {
    var key = keyMaps[currentLayout][e.which];

    if (Array.isArray(key)) {
        for (var keyIndex = 0; keyIndex < key.length; keyIndex++) {
            var idx = pressing.indexOf(key[keyIndex]);
            if (idx > -1) pressing.splice(idx, 1);
            setBackgroundColor(key[keyIndex], 'pressed', 'pressing');
        }
    } else {
        if (key) {
            var idx = pressing.indexOf(key);
            if (idx > -1) pressing.splice(idx, 1);
            setBackgroundColor(key, 'pressed', 'pressing');
        }
    }
});

/* ── Resize handler ── */
window.addEventListener('resize', scaleKeyboard);

/* ── Init ── */
renderKeyboard(currentLayout);
