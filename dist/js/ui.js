class UI {
  // show Profile
  showProfile(profile, repos) {
    this.output = "";
    repos.forEach(repo => {
      this.output += `<div class="repo mt-05">
          <div class="repo-link">
            <a href=${repo.html_url} target="_blank">${repo.name} </a>
          </div>
          <div>
            <ul class="box-list">
              <li class=" bg-prm-blue btn-small">Stars: ${
                repo.stargazers_count
              }</li>
              <li class=" bg-prm-yellow btn-small">Watchers: ${
                repo.watchers
              }</li>
              <li class=" bg-prm-green btn-small">Forks: ${repo.forks}</li>
            </ul>
          </div>
        </div>`;
    });
    document.getElementById("user").innerHTML = `
    <div class="card" id="profile">
        <div id="avatar">
          <img src=${profile.avatar_url} alt="" />
          <a href=${
            profile.html_url
          } class="btn-primary bg-prm-blue avt-btn mt-05"
          target="_blank">View Profile</a
          >
        </div>
        <div>
          <div id="content">
            <ul class="box-list boxes">
              <li class="bg-prm-blue btn-small">Public Repos: ${
                profile.public_repos
              }</li>
              <li class="bg-prm-yellow btn-small">Public Gists: ${
                profile.public_gists
              }</li>
              <li class="bg-prm-green btn-small">Followers: ${
                profile.followers
              }</li>
              <li class="bg-prm-blue btn-small">Following: ${
                profile.following
              }</li>
            </ul>
          </div>
          <div id="detail">
            <ul id="detail-list">
              <li>Company: ${profile.company}</li>
              <li>Website/blog: <a href=${profile.blog}>${profile.blog}</a></li>
              <li>Location: ${profile.location}</li>
              <li>Member Since: ${profile.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Latest Repos -->
      <h2 class="my-1">Latest Repos</h2>
      <div id="repos" class="mb-1">
        ${this.output}
      </div>
    
    `;
  }

  // show Alert
  showAlert(message) {
    this.clearAlert();
    const div = document.createElement("div");
    div.innerHTML = message;
    div.className = "alert mb-1";
    const searchContainer = document.getElementById("search-container");
    const card = document.querySelector(".card");
    searchContainer.insertBefore(div, card);

    // clear Alert
    setTimeout(this.clearAlert, 3000);
  }
  // clear Alert
  clearAlert() {
    let alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
  clearProfile() {
    document.getElementById("user").innerHTML = "";
  }
}
