$(document).ready(function() {
  fetchIssues()
})

function toInProgress() {
  $(".to-in-progress").on('click', function() {
    var repoName = $('#repo-name').html()
    var $issue = $(this).parents(".issue")
    var $issueNumber = $(this).parents(".issue").children(".panel-heading").children(".issue-number").html()

    $.get("/current", function(currentUser) {
      var accessToken = currentUser.token
      var postParams = '{"state": "open", "labels": ["in progress"]}'
      var url = "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken

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
    })
  })
}

function toComplete() {
  $(".to-complete").on('click', function() {
    var repoName = $('#repo-name').html()
    var $issue = $(this).parents(".issue")
    var $issueNumber = $(this).parents(".issue").children(".panel-heading").children(".issue-number").html()

    $.get("/current", function(currentUser) {
      var accessToken = currentUser.token
      var postParams = '{"state": "closed", "labels": []}'
      var url = "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken

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
    })
  })
}

function toBacklog() {
  $(".to-backlog").on('click', function() {
    var repoName = $('#repo-name').html()
    var $issue = $(this).parents(".issue")
    var $issueNumber = $(this).parents(".issue").children(".panel-heading").children(".issue-number").html()

    $.get("/current", function(currentUser) {
      var accessToken = currentUser.token
      var postParams = '{"state": "open", "labels": []}'
      var url = "https://api.github.com/repos/" + repoName + "/issues/" + $issueNumber +"?access_token=" + accessToken

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
    })
  })
}

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

function renderIssue(issue) {
  var labels = issue.labels.map(function(label) { return label.name })

  if (issue.state == "open") {
    if (labels.includes("in progress")) {
      renderInProgressIssue(issue)
    } else {
      renderBacklogIssue(issue)
    }
  } else {
    renderCompleteIssue(issue)
  }
}

function renderInProgressIssue(issue) {
  $('#in-progress').append(
    "<div class='issue panel panel-warning'>" +
      "<div class='panel-heading'>" +
        "<span class='issue-number'>" + issue.number + "</span>" + " - " + issue.title +
      "</div>" +
      "<div class='panel-body'>" +
        "<span>" +
          issueBody(issue) +
        "</span>" +
      "</div>" +

      "<div class='text-right'>" +
        "<a class='to-backlog arrow btn btn-default btn-sm' href='#'><span class='glyphicon glyphicon-menu-left'</span></a>" +
        "<a class='to-complete arrow btn btn-default btn-sm' href='#'><span class='glyphicon glyphicon-menu-right'</span></a>" +
      "</div>" +
    "</div>"
  )
}

function renderBacklogIssue(issue) {
  $('#backlog').append(
    "<div class='issue panel panel-warning'>" +
      "<div class='panel-heading'>" +
        "<span class='issue-number'>" + issue.number + "</span>" + " - " + issue.title +
      "</div>" +
      "<div class='panel-body'>" +
        "<span>" +
          issueBody(issue) +
        "</span>" +
      "</div>" +

      "<div class='text-right'>" +
        "<a class='to-in-progress arrow btn btn-default btn-sm' href='#'><span class='glyphicon glyphicon-menu-right'</span></a>" +
      "</div>" +
    "</div>"
  )
}
function renderCompleteIssue(issue) {
  $('#complete').append(
    "<div class='issue panel panel-warning'>" +
      "<div class='panel-heading'>" +
        "<span class='issue-number'>" + issue.number + "</span>" + " - " + issue.title +
      "</div>" +
      "<div class='panel-body'>" +
        "<span>" +
          issueBody(issue) +
        "</span>" +
      "</div>" +

      "<div class='text-right'>" +
        "<a class='to-in-progress arrow btn btn-default btn-sm' href='#'><span class='glyphicon glyphicon-menu-left'</span></a>" +
      "</div>" +
    "</div>"
  )
}

function issueBody(issue) {
  if (issue.body) {
    return issue.body
  } else {
    return ""
  }
}
