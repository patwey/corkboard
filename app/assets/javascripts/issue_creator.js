function createIssue() {
  $("#submit-issue").on("click", function() {
    var repoName = $('#repo-name').html();

    $.get("/current", function(currentUser) {
      var url = "https://api.github.com/repos/" + repoName + "/issues?access_token=" + currentUser.token;
      var title = $("#issue-title").val();
      var body = $("#issue-description").val();
      var issueParams = '{"title":"'+ title +'", "body":"'+ body +'"}';

      $.ajax({
        type: "POST",
        url:  url,
        data: issueParams,
        success: function(newIssue) {
          renderIssue(newIssue);
          $("#issue-title").val("");
          $("#issue-description").val("");
        },
        error: function(xhr) {
          showErrorAlert();
          console.log(xhr.responseText);
        }
      })

      .always(function() {
        draggableIssues();
      });
    })
  })
}

function showErrorAlert() {
  $(".alert-danger").remove()
  $(".content").prepend(
    "<div class='alert alert-danger'>" +
    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
    "<strong>Oh No!</strong> There was an problem creating your issue, Please try again." +
    "</div>"
  );
}