

function openNav() {
  myMediaFunction(x);
  // document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  // const aLink = document.querySelectorAll('a');
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// aLink.onclick = function () {
//   document.getElementById("mySidenav").style.height = '0';
// };

// MEDIA QUERIES

function myMediaFunction(x) {
  if (x.matches) { // If media query matches
    // document.main.style.marginLeft = "250px";
    console.log('big');
    // function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      // const aLink = document.querySelectorAll('a');
    // }

    // function closeNav() {
    //   document.getElementById("mySidenav").style.width = "0";
    //   document.getElementById("main").style.marginLeft= "0";
    // }
  } else {
    console.log('small');
    // document.main.style.marginLeft = "0px";
    // function openNav() {
    //   document.getElementById("mySidenav").style.width = "350px";
    //   document.getElementById("main").style.marginLeft = "0px";
    //   // const aLink = document.querySelectorAll('a');
    // }
    //
    // function closeNav() {
    //   document.getElementById("mySidenav").style.width = "0";
    //   document.getElementById("main").style.marginLeft= "0";
    // }
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0px";
}
}

const x = window.matchMedia('(min-width: 600px)');
// myMediaFunction(x); // Call listener function at run time
x.addListener(myMediaFunction); // Attach listener function on state changes
