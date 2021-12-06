function setMenu(menuName) {
    document.getElementsByClassName('active')[0].setAttribute('class', '')
    document.getElementById(menuName).setAttribute('class', 'active')
}