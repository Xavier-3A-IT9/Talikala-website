const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
offset += (window.pageYOffset - offset) * speed;

var scroll = "translateY(-" + offset + "px) translateZ(0)";
scrollWrap.style.transform = scroll;

callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

$(function () {
var elements = $(".text, .img, .abttext, .textz").toArray();
$(window).scroll(function () {
    elements.forEach(function (item) {
        if ($(this).scrollTop() >= $(item).offset().top - 400) {
            $(item).addClass("reveal");
        }
    });
});
elements.forEach(function (item) {
    if ($(this).scrollTop() >= $(item).offset().top - 600) {
        $(item).addClass("reveal");
    }
});
});

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("navbar").style.padding = "0px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "50px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
  
  function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    var coll = document.getElementsByClassName("collapsible");
var i;

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
