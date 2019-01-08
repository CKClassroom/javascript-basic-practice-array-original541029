let people = ['Greg', 'Mary', 'Devon', 'James'];


for (let val of people) {
  console.log(val);
}

const removeGreg = people.splice(0, 1);
console.log(people)

const removeJames = people.splice(2, 1);
console.log(people)

let addMatt=people.push("Matt");
console.log(people);

let addIvy=people.push("Ivy");
console.log(people);


// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

// 8. Write the command that gives the indexOf where "Mary" is located.

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).

// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].