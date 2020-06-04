//quand je clique sur un onglet du menu
//tout les article qui on le dat attribute correspondant apparaissent
//tout les article qui n'ont pas le data attribute disparaissent

//Flitre partie société

let societe = document.getElementById("titreSociete");
societe.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-big-category=Société]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let economie = document.getElementById("sous-titre-economie");
economie.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Economie]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let education = document.getElementById("sous-titre-education");
education.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Education]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let sante = document.getElementById("sous-titre-sante");
sante.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Santé]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let justice = document.getElementById("sous-titre-justice");
justice.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Justice]");
  onscreen.forEach(item => (item.style.display = "block"));
});

//Flitre partie sport

let sport = document.getElementById("titreSport");
sport.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-big-category=Sport]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let rugby = document.getElementById("sous-titre-rugby");
rugby.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Rugby]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let football = document.getElementById("sous-titre-football");
football.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Football]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let sportOutdoor = document.getElementById("sous-titre-sport-outdoor");
sportOutdoor.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Sport-Outdoor]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let sportUrbain = document.getElementById("sous-titre-sport-urbain");
sportUrbain.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Sport-Urbain]");
  onscreen.forEach(item => (item.style.display = "block"));
});
//Flitre partie lifestyle

let lifestyle = document.getElementById("titreLifestyle");
lifestyle.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-big-category=Lifestyle]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let gastronomie = document.getElementById("sous-titre-gastronomie");
gastronomie.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Gastronomie]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let representationCulurel = document.getElementById(
  "sous-titre-representation-culturel"
);
representationCulurel.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll(
    "[data-sub-category=Representation-culturel]"
  );
  onscreen.forEach(item => (item.style.display = "block"));
});

let mode = document.getElementById("sous-titre-mode");
mode.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Mode]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let evenement = document.getElementById("sous-titre-evenement");
evenement.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Evenement]");
  onscreen.forEach(item => (item.style.display = "block"));
});

//Filtre partie voyage

let voyage = document.getElementById("titreVoyage");
voyage.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-big-category=Voyage]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let bonPlanEurope = document.getElementById("sous-titre-bon-plan-europe");
bonPlanEurope.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll(
    "[data-sub-category=Bon-plan-Europe]"
  );
  onscreen.forEach(item => (item.style.display = "block"));
});

let bonPlanAmerique = document.getElementById("sous-titre-bon-plan-amerique");
bonPlanAmerique.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll(
    "[data-sub-category=Bon-plan-Amerique]"
  );
  onscreen.forEach(item => (item.style.display = "block"));
});

let bonPlanAsie = document.getElementById("sous-titre-bon-plan-asie");
bonPlanAsie.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll("[data-sub-category=Bon-plan-Asie]");
  onscreen.forEach(item => (item.style.display = "block"));
});

let bonPlanAfrique = document.getElementById("sous-titre-bon-plan-afrique");
bonPlanAfrique.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll(
    "[data-sub-category=Bon-plan-Afrique]"
  );
  onscreen.forEach(item => (item.style.display = "block"));
});

let bonPlanOceanie = document.getElementById("sous-titre-bon-plan-oceanie");
bonPlanOceanie.addEventListener("click", () => {
  let offscreen = document.querySelectorAll(".articleLink");
  offscreen.forEach(item => (item.style.display = "none"));
  let onscreen = document.querySelectorAll(
    "[data-sub-category=Bon-plan-Oceanie]"
  );
  onscreen.forEach(item => (item.style.display = "block"));
});
