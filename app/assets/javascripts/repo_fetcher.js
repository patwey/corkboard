function fetchRepos() {
  $.get("/current", function(user) {
    fetchReposForUser(user);
  });
}

function fetchReposForUser(user) {
  var userReposEndpoint = "https://api.github.com/user/repos?access_token=" + user.token + "&visibility=public&affiliation=owner&sort=updated";

  $.get(userReposEndpoint, function(repos) {
    hideSpinners();
    renderValidRepos(repos);
  });
}

function hideSpinners() {
  $(".spinner").hide();
}

function renderValidRepos(repos) {
  $.each(repos, function(idx, repo) {
    if (isValidRepo) { renderRepo(repo); }
  });
}

function isValidRepo(repo) {
  return !repo.fork;
}
