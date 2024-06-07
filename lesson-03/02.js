const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
let indexOfOrange = words.indexOf("апельсин");

if(indexOfOrange !== -1) {
  console.log("Ура! нашел");
} else {
  console.log("Придется поискать в другом магазине…");
}