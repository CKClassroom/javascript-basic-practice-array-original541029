let people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
for (let val of people) {
  console.log(val);
}

// 2. Write the command to remove "Greg" from the array.
const removeGreg = people.splice(0, 1);
console.log(people)

// 3. Write the command to remove "James" from the array.
const removeJames = people.splice(2, 1);
console.log(people)

// 4. Write the command to add "Matt" to the front of the array.
let addMatt = people.unshift("Matt");
console.log(people);

// 5. Write the command to add your name to the end of the array.
let addIvy = people.push("Ivy");
console.log(people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
troughLoop();
function troughLoop(){
  const repeatAry= people.concat(people);
  console.log(repeatAry)
  const len = repeatAry.length;
  for (let i = 0; i < len ; i++) {
    if (i>(len/2) && repeatAry[i] == "Devon") {
      return
    }else{
      console.log(repeatAry[i])
    }
  }
}

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let newArray = people.slice(2,4);
console.log(newArray);

// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf("Mary"));

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"));

// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
let aryFront=people.unshift("Greg")
console.log(people)
people.splice(1,1);
console.log(people)
people.splice(2,2);
console.log(people)
let newAry=people.concat(["Elizabeth", "Artie", "James"])
console.log(newAry)

