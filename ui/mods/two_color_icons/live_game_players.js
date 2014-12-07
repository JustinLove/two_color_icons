(function() {
  $.get('coui://ui/mods/ui_icon_secondary_color/player-outline-mask.html', function(html) {
    $('svg:first').after(html)
  });

  model.secondary = function(army) {
    if (army.secondary_color.toString() == army.primary_color.toString()) {
      return 'rgb(0, 0, 0)'
    } else {
      return 'rgb(' + army.secondary_color[0] + ',' + army.secondary_color[1] + ',' + army.secondary_color[2] + ')';
    }
  }

  $('.div_player_icon .outline').replaceWith('<div class="outline outline_masked" data-bind="style: {backgroundColor: $root.secondary($data)}"></div>')
})()
