function fetchIssues() {
  var repoName  = $('#repo-name').html();
  var repos_url = "https://api.github.com/repos/"+ repoName +"/issues?state=all";

  $.get(repos_url, function(issues) { appendValidIssues(issues); })
   .always(function() { draggableIssues(); });
}

function appendValidIssues(issues) {
  $.each(issues, function(idx, issue) {
    if (isValidIssue(issue)) { renderIssue(issue, "append"); }
  });
}

function isValidIssue(issue) {
  return !issue.pull_request;
}
