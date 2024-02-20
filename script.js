// this is the js for tootlip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const optionsContainer = document.getElementById('optionsContainer');

// Add event listener to the parent container of all checkboxes
optionsContainer.addEventListener('change', function(event) {
    // Check if the changed element is an input element of type checkbox
    if (event.target.type === 'radio') {
        // Hide all tooltips
        tooltipList.forEach(tooltip => tooltip.hide());
    }
});

const show = document.getElementById('show');
const showy = document.getElementById('showy');
const shower = document.getElementById('shower');

// this is where I set the initial background color 😊
const backRand1 = Math.round(Math.random() * 254) + 1
const backRand2 = Math.round(Math.random() * 254) + 1
const backRand3 = Math.round(Math.random() * 254) + 1
document.body.style.backgroundColor = `rgb(${backRand1}, ${backRand2}, ${backRand3})`;
show.innerHTML = backRand1
showy.innerHTML = backRand2
shower.innerHTML = backRand3

function updateColor() {
  let red = parseInt(show.textContent);
  let green = parseInt(showy.textContent);
  let blue = parseInt(shower.textContent);

  // Clamp the values to ensure they are within the range [0, 255]
  red = Math.min(Math.max(red, 0), 255);
  green = Math.min(Math.max(green, 0), 255);
  blue = Math.min(Math.max(blue, 0), 255);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  show.innerHTML = red;
  showy.innerHTML = green;
  shower.innerHTML = blue;
}


// Event listeners to update the RGB values and the background color when content is edited
show.addEventListener('input', function() {
    updateColor();
});

showy.addEventListener('input', function() {
    updateColor();
});

shower.addEventListener('input', function() {
    updateColor();
});

// Initial update of the background color and displayed RGB values
updateColor();

show.value = backRand1;
showy.value = backRand2;
shower.value = backRand3;

const button = document.getElementById("button");

