const myElement = document.getElementById("fighter-bio");
myElement.style.color = "green";

const myText = document.querySelector("#weight-class");
myText.style.color = "red";

const myFooter = document.createElement("footer");
console.log(myFooter);

const small = document.createElement("small");
console.log(small);

small.innerText =
  "Copyright © 2023 Fight Statistics Archives. All Rights Reserved.";
console.log(small);

const body = document.getElementById("body");
console.log(body);
let weightclass = document.querySelectorAll('#weight-class');
console.log(weightclass[0])

for (let i = 0; i < weightclass.length; i++){
  weightclass[0].style.color ="blue"
}

body.appendChild(myFooter);
myFooter.appendChild(small);

const button = document.getElementById("alert");
console.log(button);


button.addEventListener("click", (e)=>{
  e.preventDefault()
  alert("Ali");
})


const frag = document.createDocumentFragment();
const groupA = document.createElement("button"); 
groupA.innerHTML = `
<button > HOLY MOLY</button>`;
frag.append(groupA);
body.appendChild(frag)

groupA.addEventListener("click", ()=>{
  alert("HOLY MOLY")
})

let newFooterText = myFooter.firstChild.innerText + "@CiscoImages"
myFooter.innerText =  newFooterText

const form = document.querySelector(".form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
const userName = document.querySelector("#fname")
const fighterChoice = document.querySelector("#fighter-choice")
const videoMessage = document.querySelector(".heresYourVideo")
const video = document.querySelector(".video")


  console.log(userName.value)
  videoMessage.style.color = "white"
  videoMessage.innerText = `Here is your video, ${userName.value}`
  console.log(fighterChoice.value)
if (fighterChoice.value == "Tyson"){
    video.innerHTML = `<iframe width="420" height="345" src="https://www.youtube.com/embed/OlNF4lmD8R8">
    </iframe> -->`
} else if (fighterChoice.value == "Ali" ){
    video.innerHTML = `<iframe width="420" height="345" src="https://www.youtube.com/embed/_ybnXgMMb5g">
    </iframe> -->`
    
} else if (fighterChoice.value == "Holmes"){
    video.innerHTML = `<iframe width="420" height="345" src="https://www.youtube.com/embed/LNNjHbe75Gw">
    </iframe> -->`
} else if (fighterChoice.value == "Lewis" ){
    video.innerHTML = `<iframe width="420" height="345" src="https://www.youtube.com/embed/wkrRv0un7vk">
    </iframe> -->`
}
});


