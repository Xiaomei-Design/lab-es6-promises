// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }



// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {

//   addFood(steak[1], '#steak', () => {

//     addFood(steak[2], '#steak', () => {

//       addFood(steak[3], '#steak', () => {

//         addFood(steak[4], '#steak', () => {

//           addFood(steak[5], '#steak', () => {

//             addFood(steak[6], '#steak', () => {

//               addFood(steak[7], '#steak', () => {
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// });



// Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[4], '#mashPotatoes')
// })
// })
// })
// })

// Iteration 3 using async and await

// const addImage = img => document.querySelector('#table').innerHTML += `<img src="/public/images/${img}">`

// solution 1

async function makeFood(step, id) {
    for(let i = 0; i < step.length; i++) {
      await addFood(step[i], id);
    }
  }


//   makeFood(brusselSprouts, '#brusselSprouts').then(()=>
//     addPic(pictures[2], '#table') // add pics
//   )
//   makeFood(steak, '#steak').then(()=>
//   addPic(pictures[1], '#table')
// )
//   makeFood(mashPotatoes, '#mashPotatoes').then(()=>
//   addPic(pictures[0], '#table')
// )

// async function addPictures(pic, id) {
//   for (let i = 0; i < pic.length; i++) {
//     await addPic(pic[i], id)
//   }
// }
//   addPic(pictures, '#table')


Promise.all([
  makeFood(brusselSprouts, '#brusselSprouts').then(()=>
    addPic(pictures[2], '#table') // add pics
  ),
  makeFood(steak, '#steak').then(()=>
  addPic(pictures[1], '#table')
),
  makeFood(mashPotatoes, '#mashPotatoes').then(()=>
  addPic(pictures[0], '#table')
)
])
.then(() => {
  document.body.innerHTML += `
  <button onclick="new Audio('/public/media/dinnerIsServed.mp3').play()">
  Dinner is served!
  </button>
  `
})