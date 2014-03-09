// Collection Definitions
cuisines = new Meteor.Collection('cuisines');
cooks = new Meteor.Collection('cooks');
orders = new Meteor.Collection('orders');

Router.configure({
  layoutTemplate: 'userLayout'
});

Router.map(function () {
    this.route('browseCuisines', {
        path: '/',
        layout_template : 'userLayout',
        template: 'browseCuisines',
        waitOn : function(){
            return Meteor.subscribe('cuisines');
        }

    });

    this.route('browseCooks', {
        path: '/:cuisine',
        layout_template : 'userLayout',
        waitOn : function(){
            var cuisine = this.params.cuisine
            return Meteor.subscribe('cooks', cuisine)
        }
    });

    this.route('ordersList', {
        path: '/orders/:cook',
        layout_template: 'cookLayout',
        template: 'ordersList',
        waitOn : function(){
            var cook = this.params.cook
            return [Meteor.subscribe('cook_data', cook),
                    Meteor.subscribe('orders', cook)]
        },
        data: function(){
            return cooks.findOne()

        }

    });

});

