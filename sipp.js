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
    document.getElementById("mySidenav").style.width = "300px";
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

function before(){
  document.getElementById('myImage')
  .src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/313107181_5567656986647583_8440371019358891128_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHA2ua3mvT2iOVqzZUS5I-yumXP3z7ZzCm6Zc_fPtnMKSnoJ7ufSMflRUyb0C0KFljiL2AZd5VpiQeA7JqjHzKa&_nc_ohc=Eo6t1E12uOkAX_dCbon&_nc_ht=scontent.fmnl9-3.fna&oh=03_AdSVChWMmecpZkBKk1QGbZWxDcwZ37UPPxFklyd635xGLw&oe=639C3E0E";
}

function afterr(){
  document.getElementById('myImage')
  .src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/314462467_489679013128555_5649162447721715774_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE6btoFpv7dvMyqpfSBDnokyoH4RGrRGtnKgfhEatEa2UNKmvHnyJT6LRkajeuYY9rDYCgRosd0mplxC-S1B5qC&_nc_ohc=Z86qLbYzY04AX99Ows9&_nc_ht=scontent.fmnl9-3.fna&oh=03_AdQl9Tqs_LU-PzpSh4LRtPEzK42jpbY3fZGzcaaxeVBXGA&oe=639C3208";
}
   function sunod(){
  document.getElementById('myImage')
  .src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/310558050_3363397847241588_2158831051865461418_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeERTJjKr_KEiX3Lh5pnyNFD1RZsE8RUAmjVFmwTxFQCaNIp3Bc2kK-TRNy8UExeovE94W_E7G5rIrRgaVneECxi&_nc_ohc=UVnBUl5vbH4AX8Jn974&_nc_ht=scontent.fmnl9-3.fna&oh=03_AdT4ZqNute3GRwq5r6mNUIeeN-7nx8eElJa5bXFmUX0lRQ&oe=639C2346";
}

function openrrl() {
  document.getElementById("rrlz").style.height = "3000px";
}