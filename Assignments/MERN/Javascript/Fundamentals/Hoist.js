//#1 
// GIVEN:
console.log(hello);                                   
var hello = 'world';                                 
// AFTER INTERPRETER
var hello;
console.log(hello)
hello='world';

//#2
//GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER INTERPRETER
var needle;
test ();
function test (){
    var needle;
    needle='magnet';
    console.log(needle);
}
needle = 'haystack';

//#3
//GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER INTERPRETER
var brendan;
function print(){
    var brendan;
    brendan='only okay';
    console.log(brendan)
}
brendan='super cool';
console.log(brendan);

//#4
//GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER INTERPRETER
function eat(){
    food='half-chicken';
    console.log(food);
    food='gone';
}
var food;
food='chicken';
console.log(food);
eat()



//#5
//GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER INTERPRETER
var mean;
mean();
mean=function(){
    var food;
    food='chicken';
    console.log(food);
    food='fish';
    console.log(food);
}
console.log(food);

//#6
//GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER INTERPRETER
var genre;
console.log(genre);
rewind();
function rewind(){
    var genre;
    genre='rock';
    console.log(genre);
    genre='r&b';
    console.log(genre);
}
genre='disco';
console.log(genre);


//#7
//GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER INTERPRETER
var dojo;
dojo='san jose';
console.log(dojo);
function learn(){
    var dojo;
    dojo='seattle';
    console.log(dojo);
    dojo='burbank';
    console.log(dojo);
}
learn();
dojo='san jose';
console.log(dojo);

//#8
//GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER INTERPRETER
console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkeley', 0));
function makeDojo(name, students){
    const dojo ={};
    var dojo.name;
    var dojo.students;
    var dojo.hiring;
    dojo.name=name
    dojo.students=students;
    if(dojo.students>50){
        dojo.hiring=true;
    }
    else if (dojo.students <=0){
        dojo='closed for now';
    }
    return dojo;//couldn't get this one
}
