function repoTemplate(name, description) {
  return "<div class='row'>" +
         "<div class='col-md-12'>" +
         "<a class='board-panel' href='/projects/" + name + "''>" +
         "<div class='panel panel-warning'>" +
         "<div class='panel-heading'>" +
         "<h3 class='panel-title'>"+ name + "</h3>" +
         "</div>" +
         "<div class='panel-body'>" +
         "<span class='project-description'>"+
         description +
         "</span>" +
         "</div>" +
         "</a>" +
         "</div>" +
         "</div>" +
         "</div>";
}
