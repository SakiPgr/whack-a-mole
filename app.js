const square = document.querySelectorAll('.square')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
let hitPosition = null

let timerId = setInterval(countDown, 1000)

function randomSquare () {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  const randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  // assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition) {
      result = result + 1
      score.textContent = result
    }
  })
})

function moveMole () {
  timerId = setInterval(randomSquare, 1000)
  // timerId = setInterval(randomSquare, 1000)
}

function countDown () {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime === 0) {
    clearInterval(timerId)
    alert('Game over! Your score is ' + result)
  }
}

moveMole()
