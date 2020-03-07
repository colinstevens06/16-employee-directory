# THE PLAN

## User Flow
The user will login, they'll be served up with all of the data in the database. Each row is an employee who has a set of info
* Birthday (w/o year)
* Title
* Department
* Salary

The user will be able to press each button to sort. IE, if the user clicks the salary button, we'll order salary from lower to highest. *After the MVP* We'll also make it so when you press the button, there is a down arrow. If you click it again, it'll have an up arrow.

The user will be able to click filters. There will be drop down filters for title and department. *After the MVP* Add an input filter for salary (view those with salaries greater than X)

## Components

* A row that displays the user information
* Buttons that align with each row. Those buttons can be clicked to sort information
* Buttons that filter for title and dept

## Database
I don't have to create a database for this but I want to. I'm going to create a MongoDB database and give it a seed file about all my homies. *After the MVP* I'm going to create an input section so that you can add more people, and I'm going to require all the fields so that if the user inputs something incorrect, they'll get an error message

## Questions for Donald/Stetson
* Where should I put the DB? In the utils folder?