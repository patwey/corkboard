function createIssue() {
  $("#submit-issue").on("click", function() {
    var repoName = $('#repo-name').html();

    $.get("/current", function(currentUser) {
      var url = "https://api.github.com/repos/" + repoName + "/issues?access_token=" + currentUser.token;
      var title = $("#issue-title").val();
      var body = $("#issue-description").val();
      var issueParams = '{"title":"'+ title +'", "body":"'+ body +'"}';

      showSpinner($(".flash"));
      $.ajax({
        type: "POST",
        url:  url,
        data: issueParams,
        success: function(newIssue) {
          hideSpinners();
          showSuccessfulAddAlert();
          renderIssue(newIssue);
          $("#issue-title").val("");
          $("#issue-description").val("");
        },
        error: function(xhr) {
          hideSpinners();
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
