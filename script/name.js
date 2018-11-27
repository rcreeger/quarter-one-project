let strainName = document.querySelector('.strain-name')
let info = document.querySelector('.name-of-strain')
const button = document.getElementById('find-strain')
const nameInput = document.getElementById('strainName')
const p = document.getElementById('p')
const strainArr = [];

button.addEventListener('click', function(event) {
  event.preventDefault()
  console.log(nameInput.value.trim().replace(/\s+/g,'%20'))
fetch(`http://strainapi.evanbusse.com/ywYjtym/strains/search/name/${nameInput.value.trim().replace(/\s+/g,'%20')}`)
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    console.log(results)
    strainArr.push(results)
    for(let i = 0; i < results.length; i++){
      console.log(results[i])
      // for (let i = 0; i < ; i++){
      let strain = document.createElement('p')
      strainName.appendChild(strain)
        strainName.innerText += `${results[i].name}`
      // }

  };
});
})
