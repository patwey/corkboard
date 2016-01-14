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
