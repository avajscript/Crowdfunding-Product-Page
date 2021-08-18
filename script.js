window.onload = () => {
  // Variables
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdown = document.querySelector(".dropdown");
  const rewardbuttons = document.querySelectorAll(".reward-button");

  // Functions

  function showRewardPage() {}

  function toggleDropdown() {
    let img = "";
    if (dropdown.style.display == "none") {
      dropdown.style.display = "block";
      img = "../images/icon-close-menu.svg";
    } else {
      dropdown.style.display = "none";
      img = "../images/icon-hamburger.svg";
    }
    dropdownButton.firstElementChild.src = img;
  }

  // Event Listeners
  dropdownButton.addEventListener("click", toggleDropdown);

  rewardbuttons.forEach((button) => {
    button.addEventListener("click", showRewardPage);
  });
};
