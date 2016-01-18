function fetchRepos() {
  $.get("/current", function(currentUser) {
    var currentUsername = currentUser.username;

    $.get("https://api.github.com/users/"+ currentUsername +"/repos", function(repos) {
      $(".spinner").hide();
      $.each(repos, function(index, repo) {
        renderProject(repo);
      });
    });
  });
}
