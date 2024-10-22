const $bulletsCrew = document.querySelectorAll(".crew-page__bullet");

function onChangeCrewMember($selectedBullet) {
  $bulletsCrew.forEach(($bullet) => {
    $bullet.classList.remove("crew-page__bullet--active");
  });
  $selectedBullet.classList.add("crew-page__bullet--active");

  const selectedCrewMemberData = CREW_DATA[$selectedBullet.getAttribute('data-id')]

  console.log("===")
  console.log(selectedCrewMemberData)
  console.log("===")
}

$bulletsCrew.forEach(($bullet) => {
  $bullet.addEventListener("click", () => {
    onChangeCrewMember($bullet);
  });
});
