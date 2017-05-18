const Card = Backbone.Model.extend({
  initialize: function(hash) {
    color: hash['color'],
    number: hash['number'],
    shading: hash['shading'],
    shape: hash['shape']
  }
})
