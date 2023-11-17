document.addEventListener("DOMContentLoaded", function () {
  // FORM SUBMISSION (https://docs.netlify.com/forms/setup/)
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    const name = myForm.getAttribute("name");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => document.querySelector(".success").classList.add("active"))
      .catch((error) => alert(error));
  };

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", handleSubmit);
  });
});

window.addEventListener("load", function () {
  document.body.classList.remove("loading");

  gsap.to("#banner h1 img ", {
    yPercent: 15,
    scrollTrigger: {
      trigger: "#banner",
      start: "top top",
      scrub: true,
    },
  });

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
