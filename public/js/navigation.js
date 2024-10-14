function handleNavigation() {
    const crossIcon = document.querySelector('.navigation__cross-icon')
    const navigation = document.querySelector('.navigation')
    const burgerIcon = document.querySelector('.main-nav__burger')

    crossIcon.addEventListener('click', function() {
        navigation.classList.add('hidden')
    })

    burgerIcon.addEventListener('click', function() {
        navigation.classList.remove('hidden')
    })
}

handleNavigation()
