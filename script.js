// Init ()
let result, story, controle, Man, Women, pers, a, b, c, d, e;

// random generator
function genran (number) {
    let inputvar = Math.round(Math.random() * number);
    return inputvar;
}

// iteration
controle = genran(2);

// gender and prefix detector functions

Man = document.getElementById('Man');
Women = document.getElementById('Women');

function gender () {
 if(Man.checked) {
    return 0;
    } else if(Women.checked) {
        return 1;
    } else {
        console.log("prefix error")
        return -1;
    }
}


let gendervalue = gender();
function prefix(a) {
    switch(gendervalue) {
        case 0: {
            switch(a) {
                case 0: return "он"; break;
                case 1: return "его"; break;
                case 2: return "ему"; break;
                case 3: return ""; break;
                case 4: return "него"; break;
                case 5: return "нему"; break;
                case 6: return "ёл"; break;
                case 7: return "ым"; break;
                case 8: return "ком"; break;
                case 9: return "ел"; break;
                case 10: return "им"; break;
                case 11: return "ом"; break;
            }
        }
        case 1: {
            switch(a) {
                case 0: return "она"; break;
                case 1: return "её"; break;
                case 2: return "ей"; break;
                case 3: return "а"; break;
                case 4: return "неё"; break;
                case 5: return "ей"; break;
                case 6: return "ла"; break;
                case 7: return "ой"; break;
                case 8: return "цей"; break;
                case 9: return "ла"; break;
                case 10: return "ей"; break;
                case 11: return "ей"; break;
            }
        }

    }
}
let input = document.getElementById('input');


