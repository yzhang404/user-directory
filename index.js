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
  const array = ['Name: ','Age: ','Favorite Color: ']
  const values = [userName,age,favoriteColor]
  for (i=0; i<array.length;i++){
    list.appendChild(renderListItem(array[i],values[i]))
  }

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
function renderListItem(title,value){
  const item = document.createElement('li')
  if(title == 'Favorite Color: '){
      return renderColor(item,value)
  } else{
    item.textContent = `${title} ${value}`
  }
  return item
}
form.addEventListener('submit', handleSubmit)