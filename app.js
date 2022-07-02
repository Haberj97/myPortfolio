const btnMenu = document.querySelector('.menuBtn')
const nav = document.querySelector('.leftNav')
const allItem = document.querySelectorAll('.navItems')
const ligne = document.querySelector('.lineContainer')


btnMenu.addEventListener('click',()=>{
    ligne.classList.toggle('active')
    nav.classList.toggle('leftNavVisible')
} )

if(window.matchMedia('(max-width : 1300px;)')){
    allItem.forEach(item => {
        item.addEventListener('click',()=>{
            ligne.classList.toggle('active')
            nav.classList.toggle('leftNavVisible')
        } )
    })
}

const txtAnim = document.querySelector('.txtAnimated')

let typewriter = new Typewriter(txtAnim , {
    loop: true, deleteSpeed: 35
})

typewriter
.pauseFor(1800)
.changeDelay(25)
.typeString('Moi c\'est Jessy Habert')
.pauseFor(300)
.typeString("<strong>, Développeur Full-Stack<strong/>")
.pauseFor(1000)
.deleteChars(10)
.pauseFor(300)
.typeString("<span style=\"color: #27ae60;\">JavaScript</span> !")
.pauseFor(1000)
.deleteChars(12)
.pauseFor(300)
.typeString("<span style=\"color: blue;\">TypeScript</span> !")
.pauseFor(1000)
.deleteChars(12)
.pauseFor(300)
.typeString("<span style=\"color: orange;\">React</span> !")
.pauseFor(1300)
.deleteChars(7)
.pauseFor(300)
.typeString("<span style=\"color: violet;\">Node</span> !")
.pauseFor(1300)
.start()
