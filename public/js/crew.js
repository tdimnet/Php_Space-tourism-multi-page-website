const $bulletsCrew = document.querySelectorAll(".crew-page__bullet");

function onChangeCrewMember($selectedBullet) {
  $bulletsCrew.forEach(($bullet) => {
    $bullet.classList.remove("crew-page__bullet--active");
  });
  $selectedBullet.classList.add("crew-page__bullet--active");

  const selectedCrewMemberData = CREW_DATA[$selectedBullet.getAttribute('data-id')]

  const $crewMemberImg = document.querySelector('.crew-page__crew-member')
  const $crewMemberRole = document.querySelector('.crew-page__crew-role')
  const $crewMemberName = document.querySelector('.crew-page__member-name')
  const $crewMemberDescription = document.querySelector('.crew-page__member-description')

  $crewMemberImg.src = selectedCrewMemberData.img
  $crewMemberRole.textContent = selectedCrewMemberData.role
  $crewMemberName.textContent = selectedCrewMemberData.name
  $crewMemberDescription.textContent = selectedCrewMemberData.description
}

$bulletsCrew.forEach(($bullet) => {
  $bullet.addEventListener("click", () => {
    onChangeCrewMember($bullet);
  });
});
