// Constructor For The Tickets
function Tickets(){
    this.customers = {

    };
    this.movies = {
        "SpiderMan" : 3000,
        "Jungle Cruise" : 3000,
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

// Method For Adding Customer
Tickets.prototype.addCustomer = function(customer){
    customer.id = this.assignId();
    this.customers[customer.id] = customer;
};

// Method For Getting Pricing
Tickets.prototype.getPrice = function(id){
    let customer = this.customers[id];
    let price = this.movies[customer.movie];
    if(customer.age > 65){
        price -= 500;
    }
    if(this.id < 3){
        price -= 300 
    }
    if(customer.time ==="12:30" || customer.time === "3:30"){
        price -= 200
    }
    
    return price;
};

// Method For Finding Customer
Tickets.prototype.findCustomer = function(id){
    if(this.customers[id] !== undefined ){
        return this.customers[id];
    }
    return false
}

// Constructor For The Customer
function Customer(name , age , time , movie){
    this.name = name;
    this.age = age;
    this.time = time;
    this.movie = movie;
};
