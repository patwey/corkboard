function renderIssue(issue, option) {
  var labelNames = pluckLabelNames(issue.labels);

  var label = issueLabel(labelNames);
  var columnId = getColumnId(issue, labelNames);
  var body = sanitizeIssueBody(issue.body);

  if (option == "prepend") {
    $(columnId).prepend(issueTemplate(issue, body, label, issue.number, issue.title));
  } else {
    $(columnId).append(issueTemplate(issue, body, label, issue.number, issue.title));
  }
}

function pluckLabelNames(labels) {
  return labels.map(function(label) { return label.name; });
}

function issueLabel(labelNames) {
  var labelNodeData = getLabelNodeData(labelNames) // returns [Label Text, Label Style]
  return getLabelDOMNode(labelNodeData);
}

function getLabelNodeData(labels) {
  switch (labels) {
    case labels.includes("help wanted"):
      return ["Help Wanted", "label-success"];
      break;
    case labels.includes("enhancement"):
      return ["Enhancement", "label-info"];
      break;
    case labels.includes("bug"):
      debugger
      return ["Bug", "label-danger"];
      break;
  }
}

function getLabelDOMNode(labelNodeData) {
  if (labelNodeData) {
    var labelText = labelNodeData[0];
    var labelStyle = labelNodeData[1];

    return "<div class='pull-right'><span class='label" + labelStyle + "label-success'>" +
           labelText + "</span></div>"
  } else {
    return ""
  }
}

function sanitizeIssueBody(body) {
  if (body) {
    return body;
  } else {
    return "";
  }
}

function getColumnId(issue, labels) {
  if (issue.state == "closed") {
    return "#complete";
  } else if (labels.includes("in progress")) {
    return "#in-progress";
  } else {
    return "#backlog";
  }
}
