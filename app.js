const myElement = document.getElementById("fighter-bio");
myElement.style.color = "green";

const myText = document.querySelector("#weight-class");
myText.style.color = "red";

const myFooter = document.createElement("footer")
console.log(myFooter)

const small = document.createElement("small")
console.log(small)

small.innerText = "Copyright © 2023 Fight Statistics Archives. All Rights Reserved."
console.log(small)

const body = document.getElementById("body");
console.log(body)

body.appendChild(myFooter)
myFooter.appendChild(small)