console.log(analogies);
var numCase = 0;

//envoyer les données depuis data.js vers le index.html
analogies.forEach(function afficherAnalogie(analogie)  {
  
    
    console.log("<section><h2>Si j’étais " + analogie + ", je serais [une valeur de l’analogie].</h2></section>"),
    document.querySelector(".liste-analogies").innerHTML = document.querySelector(".liste-analogies").innerHTML + "<section class= " + pito[numCase] + " ><h2>Si j’étais " + analogie + ", je serais " + valeurAnalogie[numCase] + " <br>" + ex[numCase] + ".</h2><img src='images/" + ima[numCase] + "' alt=''></section><div id='divider'></div>";
    
    
    numCase++
   console.log(numCase); 
   console.log(pito); 
});

//effet au debut de la page

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Mon Portrait Chinois","Alexandre Rodriguez","MMI Champs-Sur-Marne"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

//modifier las souris

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const cursor = document.querySelector(".cursor2");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

//changer l'animation de chargement de la page
var loader = document.querySelector(".loader");
window.addEventListener("load", function(){
loader.style.display = "none";


});

//le popup de mentions legales

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Formulaire fait avec Hiba Haouari

var button = document.querySelector('#envoi');
  
 button.addEventListener('click', ()=>{

   const ana = document.querySelector('#analogie').value;
   const valana = document.querySelector('#valeurAnalogie').value;
   const just = document.querySelector('#justificationAnalogie').value;


   const anavis = document.createElement('h1');
   anavis.textContent = "si j'etais "+ana+" je serais "+valana;
   var visuel = document.querySelector('#visual')
   visual.appendChild(anavis);
   
   const justif = document.createElement('p');
   justif.textContent = just ;
   visual.appendChild(justif);


   var image = form.querySelector("input[type='file']");

   if (image.files && image.files[0]) {
    var img = document.createElement("img");
    img.src = URL.createObjectURL(image.files[0]);
    visual.appendChild(img);
  }
   
 });

 //pour envoyer les données sur le mail de monsieur Gambette ça va etre un peu complique car je n'etais pas la, je sais vraiment pas la procedure.

 var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=philippe.gambette@u-pem.fr&message="
 var data = analogie + valeurAnalogie
 button.addEventListener("click", function(e){
    fetch(urlVisitee).then(function(response) {
        response.json().then(function(data){
            console.log("Réponse reçue : ")
            console.log(data);
        })
      })
    })