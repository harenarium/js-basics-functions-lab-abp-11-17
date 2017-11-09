// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock){
  const blocksHQ = Math.abs(pickupBlock-42);
  return blocksHQ;
}


function distanceFromHqInFeet(){
  const feetHQ = distanceFromHqInBlocks()*264;
  return feetHQ;
}
/*
function distanceTravelledInFeet(a, b){
    const distance = Math.abs(a-b)*264;
    return distance;
}

function calculatesFarePrice(){
  const distance = distanceTravelledInFeet();
  switch(true){
    case distance<=400:
      return 0;
    case distance:
      break;
    case :

  }
}
*/
