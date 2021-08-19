window.onload = () => {
  // Variables
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdown = document.querySelector(".dropdown");
  const rewardbuttons = document.querySelectorAll(".reward-button");
  const rewardPage = document.querySelector(".reward-popup");
  const closeRewardPageButton = document.querySelector(".close-reward-page");

  // Functions

  function closeRewardPage() {
    rewardPage.style.display = "none";
  }

  function showRewardPage(event) {
    let regex = /[0-9]/g;
    let rewardIndex = event.target.id.match(regex).join("");
    rewardPage.style.display = "block";
    highlightPledge();
  }

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

  closeRewardPageButton.addEventListener("click", closeRewardPage);
};
