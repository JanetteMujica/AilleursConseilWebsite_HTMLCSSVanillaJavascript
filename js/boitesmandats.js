const body = document.querySelector('#boitesmandats');
const mySection = document.createElement('section');
// body.prepend(mySection);
body.appendChild(mySection);

const requestURL = '../json/cards.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const cards = request.response;
  buildCards(cards);
};

function buildCards(obj) {
  const posts = obj.cards;
  console.log(posts);

  for (let i = 0; i < posts.length; i++) {
    const myFigure = document.createElement('figure');
    myFigure.className = 'boite'; // if you need to add a className
    const myImg = document.createElement('img');
    const myH1 = document.createElement('h1');
    const myH2 = document.createElement('h2');
    const myPara = document.createElement('p');
    const myA = document.createElement('a');

    myH1.textContent = posts[i].headline;
    myH2.textContent = posts[i].subhead;
    myPara.textContent = posts[i].description;

    // Set content and attributes
    myFigure.appendChild(myImg);
    myImg.setAttribute('src', posts[i].pic);
    myFigure.appendChild(myH1);
    myFigure.appendChild(myH2);
    myFigure.appendChild(myPara);
    myFigure.appendChild(myA);
    myA.textContent = 'SUITE';
    myA.setAttribute('href', posts[i].info);
    myA.setAttribute('target', '_blank');

    // mySection.appendChild(myFigure);
    mySection.appendChild(myFigure);
  }
}
