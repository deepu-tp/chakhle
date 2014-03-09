
// Cuisines collection defn and publication 
cuisines = new Meteor.Collection('cuisines');

Meteor.publish('cuisines', function(){
    return cuisines.find({})
})


// cooks collection defn and publication 
cooks = new Meteor.Collection('cooks');

Meteor.publish('cooks', function(cuisine){
    console.log(cuisine)
    return cooks.find({cuisine : cuisine})
})

Meteor.publish('cook_data', function(cook){
    return cooks.find({_id : cook})
})


// Cuisines collection defn and publication 
orders = new Meteor.Collection('orders');

Meteor.publish('orders', function(cook){
    console.log(cook)
    return orders.find({cook_id : cook})
})
 

 
_.each(cuisines_data, function(x){
    try{    
        x['_id'] = x['code']
        cuisines.insert(x)
    }
    catch(ex){

    }
})
 
_.each(cooks_data, function(x){
    try{    
        x['_id'] = x['id']
        cooks.insert(x)
    }
    catch(ex){

    }
})
