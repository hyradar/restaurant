
function foodItem(name, description, foodGroup, price, isVegetarian, isVegan, isDairyFree, isGlutenFree, hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy) {

    return {
        name,
        description,
        foodGroup,
        price,
        isVegetarian,
        isVegan,
        isDairyFree,
        isGlutenFree,
        hasTreeNuts,
        hasPeanuts,
        hasFish,
        hasShellfish,
        hasEgg,
        hasSoy,
    }
}

//Creating Seafood Menu
let scallops = foodItem(
    //name, description, goodGroup, price
    'Scallops', 'Lightly floured and shallow fried served with a yuzu chipotle aioli', 'seafood', 20,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, false, false);

                        
let kingCrab = foodItem(
    //name, description, goodGroup, price
    'Grilled King Crab', 'Herb-Garlic Butter, Curry Aioli', 'seafood', 25,

    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,

    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, true, false);

                                
let mixedSeafoodGrill = foodItem(
    //name, description, foodGroup, price
    'Mixed Seafood Grill', 'King Crab, Spanish Octopus, Blue Prawn, Flamed Table-Side', 'seafood', 80, 
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, true, false);

let tuna = foodItem(
    //name, description, foodGroup, price
    'Tuna au Poivre', 'Green Peppercorn Sauce', 'seafood', 42, 
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, true, true, false, false);

let fishTacos = foodItem(
    //name, description, foodGroup, price
    'Fish Tacos', 'Alaskan Halibut, Crispy Batter, Salsa Verde', 'seafood', 26, 
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, true, true);

let veganCrabCakes = foodItem(
    //name, description, foodGroup, price
    'Vegan Crab Cakes', 'Made with hearts of palm and chickpeas for a savory, satisfying appetizer or main course.', 'seafood', 30, 
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

//Creating Entree Menu
let focaccia = foodItem(
    //name, description, goodGroup, price
    'Cheese-Baked Foccacia', 'Served with House-Cured Olives', 'entrees', 15,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);


let oysters = foodItem(
    //name, description, goodGroup, price
    'Pearl Oysters', 'Six Oysters from Bay of Bedec in New Brunswick, Canada', 'entrees', 21,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, true, false, false);

let calamari = foodItem(
    //name, description, goodGroup, price
    'Tempura Calamari', 'served with piparra peppers and a garlic aioli drizzle', 'entrees', 24,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, true, false, false);

let shrimp = foodItem(
    //name, description, goodGroup, price
    'Buffalo Shrimp', 'tossed in our signature buffalo sauce, blue cheese dressing', 'entrees', 24,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, true, true, false);

let carrotLox = foodItem(
    //name, description, goodGroup, price
    'Carrot Lox', 'carrot strips flavored with tamari, liquid smoke and kelp seasoning', 'entrees', 18,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);


//Creating Mains Menu
let steakFrites = foodItem(
    //name, description, goodGroup, price
    'Steak Frites', 'Wood-Grilled, Truffle Béarnaise', 'mains', 52,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let ribeye = foodItem(
    //name, description, goodGroup, price
    'Grass-Fed Bone-in Ribeye', 'Reidsville, GA', 'mains', 73,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let urchinSpaghetti = foodItem(
    //name, description, goodGroup, price
    'Seat Urchin Spaghetti', 'Japanese Uni, Housemade Pasta, Black Truffle', 'mains', 47,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, true, false, true);

let mushroomPasta = foodItem(
    //name, description, goodGroup, price
    'Hen of the Woods Mushroom Pasta', 'with Roasted Garlic and Pesto', 'mains', 32,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, false, false, true);

let pokeBowl = foodItem(
    //name, description, goodGroup, price
    'Yellowtail Poke Bowl', 'jasmine rice, edamame, avocado, carrots, red cabbage, cilantro, ginger vinaigrette', 'mains', 36,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, true, false, false, true);



//Creating Salads Menu

let caesar = foodItem(
    //name, description, goodGroup, price
    'Classic Caesar', 'Aged Parmesan, Anchovy', 'salads', 22,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, true, false);

let greek = foodItem(
    //name, description, goodGroup, price
    'Greek Tomato Salad', 'Feta, Peppers, Olives', 'salads', 25,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let chopped = foodItem(
    //name, description, goodGroup, price
    'Chopped Salad', 'Haricots Verts, Avocado, Almonds', 'salads', 28,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, false, false, false);

let seafoodSalad = foodItem(
    //name, description, goodGroup, price
    'Signature Seafood Salad', 'alaskan bairdi crab, shrimp, lobster, hearts of palm, avocado, egg, cucumber, olives, tomatoes, scallions, louis dressing and italian vinaigrette', 'salads', 28,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, true, true, true);

let wedge = foodItem(
    //name, description, goodGroup, price
    'Iceberg Wedge', 'blue cheese dressing, herb vinaigrette, bacon, egg, tomatoes, croutons', 'salads', 19,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, true, false);


//Create Desserts Menu

let napoleon = foodItem(
    //name, description, goodGroup, price
    'Banana Cream Napoleon', 'Warm Caramel, Phyllo, Whipped Cream', 'desserts', 13,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, true, false);

let cremebrulee = foodItem(
    //name, description, goodGroup, price
    'Pumpkin Spice Crème Brûlée', 'Candied Pecans, Pumpkin Gelato', 'desserts', 15,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, false, false, false, true, false);

let pie = foodItem(
    //name, description, goodGroup, price
    'Peanut Butter Pie', 'with Chocolate gluten-free cust', 'desserts', 11,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, true, false, false, false, false);

let praline = foodItem(
    //name, description, goodGroup, price
    'Hazelnut Praline', 'Chocolate Shell, Salted Caramel', 'desserts', 11,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, false, false, false);

let gelato = foodItem(
    //name, description, goodGroup, price
    'Vegan Dark Chocolate Caramel Gelato', 'Chocolate Shell, Salted Caramel', 'desserts', 17,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

export let entreesMenu = [focaccia, oysters, calamari, shrimp, carrotLox];
export let seafoodMenu = [scallops, kingCrab, mixedSeafoodGrill, tuna, fishTacos, veganCrabCakes];
export let mainsMenu = [steakFrites, ribeye, urchinSpaghetti, mushroomPasta, pokeBowl];
export let saladsMenu = [caesar, greek, chopped, seafoodSalad, wedge];
export let dessertsMenu = [napoleon, cremebrulee, pie, praline, gelato];