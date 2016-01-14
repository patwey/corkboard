function fetchRepos() {
  $.get("/current", function(currentUser) {
    var currentUsername = currentUser.username;

    $.get("https://api.github.com/users/"+ currentUsername +"/repos", function(repos) {
      $.each(repos, function(index, repo) {
        renderProject(repo);
      });
    });
  });
}
