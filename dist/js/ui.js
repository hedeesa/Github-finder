class UI {
  // show Profile
  showProfile(profile) {}

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
}
