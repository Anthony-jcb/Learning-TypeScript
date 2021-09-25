/* basic types */

function add(a: number, b: number, printResult: boolean, phrase: string) {
  if (printResult) {
    console.log(phrase + (a + b));
  } else {
    return a + b;
  }
}
add(5, 10, true, "The result is: ");

/* objects */

let person: { name: string; age: number } = {
  name: "Max",
  age: 27,
};

/* arrays */

let favoriteActivities: string[] = ["Sports", "Cooking"];
let mixedActivities: (number | string)[] = ["Videogames", 1];
let anyActivities: any[] = ["Sports", 50.5, true, { name: "Max" }, [1, 2, 3]];

for (const hobby of favoriteActivities) {
  console.log(hobby);
}

for (const hobby of mixedActivities) {
  console.log(hobby);
}

for (const hobby of anyActivities) {
  console.log(hobby);
}

/* tuples */

let USER: { name: string; age: number; role: [number, string] } = {
  name: "Yolsa",
  age: 19,
  role: [1, "USER"],
};

// The correct way.
USER.role = [2, "ADMIN"];
console.log("Role is", USER.role);

/*
  let role = otherPeople.role[1] = "ADMIN"; >>> bad practice.
  console.log("Role is", otherPeople.role);

  let role2 = otherPeople.role.push("ADMIN"); >>> this break the tuple.
  console.log("Role is", otherPeople.role); 

  Error that typescript cannot catch,
  this is bad practice.

  The tuple can only have 2 elements, and with 
  this method returns 3 elements because push
  add a new element, breaking the
  initial tuple.
*/

/* enums */

enum Role {"USER", "READ_ONLY", "ADMIN"};

let ADMIN: { name: string; age: number; role: Role } = {
  name: "ADMIN",
  age: 19,
  role: Role.ADMIN,
};

if (ADMIN.role === Role.ADMIN) {
  console.log("The user is an admin");
}

/* any */

/*
  Using "any" type we can assign
  any type to a variable. 
*/
let whatever: any;
whatever= "This is a string";
whatever = 5;
whatever = true;
whatever = null;
whatever = undefined;
whatever = Symbol("This is a symbol");
whatever = {};
whatever = [];
whatever = () => {};