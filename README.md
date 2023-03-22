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

1) HTML

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


3) CSS
4) JavasCript
5) MediaQueries in CSS

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
