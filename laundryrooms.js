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
    name: 'Nödutgång, kontrollera att fönster eller dörrar går att öppna helt',
    img: '/nodutgang.jpg'
}
const lysRor = {
    name: 'Lysrör, tänd alla lampor och kontrollera att alla lyser',
    img: '/lysror.jpg'
}
const proppSkap = {
    name: 'Proppskåp, se till att alla säkringar pekar uppåt',
    img: '/proppskap.webp'
}
// const pappersRulle = {
//     name: 'Pappersrulle',
//     img: '/pappersrulle.webp'
// }
const toalettPapper = {
    name: 'Toalettpapper',
    img: '/toalettpapper.webp'
}
const tval = {
    name: 'Tvål',
    img: '/tval.webp'
}
const handSprit = {
    name: 'Handsprit',
    img: '/handsprit.webp'
}
// const pappersHanddukar = {
//     name: 'Pappershanddukar',
//     img: '/pappershanddukar.webp'
// }
const torky = {
    name: 'Torky',
    img: '/torky.webp'
}
const teknikSkap = {
    name: 'Teknikskåp, öppna dörren och titta efter vattenläckor',
    img: '/teknikskap.jpg'
}
const golvRaka = {
    name: 'Golvraka',
    img: '/golvraka.webp'
}
const sopKvast = {
    name: 'Sopkvast',
    img: '/sopkvast.webp'
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
                name: 'Bivråksgränd 9A',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Bivråksgränd 9B',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Ormvråksgränd 8',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor
                ]
            },
            {
                name: 'Ormvråksgränd 6',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Ormvråksgränd 1',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor
                ]
            },
            {
                name: 'Fiskgjusegränd 6',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 8',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 3',
                key: 3,
                ready: false,
                occupied: false,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, nodUtgang, lysRor, proppSkap
                ]
            },
            {
                name: 'Fiskgjusegränd 11',
                key: 3,
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
                name: 'Korsängsgatan 87',
                key: 1,
                tasks: [
                    diskBorste, diskTrasa, vaskSkrapa, alloRen, moppGarn, moppSkaft, moppHink, luddBorste, sopBorste, sopSkyffel, golvRaka, sopKvast, lysRor, teknikSkap, nodUtgang
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
    
    // regions.forEach((element) => {
    //     //console.log(element.laundryrooms)
    //     element.laundryrooms.forEach((item) => {
    //         item.tasks.forEach((task) => {
    //             console.log(task)
    //         })
    //     })
    //     db.collection('regions').add(element, element.name)
    //   })


    for (let i = 0; i < regions.length; i++) {

        //let region = regions[i]

        regions[i].id = i + 1
        
        for(let j = 0; j < regions[i].laundryrooms.length; j++) {

            //let laundryroom = region.laundryrooms[j]


        
            regions[i].laundryrooms[j].id = regions[i].id + '_' + (j + 1)
            regions[i].laundryrooms[j].ready = false
            regions[i].laundryrooms[j].occupied = false   

            for(let k = 0; k < regions[i].laundryrooms[j].tasks.length; k++) {

                //let task = laundryroom.tasks[k]

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
