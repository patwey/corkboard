function toInProgress($issue) {
  var repoName = $('#repo-name').html()
  var $issueNumber = $issue.children(".panel-heading").children(".issue-number").html()

  $.get("/current", function(currentUser) {
    var accessToken = currentUser.token
    var postParams = '{"state": "open", "labels": ["in progress"]}'

    $.ajax({
      type: "PATCH",
      url:  "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken,
      data: postParams,
      success: function(newIssue) {
        showIssueMovedAlert($issueNumber);
        renderIssue(newIssue)
        $issue.remove()
      },
      failure: function(xhr) {
        alert(xhr.responseText)
      }
    })
    .always(function() {
      draggableIssues()
    })
  })
}

function toComplete($issue) {
  var repoName = $('#repo-name').html()
  var $issueNumber = $issue.children(".panel-heading").children(".issue-number").html()

  $.get("/current", function(currentUser) {
    var accessToken = currentUser.token
    var postParams = '{"state": "closed", "labels": []}'

    $.ajax({
      type: "PATCH",
      url:  "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken,
      data: postParams,
      success: function(newIssue) {
        showIssueMovedAlert($issueNumber);
        renderIssue(newIssue)
        $issue.remove()
      },
      failure: function(xhr) {
        alert(xhr.responseText)
      }
    })
    .always(function() {
      draggableIssues()
    })
  })
}

function toBacklog($issue) {
  var repoName = $('#repo-name').html()
  var $issueNumber = $issue.children(".panel-heading").children(".issue-number").html()

  $.get("/current", function(currentUser) {
    var accessToken = currentUser.token
    var postParams = '{"state": "open", "labels": []}'

    $.ajax({
      type: "PATCH",
      url:  "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken,
      data: postParams,
      success: function(newIssue) {
        showIssueMovedAlert($issueNumber);
        renderIssue(newIssue)
        $issue.remove()
      },
      failure: function(xhr) {
        alert(xhr.responseText)
      }
    })
    .always(function() {
      draggableIssues()
    })
  })
}
