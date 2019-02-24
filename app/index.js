// // console.log(document)
function flipCard(el) {
  console.log(el.parentNode.parentNode)
  el.closest('.flip-container').classList.add('hover');
}

let descriptionClass = document.querySelectorAll('.description');
console.log(descriptionClass)


// descriptionClass.forEach((class) => {
//   class.addEventListener('click', flipCard)
// })

for (let i = 0; i < descriptionClass.length; i++) {
  const el = descriptionClass[i];
  el.addEventListener('click', () => flipCard(el));
}

let backEle = document.querySelectorAll('.back');
for (let i = 0; i < backEle.length; i++) {
  const el = backEle[i];
  el.addEventListener('click', () => removeFlip(el));
}

function removeFlip(el) {
  el.closest('.flip-container').classList.remove('hover');
}