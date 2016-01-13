$(document).ready(function() {
  fetchIssues()
})

function fetchIssues() {
  var repo_name = $('#repo-name').html()

  $.get("https://api.github.com/repos/"+ repo_name +"/issues?state=all", function(issues) {
    $.each(issues, function(index, issue) {
      renderIssue(issue)
    })
  })
}

function renderIssue(issue) {
  var labels = issue.labels.map(function(label) { return label.name })

  // if the issue is open
  if (issue.state == "open") {
    // if the issue has an "in progress" label (issue.labels)
    if (labels.includes("in progress")) {
      // render in In Progress
      renderInProgressIssue(issue)
    // else
    } else {
      // render in Backlog
      renderBacklogIssue(issue)
    }
  // else
  } else {
    // render in Complete
    renderCompleteIssue(issue)
  }
}

function renderInProgressIssue(issue) {
  $('#in-progress').append(
    "<div class='panel panel-warning'>" +
      "<div class='panel-heading'>" +
        issue.number + " - " + issue.title +
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
    "<div class='panel panel-warning'>" +
      "<div class='panel-heading'>" +
        issue.number + " - " + issue.title +
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
    "<div class='panel panel-warning'>" +
      "<div class='panel-heading'>" +
        issue.number + " - " + issue.title +
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
