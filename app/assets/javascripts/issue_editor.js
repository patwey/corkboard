function toInProgress() {
  $(".to-in-progress").off("click").on("click", function() {
    var repoName = $('#repo-name').html()
    var $issue = $(this).parents(".issue")
    var $issueNumber = $(this).parents(".issue").children(".panel-heading").children(".issue-number").html()

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
        toBacklog()
      })
    })
  })
}

function toComplete() {
  $(".to-complete").off("click").on("click", function() {
    var repoName = $('#repo-name').html()
    var $issue = $(this).parents(".issue")
    var $issueNumber = $(this).parents(".issue").children(".panel-heading").children(".issue-number").html()

    $.get("/current", function(currentUser) {
      var accessToken = currentUser.token
      var postParams = '{"state": "closed", "labels": []}'

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
        toInProgress()
      })
    })
  })
}

function toBacklog() {
  $(".to-backlog").off("click").on("click", function() {
    var repoName = $('#repo-name').html()
    var $issue = $(this).parents(".issue")
    var $issueNumber = $(this).parents(".issue").children(".panel-heading").children(".issue-number").html()

    $.get("/current", function(currentUser) {
      var accessToken = currentUser.token
      var postParams = '{"state": "open", "labels": []}'

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
        toInProgress()
      })
    })
  })
}
