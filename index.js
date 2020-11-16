const writeCards = (arr, event) => {
  for (let i=0; i<arr.length; i++ ) {
  const message = 'Thank you, ' +  arr[i] + ', for the wonderful ' + event + 'gift!';
//  `Thank you, ${arr[i]} for the wonderful ${event} gift! `;
  const myArray = new Array ();
  // const myArray = [];
  let newMessage= myArray.push (message);
  }
  return myArray;
}


writeCards(["Ada", "Brendan", "Ali"], "birthday");

// "Thank you, Ada, for the wonderful birthday gift!"
