function fetchIssues() {
  var repoName  = $('#repo-name').html();
  var repos_url = "https://api.github.com/repos/"+ repoName +"/issues?state=all";

  $.get(repos_url, function(issues) {
    $.each(issues, function(idx, issue) {
      if (!issue.pull_request) {
        renderIssue(issue, "append");
      }
    });
  })

  .always(function() {
    draggableIssues();
  });
}
