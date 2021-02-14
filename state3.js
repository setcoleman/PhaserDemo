demo.state3 = function(){};
demo.state3.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#50ad1d';
    console.log('state3');

    addChangeStateEventListeners();
    
  },
  update: function(){}
};
