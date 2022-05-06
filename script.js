var logo = document.getElementById('logo')
var icone = document.getElementById('icone')

function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
        icone.src = './img/Icon-w.svg' 
        logo.src = './img/Logo-w.svg' 
    }else {
        navigation.classList.remove('scroll')
        icone.src = './img/Icon.svg' 
        logo.src = './img/Logo.svg' 
    }
}