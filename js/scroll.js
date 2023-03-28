// For Scroll-animate star
// event pada saay link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi atribut href-nya dulu
  var hrefnya2 = $(this).attr("href");

  // lalu tankap elemen href yang bersangkutan dari "this"(elemen tertentu)
  var elementHref1 = $(hrefnya2);

  // lalu pindahkan scro  llnya
  $("html").animate(
    {
      scrollTop: elementHref1.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  // penghenti atribut href e agar tidak jalan
  e.preventDefault();
});
