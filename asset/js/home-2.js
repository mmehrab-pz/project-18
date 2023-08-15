let y = 1

function navbar() {
    if (y == 1) {
        document.getElementById('header-navbar').style.position = 'fixed'
        document.getElementById('header-navbar').style.zIndex = '1000'
        document.getElementById('header-navbar').style.animation = 'test ease-in-out 1.5s'
        document.getElementById('header-navbar-bg').style.display = 'none'
        document.getElementById('header-navbar-top').style.display = 'none'
        document.getElementById('goTop').style.bottom = '20px'
        document.getElementById('goTop').style.opacity = '1'
    }
    let m = window.pageYOffset
    if (m == 0) {
        document.getElementById('header-navbar').style.position = 'relative'
        document.getElementById('header-navbar').style.zIndex = '0'
        document.getElementById('header-navbar-bg').style.display = 'flex'
        document.getElementById('header-navbar-top').style.display = 'flex'
        document.getElementById('header-navbar').style.animation = 'none'
        document.getElementById('goTop').style.bottom = '-60px'
        document.getElementById('goTop').style.opacity = '0'
    }
}