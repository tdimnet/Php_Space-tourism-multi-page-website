const $bulletsCrew = document.querySelectorAll('.crew-page__bullets-list')

function onChangeCrewMember($bullet) {
    console.log("======")
    console.log($bullet)
    console.log("======")
    console.log("======")
    console.log(CREW_DATA)
    console.log("======")
}


$bulletsCrew.forEach(($bullet) => {
    $bullet.addEventListener('click', () => {
        onChangeCrewMember($bullet)
    })
})
