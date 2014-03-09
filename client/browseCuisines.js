// Template.browseCuisines.created = function(){
//     Meteor.setTimeout(function(){
        
//     })
// }

Template.browseCuisines.helpers({
    cuisines : function(){
        return cuisines.find({})
    }
})


