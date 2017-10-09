// Go through each sample code and work out what the output will be and explain what happened.
//
// ### Episode 1

// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();

//Will return "My name is Keith because name is a global variable that this function can access."


// ### Episode 2
// ```js
// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());
//Will return 3 because it refers to the scope variable defined withing the function.
//
// ```
//
// ### Episode 3
// ```js
// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();
//Will return the list as specified inside the function since we overrode the global variable.
//
// ```
//
// ### Episode 4
//
// ```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//Suspect Three will be Harvey in allSuspects() but "Keith" elsewhere since the variable defined
// inside the function s local only and doesn't override the global variable.
// ```
//
// ### Episode 5
//
// ```js
// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());
//Will return "Poirot" since the function reassigned detective.name.
// ```
//
// ### Episode 6
// ```js
var murderer = 'rick';

// var outerFunction = function() {
//   var murderer = 'marc';
//
//   var innerFunction = function() {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log('the murderer is ', murderer);

//Rick since outerFunction creates a new local variable for its own use which just happens to have the same name as the global one.
// ```
//
// ### Episode 7 - Make up your own episode/s!
//
// Make up your own episode which can be whatever you wish and the rest of
// the class will work out together what happened and what the output will be.
