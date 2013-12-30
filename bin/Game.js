// Generated by CoffeeScript 1.6.3
/*
The primary class for our overarching logic.
*/


(function() {
  window.Game = (function() {
    Game.PLAYER_COLORS = {
      RED: {
        hex: '#F00'
      },
      GREEN: {
        hex: '#0F0'
      },
      BLUE: {
        hex: '#0a7eaa'
      },
      BLACK: {
        hex: '#999'
      }
    };

    Game.UNIT_COLLISION_SENSITIVITY = 40;

    Game.prototype.setupGameplay = function() {
      var green_player, neutral_player, red_player;
      neutral_player = new NeutralPlayer(Game.PLAYER_COLORS.BLACK);
      this.human_player = new Player(Game.PLAYER_COLORS.BLUE);
      red_player = new Player(Game.PLAYER_COLORS.RED);
      green_player = new Player(Game.PLAYER_COLORS.GREEN);
      this.players = [neutral_player, red_player, green_player, this.human_player];
      this.combat_players = [red_player, this.human_player, green_player];
      _.invoke(this.combat_players, 'createRandomPlanets', 0);
      return neutral_player.createRandomPlanets(5);
    };

    function Game() {
      this.setupGameplay();
      this.cursor = new Cursor(this.human_player);
    }

    Game.prototype.tick = function(state_controls) {
      _.invoke(this.players, 'tick');
      this.cursor.tick();
      return Collisions.resolveCollisions(this.combat_players);
    };

    Game.prototype.checkPlanetOwnership = function() {};

    return Game;

  })();

}).call(this);
