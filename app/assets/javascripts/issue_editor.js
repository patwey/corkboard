function toInProgress($issue) {
  var repoName = $('#repo-name').html()
  var $issueNumber = $issue.children(".panel-heading").children(".issue-number").html()
  var labels = inProgressLabels($issue);

  $.get("/current", function(currentUser) {
    var accessToken = currentUser.token
    var postParams = '{"state": "open", "labels":' + labels + '}'
    $(".alert").remove();
    showSpinner($(".flash"));

    $.ajax({
      type: "PATCH",
      url:  "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken,
      data: postParams,
      success: function(newIssue) {
        hideSpinners();
        showIssueMovedAlert($issueNumber);
        renderIssue(newIssue)
        $issue.remove()
      },
      failure: function(xhr) {
        hideSpinners();
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
  var labels = inProgressLabels($issue);

  $.get("/current", function(currentUser) {
    var accessToken = currentUser.token
    var postParams = '{"state": "closed", "labels":'+ labels +'}'

    $(".alert").remove();
    showSpinner($(".flash"));

    $.ajax({
      type: "PATCH",
      url:  "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken,
      data: postParams,
      success: function(newIssue) {
        hideSpinners();
        showIssueMovedAlert($issueNumber);
        renderIssue(newIssue)
        $issue.remove()
      },
      failure: function(xhr) {
        hideSpinners();
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
  var labels = backlogLabels($issue);

  $.get("/current", function(currentUser) {
    var accessToken = currentUser.token
    var postParams = '{"state": "open", "labels":' + labels + '}'

    $(".alert").remove();
    showSpinner($(".flash"));

    $.ajax({
      type: "PATCH",
      url:  "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken,
      data: postParams,
      success: function(newIssue) {
        hideSpinners();
        showIssueMovedAlert($issueNumber);
        renderIssue(newIssue)
        $issue.remove()
      },
      failure: function(xhr) {
        hideSpinners();
        alert(xhr.responseText)
      }
    })
    .always(function() {
      draggableIssues()
    })
  })
}
