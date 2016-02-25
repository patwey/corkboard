function renderRepo(repo) {
  var repoNode = repoTemplate(repo.name, sanitizeRepoDescription(repo));
  appendRepoNode(repoNode);
}

function sanitizeRepoDescription(repo) {
  if (repo.description) {
    return repo.description;
  } else {
    return "";
  }
}

function appendRepoNode(repoNode) {
  $("#projects").append(repoNode);
}
