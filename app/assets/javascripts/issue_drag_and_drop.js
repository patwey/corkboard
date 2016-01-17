function draggableIssues() {
  $(".issue").draggable();
  $( "#in-progress" ).droppable({
    accept: ".issue",
    drop: function(event, ui) {
      var repoName = $('#repo-name').html()
      var $issue = ui.draggable
      var $issueNumber = ui.draggable.children(".panel-heading").children(".issue-number").html()

      $.get("/current", function(currentUser) {
        var accessToken = currentUser.token
        var postParams = '{"state": "open", "labels": ["in progress"]}'

        $.ajax({
          type: "PATCH",
          url:  "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken,
          data: postParams,
          success: function(newIssue) {
            renderIssue(newIssue)
            $issue.remove()
          },
          failure: function(xhr) {
            alert(xhr.responseText)
          }
        })

        .always(function() {
          toComplete()
          draggableIssues()
          toBacklog()
        })
      });
    }
  });
}
