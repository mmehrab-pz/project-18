let y = 1

function navbar() {
    if (y == 1) {
        document.getElementById('header-nav').style.position = 'fixed'
        document.getElementById('header-nav').style.zIndex = '1000'
        document.getElementById('header-nav').style.width = '100%'
        document.getElementById('header-nav').style.borderRadius = '0'
        document.getElementById('goTop').style.bottom = '20px'
        document.getElementById('goTop').style.opacity = '1'
    }
    let m = window.pageYOffset
    if (m == 0) {
        document.getElementById('header-nav').style.position = 'relative'
        document.getElementById('header-nav').style.zIndex = '0'
        document.getElementById('header-nav').style.top = '0'
        document.getElementById('header-nav').style.width = '85%'
        document.getElementById('header-nav').style.borderRadius = '0px 0px 14px 14px'
        document.getElementById('goTop').style.bottom = '-60px'
        document.getElementById('goTop').style.opacity = '0'
    }
}