let randomBetweenRange = (low,high) => Math.floor(Math.random() * (4000 - 1250) +1250);
//Apartado 1: Generación del Array
let employees = [];
for (let i = 1; i<= 100; i++) {
    const newEmployee = {
        cargo: `Empleado ${i}`,
        rendimiento: Math.random().toFixed(2),
        salario: randomBetweenRange(1250,400)
    };
    employees.push(newEmployee);
}
console.log('1. Generación del array',employees);

// Apartado 1 - v2
function Employee(cargo, rendimiento, salario) {
    this.cargo = cargo;
    this.rendimiento = rendimiento;
    this.salario = salario;
}

employees = [];
for (let i = 1; i <= 100; i++) {
    employees.push(new Employee(`Empleado ${i}`, Number(Math.random().toFixed(2)), randomBetweenRange(1250,400)));
}

console.log('1 v2. Generación del array', employees);

// Apartado 2
employees.sort(function (emp1, emp2) {
    return emp1.rendimiento - emp2.rendimiento;
});
console.log('Empleados ordenados por rendimiento: ', employees);

// Apartado 3
employees.sort((emp1, emp2) => emp1.salario - emp2.salario);
console.log('Empleados ordenados por salario: ', employees);

// Apartado 4
function ordenaEmpleadosCargo(emp1,emp2) {
    return emp2.cargo.slice(9) - emp1.cargo.slice(9);
    //return emp2.cargo.split(' ')[1] - emp1.cargo.split(' ')[1];
    //return emp2.cargo.replace('Empleado ','') - emp1.cargo.replace('Empleado ','');
}
employees.sort(ordenaEmpleadosCargo);
console.log('Empleados ordenados decreciente por numero empleado: ',employees);

// Apartado 5
employees.filter(empleado => empleado.salario > 2500).forEach(empleado => console.log(empleado.cargo, empleado.salario));

// Apartado 6
console.log('Apartado 6')
employees = employees.map(empleado => {
    if (empleado.salario < 1500) {
        empleado.salario = empleado.salario * 1.25;
    }
    return empleado;
});
console.log(employees);

// Apartado 7
console.log();
console.log('Apartado 7')
const initialValue = 0;
const totalCost = employees.reduce((salarySum, empleado) => salarySum + (empleado.salario * 1.15),0);
console.log(totalCost.toFixed(0));

// Apartado 8
console.log();
console.log('Apartado 8')
// Despedir a los que tengan un rendimiento menor a 0.3.
employees = employees.filter(empleado => empleado.rendimiento >= 0.3);
console.log('Están despedidos los que tengan un rendimiento inferior a 0.3',employees);
//Calcular el sueldo medio de la empresa.
const averageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salario, 0) / employees.length;
console.log('Media de salarios de la empresa: ', averageSalary.toFixed(0));
//Subir el sueldo de los que tengan un rendimiento superior a 0.7.
employees = employees.map(employee => {
    if (employee.rendimiento > 0.7) {
        employee.salario = employee.salario + 10000;
    }
    return employee;
});
console.log('Tabla con saliarios subidos 10.000€ a los trabajadores con rendimiento superior a 0.7',employees);