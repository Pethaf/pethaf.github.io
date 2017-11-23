import '../css/main.scss';
require("font-awesome-webpack");

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".fa-bars").addEventListener("click",() => {
    ["#fcc","#github","#codepen"].forEach( (elem) => {document.querySelector(elem).classList.toggle("show")});
  })
})
