const github = new Github();
const ui = new UI();

const search = document.getElementById("search");

search.addEventListener("keyup", e => {
  const user = e.target.value;
  if (user !== "") {
    github.get(user).then(data => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User Not Found");
      } else {
        // show profile
        ui.showProfile(data.profile, data.repos);
        console.log(data.profile, data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
