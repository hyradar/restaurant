
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


export let seafoodMenu = [scallops, kingCrab, mixedSeafoodGrill, tuna, fishTacos, veganCrabCakes];
// console.log(seafoodMenu);