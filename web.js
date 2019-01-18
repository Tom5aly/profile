$("#button-a").click(function() {
  swal({
    title: "tom.aly@hotmail.com"
  });
});

$(document).on("click", "#link", function(e) {
  swal({
    title: "Contact Me ",
    confirmButtonText: "Send an Email",
    showCancelButton: true
  }).then(result => {
    if (result.value) {
      window.location = href = "mailto:tom.aly@hotmail.com";
    } else if (result.dismiss === "cancel") {
      swal("Maybe later ", "Thank you ");
    }
  });
});

$(document).ready( function(){
    $("#tomy").click(function(e){
        $("#jq").toggle(9500);
    });
});

