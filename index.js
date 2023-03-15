// Code your solution in this file!

 function distanceFromHqInBlocks(distance){

   let blocks;

   if (distance >= 42){
      blocks = distance - 42; 
   } else {
      blocks = 42 - distance;
   }
    
    return blocks; 
 }
 distanceFromHqInBlocks(50);

 distanceFromHqInBlocks(43);



function distanceFromHqInFeet(dist){ 
   let blocks;
   blocks = distanceFromHqInBlocks(dist);
   let feet = blocks * 264;
   console.log(feet);
   return feet;
}
distanceFromHqInFeet(34); 



function distanceTravelledInFeet(start,destination){

   let feetTravelled;

   if (destination >= start){
      feetTravelled = (destination - start)*264;
      console.log(feetTravelled);
   } else {
      feetTravelled = (start - destination)*264;
      console.log(feetTravelled);
   }
   
   return feetTravelled;
}
distanceTravelledInFeet(34,38);




function calculatesFarePrice(start, destination){
   let feet = distanceTravelledInFeet(start,destination);
   let price;

   if (feet <= 400){
      price = 0;
   }
   else if (feet>400 && feet<2000){
      price = 0.002*feet;
   } else if (feet>2000 && feet<2500){
      price = 25*feet;
   } else {
      price = console.log("cannot travel that far");
   }

   return price;
}
calculatesFarePrice();