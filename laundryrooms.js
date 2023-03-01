import Localbase from 'localbase'
let db = new Localbase('db')
db.config.debug = false

const diskBorste = {
    name: 'Diskborste',
    img: '/diskborste.gif'
}
const diskTrasa = {
    name: 'Disktrasa',
    img: '/disktrasa.gif'
}
const vaskSkrapa = {
    name: 'Vaskskrapa',
    img: '/vaskskrapa.gif'
}
const alloRen = {
    name: 'Alloren',
    img: '/alloren.gif'
}
const luddBorste = {
    name: 'Luddborste',
    img: '/luddborste.gif'
}
const moppGarn = {
    name: 'Moppgarn',
    img: '/moppgarn_moppskaft.gif'
}
const moppSkaft = {
    name: 'Moppskaft',
    img: '/moppgarn_moppskaft.gif'
}
const moppHink = {
    name: 'Mopphink',
    img: '/mopphink.gif'
}
const sopBorste = {
    name: 'Sopborste',
    img: '/sopborste.gif'
}
const sopSkyffel = {
    name: 'Sopskyffel',
    img: '/sopskyffel.gif'
}
const nodUtgang = {
    name: 'Nödutgång, kontrollera att fönster eller dörrar går att öppna helt',
    img: '/nodutgang.gif'
}
const lysRor = {
    name: 'Lysrör, tänd alla lampor och kontrollera att alla lyser',
    img: '/lysror.gif'
}
const proppSkap = {
    name: 'Proppskåp, se till att alla säkringar pekar uppåt',
    img: '/proppskap.gif'
}
const toalettPapper = {
    name: 'Toalettpapper',
    img: '/toalettpapper.gif'
}
const tval = {
    name: 'Tvål',
    img: '/tval.gif'
}
const handSprit = {
    name: 'Handsprit',
    img: '/handsprit.gif'
}
const torky = {
    name: 'Torky',
    img: '/pappersrulle.gif'
}
const teknikSkap = {
    name: 'Teknikskåp, öppna dörren och titta efter vattenläckor',
    img: '/teknikskap.gif'
}
const golvRaka = {
    name: 'Golvskrapa',
    img: '/golvraka.gif'
}
const sopKvast = {
    name: 'Sopkvast',
    img: '/sopkvast.gif'
}

const regions = [
    {   name: 'Lillsidan',
        link: 'lillsidan',
        img: 'lillsidan.webp',
        laundryrooms: [
            {
                name: 'Tornfalksgränd 2',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Tornfalksgränd 12',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                   diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Tornfalksgränd 16',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                   diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, proppSkap
                ]
            },
            {
                name: 'Tornfalksgränd 9',
                key: 1,
                tasks: [
                   diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Tornfalksgränd 5',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 2',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 10',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 14',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 18',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Stenfalksgränd 1',
                key: 1,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 2',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 13',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 11',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Lärkfalksgränd 5',
                key: 2,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd 5',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd Grovtvättstuga',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd 9.1',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd 9.2',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Ormvråksgränd 8',
                key: 4,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor
                ]
            },
            {
                name: 'Ormvråksgränd 6',
                key: 4,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor
                ]
            },
            {
                name: 'Ormvråksgränd 1',
                key: 4,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor
                ]
            },
            {
                name: 'Fiskgjusegränd 6',
                key: 4,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 8',
                key: 4,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 3',
                key: 4,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 11',
                key: 4,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
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
                name: 'Korsängsgatan 73',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Korsängsgatan 71',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, proppSkap, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Korsängsgatan 75',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, proppSkap, teknikSkap, nodUtgang, toalettPapper, tval, handSprit, torky
                ]
            },
            {
                name: 'Korsängsgatan grovtvättstuga',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, proppSkap
                ]
            },
            {
                name: 'Korsängsgatan 77',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 91',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, proppSkap, teknikSkap
                ]
            },
            {
                name: 'Korsängsgatan 89',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Korsängsgatan 87',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Korsängsgatan 85',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Korsängsgatan 83',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Korsängsgatan 81',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Korsängsgatan 79',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
                ]
            },
            {
                name: 'Krukmakaren',
                key: 'Tagg',
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, nodUtgang
                ]
            },
        ]
    }
]

export async function generateAssigmentList () {

    for (let i = 0; i < regions.length; i++) {

        regions[i].id = i + 1
        
        for(let j = 0; j < regions[i].laundryrooms.length; j++) {
        
            regions[i].laundryrooms[j].id = regions[i].id + '_' + (j + 1)
            regions[i].laundryrooms[j].ready = false
            regions[i].laundryrooms[j].occupied = false   

            for(let k = 0; k < regions[i].laundryrooms[j].tasks.length; k++) {

                regions[i].laundryrooms[j].tasks[k] = JSON.parse(JSON.stringify(regions[i].laundryrooms[j].tasks[k]))
                regions[i].laundryrooms[j].tasks[k].id = regions[i].laundryrooms[j].id + '_' + (k + 1)
                regions[i].laundryrooms[j].tasks[k].done = false
            }
        }
        const key = regions[i].name
            .replace(/å/g, 'a')
            .replace(/Å/g, 'A')
            .replace(/ä/g, 'a')
            .replace(/Ä/g, 'A')
            .replace(/ö/g, 'o')
            .replace(/Ö/g, 'O')
            .replace(/\s/g, '')
            .toLowerCase()
        await db.collection('regions').add(regions[i], key)
    }
}
