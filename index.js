function receivesAFunction (callback) {
  return callback();
}

receivesAFunction('Ada Lovelace', function () { return 'Hello there, ' ; });


function returnsAnAnonymousFunction () {
    return function(){
        console.log('Ada Lovelace');
    }
  }
  
  function returnsANamedFunction() {
    return function returnsANamedFunction(){};
 
}