const $planets = document.querySelectorAll(".destination-page__planet");

function onChangePlanet($selectedPlanet) {
  $planets.forEach(($planet) =>
    $planet.classList.remove("destination-page__planet--active")
  );
  $selectedPlanet.classList.add("destination-page__planet--active");

  const selectedPlanetData = PLANETS_DATA[$selectedPlanet.textContent.toLowerCase()]

  const $planetImg = document.querySelector('.destination-page__planet-image')
  const $planetName = document.querySelector('.destination-page__planet-name')
  const $planetDescription = document.querySelector('.destination-page__planet-description')
  const $planetAvgDistance = document.querySelector('.destination-page__avg-distance-value')
  const $planetTravelTime = document.querySelector('.destination-page__travel-time-value')

  $planetImg.src = selectedPlanetData.img
  $planetName.textContent = selectedPlanetData.name
  $planetDescription.textContent = selectedPlanetData.description
  $planetAvgDistance.textContent = selectedPlanetData.avgDistance
  $planetTravelTime.textContent = selectedPlanetData.travelTime
}

$planets.forEach(($planet) => {
  $planet.addEventListener("click", () => {
    onChangePlanet($planet);
  });
});
