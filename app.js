const quotesAuthor = [
  {
    quote: "This is the first quote",
    author: "Michael",
  },
  {
    quote: "This is the second quote",
    author: "Nya",
  },
  {
    quote: "This is the third quote",
    author: "Corey",
  },
  {
    quote: "This is the fourth quote",
    author: "Alex",
  },
  {
    quote: "This is the fifth quote",
    author: "Kane",
  },
  {
    quote: "This is the sixth quote",
    author: "Eric",
  },
  {
    quote: "This is the seventh quote",
    author: "Jaimie",
  },
];

const tweetText = document.querySelector("#text");
const tweetAuthor = document.querySelector("#author");
const materialIconStyle = document.querySelectorAll(".material-icons");
const buttonNext = document.querySelector("#new-quote");
const selectText = document.querySelector("#text");
const selectAuthor = document.querySelector("#author");
let x = 0;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const getRandomQuote = () => {
  q = quotesAuthor[x].quote;
  a = quotesAuthor[x].author;
  x++;
  return [q, a];
};

function setText() {
  const [q, a] = getRandomQuote();
  selectText.innerText = q;
  selectAuthor.innerText = `- ${a}.`;
}

const getRandomColour = () => {
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();
  return `rgb(${r}, ${g}, ${b})`;
};

const setColour = () => {
  const randomColour = getRandomColour();
  document.body.style.backgroundColor = randomColour;
  document.body.style.color = randomColour;
  buttonNext.style.backgroundColor = randomColour;
  for (i = 0; i < 2; i++)
    materialIconStyle[i].style.backgroundColor = randomColour;
};

buttonNext.addEventListener("click", setText);
buttonNext.addEventListener("click", setColour);
