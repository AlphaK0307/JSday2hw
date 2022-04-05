console.log('Hello')

/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelcius(fahrenheit) 
{
  const TempinF = fahrenheit;
  const FtoCel = (TempinF - 32) * 5 / 9;
  const message = `${TempinF} F = ${FtoCel} C.`;
    console.log(message);
} 
toCelcius(100);

/*Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the users password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/








