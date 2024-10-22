const $technologySteps = document.querySelectorAll('.technology-page__technology-step')

function onChangeTechnology($selectedTechnology) {
    $technologySteps.forEach($step => {
        $step.classList.remove('technology-page__technology-step--active')
    })
    $selectedTechnology.classList.add('technology-page__technology-step--active')

    console.log("====")
    console.log($selectedTechnology)
    console.log("====")
    console.log("====")
    console.log(TECHNOLOGIES_DATA)
    console.log("====")
}

$technologySteps.forEach($step => {
    $step.addEventListener('click', () => {
        onChangeTechnology($step)
    })
})
