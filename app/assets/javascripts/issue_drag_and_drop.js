function draggableIssues() {
  $(".issue").draggable({
    containment: $(".cards"),
    stack: ".cards",
  });

  $("#in-progress").droppable({
    accept: ".issue",
    drop: function(event, ui) {
      if (ui.draggable.parent().attr("id") == "in-progress") {
        $(ui.draggable).draggable("option", "revert", true);
      } else {
        $(ui.draggable).draggable("option", "revert", false);
        ui.draggable.remove();
        toInProgress(ui.draggable);
      }
    }
  });

  $("#backlog").droppable({
    accept: ".issue",
    drop: function(event, ui) {
      if (ui.draggable.parent().attr("id") == "backlog") {
        $(ui.draggable).draggable("option", "revert", true);
      } else {
        $(ui.draggable).draggable("option", "revert", false);
        ui.draggable.remove();
        toBacklog(ui.draggable);
      }
    }
  });

  $("#complete").droppable({
    accept: ".issue",
    drop: function(event, ui) {
      if (ui.draggable.parent().attr("id") == "complete") {
        $(ui.draggable).draggable("option", "revert", true);
      } else {
        $(ui.draggable).draggable("option", "revert", false);
        ui.draggable.remove();
        toComplete(ui.draggable);
      }
    }
  });
}
