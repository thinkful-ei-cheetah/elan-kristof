'use strict';

console.log('asdasd');

function handleSubmit(){
  $('form').on('submit', function(e){
    e.preventDefault();

    const input = $('#number-choice').val();
    const values = fizzBuzz(input);

    values.forEach( item => {
      let newClass = item === 'fizz' ? 'fizz' : item === 'buzz' ? 'buzz' : item === 'fizz-buzz' ? 'fizz-buzz' : item;

      $('.js-results').append(
        `<div class= "fizz-buzz-item ${newClass}"><span>${item}</span></div>`);
    });

  });
}


$(handleSubmit);


function fizzBuzz(countTo) {
  // create an empty array that will
  // contain our results
  const result = [];
  // count from 1 to `countTo`, and for
  // each number, add the number or its
  // substitution (fizz, buzz, fizzbuzz)
  // to the result array.
  for (let i = 1; i <= countTo; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push('fizzbuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}