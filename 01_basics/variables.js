const employeeId= 2592540
let employeeName= "Nandini Sethi"
let employeeEmail= "nandini.sethi@tcs.com"
let employeeCity= "Bhubaneswar"
let employeeState;
/*variables declared with const cannot be changed
variables decalred with let and var can be changed
those variables whose values are not assigned gives an output as undefined
we can also print the data of all the variables together in a tabular format by us console.table and not using console.log  */

// employeeId=2529959
console.log(employeeId);
console.table([employeeId,employeeName,employeeCity,employeeEmail,employeeState])

