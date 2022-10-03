// HOW TO MAKE OBJECTS WITH THE CONSTRUCTOR
// // object constructor. It is a template for us to create objects.
// ```
// function Person(email, uname, age, gender, previousPurchase) {
//     this.email = email,
//     this.uname = uname,
//     this.age = age,
//     this.gender= gender,
//     this.previousPurchase = previousPurchase
//   }

// let personOne = new Person('ryu@ninjas.com', 'ryu', 20, "M", "£50");
// let personTwo = new Person('anna@mariocorp.com', 'anna', 33, "F", "£90" );

function Customer(accountOpeningDate, name, accountNumber, balance, password) {
    this.accountOpeningDate = accountOpeningDate,
    this.name = name,
    this.accountNumber = accountNumber,
    this.balance = balance,
    this.password = password
}

let customer1 = new Customer("15.06.2022", "Joe", 7894561, "£65", "ahuahisdh");
let customer2 = new Customer("15.08.2021", "John", 7897561, "£90", "789");
let customer3 = new Customer("15.12.2022", "Jon", 7894761, "£195", "123");

let customer4 = new Customer("2019", "Eden", 7894571, "£15", "ahuahisdh");
let customer5 = new Customer("2019", "Emily", 7894591, "£22", "1s8s48s4");

let customer6 = new Customer("2019", "Noah", 7894561, "£65", "ahuahisdh");
let customer7 = new Customer("15.06.2008", "Sandra", 7894561, "£65", "ahuahisdh");
let customer8 = new Customer("15.06.2007", "San", 7894561, "£65", "ahuahisdh");
let customer9 = new Customer("15.06.2006", "Sam", 7894561, "£65", "ahuahisdh");

let customer10 = new Customer("15.06.2022", "Joe", 7894561, "£65", "ahuahisdh");

let customers = [customer1, customer2, customer3, customer4, customer5, customer6, customer7, 
    customer8, customer9, customer10];

// make an empty array
// loop over the array of customers
// check the accountOpenaingYear of each customers. 
// check the accountOpenaingYear  is equal to the year in the fucntion 
//if it true, add the name of the customer to the array
// after lopping all the customers return the array 


// function accountsOpenedThisYear (arrayOfCustomers, year) {
//     let customersOfYear = [];

//      for(let i in arrayOfCustomers){
//         console.log(i);
//          if (arrayOfCustomers[i].accountOpeningDate === year){
//             console.log("year is eqaul");
//             customersOfYear.push(arrayOfCustomers[i].name);
            
//         }
       
        
//     }
//     return customersOfYear;
//     //return arrayOfCustomers.filter((customer) => customer.accountOpeningDate === year);
    
// }
// console.log(accountsOpenedThisYear(customers, "2019"));

console.log(customers);