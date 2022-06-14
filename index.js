//const chai = ('chai');
//const spies = ('chai-spies');

//receivesAFunction( function spy () {
 // return 'I made it';
//})  
  

function receivesAFunction (spy){
  return (spy ());
}

function returnsANamedFunction (watch) {
  return (function fn ()  {
    return (watch ());
    })
}

function returnsAnAnonymousFunction (watch) {
  return (function () {
    return (watch ());
  })
}