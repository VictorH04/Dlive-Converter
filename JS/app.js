// Get inputs
const inputLemon = document.getElementById("inputLemon");
const inputUSD = document.getElementById("inputUSD");
const inputForm = document.getElementById("inputForm");

// Get buttons
const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");
const clearBtn = document.getElementById("clearBtn");

// Modal
const aboutBtn = document.getElementById("about");
const modalBackground = document.querySelector(".about-modal__background");
const close = document.querySelector(".about-modal__close");

// ! Event listeners
inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputLemon.addEventListener("click", function (event) {
  console.log(event.target);
});

inputUSD.addEventListener("click", function (event) {
  console.log(event.target);
});

switchBtn.addEventListener("click", function (event) {
  switchInputs();
  cleanFields();
});

convertBtn.addEventListener("click", function () {
  if (inputLemon.value === "" && inputUSD.value === "") {
    alert("Please enter a value!");
  } else {
    callBoth();
  }
});

clearBtn.addEventListener("click", function () {
  let clearLemonInput = (document.getElementById("inputLemon").value = "");
  let clearUsdInput = (document.getElementById("inputUSD").value = "");
});

// ! Modal
aboutBtn.addEventListener("click", function () {
  modalBackground.style.display = "flex";

  modalBackground.animate([{ opacity: ".1" }, { opacity: "1" }], {
    duration: 200,
    // fill: 'forwards',
    easing: "ease-in",
  });
});

close.addEventListener("click", function () {
  modalBackground.style.display = "none";

  modalBackground.animate([{ opacity: "1" }, { opacity: ".1" }], {
    duration: 200,
    // fill: 'forwards',
    easing: "ease-out",
  });
});

// ! ================================================================

// ! Other things

let inputParent = document.getElementById("inputParent");
let usdContainer = document.getElementById("inputUSD");
let lemonContainer = document.getElementById("inputLemon");

lemonContainer = `<input class="grid_container__maincontent--inputFields-fields" type="text" name="Lemons"
placeholder="🍋" id="inputLemon">`;

usdContainer = `<input class="grid_container__maincontent--inputFields-fields" type="text" name="USD"
placeholder="USD" id="inputUSD">`;

// ! ================================================================

// ! Functions

function cleanFields() {
  inputUSD.value = "";
  inputLemon.value = "";
}

function multiplyLemon() {
  let toValue = inputLemon.value * 0.012;

  if (inputLemon.value < 80) {
    inputUSD.value = `${toValue.toFixed(3)} ¢`;
  } else {
    inputUSD.value = `${toValue.toFixed(1)} 💲`;
  }

  // console.log(inputUSD);
}

function usdMultiply() {
  let toValue = inputUSD.value / 0.012;

  inputLemon.value = toValue;

  if (inputUSD.value < 80) {
    inputLemon.value = `${toValue.toFixed(1)} 🍋`;
  } else {
    inputLemon.value = `${toValue.toFixed(1)} 🍋`;
  }

  console.log(toValue);
}

let usdBefore;
let lemonAfter;
usdBefore = inputParent.insertAdjacentElement("afterbegin", usd);
lemonAfter = inputParent.insertAdjacentElement("beforeend", lemon);

function switchInputs() {
  let usd = inputParent.children[2];
  let lemon = inputParent.children[0];

  usdBefore = inputParent.insertAdjacentElement("afterbegin", usd);
  lemonAfter = inputParent.insertAdjacentElement("beforeend", lemon);
}

function callBoth() {
  if ((lemonAfter = true) && (usdBefore = true)) {
    multiplyLemon();
  } else {
    usdMultiply();
  }
}

// ! ================================================================
