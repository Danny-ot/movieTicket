let tickets = new Tickets();

$("document").ready(function(){
    $("#generate").click(function(){
        let name = $("#name-input").val();
        let age = parseInt($("#age-input").val());
        let movie = $("#movie-input").find(":selected").val();
        let time = $("#time-input").find(":selected").val();

        let customer = new Customer(name , age , time , movie);
        let price = tickets.getPrice(customer);
        $("#price-input").text(price)
    })
})