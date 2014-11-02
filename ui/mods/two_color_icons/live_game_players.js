(function() {
  $.get('coui://ui/mods/ui_icon_secondary_color/player-outline-mask.html', function(html) {
    $('svg:first').after(html)
  });

  model.secondary = function(army) {
    return 'rgb(' + army.secondary_color[0] + ',' + army.secondary_color[1] + ',' + army.secondary_color[2] + ')';
  }

  $('.div_player_icon .outline').replaceWith('<div class="outline outline_masked" data-bind="style: {backgroundColor: $parent.secondary($data)}"></div>')
})()
