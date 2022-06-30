gsap.to('h1', {opacity: 1, y: 20, easeOut: 'power3', duration: 1, delay: 1})
gsap.to('#parOne', {opacity: 1, y: 40, easeOut: 'power3', duration: 1, delay: 1.5})
gsap.to('#btn', {opacity: 1, y: 60, easeOut: 'power3', duration: 1, delay: 2})

const button = document.querySelector("#btn");
const par = document.querySelector("#parTwo");

const quotes = [
    '“All human wisdom is summed up in these two words – ‘Wait and hope.’” — Alexandre Dumas, The Count of Monte Cristo',
    '“If you have the guts to be yourself, other people’ll pay your price.” — John Updike, Rabbit, Run',
    '“We are such stuff as dreams are made on, and our little life is rounded with a sleep.” — William Shakespeare, The Tempest',
    '“All the world is made of faith, and trust, and pixie dust.” — J.M. Barrie, Peter Pan',
    '“Get busy living or get busy dying.” — Stephen King, Rita Hayworth and Shawshank Redemption',
    '“‘But man is not made for defeat,’ he said. ‘A man can be destroyed but not defeated.’” ― Ernest Hemingway, The Old Man and the Sea',
    '“All we can know is that we know nothing. And that’s the height of human wisdom.” — Leo Tolstoy, War and Peace',
    '“There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after.” ― J.R.R. Tolkien, The Hobbit',
    '“Open your eyes and see what you can with them before they close forever.” — Anthony Doerr, All the Light We Cannot See',
    '“There is some good in this world, and it’s worth fighting for.” — J.R.R. Tolkien, The Two Towers',
    '“It is only with the heart that one can see rightly; what is essential is invisible to the eye.” — Antoine de Saint-Exupéry, The Little Prince',
    '“The only way out of the labyrinth of suffering is to forgive.” ― John Green, Looking for Alaska',
    '“Beware; for I am fearless, and therefore powerful.” — Mary Shelley, Frankenstein',
    '“This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.” — William Shakespeare, Hamlet',
    '“And so we beat on, boats against the current, borne back ceaselessly into the past.” — F. Scott Fitzgerald, The Great Gatsby',
    '“Memories warm you up from the inside. But they also tear you apart.” — Haruki Murakami, Kafka on the Shore',
    '“It is nothing to die; it is dreadful not to live.” — Victor Hugo, Les Misérables',
    '“Who controls the past controls the future. Who controls the present controls the past.”  — George Orwell, Nineteen Eighty-Four',
    '“Don’t ever tell anybody anything. If you do, you start missing everybody.” — J. D. Salinger, The Catcher in the Rye',
    '“It does not do to dwell on dreams and forget to live.” ― J.K. Rowling, Harry Potter and the Sorcerer’s Stone'
];

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})
