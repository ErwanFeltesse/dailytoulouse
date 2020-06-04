function deactivateTooltips() {
  var tooltips = document.querySelectorAll(".tooltip");

  var tooltipsLength = tooltips.length;

  console.log(tooltips);

  for (var i = 0; i < tooltipsLength; i++) {
    tooltips[i].style.display = "none";
  }
}

function getTooltip(elements) {
  while ((elements = elements.nextSibling)) {
    if (elements.className === "tooltip") {
      return elements;
    }
  }

  return false;
}

var check = {};

check["name"] = function(id) {
  var name = document.getElementById(id);

  var tooltipStyle = getTooltip(name).style;

  if (name.value.length >= 3) {
    name.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    name.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};

check["email"] = function(id) {
  var email = document.getElementById(id);

  var tooltipStyle = getTooltip(email).style;

  if (email.value.length >= 10) {
    email.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    email.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};

check["votreMessage"] = function(id) {
  var votreMessage = document.getElementById(id);

  var tooltipStyle = getTooltip(votreMessage).style;

  if (votreMessage.value.length >= 10) {
    votreMessage.className = "correct";
    tooltipStyle.display = "none";
    return true;
  } else {
    votreMessage.className = "incorrect";
    tooltipStyle.display = "inline-block";
    return false;
  }
};

(function() {
  var myForm = document.getElementById("myForm"),
    inputs = document.querySelectorAll("input[type=text]"),
    inputsLength = inputs.length;

  for (var i = 0; i < inputsLength; i++) {
    inputs[i].addEventListener("keyup", function(e) {
      check[e.target.id](e.target.id);
    });
  }

  myForm.addEventListener("submit", function(e) {
    var result = true;

    for (var i in check) {
      result = check[i](i) && result;
    }

    if (result) {
      alert(
        "Nous avons bien reçu votre message, nous reviendrons vers vous dès que possible."
      );
      document.getElementById("myForm").reset();
    }

    e.preventDefault();
  });
})();

deactivateTooltips();
