let effectStyle = document.querySelector('.strain-effect')
let info = document.querySelector('.effect-of-strain')
const button = document.getElementById('find-strain')
const effectInput = document.getElementById('effects')
const relaxed = document.getElementById('relaxed')
const happy = document.getElementById('happy')
const hungry = document.getElementById('hungry')
const sleepy = document.getElementById('sleepy')
const creative = document.getElementById('creative')
const pain = document.getElementById('pain')
let effectType;

button.addEventListener('click', function(event) {
  event.preventDefault()
  if (relaxed.checked) {
    effectType = 'relaxed';
  } else if (happy.checked) {
    effectType = 'happy'
  } else if (hungry.checked) {
    effectType = 'hungry'
  } else if (sleepy.checked) {
    effectType = 'sleepy'
  } else if (creative.checked) {
    effectType = 'creative'
  } else {
    effectType = 'pain'
  }

fetch(`http://strainapi.evanbusse.com/ywYjtym/strains/search/effect/${effectType}`)
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    console.log(results);
  let count = 0;
  let currRand;
  while (count < 15) {
    currRand = Math.floor(Math.random(0, results.length) * 100)
    console.log(results[currRand])
    count++;
  let strain = document.createElement('p')
    effectStyle.appendChild(strain)
    effectStyle.innerText += `${results[currRand].name}`
  };
});
});
