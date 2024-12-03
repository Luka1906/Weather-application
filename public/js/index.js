document.addEventListener("DOMContentLoaded", () => {
  const tempCel = document.querySelector(".temp-cel");
  const tempFar = document.querySelector(".temp-far");
  const farButton = document.querySelector(".far");
  const celButton = document.querySelector(".cel");
  console.log(farButton);

  farButton.addEventListener("click", () => {
    tempCel.classList.add("hidden");
    celButton.classList.remove("active");
    farButton.classList.add("active");
    tempFar.classList.remove("hidden");
  });

  celButton.addEventListener("click", () => {
    tempFar.classList.add("hidden");
    farButton.classList.remove("active");
    celButton.classList.add("active");
    tempCel.classList.remove("hidden");
  });
});
