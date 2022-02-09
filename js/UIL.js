let tickets = new Tickets();

$("document").ready(function(){

    // The generate button click button
    $("#generate").click(function(){
        let name = $("#name-input").val();
        let age = parseInt($("#age-input").val());
        let movie = $("#movie-input").find(":selected").val();
        let time = $("#time-input").find(":selected").val();

        let customer = new Customer(name , age , time , movie);
        let price = tickets.getPrice(customer);
        $("#price-input").text(price)
    })

    // The Add btn click method
    $("#add-btn").click(function(){
        $(".tickets").hide();
        $(".form-input").toggle();
    })
})