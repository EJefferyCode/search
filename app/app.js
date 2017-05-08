var myRestoApp = angular.module('xApp', []);

myRestoApp.controller('RestController', ["$scope", function($scope){
    
  $scope.message="welcome to resto";
  $scope.rests = [
     {
        meal:"Piper's Fish Market Meal Deal: Grilled Fish with Rice & Kale",
        price: 12.99
     },
     {
         meal: "Pizza Baby Meal Deal: 2 Large Pizzas with 2 16oz Drinks",
         price: 17.99
     },
     {
         meal: "Cookies Meal Deal: Cookie Pie (chocolate pie with a chocolate chip cookie crust)",
         price:8.99
     },
      
     {
         meal: "The Starbucks Kitchen Meal Deal: Chicken Taragon Salad Sandwich",
         price: 4.99
     },
      
     {
         meal: "Soupy Sales Meal Deal: 12oz Bowl of Chicken Soup with Carrots and Rice/1 Free Drink",
         price: 7.50
         
     },
     {
         meal: "Jenny's Chicken Place Meal Deal: 20oz Bucket of Fried Chicken with 16 oz Drink",
         price: 11.99
     },
      {
         meal: "Sandwich To Go Meal Deal: Chicken Salad OR Tuna Or Eggsalad on Rye or White",
         price: 9.99
     },
      {
         meal: "El Paso Way Meal Deal: Taco Plate(10 beef, chicken or pork tacos)",
         price: 11.99
     },
      {
         meal: "Frenchies Meal Deal: Coq au vin with white rice and grilled brocolli",
         price: 20.99
     },
      
      {
         meal: "Sushi Samba Meal Deal: Rainbow Platter (10 different kinds of sushi your choice)/Free Herbal Drink",
         price: 13.99
     },
      {
         meal: "BRHGR Meal Deal: Grassfed Beef Burger with swiss/large yukon potato fries lightly salted",
         price: 11.99
     },
      {
         meal: "SNAX Meal Deal: 1 dozen box of freshly made donuts. **Vegan options available",
         price: 13.99
     },
      {
         meal: "Cake or Pie? Meal Deal: Your Choice of 1 three-layer cake or 1 pie",
         price: 10.99
     },
      {
         meal: "Dana's Meal Deal: Brocolini over rice with a side of miso and 5 piece sushi platter",
         price: 10.25
     },
      {
         meal: "BERGEN Meal Deal: Kale Salad with grilled shrimp and garlic quinoa",
         price: 13.99
     },
  
  ];

    
}]);