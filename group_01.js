//Initial Employee Objects
var atticus = {
    name: "Atticus",
    number: "2405",
    salary: "47000",
    rating: 3
};
var jem = {
    name: "Jem",
    number: "62347",
    salary: "63500",
    rating: 4
};
var boo = {
    name: "Boo",
    number: "11435",
    salary: "54000",
    rating: 3
};
var scout = {
    name: "Scout",
    number: "6243",
    salary: "74750",
    rating: 5
};
//Initial Array the holds the default objects
var employees = [atticus, jem, boo, scout];
//Made to contain the final objects
var currentEmployees = [];
//The For Loop extracts each Object so it can pass individually to processEmployee
for (var i = 0; i < employees.length; i++) {
  //Sets the global array equal to the Final Objects
    currentEmployees[i] = processEmployee(employees[i]);
    //Here so the viewer has easy access to the fianl objects
    console.log("Worker Info:", currentEmployees[i]);
}
//A Function used to define the Percent Bonus
function calSti(number, salary, rating) {
    var bonus = 0;
    //A replacment of a for loop to define initial bonus numbers
    switch (rating) {
        case 1:
        case 2:
            bonus = 0;
            break;

        case 3:
            bonus = .04;
            break;

        case 4:
            bonus = .06;
            break;

        case 5:
            bonus = .10;
            break;

        default:
            alert("Please enter a whole number rating 1-5");
    }
    //These If statements are helping to define the additional bonus before passing it back to processEmployee
    if (salary > 650000) {
        bonus -= .01;
    }
    if (number.length == 4) {
        bonus += .05;
    }
    if (bonus > .13) {
        bonus = .13;
    }
    return bonus;
}
//The Main function that does most of the math and calls all other functions
function processEmployee(employees) {
    //Initializing Array
    var array = [];
    //Turning Salary into an integer and passing it to income
    var income = parseInt(employees.salary);
    //Pushing Name to Array because we won't be adjusting it
    array.push(employees.name);
    // Calculate employee bonus and push into the array.
    array.push(calSti(employees.number, employees.salary, employees.rating));
    //Setting Percent to equal the percent in Array for simplicity
    var percent = array[1];
    // Get total salary by calculating bonus in dollars and adding to base salary.
    array.push(Math.round(((percent * income) + income)));
    // Round the employees total salary to nearest whole number.
    array.push(Math.round(percent * income));
    //Calling the Constructor to make new objects
    var person = new Worker(array[0], array[1], array[2], array[3]);
    // Return the new array.
    return person;
}
//Constructor to make a New Object for each worker with their Final Totals
function Worker(name, percent, totalSalary, bonus) {
    this.workerName = name;
    this.workerPercent = percent;
    this.workertotalSalary = totalSalary;
    this.workerBonus = bonus;
}
