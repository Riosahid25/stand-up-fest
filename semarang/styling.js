$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  margin: 2,
  loop: true,
  autoWidth: true,
  nav: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

$(document).ready(function () {
  $("select.op_category").change(function () {
    $(this).find("option:selected").each(function () {
      var optionValue = $(this).attr("value");
      if (optionValue) {
        $(".box").not("." + optionValue).hide();
        $("." + optionValue).show();
      } else {
        $(".box").hide();
      }
    });
  }).change();

});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);