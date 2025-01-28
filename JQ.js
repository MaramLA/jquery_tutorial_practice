// it is always good practice to wait until the html document finishes loading first before applying jQuery effects
$("document").ready(function () {
  // Click Events

  $("#btn2").click(function () {
    $("#img2").css("width", "1000px");
  });

  //  double click event
  $("#btn2").dblclick(function () {
    $("#img2").css("width", "1000px");
  });

  //   Mouse Events

  $("#img1").mouseenter(function () {
    $("#img1").css("width", "500px");
  });

  $("#img1").mouseleave(() => {
    $("#img1").css("width", "250px");
  });

  //   or replace these two functions with hover
  $("#img1").hover(funcA, funcB);

  function funcA() {
    $("#img1").css("width", "500px");
  }

  function funcB() {
    $("#img1").css("width", "250");
  }

  // jQuery Effects

  //   Fading

  $("#btnA").click(() => {
    $("#img3").show(2000);
  });

  $("#btnB").click(() => {
    $("#img3").hide(2000);
  });

  $("#btnC").click(() => {
    $("#img3").toggle(3000);
  });

  $("#btnD").click(() => {
    $("#img3").fadeIn(2000);
  });

  $("#btnE").click(() => {
    $("#img3").fadeOut(2000);
  });

  $("#btnF").click(() => {
    $("#img3").fadeToggle(2000);
  });

  //   Sliding

  $("#btnG").click(() => {
    $("#img3").slideUp(2000);
  });

  $("#btnH").click(() => {
    $("#img3").slideDown(2000);
  });

  $("#btnI").click(() => {
    $("#img3").slideToggle(2000);
  });

  //   stopping
  $("#btnJ").click(() => {
    $("#img3").stop();
  });

  //   CSS Animation Effect

  $("#animateBtn").click(() => {
    $("#img4").animate(
      // style
      {
        left: "150px",
        opacity: 1,
        height: "400px",
        width: "400px",
      },
      //   duration
      2000
      //   "slow"
      //   "fast"
    );
  });
});
