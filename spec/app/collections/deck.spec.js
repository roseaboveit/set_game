import Deck from 'app/collections/deck';
import Card from 'app/models/card';

describe("Deck", function(){

  var deck = Deck.new

  it('should access the cards directory', function(){
    jasmine.log(deck.cards_dir)
    expect(deck.cards_dir).toBeDefined
  })
})
