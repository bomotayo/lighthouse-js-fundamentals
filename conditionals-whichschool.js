const whichSchool  = function (age) {
  // Your code in here ...
  return (
    (age < 13) ? console.log('Elementary School')
               : (age >= 13 && age <=18 ) ? console.log('Secondary School') : console.log('Lighthouse Labs'));
};




whichSchool(12);