$(document).ready(function () {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: ".slider-nav"
    });
  
    $(".slider-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      focusOnSelect: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 5
          }
        }
      ]
    });
  });
  const span = document.getElementsByClassName("b1");
        const image = document.getElementById("image");
        for(let i of span){
            i.addEventListener("click", (e)=>{
                const id = e.target.id
                if(id === "green"){image.style.filter = "hue-rotate(120deg)"}
                else if(id === "blue"){image.style.filter = "hue-rotate(360deg)"}
                else{image.style.filter = "hue-rotate(220deg)"}

            })
        };
        const b2 = document.getElementsByClassName("b2");
        const imagee = document.getElementById("image2");
        for(let i of b2){
            i.addEventListener("click", (e)=>{
                const id = e.target.id
                if(id === "green2"){imagee.style.filter = "hue-rotate(120deg)"}
                else if(id === "blue2"){imagee.style.filter = "hue-rotate(360deg)"}
                else{imagee.style.filter = "hue-rotate(250deg)"}

            })
        }
        const b3 = document.getElementsByClassName("b3");
        const imageee = document.getElementById("image3");
        for(let i of b3){
            i.addEventListener("click", (e)=>{
                const id = e.target.id
                if(id === "green3"){imageee.style.filter = "hue-rotate(200deg)"}
                else if(id === "blue3"){imageee.style.filter = "hue-rotate(360deg)"}
                else{imageee.style.filter = "hue-rotate(90deg)"}

            })
        }
let play = document.getElementById("play");
function playMusic(){
  let audio = new Audio("audio.mp3");
  audio.play()
}
play.addEventListener("click", playMusic);