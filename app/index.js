let circleRadii = [40, 20, 10];


// let arr = ['milk', 'toy', 'poop'];
// let body = document.querySelector('body')
// let ul = document.createElement('ul');

// let pArr = document.querySelectorAll('p');
// console.log(pArr)
// pArr.forEach((ele) => {
//   ele.innerHTML += 'say something';
// })

// body.appendChild(ul);

function applyTransition(ele, cssTransition, arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ele.classList.add(cssTransition);
      if (arr.length) {
        ele.style[arr[0]] = arr[1];
      }
      resolve()
    }, 1000)
  });
}

let first = document.querySelector('.second-panel');
let second = document.querySelector('.overlayer');
let third = document.querySelector('.yellow-backdrop');
let centerCard = document.querySelector('.center-card');

applyTransition(first, 'flow-down', ['height', '30rem'])
.then(() => {
  return;
}).then(() => {
  return applyTransition(second, 'flow-down', ['height', '0']);
}).then(() => {
  return applyTransition(third, 'flow-down', ['height', '100rem']);
}).then(() => {
  return applyTransition(centerCard, 'ease-in')
});