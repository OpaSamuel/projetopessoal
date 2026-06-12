// Variables
let mobile_media_query = window.matchMedia("(max-width: 400px)");

let tablet_media_query = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);

const notes = document.querySelectorAll(".js-note");


// Reseta cartas
function resize_notes() {

  for (let i = 0; i < notes.length; i++) {

    if (notes[i].classList.contains("active")) {

      notes[i].classList.remove("active");

      gsap.set(notes[i], {
        height: "30%",
        y: "0%",
        clearProps: "all"
      });

    }

  }

}



// Faz as cartas subirem ao clicar
function open_notes() {

  notes.forEach((note) => {


    note.addEventListener("click", function(){


      // fecha todas
      notes.forEach((n)=>{

        if(n !== this){
          n.classList.remove("active");
        }

      });


      // abre a clicada
      this.classList.toggle("active");


    });


  });

}


// Ativa as notas depois que abre
function notes_ready(){

  gsap.to(".js-envelop-content", {
    height:"110%",
    duration:0.5
  });


  open_notes();

}


// Abre a aba do envelope
function set_up_paper() {


  gsap.set(".js-up-paper", {

    bottom: "97%",
    rotation: 180,
    zIndex: 200,

    clipPath:
      "polygon(0% 0%,100% 0%,50% 61%)",

    onComplete: notes_ready

  });


}



// Anima abertura
function envelop_transition() {


  gsap.to(".js-up-paper", {

    bottom: "1%",
    duration: 0.25,

    onComplete: set_up_paper

  });


  document
  .querySelector(".js-up-paper")
  .removeEventListener(
    "click",
    envelop_transition
  );


}



// Corta adesivo
function sticker() {


  gsap.set(".js-sticker", {

    width: "20%",
    left: "-80%"

  });


  document.body.classList.remove("scissors");


  document
  .querySelector(".js-up-paper")
  .addEventListener(
    "click",
    envelop_transition
  );


  document
  .querySelector(".js-up-paper")
  .classList.add("cursor");


}



// inicia
window.addEventListener("load", () => {


  document
  .querySelector(".js-sticker")
  .addEventListener(
    "click",
    sticker
  );


});



// redimensionamento
window.onresize = function () {

  resize_notes();

};