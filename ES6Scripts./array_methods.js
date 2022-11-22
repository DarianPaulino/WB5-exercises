let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];

 function convertToName(input){
     let output;
      output = input.item;
       return output; 
    }
     function displayItemName(input){
         console.log(input); }
         
      let itemNames = cart.map(convertToName); 
      itemNames.forEach(displayItemName);



      let purchasedOptions = [
        {item: "Bread", price: 3.29, quantity: 2},
        {item: "Milk", price: 4.09, quantity: 1},
        {item: "T-Bone Steak", price: 12.99, quantity: 2},
        {item: "Baking Potato", price: 1.89, quantity: 6},
        {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
        {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
        {item: "Apples", price: 0.66, quantity: 6}
   ];
        
   function getTotal(total , array){
    return  total + array.price;
    }
    let total = cart.reduce(getTotal , 0);
    console.log(total)
       




