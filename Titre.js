window.onload = function() {
  horloge();
  dateFr();
};

function horloge() {
  const clock = document.getElementById("horloge");
  var tt = new Date().toLocaleTimeString(); // date au format hh:mm:ss version AM/PM

  clock.innerHTML = tt;
  setTimeout(horloge, 1000); // mise à jour du contenu "timer" toutes les secondes. permet de ne pas avoir à rafraîchir la page.
}

function dateFr() {
  var jours = new Array(
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  );
  var mois = new Array(
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "decembre"
  );
  // on recupere la date
  var date = new Date();
  // on construit le message
  var message = jours[date.getDay()] + " "; // nom du jour
  message += date.getDate() + " "; // numero du jour
  message += mois[date.getMonth()] + " "; // mois
  message += date.getFullYear();
  document.getElementById("dateFr").innerHTML = message;
  return message;
}

dateFr();

var textWrapper = document.querySelector(".titrepagelarge .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ window: onload })
  .add({
    targets: ".titrepagelarge .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 * (i + 1)
  })
  .add({
    targets: ".titrepagelarge .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i)
  })
  .add({
    targets: ".titrepagelarge",
    opacity: 0,
    duration: true, //permet de maintenir le titre et de bloquer la boucle
    easing: "easeOutExpo",
    delay: 100
  });
