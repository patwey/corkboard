function renderIssue(issue) {
  var labels = issue.labels.map(function(label) {
    return label.name;
  });
  var issueType = getIssueType(issue, labels);

  issueTemplate(issue, issueType, labels);
}

function getIssueType(issue, labels) {
  if (issue.state == "closed") {
    return "complete";
  } else if (labels.includes("in progress")) {
    return "in progress";
  } else {
    return "backlog";
  }
}

function issueTemplate(issue, type, labels) {
  var selector = issueSelector(type);
  var body     = issueBody(issue);
  var label    = issueLabel(labels);

  $(selector).append(
    "<div class='issue panel panel-warning ui-widget-content'>" +
    "<div class='panel-heading'>" +
    "<span class='issue-number'>" + issue.number + "</span>" + " - " + issue.title +
    "</div>" +
    "<div class='panel-body'>" +
    "<span>" +
    body +
    "</span>" +
    label +
    "</div>"+
    "</div>"
  );
}

function issueLabel(labels) {
  if (labels.includes("help wanted")) {
    return "<div class='pull-right'><span class='label label-success'>Help Wanted</span></div>"
  } else if (labels.includes("enhancement")) {
    return "<div class='pull-right'><span class='label label-info'>Enhancement</span></div>"
  } else if (labels.includes("bug")) {
    return "<div class='pull-right'><span class='label label-danger'>Bug</span></div>"
  } else {
    return ""
  }
}

function issueSelector(type) {
  var selectors = { "in progress":"#in-progress",
                    "backlog":"#backlog",
                    "complete":"#complete" };

  return selectors[type];
}

function issueBody(issue) {
  if (issue.body) {
    return issue.body;
  } else {
    return "";
  }
}
