const $planets = document.querySelectorAll('.destination-page__planet')

function onChangePlanet() {
    $planets.forEach($planet => {
        $planet.addEventListener('click', () => {
            $planets.forEach($planet => $planet.classList.remove('destination-page__planet--active'))

            $planet.classList.add('destination-page__planet--active')
        })
    })
}

onChangePlanet()
