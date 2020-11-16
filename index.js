
  const messages = [];
  const writeCards = (arr, eventName) => {
  for (let i=0; i<arr.length; i++ ) {
  let message = 'Thank you, ' +  arr[i] + ', for the wonderful ' + eventName + 'gift!';
  messages.push(message);
  //messages.push( `Thank you, ${arr[i]}, for the wonderful ${keyword} gift! `);
  }
  return messages;
}




//  `Thank you, ${arr[i]} for the wonderful ${event} gift! `;
//  const myArray = new Array ();

// "Thank you, Ada, for the wonderful birthday gift!"
