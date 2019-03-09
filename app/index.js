// // console.log(document)
let storyCounter = 0;
function flipCard(el) {
  console.log(el.parentNode.parentNode)
  el.closest('.flip-container').classList.add('hover');
}

function removeFlip(el) {
  el.closest('.flip-container').classList.remove('hover');
}

function myStoryAnimation(el) {
  clickDiv.style.display = "none";
  storyCounter++;
  if (storyCounter === 1) {
    const rockEle = document.querySelector('.rock');
    rockEle.classList.add('rock-animation');
    timeoutBeforeMouseShows();
  } else if (storyCounter === 2) {
    const quickDraw = document.querySelectorAll('.quickdraw');
    quickDraw.forEach((ele) => {
      ele.style.display = 'flex';
    })
    timeoutBeforeMouseShows();
  } else if (storyCounter === 3) {
    const climber = document.querySelector('.climber');
    climber.classList.add('climber-animation');
    timeoutBeforeMouseShows();
  } else if (storyCounter === 4) {
    addGlowtoQuickdraw();
    clickDiv.parentNode.removeChild(clickDiv);
    const myStory = document.querySelector('#my-values');
    myStory.classList.add('show');
    const bubbleEle = document.querySelector('.speech-bubble');
    chatBubbleTimeout(bubbleEle, 3000)
    .then(() => chatBubbleTimeout(bubbleEle, 5000))
    .then(() => {
      chatBubbleInterval(bubbleEle)
    });
  }
}

function addGlowtoQuickdraw() {
  const quickDraw = document.querySelectorAll('.quickdraw');

  quickDraw.forEach((ele) => {
    ele.classList.add('glow');
  })
}
let chatBubbleOn = false;


function chatBubbleTimeout(ele, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!chatBubbleOn) {
        ele.style.display = "block"
      } else {
        ele.style.display = 'none';
      }
      chatBubbleOn = !chatBubbleOn;
      resolve();
    },time)
  })
}

function chatBubbleInterval(ele) {
  ele.style.display = 'none'
  setInterval(() => {
    if (!chatBubbleOn) {
      ele.style.display = "block"
    } else {
      ele.style.display = 'none';
    }
    chatBubbleOn = !chatBubbleOn;
  }, 10000)
}

function timeoutBeforeMouseShows() {
  window.setTimeout(() => {
    clickDiv.style.display = "block";
  }, 3000)
}

function setIntervalOnElement(ele, time, cssProperty, cssValue) {
  window.setInterval(() => {
    ele.style[cssProperty] = cssValue;
  }, time)
}

function addEventListeners() {
  let descriptionClass = document.querySelectorAll('.description');
  for (let i = 0; i < descriptionClass.length; i++) {
    const el = descriptionClass[i];
    el.addEventListener('click', () => flipCard(el));
  }

  let backEle = document.querySelectorAll('.return');
  for (let i = 0; i < backEle.length; i++) {
    const el = backEle[i];
    el.addEventListener('click', () => removeFlip(el));
  }

  const myStoryElement = document.querySelector('.my-story');
  myStoryElement.addEventListener('click', () => myStoryAnimation(myStoryElement))

}

addEventListeners();

// set up text to print, each item in array is new line
let aText = new Array(
  '', 'Hello there.', 'I am Isaac.', '', 'Welcome to my digital portfolio where you can find my past and current work!', 'If you have any questions, feel free to reach out to me using the navigation or the icons on the left to connect with me.', 'For resume, click on the "resume" icon or just type "resume"',
  );
  let iSpeed = 20; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  let iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = 0; // initialise text position
  let sContents = ''; // initialise contents letiable
  let iRow; // initialise current row

function typewriter() {
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
let clickDiv = document.querySelector('.mouse');


  typewriter();

  const resume = document.querySelector('#open-resume');
  let captureType = [];
  function captureTyping(e) {
    if (captureType.length > 5) {
      captureType.shift();
    }
    captureType.push(e.key);
    if (captureType.join('').toLowerCase() === 'resume') {
      resume.click();
    }
  }
  window.addEventListener('keydown', captureTyping)
