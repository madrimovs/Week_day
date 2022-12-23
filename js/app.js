const elForm = document.querySelector("#form"),
  elInput = document.querySelector("#input"),
  elWeek = document.querySelector("#week");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const num = Number(elInput.value);

  switch (num) {
    case 1:
      elWeek.textContent = "Dushanba";
      break;
    case 2:
      elWeek.textContent = "Seshanba";
      break;
    case 3:
      elWeek.textContent = "Chorshanba";
      break;
    case 4:
      elWeek.textContent = "Payshanba";
      break;
    case 5:
      elWeek.textContent = "Juma";
      break;
    case 6:
      elWeek.textContent = "Shanba";
      break;
    case 7:
      elWeek.textContent = "Yakshanba";
      break;
    default:
      elWeek.textContent = "Noto'g'ri qiymat kiritildi";
      break;
  }
  elInput.value = "";
});
