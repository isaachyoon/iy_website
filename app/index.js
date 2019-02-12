let circleRadii = [40, 20, 10];
let svgContainer = d3.select('body').append('svg').attr("width", 200).attr("height", 200);
console.log(d3.select('body'))

var circles = svgContainer.selectAll("circle").data(circleRadii).enter().append("circle");

let arr = ['milk', 'toy', 'poop'];
let body = document.querySelector('body')
let ul = document.createElement('ul');

let pArr = document.querySelectorAll('p');
console.log(pArr)
pArr.forEach((ele) => {
  ele.innerHTML += 'say something';
})

body.appendChild(ul);