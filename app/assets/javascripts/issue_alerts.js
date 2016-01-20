function showErrorAlert() {
  $(".alert").remove()
  $(".flash").prepend(
    "<div class='col-md-6 col-md-offset-3'>" +
    "<div class='alert alert-danger'>" +
    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
    "<strong>Oh No!</strong> There was an problem creating your issue. Please try again." +
    "</div>" +
    "</div>"
  );
}

function showSuccessfulAddAlert() {
  $(".alert").remove()
  $(".flash").prepend(
    "<div class='col-md-6 col-md-offset-3'>" +
    "<div class='alert alert-success'>" +
    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
    "<strong>Hooray!</strong> You've added an issue." +
    "</div>" +
    "</div>"
  );
}

function showIssueMovedAlert(issueNumber) {
  $(".alert").remove();
  $(".flash").prepend(
    "<div class='col-md-6 col-md-offset-3'>" +
    "<div class='alert alert-success'>" +
    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
    "Issue #"+ issueNumber + " has been moved." +
    "</div>" +
    "</div>"
  );
}
