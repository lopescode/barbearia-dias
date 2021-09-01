
const thumbBar = document.querySelector('.apresentacao__portfolio__thumbbar');

/* Looping through images */

for(let i = 1; i <= 4; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'assets/pin' + i + '.jpg');
  thumbBar.appendChild(newImage);
}
