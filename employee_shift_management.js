// Employee Shift Management System

// Task 1 - Create an Employees Array of Employee Objects
const employees = [
    { name: 'Logan', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Hiba', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'Leila', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Ibrahim', shifts: [{ day: 'Friday', hours: 8 }] }
];

//Task 2- Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
    employee.shifts.forEach(shift => {console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}

//Task 3- Create a Function to Assign a New Shift
function assignShift(employeeName, newDay, newHours) {
    let employee = employees.find(worker => worker.name === employeeName);
    
    if (employee) {
        let alreadyHasShift = employee.shifts.some(shift => shift.day === newDay);

        if (alreadyHasShift) {
            console.log(`Hey, looks like ${employeeName} is already working on ${newDay}.`);
        } else {
            employee.shifts.push({ day: newDay, hours: newHours });
            console.log(`Great! ${employeeName} is now scheduled to work on ${newDay} for ${newHours} hours.`);
        }
    } else {
        console.log(`Oops, couldn't find an employee named ${employeeName}. `);
    }
}
