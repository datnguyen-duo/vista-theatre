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

  const swiper = new Swiper(".swiper", {
    loop: false,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
