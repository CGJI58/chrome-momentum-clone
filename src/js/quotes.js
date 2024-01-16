const quotes = [
  {
    quote: "An investment in knowledge pays the best interest.",
    author: "-Benjamin Franklin-",
  },
  {
    quote:
      "Bottoms in the investment world don't end with four-year lows; they end with 10- or 15-year lows.",
    author: "-Jim Rogers-",
  },
  {
    quote: "Don't look for the needle in the haystack. Just buy the haystack!",
    author: "-John Bogle-",
  },
  {
    quote:
      "Given a 10% chance of a 100 times payoff, you should take that bet every time.",
    author: "-Jeff Bezos-",
  },
  {
    quote:
      "I don't look to jump over seven-foot bars; I look around for one-foot bars that I can step over.",
    author: "-Warren Buffett-",
  },
  {
    quote:
      "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
    author: "-Warren Buffett-",
  },
  {
    quote: "In investing, what is comfortable is rarely profitable.",
    author: "-Robert Arnott-",
  },
  {
    quote:
      "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.",
    author: "-George Soros-",
  },
  {
    quote: "Know what you own, and know why you own it.",
    author: "-Peter Lynch-",
  },
  {
    quote:
      "The four most dangerous words in investing are, it’s different this time.",
    author: "-Sir John Templeton-",
  },
  {
    quote:
      "The individual investor should act consistently as an investor and not as a speculator.",
    author: "-Ben Graham-",
  },
  {
    quote:
      "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    author: "-Phillip Fisher-",
  },
  {
    quote:
      "Wide diversification is only required when investors do not understand what they are doing.",
    author: "-Warren Buffett-",
  },
  {
    quote:
      "With a good perspective on history, we can have a better understanding of the past and present, and thus a clear vision of the future.",
    author: "-Carlos Slim Helu-",
  },
  {
    quote:
      "You get recessions, you have stock market declines. If you don't understand that's going to happen, then you're not ready, you won't do well in the markets.",
    author: "-Peter Lynch-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
