const quotes = [
  {
    quote:
      "Life ought to be a struggle of desire toward adventures whose nobility will fertilize the soul.",
    author: "Rebecca West",
  },
  {
    quote:
      "Honesty is a good thing, but it is not profitable to its possessor unless it is kept under control.",
    author: "Don Marquis",
  },
  {
    quote:
      "Security is mostly a superstition. It does not exist in nature.... Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "We can learn even from our enemies.",
    author: "Ovid",
  },
  {
    quote:
      "Every composer knows the anguish and despair occasioned by forgetting ideas which one had no time to write down.",
    author: "Hector Berlioz",
  },
  {
    quote:
      "If you live to be one hundred, you've got it made. Very few people die past that age.",
    author: "George Burns",
  },
  {
    quote:
      "Passion is the quickest to develop, and the quickest to fade. Intimacy develops more slowly, and commitment more gradually still.",
    author: "Robert Sternberg",
  },
  {
    quote:
      "Nothing is more admirable than the fortitude with which millionaires tolerate the disadvantages of their wealth.",
    author: "Rex Stout",
  },
  {
    quote:
      "Money can't buy friends, but it can get you a better class of enemy.",
    author: "Spike Milligan",
  },
  {
    quote:
      "He that is busy is tempted by but one devil; he that is idle, by a legion.",
    author: "Thomas Fuller",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
