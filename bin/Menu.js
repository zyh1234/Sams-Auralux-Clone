// Generated by CoffeeScript 1.6.3
(function() {
  window.Menu = (function() {
    function Menu() {
      console.log('Menu created');
    }

    Menu.prototype.tick = function(state_controls) {
      console.log('Menu tick');
      return state_controls(function(state, states) {
        return state.execute = states.IN_GAME;
      });
    };

    return Menu;

  })();

}).call(this);
