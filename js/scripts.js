$(document).ready(function() {
  $("#marketForm form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("#address").val();
    var shirtSizeInput = $("#shirtSize").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".shirtSize").text(shirtSizeInput);

    $("#completion").show();

    event.preventDefault();
  });
});
