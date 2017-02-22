// Основное использование promise
let p = new Promise(function(resolve, reject) {

  // выполняется асинхроный запрос и долее переход к then

  if(good_condition) {
    resolve('Success!');
  }
  else {
    reject('Fail!');
  }
});
p.then(function() {
  /* операция над результатом */
}).catch(function() {
  // ошибка
});

let promiseCount = 0;
function testPromise() {
  let thisPromiseCount = ++promiseCount;
  console.log(thisPromiseCount + ': Started - Sync code started');

  let p1 = new Promise(function(resolve, reject) {
    console.log(thisPromiseCount + ': Promise started - Async code started');
    //только для примера чтобы создать асинронный запрос
    window.setTimeout(
      function() {
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
  });

  p1.then(function(val) {
    console.log(val + ': Promise fulfilled - Async code terminated');
  }).catch(function(reason) {
    console.log('Handle rejected promise ('+reason+') here.');
  });

  console.log(thisPromiseCount + ': Promise made - Sync code terminated');
}

testPromise();
testPromise();
testPromise();
