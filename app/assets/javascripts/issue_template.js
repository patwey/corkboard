function issueTemplate(issue, body, label, number, title) {
  return "<div class='issue panel panel-warning ui-widget-content'>" +
         "<div class='panel-heading'>" +
         "<span class='issue-number'>" + number + "</span>" + " - " + title +
         "</div>" +
         "<div class='panel-body'>" +
         "<span>" +
         body +
         "</span>" +
         label +
         "</div>"+
         "</div>"
}
