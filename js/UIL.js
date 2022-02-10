let tickets = new Tickets();

// Function for displaying contents
function displayContents(tickets){
    let htmlElement = $("#tickets-display");
    let htmlString = "";
    let keys = Object.keys(tickets.customers);
    
    keys.forEach(function(key){
        let customer = tickets.findCustomer(key);
        htmlString += "<li class = 'data' id = " + customer.id + ">" + customer.name + "</li>";
    })
    htmlElement.html(htmlString);
}

    // Create the function for attachng the listener
function attachListener(){
    $("ul#tickets-display").on("click" , "li" , function(){
        displayDetails(this.id)
    })
}

// Function For Displaying The Full Details
function displayDetails(id){
    let customer = tickets.findCustomer(id);
    $("#name-display").html(customer.name);
    $("#age-display").html(customer.age);
    $("#movie-display").html(customer.movie);
    $("#price-display").html(customer.price);
    let button = $("#delete-btn-div");
    button.empty();
    button.append("<button class = 'btn btn-light deleteButton' id = " + id + "> Delete </button>")
    
}

$("document").ready(function(){
    attachListener();

    // The generate button click button
    $("#generate").click(function(){
        let name = $("#name-input").val();
        let age = parseInt($("#age-input").val());
        let movie = $("#movie-input").find(":selected").val();
        let time = $("#time-input").find(":selected").val();

        let customer = new Customer(name , age , time , movie);
        let price = tickets.getPrice(customer);
        $("#price-input").text(price)
    });

    // The Add btn click method
    $("#add-btn").click(function(){
        $(".price-sys").show();
        $(".tickets").hide();
        $(".form-input").toggle();
    });


    // Form Submission Method
    $("#form").submit(function(e){
        e.preventDefault();
        let name = $("#name-input").val();
        let age = $("#age-input").val();
        let movie = $("#movie-input").find(":selected").val();
        let time = $("#time-input").find(":selected").val();
        let price = $("#price-input").text();

        let customer = new Customer(name , age , time , movie , price);
        tickets.addCustomer(customer);
        displayContents(tickets)
        $("#name-input").val("");
        $("#age-input").val("");
        $("#price-input").text("0");
        $(".form-input").hide();
    })

    $("#tick-btn").click(function(){
        $(".form-input").hide();
        $(".tickets").toggle();
        $(".price-sys").toggle();
    })
})