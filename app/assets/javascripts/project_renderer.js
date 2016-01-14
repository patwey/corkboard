function renderProject(repo) {
  var description = repoDescription(repo)
  $("#projects").append(
    "<div class='row'>" +
    "<div class='container'>" +
    "<div class='col-md-8 col-md-offset-2'>" +
    "<a class='board-panel' href='/projects/" + repo.name + "''>" +
      "<div class='panel panel-warning'>" +
      "<div class='panel-heading'>" +
        "<h3 class='panel-title'>"+ repo.name + "</h3>" +
      "</div>" +
      "<div class='panel-body'>" +
        "<span class='project-description'>"
        + description +
        "</span>" +
        "</div>" +
        "</div>" +
    "</a>" +
    "</div>" +
    "</div>" +
    "</div>"
  )
}

function repoDescription(repo) {
  if (repo.description) {
    return repo.description
  } else {
    return ""
  }
}
