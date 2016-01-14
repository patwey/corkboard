function fetchIssues() {
  var repoName = $('#repo-name').html()

  $.get("https://api.github.com/repos/"+ repoName +"/issues?state=all", function(issues) {
    $.each(issues, function(index, issue) {
      renderIssue(issue)
    })
  })
  .always(function() {
    toInProgress()
    toComplete()
    toBacklog()
  })
}
