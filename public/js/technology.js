const $technologySteps = document.querySelectorAll('.technology-page__technology-step')

function onChangeTechnology($selectedTechnology) {
    $technologySteps.forEach($step => {
        $step.classList.remove('technology-page__technology-step--active')
    })
    $selectedTechnology.classList.add('technology-page__technology-step--active')

    const selectedTechnologyData = TECHNOLOGIES_DATA[$selectedTechnology.getAttribute('data-id')]

    const $technologyImg = document.querySelector('.technology-page__main-img')
    const $technologyName = document.querySelector('.technology-page__technology-name')
    const $technologyDescription = document.querySelector('.technology-page__technology-description')

    // $technologyImg.style.backgroundImage = selectedTechnologyData.img

    console.log($technologyImg)

    $technologyName.textContent = selectedTechnologyData.name
    $technologyDescription.textContent = selectedTechnologyData.description
}

$technologySteps.forEach($step => {
    $step.addEventListener('click', () => {
        onChangeTechnology($step)
    })
})
