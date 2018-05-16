const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.name.value
  const age = f.age.value
  const favoriteColor = f.favoritecolor.value
   const user={
    userName: f.name.value,
   age: f.age.value,
   favoriteColor: renderColor(f.favoritecolor.value)
  }

  const values = [userName,age,favoriteColor]
  //users.appendChild(renderList(users,values))
   users.appendChild(renderList(user))
  f.reset()
  f.name.focus()
}


//function renderList(users,values){
  //const list = document.createElement('ul')
  //const array = ['Name: ','Age: ','Favorite Color: ']
  //for (i=0; i<array.length;i++){
    //list.appendChild(renderListItem(array[i],values[i]))
  //}
  //return list
//}

 function renderList(data){
   const list = document.createElement('dl')
   const labels = Object.keys(data)
   labels.forEach( label => {
   const item = renderListItem(label, data[label])
   list.appendChild(item)
  })
   return list
}
function renderListItem(title,value){
  //const item = document.createElement('li')
  const term = document.createElement('dt')
  term.textContent = title
  const description = document.createElement('dd')

  //if(title == 'Favorite Color: '){
    //  return renderColor(item,value)
  //} else{
    //item.textContent = `${title} ${value}`
  //}

  try{
    description.appendChild(value)
  } catch(e){
    description.textContent += value
  }
  item.appendChild(term)
  item.appendChild(description)
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

// const doTheThing = () =>{
// another way of writing functions
//}