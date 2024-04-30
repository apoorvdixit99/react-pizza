const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Pizza', accessor: 'pizza' },
    { Header: 'Toppings', accessor: 'toppings' },
    { Header: 'Fan Favourite', accessor: 'fanFavourite' },
    { Header: 'Delivery', accessor: 'delivery' },
];
  
let data = [
    {
        id: 1,
        pizza: "Thin Crust Pizza",
        toppings: ["jalapenos", "olives", "onions", "bell pepper"],
        fanFavourite: "yes",
        delivery: "yes"
    },
    {
        id: 2,
        pizza: "Margherita",
        toppings: ["tomatoes", "basil", "mozzarella"],
        fanFavourite: "yes",
        delivery: "yes"
    },
    {
        id: 3,
        pizza: "Pepperoni",
        toppings: ["pepperoni"],
        fanFavourite: "no",
        delivery: "no"
    },
];

const deletePizza = (pizzaId) => {
    data = data.filter(pizza => pizza.id != pizzaId);
};

const toppings = ["pepperoni", "olives", "jalapenos", "tomatoes", "onions", "bell pepper", "basil", "mozzarella"]

function addPizza(newPizza) {
    data.append(newPizza);
}

export { data, columns, deletePizza, toppings,  };