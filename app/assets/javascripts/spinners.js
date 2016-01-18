function showSpinner(location) {
  location.prepend(
    "<div class='spinner text-center'>" +
    "<i class='spinner fa fa-refresh fa-spin'></i>" +
    "</div>"
  );
}

function hideSpinners() {
  $(".spinner").hide()
}
