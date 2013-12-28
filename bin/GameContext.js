// Generated by CoffeeScript 1.6.3
(function() {
  window.GameContext = (function() {
    function GameContext(canvas) {
      this.canvas = canvas;
      this.context = this.canvas.getContext('2d');
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
    }

    GameContext.prototype.get2d = function() {
      return this.context;
    };

    GameContext.prototype.getCanvas = function() {
      return this.canvas;
    };

    return GameContext;

  })();

}).call(this);