document.getElementById('submit').onclick = () => {
    gendervalue = gender();
    console.log(input.value)
    pers = input.value;
   if (pers == undefined || pers == "" || !pers) {
    console.log(pers);
        pers = "Михаил"
   } else {
       pers = input.value;
   }
   // story base

a = [ 
        // X  story start
    [
        'Однажды, ',
        'Когда-то давно, ',
        'Давным-давно, ',
        'В давние времена, ',
        `${genran(100)} лет тому назад, `,
    ], 
      // Y  story start
    [
        `В школьное время, ${pers}, `,
        `Однажды на работе, ${pers}, `,
        `Однажды в больнице, ${pers}, `,
        `Однажды в бане, ${pers}, `,
        `Однажды, когда ${pers} выглядел${prefix(3)}, как человек (только внешнее сходство), `, 
        `Однажды, когда ${pers} ещё был${prefix(3)} \"культурн${prefix(7)}\" школьни${prefix(8)}, `,       
        `Когда ${pers} было ${genran (30)} лет`
    ],
        // Z  story start
    [ 
        `Однажды с \"человеком\" по имени ${pers} произошла забавная история: `,
        `Когда-то ${pers} сотворил${prefix(3)} одну интересную дичь: `,
        `До того, как ${pers} стал${prefix(3)} взросл${prefix(7)} человеком, с н${prefix(10)} преключилась одна забавная несуразица: `
    ]
]

b = [
    [
         // X  story formant
        `когда ${prefix(0)} заш${prefix(6)} в неприятное помещение, `,
        `когда ${prefix(0)} сидел${prefix(3)} в душном помещении, `,
        `когда ${prefix(0)} выш${prefix(9)} из помещения, `,
        `после того, как ${prefix(0)} пош${prefix(6)} на перемену после урока, `,
        `после того, как ${prefix(0)} сходил${prefix(3)} в туалет, ` ,
        `после того, как ${prefix(0)} включил${prefix(3)} вентиляторы (ему стало жарко и он не вытерпел унижение от солнца), `
    ],
        // Y  story formant
    [
        `пока разговаривал${prefix(0)} с кем-то ни о чём, полностью погружаясь в процесс, решил${prefix(3)} отвлечься на свой гаджет, `,
        `пока сидел${prefix(3)} с серьёзным лицом, не обращая ни на что своё внимание, решил${prefix(3)} посмотреть в свой телефон, `,
        `пока сидел${prefix(3)} с грустным лицом, не фокусируясь ни на чём, решил${prefix(3)} посмотреть в свой телефон, `,
        `пока сидел${prefix(3)} с унылым лицом, ничего не делая, решил${prefix(3)} заглянуть в уведомления на своём телефоне, `,
        `во время того, как ${pers} читал свою любимую газету, `,
        `во время того, как ${pers} смотрел любимое аниме по телефону, `,
        `во время того, как ${pers} жёстко кушал целый унитаз вкусной еды, `,
    ],
         // Z  story formant
    [
        `${pers} как обычно, сидел${prefix(3)} на своей любимой покрашенной лавочке. `,
        `${pers} спокойно сидел${prefix(3)} на своём любимом сайте (лучше не вдаваться в подробности, что это был за сайт). `,
        `${pers} безмятежно смотрел${prefix(3)} в окно. `,
        `${pers} сидел${prefix(3)} в колледже за партой и общался со своими сокамерниками (друзьями). `,
        `${pers} сидел и слушал${prefix(3)} мощный дабстеп на полной громкости. `
    ]
]

c = [
    // X  story prebasement
    [
        `к н${prefix(2)} подошёл странный человек в военной униформе. `,
        `к н${prefix(2)} подошёл странный человек в чёрном костюме. `,
        `${prefix(0)} увидел${prefix(3)} что-то странное. `,
        `${prefix(0)} заметил${prefix(3)} что-то необычное. `,
        `${prefix(0)} разглядел${prefix(3)} что-то непонятное. `
    ],
    // Y  story prebasement
    [
        `${prefix(2)} пришло на телефон странное сообщение от незнакомого номера, где было сказано, что `,
        `${prefix(2)} пришло на e-mail странное сообщение от незнакомого номера, где было сказано, что `,
        `${prefix(2)} написал незнакомец в Telegram, который сказал, что `,
        `${prefix(2)} написал незнакомец в Whatsapp, который сказал, что `,
        `${prefix(2)} пришло уведомление на телефон, где говорилось, что `
    ],
    // Z  story prebasement
    [
        `И вдруг, откуда ни возьмись, вбежали полицейские. `,
        `И вдруг, откуда ни возьмись, вбежали спецназовцы. `,
        `И вот, неожиданно, к ${pers} подходят два полуголых мужика. `,
        `И вот, неожиданно, к ${pers} подбегают несколько военкоматчиков. `
    ]
]

d = [
     // X  story basement
    [
        `Приглядевшись, ${pers} понял${prefix(3)}, что это ${prefix(1)} лучший друг, но вдруг, он${prefix(3)} вспомнил, что у н${prefix(1)} нет друзей. `,
        `Приглядевшись, ${pers} понял${prefix(3)}, что это просто обычный человек с ноутбуком, о котором он${prefix(3)} так сильно мечтал${prefix(3)}. (о ноутбуке, а не о человеке)`,
        `Присмотревшись, ${pers} понял${prefix(3)}, что это был ${prefix(1)} родственник, который принёс ${prefix(2)} порцию вкусной еды. Как назло, ${pers} недавно поел${prefix(3)}. `,
        `Присмотревшись, ${pers} понял${prefix(3)}, что это был ${prefix(1)} ${prefix(1)} бывший сокамерник, который принёс ${prefix(2)} телефон, и показал легендарного бойца в Brawl start. Как назло, ${pers} всегда мечтал${prefix(3)} о легендарном персонаже в Brawl stars. `
    ],
    // Y  story basement
    [
        `${pers} может очень хорошо заработать: ${prefix(2)} достаточно просто десять раз нарисовать специальное граффити на заборах и выполнить далее указанные задания. `,
        `${pers} скоро отчислят из университета. ${prefix(2)} необходимо только забрать документы и сжечь их, потому что дальше будушего у ${prefix(4)} не будет. `,
        `${pers} скоро будет вынужден заплатить подояние уважаемому человеку. ${prefix(2)} необходимо перевести деньги на указанный номер и остаться лохом на всю оставшуюся жизнь. `,
        `${pers} скоро будет вынужден заплатить налоги государству. ${prefix(2)} необходимо только перевести деньги на шедевросайте госуслуг и остаться послушным гражданином на всю оставшуюся жизнь. `
    ],

    // Z  story basement
    [
        `Они сказали ${prefix(2)}, что сейчас начнётся грандиозная трёпка, если ${prefix(0)} не отдаст своему другу Сане сотку. `,
        `Они схватили ${prefix(1)} и заставили сказать, где находится заложенная бомба. `,
        `Эти граждане обозвали ${pers} нецензурными словами. `,
        `Эти люди посмели изъять у ${pers} телефон со словами, что сон ему больше не пригодится. `,
    ]
]

e = [
    // X  story ending
    [
        `${pers} не выдержал${prefix(3)} такого, и прыгнул${prefix(3)} с крыши, но упал прям в другого человека и убил${prefix(3)} его. После этого инцидента ${prefix(1)} посадили в тюоьму строгого заключения (2 пары ОБЖ в день).`,
        `${pers} подумал${prefix(3)}, и решил${prefix(3)} отправится в дальнее плаванье, чтобы забыть о всех своих земных проблемах. Конечно, данная ситуация сильно ${prefix(1)} огорчила, но ${prefix(0)} уже немог ничего поделать. Он${prefix(3)} уплыл в далёкие соря исследовать морские глубины, но при этом совершенно забыл${prefix(3)} о том, что сейчас спит и через 10 минут прозвенит будильник, и ${prefix(5)} пора вставать в школу.`,
        `${pers} просто застыл${prefix(3)} в ожидании чего-то. Но чего? Весь смысл нашей жизни - страдание ради получение какого-то якобы нужного нам блага, на этом строится основа всего мира. Даже если человек будет получать удовольствие от жизни, ему всё равно это покажется недостаточным из-за привыкания, и прийдётся ещё дальше стремится к чему-то более совершенному. Вдруг, он${prefix(3)} начал${prefix(3)} выходить из состояния транса, и пообщал${prefix(3)} себе больше не закидываться травой в такой сильной дозе.`
    ],
    // Y  story ending
    [
        `Он${prefix(3)} подумал${prefix(3)}, но не смогу принять полученную информацию, это был для ${prefix(4)} нонсенс. ${pers} решил${prefix(3)} бросить всё и перейти на программирование микроконтроллеров.`,
        `Он${prefix(3)} выполнил${prefix(3)} все написанные действия, и заработал${prefix(3)} уникальное достижение в реальной жизни: \"Лох не мамонт\".`,
        `Он${prefix(3)} не выполнил${prefix(3)} все написанные действия, и заработал${prefix(3)} уникальное достижение в реальной жизни: \"Меня не проведёшь!\".`,
        `Он${prefix(3)} просто выключил${prefix(3)} уведомления, и начал${prefix(3)} играть в Half life 2.`
    ],
    // Z  story ending
    [
        `Пока они не навредили ${prefix(2)}, ${prefix(0)} решил${prefix(3)} сбежать и забыть об это, как о страшном сне.`,
        `${pers} посмотрел${prefix(3)} им в глаза, и сказал${prefix(3)}: либо вы отдаёте всё своё имущество, либо свои жизни. В итоге, ${prefix(1)} побили :(.`,
        `${pers} был${prefix(3)} в тот момент в шоке. Но, спустя некоторое время, ${prefix(2)} удалось наладить ситуацию, и он скачал себе синтезатор ni massive на персональный компьютер.`
    ]
]
        //result compile

        function normalize (value) {
            if(value == -1) {
                value ++;
            }
            return value;
        }

        n1 = genran(2) 
        console.log(`n1 : ${n1}`)
        let a1 = n1;
        let a2 = genran(a.length -1);
            normalize(a2)

        let b1 = n1;
        let b2 = genran(b.length -1);
            normalize(b2);
        let c1 = n1;
        let c2 = genran(c.length -1);
            normalize(c2);

        let d1 = n1;
        let d2 = genran(d.length -1);
            normalize(d2);

        let e1 = n1;
        let e2 = genran(e.length -1);
            normalize(e2);

        function testRes(a1, a2, b1, b2, c1, c2, d1, d2, e1, e2) {
            console.log(a[a1][a2], b[b1][b2], c[c1][c2], d[d1][d2], e[e1][e2]);
        }

        let Test = [
            [
                a1,
                a2
            ],
            [
                b1,
                b2
            ], 
            [
                c1,
                c2
            ],
            [
                d1,
                d2
            ],
            [
                e1,
                e2
            ]
        ]
        console.log (Test);
    result = `${a[a1][a2] + b[b1][b2] + c[c1][c2] + d[d1][d2] + e[e1][e2]}`;
    story = document.getElementById('story');
    story.textContent = result;
}
// end of onclick checker