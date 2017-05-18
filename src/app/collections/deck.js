import Card from 'app/models/card';
import Backbone from 'backbone'; //<--- Once it works, try without!

const Deck = Backbone.Collection.extend({
  model: Card,
  initialize: function() {
    //Take in all the files
    cards_dir: require('../../build/assets/cards');
    //Each file will be parsed, perhaps into a hash

    //Each hash can then be used to create a Card

    //Each card should then be in the deck <--- validation
  }
})

export default Deck;
