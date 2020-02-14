// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardCont = document.querySelector(".cards-container");

axios("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const articles = res.data.articles;
    const articlesKeys = Object.keys(articles);
    console.log("These are the articles", articles);
    console.log("These are the article keys", Object.keys(articles));
    // using obj.key as [notation] to access each article obj
    articlesKeys.forEach(ele => {
      // all Object Arrays are finally parsed down to be card post
      articles[ele].forEach(element => {
        // console.log(element);
        cardMaker(element);
      });
      // console.log(articles[ele]);
    });
  })
  .catch(err => console.error(err));

function cardMaker(props) {
  const card = document.createElement("div");
  const headTitle = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const byAuthor = document.createElement("span");

  card.classList.add("card");
  headTitle.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  headTitle.textContent = props.headline;
  byAuthor.textContent = props.authorName;
  img.src = props.authorPhoto;

  card.appendChild(headTitle);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(byAuthor);
  cardCont.appendChild(card);
}
