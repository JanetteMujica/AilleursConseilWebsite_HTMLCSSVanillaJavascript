<p align="center">
  <a href="https://mathieubcd.com/ailleursconseilolderversion.mathieubcd.com/" target="_blank">
    <img src="https://mathieubcd.com/ailleursconseilolderversion.mathieubcd.com/images/ailleurslogo.svg" alt="Logo" width=350 height=auto>
  </a>
  
  <h3 align="center"><a href="https://mathieubcd.com/ailleursconseilolderversion.mathieubcd.com/" target="_blank">Visit Ailleurs Conseil Website</a></h3>
  
  <p align="center">
    Legible, aesthetic, user-friendly and easily navigable<br><br>HTML, CSS and Vanilla Javascript<br>Mobile First Approach
  </p>
</p>



## Table of contents

- [What's included](#whats-included)
- [How to implement a collapsed side navigation menu bar with hamburger icon](#How-to-implement-a-collapsed-side-navigation-menu-bar-with-hamburger-icon)
- [Creation process](#creation-process)
- [Acknowledgement](#acknowledgement)
- [Copyright and license](#copyright-and-license)



## What's included
```text

AilleursConseilWebsite/
        └── css
            └── accordion.css
            └── animonscroll.css
            └── boitesmandats.css
            └── media.css
            └── normalize.css
            └── pagetransitions.css
            └── styles.css
        └── images
        └── js
            └── animonscroll.js
            └── boitesmandats.js
            └── cursor.js
            └── hidenav.js
            └── pagetransitions.js
            └── progressbar.js
            └── sidenav.js
        └── json
            └── cards.json
        └── pdf
        equipe.html
        index.html
        janette.html
        mathieu.html
        patient.html
        populaire.html
        soignante.html
```

## How to implement a collapsed side navigation menu bar with hamburger icon

<h3> 1) HTML </h3>
<h4>HAMBURGER ICON AND LOGO</h4>

In my header, I have a hamburger icon which is the span with the character &#9776; that has an onclick function "OpenNav()". I also have a logo that has a class of logorondactif on the index page and a class of logoversindex on secondary pages (if the user clicks, he will be directed to the index page).

```text
<div class="headerheadernav" id="navbar">
  <header class="headernav">
    <div><span onclick="openNav()">&#9776;</span></div>
    <div><img src="images/symbolerouge.svg" alt="" class="logorondactif"></div>
  </header>
</div>
```
<h4>NAVIGATION SIDE BAR</h4>
The navigation bar is simply a collection of links (a tags) with onclick function closeNav() - when we click on a navigation link the menu closes automatically. I have also added a function to animate the page transition with class .ptrans which I wont elaborate here but codes are available to upload.

```text
  <nav id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

    <a href="index.html" class="symbolenav" onclick="closeNav()" class= "ptrans"></a>

    <a href="index.html#mandats" style="font-size:22.4px;" onclick="closeNav()">MANDATS</a>
    <a href="soignante.html" onclick="closeNav()" class= "ptrans" >communauté soignante</a>
    <a href="populaire.html" onclick="closeNav()" class= "ptrans">stratégie d'éducation populaire</a>
    <a href="patient.html" onclick="closeNav()" class= "ptrans">partenariat patient en recherche</a>
    <a href="equipe.html" style="font-size:22.4px;" onclick="closeNav()" class= "ptrans">ÉQUIPE</a>
    <a href="mathieu.html" onclick="closeNav()" class= "ptrans">mathieu bouchard</a>
    <a href="janette.html" onclick="closeNav()" class= "ptrans">janette mujica</a>

    <a href="index.html#qr" style="font-size:22.4px;" onclick="closeNav()">Q&R</a>
    <a href="index.html#fondements" style="font-size:22.4px;" onclick="closeNav()">FONDEMENTS</a>
  </nav>
```

<h3> 2) CSS </h3>
<h4>NORMALIZATION</h4>
I have used a <a href="https://github.com/necolas/normalize.css/" target="_blank">normalize.css</a> created by <a href="https://github.com/necolas" target="_blank">Nicolas Gallagher</a> that preserves useful defaults, unlike many CSS resets. 

<h4>CSS AFFECTING GLOBAL STYLES</h4>

```text
* {
  box-sizing: border-box;
  text-decoration: none;
  cursor: none;
}

:root {
  --beige: #FFFAEA;
  --jaune: #FADA80;
  --orange: #FDA346;
  --rouge: #FB483B;
  --or: #FFD069;
  --vert: #53B675;
  --bleu: #4083BB;
  --noir: #000000;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: var(--beige);
  font-size: 14px;
  width: 100%;
  overflow-x: hidden;
}

/* HEADER AND PARAGRAPH STYLING */
h1 {
  font-family: ivyjournal, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.6em;
  color: var(--noir);
}

h2 {
  font-family: supria-sans, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1.6em;
  color: var(--noir);
}

h3 {
  font-family: supria-sans, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1.6em;
  color: var(--beige);
}

h4 {
  font-family: supria-sans, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1em;
  color: var(--beige);
}

h5 {
  font-family: supria-sans, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1em;
  color: var(--noir);
}

h6 {
  font-family: ivyjournal, sans-serif;
  font-weight: 600;
  font-style:normal;
  font-size: 1.6em;
  margin: 0.67em 0;
}

p {
  font-family: ivyjournal, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1em;
  color: var(--noir);
  line-height: 1.5;
}

/* A LINKS STYLING */

a {
  color: var(--noir);
  font-weight: bold;
  }
  /* unvisited link */
a:link {
  color: var(--noir);
  font-weight:bolder;
  text-decoration: underline;
}

/* visited link */
a:visited {
  color: var(--noir);
}

/* mouse over link */
a:hover {
  color: var(--rouge);
}
```

<h4>HAMBURGER ICON AND LOGO</h4>

```text

/* HEADER NAVIGATION */

.headernav {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  position: fixed;
  z-index: 100;
  font-size: 2.5em;
}

.headerheadernav {
  background-color: var(--beige);
  position: fixed;
  z-index: 90;
  width: 100%;
  height: 50px;
}

/* INDEX PAGE */
.logorondactif {
  width: 42px;
}

/* SECONDARY PAGE */
.logoversindex {
  background: url("../images/symbole.svg") no-repeat;
  background-size: 42px;
  width: 42px;
  height: 42px;
}

```
<h4>NAVIGATION SIDE BAR</h4>

```text
/* SIDE MENU */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  z-index:1500;
}


.symbolenav {
  background: url("../images/symbole.svg") no-repeat;
  background-size: 80px;
  width: 80px;
  height: 80px;
  margin-top:60px;
  margin-bottom: 40px;
  margin-left: 32px;
}

.sidenav a {
  font-family: supria-sans, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: var(--beige);
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding-top: 1em;
}


```

<h3> 3) Javascript </h3>

<h4>Side Navigation - Open and Close</h4>

```text
function openNav() {
  myMediaFunction(x);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// MEDIA QUERIES

function myMediaFunction(x) {
  if (x.matches) {
    console.log('big');

      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";

  } else {
    console.log('small');

    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0px";
}
}

const x = window.matchMedia('(min-width: 600px)');

x.addListener(myMediaFunction); 

```

<h3> 4) MEDIA QUERIES IN CSS</h3>

To develop a reponsive website, I used media queries.

<h4>STEP ONE</h4>
With the help of the DevTools of the browser by setting it to the smalest screen available (ex. iPhone SE), code the website in one single column.

<h4>STEP TWO</h4>
Define the breakpoints of your media queries. In my case, I chose these:

For tablets: @media only screen and (min-width: 600px) { ... }
For laptop: @media only screen and (min-width: 980px) { ... }
For desktop: @media only screen and (min-width: 1400px) { ... }


<h4>STEP THREE</h4>
Again, with the help of the DevTools of the browser, amend your sizes and layouts for larger screens following the breakpoints that you have chosen.

```text

/* === TABLET LAYOUT INHERITS FROM MOBILE 600PX 980PX === */
@media only screen and (min-width: 600px) {
  body {font-size: 18px;}

  /* INDEX */
  .headerheadernav {height: 60px;}
  .logoversindex {width: 50px; height: 50px; background-size: 50px;}
  .logorondactif {width: 50px;}
  .ailleurslogo {width: 320px; top: 140px;}
  .button {width: 150px;}
  .button:hover span:after {right: -15px;}
  .introaccueil {padding-top: 4.5em;}
  .flechemandat {top: 340px;}
  #loupe {top: -450px;}
  #flechehumaniser {top: -200px;}
  #venn {width: 400px;}
  #intelligence {top: 125px; right: 295px;}
  #methodes {top: 125px; right: 35px;}
  #changement {top: 275px; right: 80px;}

  /* FOOTER */
  .prochain {width: 175px; top: -150px;}
  .prochain:hover span:after {right: -20px;}
  .couche {width: 562.5px; height: 282px; top: -283px;}
  .panneau {width: 175px; top: -358px;}
  .prochainmot {font-size: 17px; top: -340px; right: 40px;}
  .contact a {width: 100%}
  .portf {width: 75%;}
  .footertext {height: 225px;}
  .word {bottom: 100px;}
  .ecriveznous {width: 200px;}
  .ecriveznous:hover span:after {right: -10px;}

  /*ÉQUIPE  */
.histoire {padding-bottom: 20em;}
.visitez {padding-top: 90px;}
.paragraphrecommandation {padding-bottom: 11em;}

  /* PAGES MANDAT */
.accueilmandat {height: 250px;}
.backgroundmandat {height:230px;}
.soignante{width: 330px; left: -62px; bottom: -40px;}
.populaire {position: absolute; bottom: 0; width: 260px; height: 230px;}
.patient {width: 190px; height: 190px; bottom: 18px;}
  }


/* === DESKTOP LAYOUT INHERITS FROM MOBILE AND TABLET > 980PX === */
@media only screen and (min-width: 980px) {
  body {font-size: 24px;}

  /* INDEX */
  .headerheadernav {top:18px; font-size: 18px;}
  .ailleurslogo {width: 320px; top: 160px;}
  .button {width: 180px;}
  .button:hover span:after {right: -13px;}
  .introaccueil {padding-top: 4em;}
  .humaniser {padding-top: 4em;}
  .flechemandat {top: 370px; width: 730px;}
  #loupe {top: -390px; right: 460px; width: 225px; transform: rotate(-220deg)}
  #flechehumaniser {width: 400px; top: -170px;}
  #venn {width: 600px; right: 60px; top: 80px;}
  #intelligence {top: 260px; right: 500px; }
  #methodes {top: 260px; right: 80px;}
  #changement {top: 480px; right: 190px;}
  .loupeintro {width: 250px;}
  #mandats {padding-top: 240px;}


  .boiteindividuelle {display: flex; flex-direction: column; width: 250px}
  .buttonplusvert{position: static;}
  .buttonplusrouge {position: static;}
  .buttonplusbleu{position: static;}

  /* FOOTER */
  .prochain {width: 220px; top: -200px;}
  .prochain:hover span:after {right: -25px;}
  .couche {width: 675px; height: 338.4px; top: -340px;}
  .panneau {width: 220px; top: -445px;}
  .prochainmot {font-size: 20px; top: -422px; right: 45px;}
  .footer {flex-direction: row;}
  .calltoactionfigure {height: 353.8px; width: 62%; background-color: var(--bleu);}
  .contactfooter {font-size: 18px; width: 38%;}
  .contactfooter a {background-color: var(--vert);}
  .contact a {padding: 20px 37px; }
  .word {font-size: 3.1em; bottom: 140px;}
  .ecriveznous {width: 250px;}
  .ecriveznous:hover span:after {right: -10px;}
  /* ÉQUIPE */
  .famille {width: 300px; top: -220px;}
  .bio {top: 250px;}
  .loupemandat {width: 250px;}
  .visitez {padding-top: 175px;}
  }

  .accueilmandat {height: 290px;}
  .backgroundmandat {height:270px;}
  .soignante{width: 390px; left: -62px; bottom: -46px;}
  .populaire {position: absolute; bottom: 0; width: 300px; height: 270px;}
  .patient {width: 220px; height: 220px; bottom: 24px;}

/* === MUCH BIGGER DESKTOP LAYOUT INHERITS FROM MOBILE AND TABLET > 980PX === */
@media only screen and (min-width: 1400px) {
body {font-size: 28px;}

/* INDEX */
.headerheadernav {top: 18px; height: 60px;}
.ailleurslogo {width: 320px; top: 160px;}
.button {width: 220px;}
.button:hover span:after {right: -20px;}
.introaccueil {padding-top: 3em;}
.humaniser {padding-top: 4em;}
.flechemandat {top: 370px; width: 730px;}
#loupe {top: -390px; right: 460px; width: 225px; transform: rotate(-220deg)}
#flechehumaniser {width: 400px; top: -170px;}
#venn {width: 650px; right: 60px; top: 0px;}
#intelligence {top: 200px; right: 525px; }
#methodes {top: 200px; right: 80px;}
#changement {top: 440px; right: 190px;}
.loupeintro {width: 250px;}
#mandats {padding-top: 340px;}


.boiteindividuelle {display: flex; flex-direction: column; width: 430px}
.buttonplusvert{position: static;}
.buttonplusrouge {position: static;}
.buttonplusbleu{position: static;}

/* FOOTER */
.prochain {width: 220px; top: -200px;}
.prochain:hover span:after {right: -20px;}
.couche {width: 675px; height: 338.4px; top: -340px;}
.panneau {width: 220px; top: -445px; right: 24px}
.prochainmot {font-size: 20px; top: -422px; right: 45px;}
.word {font-size: 4em; bottom: 120px;}
.ecriveznous {width: 290px;}
.ecriveznous:hover span:after {right: -10px;}


/* ÉQUIPE */
.famille {width: 300px; top: -220px;}
.bio {top: 250px;}
.loupemandat {width: 250px;}
.visitez {padding-top: 320px;}
}

.accueilmandat {height: 290px;}
.backgroundmandat {height:270px;}
.soignante{width: 390px; left: -62px; bottom: -46px;}
.populaire {position: absolute; bottom: 0; width: 300px; height: 270px;}
.patient {width: 220px; height: 220px; bottom: 24px;}

  }
```

## Creation process

To come



## Acknowledgement

Special thanks to <a href="http://santoromano.com/" target="_blank">
    Santo Romano</a> who, in addition to introduce me to <a href="https://www.concordia.ca/finearts/design/programs/web-design-and-user-interface.html" target="_blank">
    Web Design and User Interface</a>, taught me that the web was meant to be open. 
    
    Let's Copy. Transform. Combine.



## Copyright and license

Code released under the <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">Creative Commons Universal License</a>.
