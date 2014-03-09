
Template.ordersList.helpers({
    orders : function(){
        return orders.find({})
    },

    cook_capacity : function(){
        return cooks.findOne()['capacity']
    }
})

Template.ordersList.events({
    'submit #update_capacity' : function(){

        console.log(event)

        event.preventDefault()
        var cook = Router.getData()
        var capacity = event.target[0].value

        cooks.update({_id : cook._id},
                     {$set : {capacity : +capacity}})

    }
})



var status_options = ['ordered', 'confirmed', 'shipped']
Template.order.rendered = function(){
    var index = _.indexOf(status_options, this.data.status)
    $('#' + this.data._id).get(0).selectedIndex = index
}

Template.order.events({
    'change .status_select' : function(){
        event.preventDefault()
        console.log(event.target.selectedOptions[0])
        var status = event.target.selectedOptions[0].id
        orders.update({_id : this._id},
                     {$set : {status : status}})
    }
})