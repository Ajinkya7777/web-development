const quotes = [
  "Successful people are not gifted; they just work hard, then succeed on purpose.",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  "The only thing standing between you and outrageous success is continuous progress.",
  "I never dreamt of success. I worked for it.",
  "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
  "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
  "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired and success achieved.",
  "I've come to believe that each of us has a personal calling that's as unique as a fingerprint and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard and also allowing the energy of the universe to lead you.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "The most certain way to succeed is always to try just one more time.",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
  "Talent is nothing without persistence.",
  "Persistence is the twin sister of excellence. One is a matter of quality; the other, a matter of time.",
  "You never know what's around the corner. It could be everything. Or it could be nothing. You keep putting one foot in front of the other, and then one day you look back and you've climbed a mountain.",
  "A little more persistence, a little more effort and what seemed hopeless failure may turn to glorious success.",
  "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
  "Perseverance is the hard work you do after you get tired of doing the hard work you already did.",
  "It does not matter how slowly you go so long as you do not stop.",
  "Continuous effort—not strength or intelligence—is the key to unlocking our potential.",
  "If you get tired, learn to rest, not to quit.",
  "Perseverance is not a long race; it is many short races one after the other.",
];

let ind = new Set();

function changeQuote() {
  const paragraph = document.getElementById("quote");

  while (true) {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    console.log(randomQuote);

    if (ind.size == quotes.length) {
      ind.clear();
    }
    if (ind.has(randomQuote)) {
      continue;
    }
    ind.add(randomQuote);
    paragraph.innerHTML = quotes[randomQuote];
    break;
  }
}
