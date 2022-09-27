import Localbase from 'localbase'
let db = new Localbase('db')

const diskBorste = {
    name: 'Diskborste',
    img: '/diskborste.jpg'
}
const diskTrasa = {
    name: 'Disktrasa',
    img: '/disktrasa.png'
}
const vaskSkrapa = {
    name: 'Vaskskrapa',
    img: '/vaskskrapa.webp'
}
const alloRen = {
    name: 'Alloren',
    img: '/alloren.webp'
}
const luddBorste = {
    name: 'Luddborste',
    img: '/luddborste.jpg'
}
const moppGarn = {
    name: 'Moppgarn',
    img: '/moppgarn.jpg'
}
const moppSkaft = {
    name: 'Moppskaft',
    img: '/moppskaft.jpg'
}
const moppHink = {
    name: 'Mopphink',
    img: '/mopphink.jpg'
}
const sopBorste = {
    name: 'Sopborste',
    img: '/sopborste.png'
}
const sopSkyffel = {
    name: 'Sopskyffel',
    img: '/sopskyffel.png'
}
const nodUtgang = {
    name: 'Nödutgång',
    img: '/nodutgang.jpg'
}
const lysRor = {
    name: 'Lysrör',
    img: '/lysror.jpg'
}
const proppSkap = {
    name: 'Proppskåp',
    img: '/proppskap.webp'
}
const pappersRulle = {
    name: 'Pappersrulle',
    img: '/pappersrulle.webp'
}
const toalettPapper = {
    name: 'Toalettpapper',
    img: '/toalettpapper.webp'
}
const teknikSkap = {
    name: 'Teknikskåp',
    img: '/teknikskap.jpg'
}

const laundryrooms = [
    {
        name: 'Tornfalksgränd 2',
        key: 1,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Tornfalksgränd 5',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Tornfalksgränd 7',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
           diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
        {
        name: 'Tornfalksgränd 12',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
           diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 1',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 2',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 10',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 14',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 2',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 5',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 11',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 13',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd 5',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd 9A',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd 9B',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd Grovtvättstuga',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 3',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 6',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 8',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 11',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Ormvråksgränd 1',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Ormvråksgränd 6',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Ormvråksgränd 8',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Krukmakaren',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap
        ]
    },
    {
        name: 'Korsängsgatan 71',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 73',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 75',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 77',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 79',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 81',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 83',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 85',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 89',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 91',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan grovtvättstuga',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    }
]

const lillsidan = [
    {
        name: 'Tornfalksgränd 2',
        key: 1,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Tornfalksgränd 5',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Tornfalksgränd 7',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
           diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
        {
        name: 'Tornfalksgränd 12',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
           diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 1',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 2',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 10',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Stenfalksgränd 14',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 2',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 5',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 11',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Lärkfalksgränd 13',
        key: 1,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd 5',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd 9A',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd 9B',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Bivråksgränd Grovtvättstuga',
        key: 2,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 3',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 6',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 8',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Fiskgjusegränd 11',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Ormvråksgränd 1',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Ormvråksgränd 6',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    },
    {
        name: 'Ormvråksgränd 8',
        key: 3,
        ready: false,
        occupied: false,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
        ]
    }
]

const korsangen = [
    {
        name: 'Krukmakaren',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap
        ]
    },
    {
        name: 'Korsängsgatan 71',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 73',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 75',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 77',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 79',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 81',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 83',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 85',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 89',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan 91',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    },
    {
        name: 'Korsängsgatan grovtvättstuga',
        key: null,
        tasks: [
            diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
        ]
    }
]

const regions = [
    {   name: 'Lillsidan',
        link: 'lillsidan',
        img: 'lillsidan.webp',
        laundryrooms: [
            {
                name: 'Tornfalksgränd 2',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Tornfalksgränd 5',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Tornfalksgränd 7',
                key: 1,
                tasks: [
                   diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
                {
                name: 'Tornfalksgränd 12',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                   diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 1',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 2',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 10',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 14',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 2',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 5',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 11',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 13',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd 5',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd 9A',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd 9B',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd Grovtvättstuga',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 3',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 6',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 8',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 11',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Ormvråksgränd 1',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Ormvråksgränd 6',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Ormvråksgränd 8',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, nodUtgang, lysRor, proppSkap
                ]
            },
        ]
    },
    {
        name: 'Korsängen',
        link: 'korsangen',
        img: 'korsangen.webp',
        laundryrooms: [
            {
                name: 'Krukmakaren',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 71',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 73',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 75',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 77',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 79',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 81',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 83',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 85',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 89',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 91',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan grovtvättstuga',
                key: null,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, lysRor, proppSkap, teknikSkap
                ]
            }
        ]
    }
]

