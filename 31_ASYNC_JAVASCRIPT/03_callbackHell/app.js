//===============TAKE THIS CODE A NEST IT=================//
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 1000)

// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 2000)

// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow"
// }, 3000)
//=====================================================//

//===============NESTED CODE===========================//
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow"
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green"
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue"
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)
//======================================================//

//================SET UP DELAYS WITH FUNCTION=========================//

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor
    doNext && doNext();
  }, delay)
}

delayedColorChange('red', 1000, () => {
  delayedColorChange('orange', 1000, () => {
    delayedColorChange('yellow', 1000, () => {
      delayedColorChange('green', 1000, () => {
        delayedColorChange('blue', 1000, () => {
    
        })      
      })    
    })  
  })
});

