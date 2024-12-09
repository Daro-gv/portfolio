let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = sec.offsetTop;
    let height = sec.offsetHeight;
    let winTop = window.scrollY;
    let id = sec.getAttribute("id");

    if (winTop >= top - height / 2 && winTop < top + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
