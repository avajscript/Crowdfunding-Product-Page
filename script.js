window.onload = () => {
  // Variables

  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdown = document.querySelector(".dropdown");
  const pledgebuttons = document.querySelectorAll(".reward-button");
  const pledgePage = document.querySelector(".reward-popup");
  const closePledgePageButton = document.querySelector(".close-reward-page");

  // Creates list of pledge articles based on the number in their id (Ex. 1,2,3)
  const pledgePopupArticles = [1, 2, 3].map((i) => {
    return document.querySelector(`.reward-popup-${i}`);
  });

  // Creates list of pledge icons (green circles) based on the number in their id (Ex. 1,2,3)
  const pledgeIcons = [1, 2, 3].map((i) => {
    return document.querySelector(`#icon-${i}`);
  });

  // Functions

  function clearPledges() {
    // Goes through each article and removes styling
    pledgePopupArticles.forEach((article) => {
      article.classList.remove("active-border");
    });
    // Goes through each icon and removes styling
    pledgeIcons.forEach((icon) => {
      icon.classList.remove("active-icon");
    });
  }

  function highlightPledge(pledgeIndex) {
    clearPledges(); // Calls function to remove styling from each pledge article
    pledgePopupArticles[pledgeIndex - 1].classList.add("active-border");
    pledgeIcons[pledgeIndex - 1].classList.add("active-icon");
  }
  // Close pledge-reward page when 'X' is clicked
  function closePledgePage() {
    pledgePage.style.display = "none";
  }
  // Show pledge-reward page on click
  function showPledgePage(event) {
    // Finds the selected pledge based on the what number it contains (Ex. 1,2,3)
    let regex = /[0-9]/g;
    let rewardIndex = event.target.id.match(regex).join("");
    highlightPledge(parseInt(rewardIndex) + 1);
    // Display the pledge-reward page
    pledgePage.style.display = "block";
  }

  // Shows or hides dropdown based on top-right hamburger click
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

  pledgebuttons.forEach((button) => {
    button.addEventListener("click", showPledgePage);
  });

  closePledgePageButton.addEventListener("click", closePledgePage);

  pledgeIcons.forEach((icon) => {
    icon.parentNode.addEventListener("click", () => {
      console.log(icon);
    });
  });
};
