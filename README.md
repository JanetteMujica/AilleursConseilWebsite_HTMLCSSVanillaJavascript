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
```


5) JavasCript
6) MediaQueries in CSS

## Creation process

In the links below, I share early wireframes of the project. From there on, I went through an iterative process. I consulted my instructor, classmates, and client. Their feedback guided my design decisions. 

For example, I changed the hamburger menu for a simpler, visible, and straightforward menu system that makes the structure of the website much clearer. It also led me to reorganise the welcome page and bring forward the client's main message around his research orientation and carreer objective.

- <a href="https://mathieubcd.com/midterm.mathieubcd.com/index.html" target="_blank">
    Project</a>
- <a href="https://mathieubcd.com/midterm.mathieubcd.com/style.html" target="_blank">
    Style</a>
- <a href="https://mathieubcd.com/midterm.mathieubcd.com/inspiration.html" target="_blank">
    Inspiration</a>



## Acknowledgement

Special thanks to <a href="http://santoromano.com/" target="_blank">
    Santo Romano</a> who, in addition to introduce me to <a href="https://www.concordia.ca/finearts/design/programs/web-design-and-user-interface.html" target="_blank">
    Web Design and User Interface</a>, taught me that the web was meant to be open. 
    
    Let's Copy. Transform. Combine.



## Copyright and license

Code released under the <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">Creative Commons Universal License</a>.
