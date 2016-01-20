function draggableIssues() {
  $(".issue").draggable({
    containment: $(".cards"),
    stack: ".cards"
  });

  $("#in-progress").droppable({
    accept: ".issue",
    drop: function(event, ui) {
      toInProgress(ui.draggable);
    }
  });

  $("#backlog").droppable({
    accept: ".issue",
    drop: function(event, ui) {
      toBacklog(ui.draggable);
    }
  });

  $("#complete").droppable({
    accept: ".issue",
    drop: function(event, ui) {
      toComplete(ui.draggable);
    }
  });
}
