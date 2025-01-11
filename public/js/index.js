document.addEventListener("DOMContentLoaded", () => {
  const tempCel = document.querySelector(".temp-cel");
  const tempFar = document.querySelector(".temp-far");
  const windKm = document.querySelector(".wind-km");
  const windMph = document.querySelector(".wind-mph");
  const visKm = document.querySelector(".vis-km");
  const visMi = document.querySelector(".vis-mi");
  const feelsCel = document.querySelector(".feels-cel");
  const feelsFa = document.querySelector(".feels-fa");

  const maxCel = document.querySelectorAll(".max-cel");
  const minCel = document.querySelectorAll(".min-cel");
  const maxFar = document.querySelectorAll(".max-far");
  const minFar = document.querySelectorAll(".min-far");
  const farButton = document.querySelector(".far");
  const celButton = document.querySelector(".cel");

  farButton.addEventListener("click", () => {
    tempCel.classList.add("hidden");
    feelsCel.classList.add("hidden");
    windKm.classList.add("hidden");
    visKm.classList.add("hidden");
    maxCel.forEach((el) => el.classList.add("hidden"));
    minCel.forEach((el) => el.classList.add("hidden"));

    celButton.classList.remove("active");
    farButton.classList.add("active");
    tempFar.classList.remove("hidden");
    feelsFa.classList.remove("hidden");
    windMph.classList.remove("hidden");
    visMi.classList.remove("hidden");
    maxFar.forEach((el) => el.classList.remove("hidden"));
    minFar.forEach((el) => el.classList.remove("hidden"));
  });

  celButton.addEventListener("click", () => {
    tempFar.classList.add("hidden");
    feelsFa.classList.add("hidden");
    windMph.classList.add("hidden");
    visMi.classList.add("hidden");
    maxFar.forEach((el) => el.classList.add("hidden"));
    minFar.forEach((el) => el.classList.add("hidden"));

    farButton.classList.remove("active");
    celButton.classList.add("active");
    tempCel.classList.remove("hidden");
    feelsCel.classList.remove("hidden");
    windKm.classList.remove("hidden");
    visKm.classList.remove("hidden");
    maxCel.forEach((el) => el.classList.remove("hidden"));
    minCel.forEach((el) => el.classList.remove("hidden"));
  });
});
