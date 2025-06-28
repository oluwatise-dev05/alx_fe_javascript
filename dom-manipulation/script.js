console.log("JS is connected!");
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "Imagination is more important than knowledge.", category: "Creativity" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Motivation" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", category: "Design" },
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const display = document.getElementById("quoteDisplay");
  display.innerHTML = "";

  const quoteText = document.createElement("p");
  quoteText.textContent = `"${quote.text}"`;

  const quoteCategory = document.createElement("small");
  quoteCategory.textContent = `— Category: ${quote.category}`;

  display.appendChild(quoteText);
  display.appendChild(quoteCategory);
}

function addQuote() {
  const quoteTextInput = document.getElementById("newQuoteText");
  const quoteCategoryInput = document.getElementById("newQuoteCategory");

  const newText = quoteTextInput.value.trim();
  const newCategory = quoteCategoryInput.value.trim();

  if (newText === "" || newCategory === "") {
    alert("Please enter both quote text and category.");
    return;
  }

  quotes.push({
    text: newText,
    category: newCategory
  });

  quoteTextInput.value = "";
  quoteCategoryInput.value = "";

  displayRandomQuote();
}

document.getElementById("newQuote").addEventListener("click", displayRandomQuote);


