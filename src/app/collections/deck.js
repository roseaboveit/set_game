const Deck = Backbone.Collection.extend({
  model: Card,
  initialize: function() {
    //Make all the cards from all the files that have pictures and names that are parsable
  }
})
