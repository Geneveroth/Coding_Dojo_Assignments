const FriendSchema = {
    firstName: String,
    lastName: String,
    isSocialDistancing: Boolean,
    isInfected: Boolean
  };
  
  const PersonSchema = {
    firstName: String,
    lastName: String,
    friends: [FriendSchema],
    isSocialDistancing: Boolean
  };

  function getAtRiskPeople(people) {
      let newArray = [];
      for ( let i = 0; i < people.length; i++){
        if (people[i].isSocialDistancing===false ){
          for (let j=0;j< people[i].friends.length;j++){
             if (people[i].friends[j].isInfected===true && people[i].friends[j].isSocialDistancing === false){
                newArray.push(people[i].firstName + " " + people[i].lastName);
                break;
            }  
          }
            
        }
      }
      return newArray; 
}
  
  const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    isInfected: true,
  };
  
  const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    isInfected: true,
  };
  
  const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    isInfected: false,
  };
  
  const people = [
    {
      firstName: "Person",
      lastName: "One",
      isSocialDistancing: false,
      friends: [friend2, friend3],
    },
    {
      firstName: "Person",
      lastName: "Two",
      isSocialDistancing: true,
      friends: [friend2, friend1],
    },
    {
      firstName: "Person",
      lastName: "Three",
      isSocialDistancing: false,
      friends: [friend2, friend1],
    },
  ];
  
  console.log(getAtRiskPeople(people)); // should log ['Person One', 'Person Three']
  
  
  /**
   * takes an array of objects
   * and a string
   * returns a new array of full name strings who have that habit in their habits array
   * BONUS: use built-in methods to create a streamlined solution
   */
  
  function getSantasNaughtyList(people, habit) {
      var newarr = []
    for(var i =0;i<students.length;i++){
        for(var j =0;j<students[i].habits.length;j++){
            if (students[i].habits[j]== habit){
                newarr.push(students[i].firstName + " " + students[i].lastName)
            }
        }
    }
    return newarr;
  }
  
  const students = [
    {
      firstName: "FN1",
      lastName: "LN1",
      habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early"]
    },
    {
      firstName: "FN2",
      lastName: "LN2",
      habits: ["shows up late", "washes dishes", "helps peers"]
    },
    {
      firstName: "FN3",
      lastName: "LN3",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"]
    },
    {
      firstName: "FN4",
      lastName: "LN4",
      habits: ["shows up early", "helps peers", "washes dishes"]
    }
  ];
  
  console.log(getSantasNaughtyList(students, `doesn't wash dishes`));
  // should log ['FN1 LN1', 'FN3 LN3']
  
  console.log(getSantasNaughtyList(students, 'shows up late'));
  // should log ['FN2 LN2', 'FN3 LN3']
  
  console.log(getSantasNaughtyList(students, 'vapes too much'));
  // should log []