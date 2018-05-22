var randomIndex = Math.floor(Math.random()*phrases.length)
var randomPhrase = phrases[randomIndex];

document.getElementById('phrase').textContent = randomPhrase['phrase'];
if (randomPhrase.hasOwnProperty('signature')) {
    document.getElementById('signature').textContent = randomPhrase['signature'];
}
