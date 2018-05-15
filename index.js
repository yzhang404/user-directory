const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.name.value
  const age = f.age.value
  const favoriteColor = f.favoritecolor.value
  //create an empty paragraph
  const list = document.createElement('ul')
  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  list.appendChild(renderColor(colorItem,favoriteColor))

  users.appendChild(list)

  
  f.reset()
  f.name.focus()
}
function renderColor(colorItem,favoriteColor){
  const colorDiv = document.createElement('div')
  colorItem.textContent = 'Favorite Color: '
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  colorItem.appendChild(colorDiv)
  return colorItem
}
form.addEventListener('submit', handleSubmit)