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

let backEle = document.querySelectorAll('.return');
for (let i = 0; i < backEle.length; i++) {
  const el = backEle[i];
  el.addEventListener('click', () => removeFlip(el));
}

function removeFlip(el) {
  el.closest('.flip-container').classList.remove('hover');
}

// set up text to print, each item in array is new line
let aText = new Array(
  'Hello there.', 'I am Isaac.', 'Welcome to my digital portfolio where you can find my past and current work!', 'If you have any questions, click on any of the icons below to connect with me', 'For resume, click on the "resume" button in the corner or just type "resume"',
  );
  let iSpeed = 50; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  let iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = 0; // initialise text position
  let sContents = ''; // initialise contents letiable
  let iRow; // initialise current row

  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   let destination = document.getElementById("vs-code-writing");

   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }


  typewriter();
  let captureType = [];
  function captureTyping(e) {
    if (captureType.length > 5) {
      captureType.shift();
    }
    captureType.push(e.key);
    if (captureType.join('').toLowerCase() === 'resume') {
      console.log('downloading resume')
    }
  }
  window.addEventListener('keydown', captureTyping)

