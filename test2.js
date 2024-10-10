const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//products.forEach((product) => console.log(product.name, product.price));
//products.forEach((product) => console.log(product.name, 1.1 * product.price));
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
//console.log("Unique Categories:", categories);

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
//console.log(electronics);

const expensiveProducts = products.filter((product) => product.price > 300);
//console.log("Expensive Products:", expensiveProducts);

const goodProducts = products.filter((product) => product.rating >= 4.5);
//goodProducts.forEach((goodProduct) => console.log(goodProduct.name));

const cheapElectronics = products.filter(
  (product) => product.price < 1000 && product.category === "Electronics"
);
cheapElectronics.forEach((cheapElectronic) =>
  console.log(cheapElectronic.name, cheapElectronic.price)
);
