function fetchRepos() {
  $.get("/current", function(currentUser) {
    $.get("https://api.github.com/user/repos?access_token="+ currentUser.token +"&visibility=public&affiliation=owner&sort=updated", function(repos) {
      $(".spinner").hide();
      $.each(repos, function(index, repo) {
        if (!repo.fork) {
          renderProject(repo);
        }
      });
    });
  });
}
