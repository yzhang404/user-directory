const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.name.value
  const age = f.age.value
  const favoriteColor = f.favoritecolor.value
  const values = [userName,age,favoriteColor]
  users.appendChild(renderList(users,values))
  f.reset()
  f.name.focus()
}


function renderList(users,values){
  const list = document.createElement('ul')
  const array = ['Name: ','Age: ','Favorite Color: ']
  for (i=0; i<array.length;i++){
    list.appendChild(renderListItem(array[i],values[i]))
  }
  return list
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