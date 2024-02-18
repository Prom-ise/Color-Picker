const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  const redValue = Math.round(Math.random() * 215) + 80; 
  const red2Value = Math.round(Math.random() * 35); 
  const red3Value = Math.round(Math.random() * 35); 
  if (document.getElementById("redCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${redValue}, ${red2Value}, ${red3Value})`;
    show.innerHTML = redValue;
    showy.innerHTML = red2Value;
    shower.innerHTML = red3Value;
  }
  const greenValue = Math.round(Math.random() * 75); 
  const green2Value = Math.round(Math.random() * 215) + 80;
  const green3Value = Math.round(Math.random() * 75); 
  if (document.getElementById("greenCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${greenValue}, ${green2Value}, ${green3Value})`;
    show.innerHTML = greenValue;
    showy.innerHTML = green2Value;
    shower.innerHTML = green3Value; 
  }
  const blueValue = Math.round(Math.random() * 30); 
  const blue2Value = Math.round(Math.random() * 55); 
  const blue3Value = Math.round(Math.random() * 255) + 80;
  if (document.getElementById("blueCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${blueValue}, ${blue2Value}, ${blue3Value})`;
    show.innerHTML = blueValue;
    showy.innerHTML = blue2Value;
    shower.innerHTML = blue3Value; 
  }
  const yellowValue = Math.round(Math.random() * 255); 
  const yellow2Value = Math.round(Math.random() * 255); 
  const yellow3Value = Math.round(Math.random() * 0);
  if (document.getElementById("yellowCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${yellowValue}, ${yellow2Value}, ${yellow3Value})`;
    show.innerHTML = yellowValue;
    showy.innerHTML = yellow2Value;
    shower.innerHTML = yellow3Value; 
  }
});

let red = document.getElementsByClassName("red");
red.addEventListener("click", (e) =>  {
  const red1 = 255
  const red2 = 0
  const red3 = 0
  document.body.style.backgroundColor = `rgb(${red1}, ${red2}, ${red3})`
})

//const redValue = Math.round(Math.random() * 155) + 80; 
//button.style.backgroundColor = `rgb(${Math.round(Math.random() * 254) + 1}, ${
 // Math.round(Math.random() * 254) + 1
//}, ${Math.round(Math.random() * 254) + 1})`;
//document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`; 

// const input = document.getElementById("inp")
// input.addEventListener("keyup", (e)=> {
//     console.log(e.target.value);
//     result.innerHTML = e.target.value

// })
//  document.body.style.background-color;
//  body.addEventListener("click", ()=>{
//      Math.round(Math.random() * 254) + 1;
//  })
