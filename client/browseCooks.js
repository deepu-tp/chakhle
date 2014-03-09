Template.browseCooks.rendered = function(){

    $(this.findAll('.rateit')).rateit()

}

Template.browseCooks.helpers({
    cooks : function(){
        return cooks.find({capacity: {$gt : 0}})
    }
})

Template.cook.events({

    'submit .cook' : function(){

        event.preventDefault()
        var quantity = event.target[0].value

        orders.insert({
            'quantity' : quantity,
            'cook_id' : this._id,
            'user_id' : 'user1',
            'user_address' : 'ThoughtWorks, Koramangala, Bangalore',
            'status' : 'ordered'
        })

        cooks.update({
                _id : this._id,
            },

            {
                $inc : {capacity : -quantity}
            })


    }
})