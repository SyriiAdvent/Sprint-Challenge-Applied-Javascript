// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerCont = document.querySelector(".header-container");

function Header() {
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const classYear = document.createElement("span");

  header.classList.add("header");
  date.classList.add("date");
  classYear.classList.add("temp");

  date.textContent = `March 28, 2019`;
  title.textContent = `Lambda Times`;
  classYear.textContent = `98°`;

  headerCont.appendChild(header);
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(classYear);
}

Header();

function currentDate() {}
