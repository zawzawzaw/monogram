goog.provide('monogram.graph.SingleGraph');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('monogram.graph.Data');
goog.require('monogram.graph.RaphaelGraphBG');
goog.require('monogram.graph.RaphaelGraphItem');


/**
 * The SingleGraph constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
monogram.graph.SingleGraph = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, monogram.graph.SingleGraph.DEFAULT, options);
  this.element = element;


  this.data_id = '';

  /**
   * @type {jQuery}
   */
  this.svg_element = this.element.find('.graph-svg');

  /**
   * @type {jQuery}
   */
  this.overlay_element = this.element.find('.graph-overlay');


  


  /**
   * @type {monogram.graph.Data}
   */
  this.graph_data = null;


  this.scale_factor = this.options['scale_factor'];



  this.center_x = 300 * this.scale_factor;
  this.center_y = 300 * this.scale_factor;
  this.original_width = 600 * this.scale_factor;
  this.original_height = 600 * this.scale_factor;


  /**
   * @type {monogram.graph.RaphaelGraphItem}
   */
  this.graph_item = null;  


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //



  if (goog.isDefAndNotNull(this.element.attr('data-id'))) {
    this.data_id = this.element.attr('data-id');
  } else {
    console.log('Error: monogram.graph.SingleGraph: missing attr');
  }

  


  // create raphaelJS
  this.paper = Raphael(this.svg_element[0],this.original_width, this.original_height);


  this.raphael_bg = new monogram.graph.RaphaelGraphBG({
    'scale_factor': this.scale_factor
  }, this.paper);


  this.graph_item = new monogram.graph.RaphaelGraphItem({}, this.paper);

  
  

  console.log('init');
};
goog.inherits(monogram.graph.SingleGraph, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for SingleGraph
 * @const {object}
 */
monogram.graph.SingleGraph.DEFAULT = {
  'scale_factor': 1
};

/**
 * SingleGraph Event Constant
 * @const
 * @type {string}
 */
monogram.graph.SingleGraph.EVENT_01 = '';

/**
 * SingleGraph Event Constant
 * @const
 * @type {string}
 */
monogram.graph.SingleGraph.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


monogram.graph.SingleGraph.prototype.private_method_01 = function() {};
monogram.graph.SingleGraph.prototype.private_method_02 = function() {};
monogram.graph.SingleGraph.prototype.private_method_03 = function() {};
monogram.graph.SingleGraph.prototype.private_method_04 = function() {};
monogram.graph.SingleGraph.prototype.private_method_05 = function() {};
monogram.graph.SingleGraph.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
monogram.graph.SingleGraph.prototype.sample_method_calls = function() {
  monogram.graph.SingleGraph.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(monogram.graph.SingleGraph.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {monogram.graph.Data} graph_data_param
 */
monogram.graph.SingleGraph.prototype.set_data = function(graph_data_param) {

  this.graph_data = graph_data_param;

  this.graph_item.set_data_and_element(this.graph_data, this.overlay_element);

  this.graph_item.animate_in(2);

  /*
  TweenMax.delayedCall(5, this.test_01, [], this);
  TweenMax.delayedCall(10, this.test_02, [], this);
  TweenMax.delayedCall(15, this.test_03, [], this);
  TweenMax.delayedCall(20, this.test_04, [], this);
  */
  
};

/*
monogram.graph.SingleGraph.prototype.test_01 = function() {
  this.graph_item.animate_in();
};
monogram.graph.SingleGraph.prototype.test_02 = function() {
  this.graph_item.animate_out();
};
monogram.graph.SingleGraph.prototype.test_03 = function() {
  this.graph_item.instant_animate_in();
};
monogram.graph.SingleGraph.prototype.test_04 = function() {
  this.graph_item.instant_animate_out();
};
*/

monogram.graph.SingleGraph.prototype.public_method_03 = function() {};
monogram.graph.SingleGraph.prototype.public_method_04 = function() {};
monogram.graph.SingleGraph.prototype.public_method_05 = function() {};
monogram.graph.SingleGraph.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.SingleGraph.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.SingleGraph.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.SingleGraph.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
monogram.graph.SingleGraph.prototype.on_event_handler_04 = function(event) {
};

