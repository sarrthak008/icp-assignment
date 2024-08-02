
let images = [
    {
        url: "images/image1.jpg",
        slogo: "Chart your course through the stars."
    },
    {
        url: "images/image2.jpg",
        slogo: "Unlock the secrets of the galaxy."
    },
    {
        url: "images/image3.jpg",
        slogo: "Explore the mysteries of the cosmos."
    },
    {
        url: "images/image4.jpg",
        slogo: "Connect with the universe’s grand design."
    },
    {
        url: "images/image5.jpg",
        slogo: "Journey through the infinite expanse of space."
    }

]


let imageNumber = 0

let image = document.querySelector("#image-box img")
let txt = document.querySelector("#text-info")
let time = document.querySelector("#time")


let imgIndex = 0

const loadImg = ()=>{
   
      if(imgIndex > images.length-1){
            imgIndex =0
      }else{
        imgIndex++
      }

image.src=`${images[imgIndex].url}`
txt.innerText=`${images[imgIndex].slogo}`
time.innerText=`0${imgIndex+1}`

}




setInterval(loadImg,5000)