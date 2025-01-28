function selectorFunc1() {
  // $(element name).action()
  $("#img1").fadeToggle(3000);
}
// ------------

function selectorFunc2() {
  //   $("div").css("background-color", "orange");
  //   $("#p1").css("font-style", "italic");
  //   $(".para").css("font-style", "italic");
  //   $("#div1, #div3").css("background-color", "green");
  //   $("#div1, li").css("background-color", "purple");
  //   $("div > p").fadeToggle();
  //   $("div p").fadeToggle();
  //   $("p:first").fadeToggle();
  //   $("p:last").fadeToggle();
  //   $("li:odd").fadeToggle();
}

// function eventsFunc1() {
//   document.getElementById("img2").style.width = "1000px";
// }

// $("#btn2").click(eventsFunc2);

// function eventsFunc2() {
//   $("#img2").css("width", "1000px");
// }

// or using ananymous function
// $("#btn2").click(function () {
//   $("#img2").css("width", "1000px");
// });

// it is always good practice to wait until the html document finishes loading first before applying jQuery effects
$("document").ready(function () {
  // Click Events

  //   $("#btn2").click(function () {
  //     $("#img2").css("width", "1000px");
  //   });

  // using double click event
  $("#btn2").dblclick(function () {
    $("#img2").css("width", "1000px");
  });

  //   Mouse Events

  //   $("#img1").mouseenter(function () {
  //     $("#img1").css("width", "500px");
  //   });

  //   $("#img1").mouseleave(() => {
  //     $("#img1").css("width", "250px");
  //   });

  $("#img1").hover(funcA, funcB);

  function funcA() {
    $("#img1").css("width", "500px");
  }

  function funcB() {
    $("#img1").css("width", "250");
  }
});
