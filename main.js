const buttons = document.querySelectorAll('.color')
const colors = ['#fc5', '#5cf', '#5c5', '#e41', '#d6f']

const changeColor = (index) => {
  document.body.style.background = colors[index]
  buttons.forEach((btn) => {
    btn.classList.remove('active')
  })
  buttons[index].classList.add('active')
}

buttons.forEach((btn, index) => {
  btn.style.background = colors[index]
  
  btn.addEventListener('click', (e) => {
    changeColor(index)
    console.log(e)
  })
})
buttons[0].classList.add('active')