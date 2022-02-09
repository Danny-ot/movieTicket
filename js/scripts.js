// Constructor For The Tickets
function Tickets(){
    this.customers = {

    }
    this.movies = {
        "SpiderMan" : 3000,
        "Jungle Cruise" : 2500,
        "Lion King" : 3000,
        "Red Notice" : 3000,
        "Doctor Strange" : 3000
    }
}

// Constructor For The Customer
function customer(name , age , release , time , movie){
    this.name = name;
    this.age = age;
    this.release = release;
    this.time = time;
    this.movie = movie;
}