const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

//initialize value
let load = 0

//run on intervals
let int = setInterval(blurring, 30)

function blurring() {
    load++
    //puts an end to the interval counting
    if (load > 99) {
        clearInterval(int)
    }
    //show the percentage as it counts up
    loadText.innerText = `${load}%`
    //need to map a range of numbers in order to have the number 
    //go from fully opaque to fade out
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }






// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// bg.onload () => {
//     setStyle('bg', blur);
// })


// var opacity = 0; 
//         var intervalID = 0; 
//         window.onload = fadeIn; 
  
//         function fadeIn() { 
//             setInterval(show, 200); 
//         } 
  
//         function show() { 
//             var body = document.getElementById("body"); 
//             opacity = Number(window.getComputedStyle(body) 
//                              .getPropertyValue("opacity")); 
//             if (opacity < 1) { 
//                 opacity = opacity + 0.1; 
//                 body.style.opacity = opacity 
//             } else { 
//                 clearInterval(intervalID); 
//             } 
//         } 