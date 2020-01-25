// Your code here


let Calculator = {
  add: function(a, b){ return a+b;},
  subtract: function(a, b){ return a-b;},
  multiply: function(a, b){ return a*b;},
  divide: function(a, b){ return a/b;}
}
  


function saturdayFun(doSomething = 'roller-skate'){
  return `This Saturday, I want to ${doSomething}!`
}

function mondayWork(doSomething = "go to the office"){
  return `This Monday, I will ${doSomething}.`
}

function wrapAdjective(symbol){
  
  if (symbol === '*'){
    return (function(adj){return `You are *${adj}*!`;});
  } else if (symbol === '||') {
    return (function(adj){return `You are ||${adj}||!`;});
  }
  
}


function actionApplyer(startInt, arrayFcns){
  if (arrayFcns.length === 0){
    return startInt;
  } else {
    let result;
    for (let i = 0; i < arrayFcns.length; i++){
      result = arrayFcns[i](startInt);
    }
    return result;
  }
  
}