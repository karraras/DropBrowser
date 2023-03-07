let parent = document.querySelector(".parent");
let img = document.querySelector("img");
let input = document.querySelector("input");

input.addEventListener("drop", () => {
  let readFile = new FileReader();
  readFile.readAsDataURL(input.files[0]);
  readFile.onload = function () {
    img.style.display = "block";
    img.src = readFile.result;
  };
});
