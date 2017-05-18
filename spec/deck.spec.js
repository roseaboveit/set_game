import Deck from 'deck';
import Card from 'card';

describe("Deck", function(){

  var deck = Deck.new

  it('should access the cards directory', function(){
    jasmine.log(deck.cards_dir)
    expect(deck.cards_dir).toBeDefined
  })
})
