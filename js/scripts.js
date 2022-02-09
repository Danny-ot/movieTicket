// Constructor For The Tickets
function Tickets(){
    this.customers = {

    };
    this.movies = {
        "SpiderMan" : 3000,
        "Jungle Cruise" : 2500,
        "Lion King" : 3000,
        "Red Notice" : 3000,
        "Doctor Strange" : 3000
    };
    this.id = 0;
}


// Method For Assigning Id
Tickets.prototype.assignId = function(){
    this.id += 1;
    return this.id ;
}

Tickets.prototype.addCustomer = function(customer){
    customer.id = this.assignId();
    this.customers[customer.id] = customer;
};

// Constructor For The Customer
function Customer(name , age , release , time , movie){
    this.name = name;
    this.age = age;
    this.release = release;
    this.time = time;
    this.movie = movie;
};
