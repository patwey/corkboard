function inProgressLabels($issue) {
  var existingLabel = $issue.find(".label").html()
  if (existingLabel) {
    return '["in progress", "'+ existingLabel.toLowerCase() + '"]'
  } else {
    return '["in progress"]'
  }
}


function backlogLabels($issue) {
  var existingLabel = $issue.find(".label").html()
  if (existingLabel) {
    return '["'+ existingLabel.toLowerCase() + '"]'
  } else {
    return '[]'
  }
}

function completeLabels($issue) {
  var existingLabel = $issue.find(".label").html()
  if (existingLabel) {
    return '["'+ existingLabel.toLowerCase() + '"]'
  } else {
    return '[]'
  }
}
