// Write your code here!
// #1
document.getElementById('main').remove();
 
//#2
const newHeader = document.createElement('h1')

newHeader.id = 'victory'

newHeader.innerHTML = 'Thalia is the champion'
const body = document.querySelector('body')
console.log(body)
body.append(newHeader)

const newPuppy = document.createElement('img')
newPuppy.src = "https://images.squarespace-cdn.com/content/v1/5ac8df3896d45598c54b0f2e/6df917af-4339-4034-9e9c-09e872bed3b2/7155B193-206D-4190-88CA-75228127AD1C.JPG"
body.append(newPuppy);




//!Previous exercise results
// const newHeader = document.createElement('h1');
// newHeader.id = 'victory'
// newHeader.innerHTML = "Kimberly is the champion"


// document.getElementById('main')
// const newHeader = document.createElement('h2')
// newHeader.id = 'victory'
// newHeader.innerHTML = "Thalia is the champion"

// console.log('hello')

// document.getElementById('main')
//   const list = document.createElement('li')
//   li.textContent = "I am a list";
  

