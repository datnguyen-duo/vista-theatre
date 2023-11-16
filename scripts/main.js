document.addEventListener("DOMContentLoaded", function () {});

window.addEventListener("load", function () {
  document.body.classList.remove("loading");

  var toggles = document.querySelectorAll(".slider__vertical--toggle li"),
    wrapper = document.querySelector(".slider__vertical--wrapper"),
    slides = document.querySelectorAll(".slider__vertical--slide"),
    info = document.querySelectorAll("#featured .content .inner");

  wrapper.scrollTo(0, 0);
  toggles.forEach((el, i) => {
    var pos = slides[i].offsetTop;

    el.addEventListener("click", function () {
      wrapper.scrollTo({
        top: pos,
        behavior: "smooth",
      });

      toggles.forEach((toggleClass) => {
        toggleClass.classList.remove("active");
      });

      toggles[i].classList.add("active");

      info.forEach((infoClass) => {
        infoClass.classList.remove("active");
      });

      info[i].classList.add("active");
    });
  });
});