//the js code for the changing of colours
button.addEventListener("click", (e) => {
  //random color changing
  const randomValue = Math.round(Math.random() * 255) 
  const random2Value = Math.round(Math.random() * 255); 
  const random3Value = Math.round(Math.random() * 255); 
  if (document.getElementById("randomCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${randomValue}, ${random2Value}, ${random3Value})`;
    show.innerHTML = randomValue;
    showy.innerHTML = random2Value;
    shower.innerHTML = random3Value;
  }
  //changing to different shades of RED
  const redValue = Math.round(Math.random() * 220) + 80; 
  const red2Value = Math.round(Math.random() * 35); 
  const red3Value = Math.round(Math.random() * 35); 
  if (document.getElementById("redCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${redValue}, ${red2Value}, ${red3Value})`;
    show.innerHTML = redValue;
    showy.innerHTML = red2Value;
    shower.innerHTML = red3Value;
  }
  
  //changing to different shades of GREEN
  const greenValue = Math.round(Math.random() * 75); 
  const green2Value = Math.round(Math.random() * 255);
  const green3Value = Math.round(Math.random() * 75); 
  if (document.getElementById("greenCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${greenValue}, ${green2Value}, ${green3Value})`;
    show.innerHTML = greenValue;
    showy.innerHTML = green2Value;
    shower.innerHTML = green3Value; 
  }
  //changing to different shades of BLUE
  const blueValue = Math.round(Math.random() * 30); 
  const blue2Value = Math.round(Math.random() * 55); 
  const blue3Value = Math.round(Math.random() * 255) + 80;
  if (document.getElementById("blueCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${blueValue}, ${blue2Value}, ${blue3Value})`;
    show.innerHTML = blueValue;
    showy.innerHTML = blue2Value;
    shower.innerHTML = blue3Value; 
  }
  //changing to different shades of YELLOW
  const yellowValue = 255; 
  const yellow2Value = 255; 
  const yellow3Value = Math.round(Math.random() * 240);
  if (document.getElementById("yellowCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${yellowValue}, ${yellow2Value}, ${yellow3Value})`;
    show.innerHTML = yellowValue;
    showy.innerHTML = yellow2Value;
    shower.innerHTML = yellow3Value; 
  }
  //changing to different shades of PINK
  const pinkValue = 255; 
  const pink2Value = Math.round(Math.random() * 200);
  const pink3Value = 235;
  if (document.getElementById("pinkCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${pinkValue}, ${pink2Value}, ${pink3Value})`;
    show.innerHTML = pinkValue;
    showy.innerHTML = pink2Value;
    shower.innerHTML = pink3Value; 
  }
  //changing to different shades of BLACK
  const blackValue = Math.round(Math.random() * 129);
  if (document.getElementById("blackCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${blackValue}, ${blackValue}, ${blackValue})`;
    show.innerHTML = blackValue;
    showy.innerHTML = blackValue;
    shower.innerHTML = blackValue;
   
  }
  //changing to different shades of WHITE
  const whiteValue = Math.round(Math.random() * (255 - 220) + 220)
  if (document.getElementById("whiteCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${whiteValue}, ${whiteValue}, ${whiteValue})`;
    show.innerHTML = whiteValue;
    showy.innerHTML = whiteValue;
    shower.innerHTML = whiteValue; 
  }
  //changing to different shades of PURPLE
  const purpleValue = Math.round(Math.random() * 200); 
  const purple2Value = 0;
  if (document.getElementById("purpleCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${purpleValue}, ${purple2Value}, ${purpleValue})`;
    show.innerHTML = purpleValue;
    showy.innerHTML = purple2Value;
    shower.innerHTML = purpleValue; 
  }
  //changing to different shades of ORANGE
  const orangeValue = Math.round(Math.random() * 125) + 40; 
  const orange2Value = Math.round(Math.random() * 165) + 70;
  const orange3Value = 0;
  if (document.getElementById("orangeCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${orange2Value}, ${orangeValue}, ${orange3Value})`;
    show.innerHTML = orangeValue;
     showy.innerHTML = orange2Value;
    shower.innerHTML = orange3Value; 
  }
  //changing to different shades of BROWN
  const brownValue = Math.round(Math.random() * 19) + 120; 
  const brown2Value = 69;
  const brown3Value = Math.round(Math.random() * 19);
  if (document.getElementById("brownCheckbox").checked) {
    document.body.style.backgroundColor = `rgb(${brownValue}, ${brown2Value}, ${brown3Value})`;
    show.innerHTML = brownValue;
    showy.innerHTML = brown2Value;
    shower.innerHTML = brown3Value; 
  }
});


// JS Code for displaying the colors of each checked
//CASUAL
const randomCheckbox = document.getElementById("randomCheckbox")
randomCheckbox.addEventListener("click", (e) =>{
  const rand1 = Math.round(Math.random() * 255); 
  const rand2 = Math.round(Math.random() * 255); 
  const rand3 = Math.round(Math.random() * 255); 
  document.body.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
  show.innerHTML = rand1
  showy.innerHTML = rand2
  shower.innerHTML = rand3
  appear.innerHTML = `<span class="text-light fw-bold">COLORS</span>`
  
})

//RED
const redCheckbox = document.getElementById("redCheckbox")
redCheckbox.addEventListener("click", (e) => {
  const red1 = 255;
  const red2 = 0;
  const red3 = 0;
  document.body.style.backgroundColor = `rgb(${red1}, ${red2}, ${red3})`;
  show.innerHTML = red1
  showy.innerHTML = red2
  shower.innerHTML = red3
  appear.innerHTML = `<span class="coloRed">Red</span>`
  document.body.style.color = `white`
});

//GREEN
const greenCheckbox = document.getElementById("greenCheckbox")
greenCheckbox.addEventListener("click", (e) => {
  const green1 = 0;
  const green2 = 255;
  const green3 = 0;
  document.body.style.backgroundColor = `rgb(${green1}, ${green2}, ${green3})`;
  show.innerHTML = green1
  showy.innerHTML = green2
  shower.innerHTML = green3
  appear.innerHTML = `<span class="colorGreen">Green</span>`
  document.body.style.color = `black`
});

//BLUE
const blueCheckbox = document.getElementById("blueCheckbox")
blueCheckbox.addEventListener("click", (e) => {
  const blue1 = 0;
  const blue2 = 0;
  const blue3 = 255;
  document.body.style.backgroundColor = `rgb(${blue1}, ${blue2}, ${blue3})`;
  show.innerHTML = blue1
  showy.innerHTML = blue2
  shower.innerHTML = blue3
  appear.innerHTML = `<span class="colorBlue">Blue</span>`
  document.body.style.color = `white`
});

//YELLOW
const yellowCheckbox = document.getElementById("yellowCheckbox")
yellowCheckbox.addEventListener("click", (e) => {
  const yellow1 = 255;
  const yellow2 = 255;
  const yellow3 = 0;
  document.body.style.backgroundColor = `rgb(${yellow1}, ${yellow2}, ${yellow3})`;
  show.innerHTML = yellow1
  showy.innerHTML = yellow2
  shower.innerHTML = yellow3
  appear.innerHTML = `<span class="colorYellow">Yellow</span>`
  document.body.style.color = `black`
});

//PINK
const pinkCheckbox = document.getElementById("pinkCheckbox")
pinkCheckbox.addEventListener("click", (e) => {
  const pink1 = 255;
  const pink2 = 100;
  const pink3 = 255;
  document.body.style.backgroundColor = `rgb(${pink1}, ${pink2}, ${pink3})`;
  show.innerHTML = pink1
  showy.innerHTML = pink2
  shower.innerHTML = pink3
  appear.innerHTML = `<span class="colorPink">Pink</span>`
  document.body.style.color = `black`
});

//BLACK
const blackCheckbox = document.getElementById("blackCheckbox")
blackCheckbox.addEventListener("click", (e) => {
  const black1 = 0;
  const black2 = 0;
  const black3 = 0;
  document.body.style.backgroundColor = `rgb(${black1}, ${black2}, ${black3})`;
  show.innerHTML = black1
  showy.innerHTML = black2
  shower.innerHTML = black3
  appear.innerHTML = `<span class="colorBlack">Black</span>`
  document.body.style.color = `white` 
});

//WHITE
const whiteCheckbox = document.getElementById("whiteCheckbox")
whiteCheckbox.addEventListener("click", (e) => {
  const white1 = 255;
  const white2 = 255;
  const white3 = 255;
  document.body.style.backgroundColor = `rgb(${white1}, ${white2}, ${white3})`;
  show.innerHTML = white1
  showy.innerHTML = white2
  shower.innerHTML = white3
  appear.innerHTML = `<span class="colorWhite">White</span>`
  document.body.style.color = `black`
});

//PURPLE
const purpleCheckbox = document.getElementById("purpleCheckbox")
  purpleCheckbox.addEventListener("click", (e) => {
  const purple1 = 128;
  const purple2 = 0;
  const purple3 = 128;
  document.body.style.backgroundColor = `rgb(${purple1}, ${purple2}, ${purple3})`;
  show.innerHTML = purple1
  showy.innerHTML = purple2
  shower.innerHTML = purple3
  appear.innerHTML = `<span class="colorPurple">Purple</span>`
  document.body.style.color = `white`
});

//ORANGE
const orangeCheckbox = document.getElementById("orangeCheckbox")
  orangeCheckbox.addEventListener("click", (e) => {
  const orange1 = 255;
  const orange2 = 165;
  const orange3 = 0;
  document.body.style.backgroundColor = `rgb(${orange1}, ${orange2}, ${orange3})`;
  show.innerHTML = orange1
  showy.innerHTML = orange2
  shower.innerHTML = orange3
  appear.innerHTML = `<span class="colorOrange">Orange</span>`
  document.body.style.color = `black`
});

//BROWN
const brownCheckbox = document.getElementById("brownCheckbox")
  brownCheckbox.addEventListener("click", (e) => {
  const brown1 = 139;
  const brown2 = 69;
  const brown3 = 19;
  document.body.style.backgroundColor = `rgb(${brown1}, ${brown2}, ${brown3})`;
  show.innerHTML = brown1
  showy.innerHTML = brown2
  shower.innerHTML = brown3
  appear.innerHTML = `<span class="colorBrown">Brown</span>`
  document.body.style.color = `black`
});

function copyToClipboard(text) {
  // Create a temporary input element
  const input = document.createElement('textarea');
  // Set its value to the text to be copied
  input.value = text;
  // Append the input element to the document
  document.body.appendChild(input);
  // Select the text inside the input element
  input.select();
  // Execute the copy command
  document.execCommand('copy');
  // Remove the temporary input element
  document.body.removeChild(input);
}
// Add event listener to the button
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', function() {
  // Call the copyToClipboard function with the desired text
  copyToClipboard(`rgb(${show.textContent}, ${showy.textContent}, ${shower.textContent})`);

  
  // Optionally, provide feedback to the user
  copy.style.display = 'block'
  setTimeout(() => {
    copy.style.display = 'none';
}, 3000); 
})