export function generateAssigments () {
    let assignments = [];

for (let i = 0; i < laundryrooms.length; i++) {

    let laundryroom = laundryrooms[i];

    let assignment = {
        id: i + 1,
        laundryroom: laundryroom.name,
        key: laundryroom.key,
        done: false,
        occupied: false,
        tasks: []
    };

    let taskId = 1;
    for (let j = 0; j < laundryroom.tasks.length; j++) {

        let task = laundryroom.tasks[j]
 
            assignment.tasks.push({
                id: taskId,
                name: task.name,
                img: task.img,
                done: false
            });
            taskId++
        
    }

    // assignments.push(assignment)
    // localStorage.setItem("assignments", JSON.stringify(assignments))

    //db.collection('assignments').add(assignment)
    //const laundryRoomNameKey = laundryroom.name.replace(/[^a-zA-Z]/g, "")
    const laundryRoomKey = laundryroom.name
        .replace(/å/g, 'a')
        .replace(/Å/g, 'A')
        .replace(/ä/g, 'a')
        .replace(/Ä/g, 'A')
        .replace(/ö/g, 'o')
        .replace(/Ö/g, 'O')
        .replace(/\s/g, '')
        .toLowerCase()
    db.collection('assignments').add(
        assignment
      , laundryRoomKey)
    
    //console.log(assignments)
}

}

export function generateAssigmentsForLillsidan () {
    let assignments = []

for (let i = 0; i < lillsidan.length; i++) {

    let laundryroom = lillsidan[i];

    let assignment = {
        id: i + 1,
        laundryroom: laundryroom.name,
        key: laundryroom.key,
        done: false,
        occupied: false,
        tasks: []
    };

    let taskId = 1;
    for (let j = 0; j < laundryroom.tasks.length; j++) {

        let task = laundryroom.tasks[j]

        if (Array.isArray(task)) {
            for (let k = 0; k < task.length; k++) {
                assignment.tasks.push({
                    id: taskId,
                    name: task[k].name,
                    img: task[k].img,
                    done: false
                });
                taskId++
            }
        }
        else {
            assignment.tasks.push({
                id: taskId,
                name: task.name,
                img: task.img,
                done: false
            });
            taskId++
        }
    }

    // assignments.push(assignment)
    // localStorage.setItem("assignments", JSON.stringify(assignments))

    //db.collection('assignments').add(assignment)
    //const laundryRoomNameKey = laundryroom.name.replace(/[^a-zA-Z]/g, "")
    const laundryRoomKey = laundryroom.name
        .replace(/å/g, 'a')
        .replace(/Å/g, 'A')
        .replace(/ä/g, 'a')
        .replace(/Ä/g, 'A')
        .replace(/ö/g, 'o')
        .replace(/Ö/g, 'O')
        .replace(/\s/g, '')
        .toLowerCase()
    db.collection('assignments-lillsidan').add(
        assignment
      , laundryRoomKey)
    
    //console.log(assignments)
}

}

export function generateAssigmentsForKorsangen () {
    let assignments = []

for (let i = 0; i < korsangen.length; i++) {

    let laundryroom = korsangen[i]

    let assignment = {
        id: i + 1,
        laundryroom: laundryroom.name,
        key: laundryroom.key,
        done: false,
        occupied: false,
        tasks: []
    };

    let taskId = 1;
    for (let j = 0; j < laundryroom.tasks.length; j++) {

        let task = laundryroom.tasks[j]

        if (Array.isArray(task)) {
            for (let k = 0; k < task.length; k++) {
                assignment.tasks.push({
                    id: taskId,
                    name: task[k].name,
                    img: task[k].img,
                    done: false
                });
                taskId++
            }
        }
        else {
            assignment.tasks.push({
                id: taskId,
                name: task.name,
                img: task.img,
                done: false
            });
            taskId++
        }
    }

    // assignments.push(assignment)
    // localStorage.setItem("assignments", JSON.stringify(assignments))

    //db.collection('assignments').add(assignment)
    //const laundryRoomNameKey = laundryroom.name.replace(/[^a-zA-Z]/g, "")
    const laundryRoomKey = laundryroom.name
        .replace(/å/g, 'a')
        .replace(/Å/g, 'A')
        .replace(/ä/g, 'a')
        .replace(/Ä/g, 'A')
        .replace(/ö/g, 'o')
        .replace(/Ö/g, 'O')
        .replace(/\s/g, '')
        .toLowerCase()
    db.collection('assignments-korsangen').add(
        assignment
      , laundryRoomKey)
    
    //console.log(assignments)
}

}

export function generateAssigmentList () {

    for (let i = 0; i < regions.length; i++) {

        let region = regions[i]

        region.id = i + 1
        
        for(let j = 0; j < region.laundryrooms.length; j++) {

            let laundryroom = region.laundryrooms[j]
        
                laundryroom.id = j + 1
                laundryroom.ready = false
                laundryroom.occupied = false   

            for(let k = 0; k < laundryroom.tasks.length; k++) {

                let task = laundryroom.tasks[k]
                
                    task.id = k + 1
                    task.done = false
            }
        }
        const key = region.name
            .replace(/å/g, 'a')
            .replace(/Å/g, 'A')
            .replace(/ä/g, 'a')
            .replace(/Ä/g, 'A')
            .replace(/ö/g, 'o')
            .replace(/Ö/g, 'O')
            .replace(/\s/g, '')
            .toLowerCase()
        db.collection('regions').add(region, key)
    }
}
