let strainStyle = document.querySelector('.strain-style')
let info = document.querySelector('.style-of-strain')
const button = document.getElementById('find-strain')
const raceInput = document.getElementById('race-of-strain')
const indica = document.getElementById('indica')
const sativa = document.getElementById('sativa')
const hybrid = document.getElementById('hybrid')
let strainType;

button.addEventListener('click', function(event) {
  event.preventDefault()
  if (indica.checked) {
    strainType = 'indica';
  } else if (sativa.checked) {
    strainType = 'sativa'
  } else {
    strainType = 'hybrid'
  }

fetch(`http://strainapi.evanbusse.com/ywYjtym/strains/search/race/${strainType}`)
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    // console.log(results)
  let count = 0;
  let currRand;
  while (count < 15) {
    currRand = Math.floor(Math.random(0, results.length) * 100)
    console.log(results[currRand])
    count++;
  let strain = document.createElement('p')
    strainStyle.appendChild(strain)
    strainStyle.innerText += `${results[currRand].name}`

    };
  });
});
