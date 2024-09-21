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
        console.log(" We couldn't locate " + workerName + " in our system.");
    }
}
assignShift('Leala', 'Friday', 8);

