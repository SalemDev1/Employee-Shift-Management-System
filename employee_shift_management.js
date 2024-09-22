// Employee Shift Management System

// Task 1 - Create an Employees Array of Employee Objects
const employees = [
    { name: 'Logan', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Hiba', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'Leala', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Ibrahim', shifts: [{ day: 'Friday', hours: 8 }] }
];

//Task 2- Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
    employee.shifts.forEach(shift => {console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
employees.forEach(employee => {
    displayEmployeeShifts(employee);
});

// Task 3- Create a Function to Assign a New Shift
function assignShift(workerName, newDay, newHours) {
    let worker = employees.find(function(worker) {
        return worker.name === workerName;
    });
    if (worker) {
        let existingShift = worker.shifts.some(function(shift) {
            return shift.day === newDay;
        });

        if (existingShift) {
            console.log(workerName + " already has a shift on " + newDay + ". Please pick another day.");
        } else {
            worker.shifts.push({ day: newDay, hours: newHours });
            console.log("Shift assigned to " + workerName + " on " + newDay + " for " + newHours + " hours.");
        }
    } else {
        console.log(" We couldn't locate " + workerName + " in our system, but its okay because we should give him the weekend off");
    }
}
assignShift('Leala', 'Friday', 8);
assignShift('Markum Reed', 'Saturday', 23 )

//Task 4- Create a Function to Calculate Total Hours Worked
function calculateTotalHours(workerName) {
    let worker = employees.find(function(worker) {
        return worker.name === workerName;
    });

    if (worker) {
        let totalHours = 0;
        worker.shifts.forEach(function(shift) {
            totalHours += shift.hours;
        });
        console.log(workerName + " has worked a total of " + totalHours + " hours this week.");
    } else {
        console.log("Couldn't find " + workerName + " in our system.");
    }
}

// Calculate total hours worked for Leala
calculateTotalHours('Leala');