var PIXI = {};
PIXI.WEBGL_RENDERER = 0;
PIXI.CANVAS_RENDERER = 1;
PIXI.VERSION = "v2.2.0";
PIXI.blendModes = {
    NORMAL:0,
    ADD:1,
    MULTIPLY:2,
    SCREEN:3,
    OVERLAY:4,
    DARKEN:5,
    LIGHTEN:6,
    COLOR_DODGE:7,
    COLOR_BURN:8,
    HARD_LIGHT:9,
    SOFT_LIGHT:10,
    DIFFERENCE:11,
    EXCLUSION:12,
    HUE:13,
    SATURATION:14,
    COLOR:15,
    LUMINOSITY:16
};
PIXI.scaleModes = {
    DEFAULT:0,
    LINEAR:0,
    NEAREST:1
};
PIXI._UID = 0;
PIXI.Float32Array = Float32Array;
PIXI.Uint16Array = Uint16Array;
PIXI.Uint32Array = Uint32Array;
PIXI.ArrayBuffer = ArrayBuffer;
PIXI.INTERACTION_FREQUENCY = 30;
PIXI.AUTO_PREVENT_DEFAULT = true;
PIXI.PI_2 = Math.PI * 2;
PIXI.RAD_TO_DEG = 180 / Math.PI;
PIXI.DEG_TO_RAD = Math.PI / 180;
PIXI.RETINA_PREFIX = "@2x";
PIXI.dontSayHello = false;
PIXI.defaultRenderOptions = {
    view:null,
    transparent:false,
    antialias:false,
    preserveDrawingBuffer:false,
    resolution:1,
    clearBeforeRender:true,
    autoResize:false
}
PIXI.sayHello = function (type) {};
PIXI.Point = function(x, y) {};
PIXI.Point.prototype.clone = function() {};
PIXI.Point.prototype.set = function(x, y) {};
PIXI.Rectangle.prototype.clone = function() {};
PIXI.Rectangle.prototype.contains = function(x, y) {};
PIXI.Rectangle.prototype.constructor = PIXI.Rectangle;
PIXI.EmptyRectangle = new PIXI.Rectangle(0,0,0,0);
PIXI.Polygon = function(points) {};
PIXI.Polygon.prototype.clone = function() {};
PIXI.Polygon.prototype.contains = function(x, y) {};
PIXI.Polygon.prototype.constructor = PIXI.Polygon;
PIXI.Circle = function(x, y, radius) {};
PIXI.Circle.prototype.clone = function() {};
PIXI.Circle.prototype.contains = function(x, y) {};
PIXI.Circle.prototype.getBounds = function() {};
PIXI.Circle.prototype.constructor = PIXI.Circle;
PIXI.Ellipse = function(x, y, width, height) {};
PIXI.Ellipse.prototype.clone = function() {};
PIXI.Ellipse.prototype.contains = function(x, y) {};
PIXI.Ellipse.prototype.getBounds = function() {};
PIXI.Ellipse.prototype.constructor = PIXI.Ellipse;
PIXI.RoundedRectangle = function(x, y, width, height, radius) {};
PIXI.RoundedRectangle.prototype.clone = function() {};
PIXI.RoundedRectangle.prototype.contains = function(x, y) {};
PIXI.RoundedRectangle.prototype.constructor = PIXI.RoundedRectangle;
PIXI.Matrix = function() {};
PIXI.Matrix.prototype.fromArray = function(array) {};
PIXI.Matrix.prototype.toArray = function(transpose) {};
PIXI.Matrix.prototype.apply = function(pos, newPos) {};
PIXI.Matrix.prototype.applyInverse = function(pos, newPos) {};
PIXI.Matrix.prototype.translate = function(x, y) {};
PIXI.Matrix.prototype.scale = function(x, y) {};
PIXI.Matrix.prototype.rotate = function(angle) {};
PIXI.Matrix.prototype.append = function(matrix) {};
PIXI.Matrix.prototype.identity = function() {};
PIXI.identityMatrix = new PIXI.Matrix();
PIXI.DisplayObject = function() {};
PIXI.DisplayObject.prototype.constructor = PIXI.DisplayObject;
PIXI.DisplayObject.prototype.interactive;
PIXI.DisplayObject.prototype.worldVisible;
PIXI.DisplayObject.prototype.mask;
PIXI.DisplayObject.prototype.filters;
PIXI.DisplayObject.prototype.cacheAsBitmap;
PIXI.DisplayObject.prototype.updateTransform = function() {};
PIXI.DisplayObject.prototype.displayObjectUpdateTransform = PIXI.DisplayObject.prototype.updateTransform;
PIXI.DisplayObject.prototype.getBounds = function(matrix) {};
PIXI.DisplayObject.prototype.getLocalBounds = function() {};
PIXI.DisplayObject.prototype.setStageReference = function(stage) {};
PIXI.DisplayObject.prototype.generateTexture = function(resolution, scaleMode, renderer) {};
PIXI.DisplayObject.prototype.updateCache = function() {};
PIXI.DisplayObject.prototype.toGlobal = function(position) {};
PIXI.DisplayObject.prototype.toLocal = function(position, from) {};
PIXI.DisplayObject.prototype._renderCachedSprite = function(renderSession) {};
PIXI.DisplayObject.prototype._generateCachedSprite = function() {};
PIXI.DisplayObject.prototype._destroyCachedSprite = function() {};
PIXI.DisplayObject.prototype._renderWebGL = function(renderSession) {};
PIXI.DisplayObject.prototype._renderCanvas = function(renderSession) {};
PIXI.DisplayObject._tempMatrix = new PIXI.Matrix();
PIXI.DisplayObject.prototype.x;
PIXI.DisplayObject.prototype.y;
PIXI.DisplayObjectContainer = function() {};
PIXI.DisplayObjectContainer.prototype = Object.create( PIXI.DisplayObject.prototype );
PIXI.DisplayObjectContainer.prototype.constructor = PIXI.DisplayObjectContainer;
PIXI.DisplayObjectContainer.prototype.width;
PIXI.DisplayObjectContainer.prototype.height;
PIXI.DisplayObjectContainer.prototype.addChild = function(child) {};
PIXI.DisplayObjectContainer.prototype.addChildAt = function(child, index) {};
PIXI.DisplayObjectContainer.prototype.swapChildren = function(child, child2) {};
PIXI.DisplayObjectContainer.prototype.getChildIndex = function(child) {};
PIXI.DisplayObjectContainer.prototype.setChildIndex = function(child, index) {};
PIXI.DisplayObjectContainer.prototype.getChildAt = function(index) {};
PIXI.DisplayObjectContainer.prototype.removeChild = function(child) {};
PIXI.DisplayObjectContainer.prototype.removeChildAt = function(index) {};
PIXI.DisplayObjectContainer.prototype.removeChildren = function(beginIndex, endIndex) {};
PIXI.DisplayObjectContainer.prototype.updateTransform = function() {};
PIXI.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = PIXI.DisplayObjectContainer.prototype.updateTransform;
PIXI.DisplayObjectContainer.prototype.getBounds = function() {};
PIXI.DisplayObjectContainer.prototype.getLocalBounds = function() {};
PIXI.DisplayObjectContainer.prototype.setStageReference = function(stage) {};
PIXI.DisplayObjectContainer.prototype.removeStageReference = function() {};
PIXI.DisplayObjectContainer.prototype._renderWebGL = function(renderSession) {};
PIXI.DisplayObjectContainer.prototype._renderCanvas = function(renderSession) {};
PIXI.Sprite = function(texture) {};
PIXI.Sprite.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
PIXI.Sprite.prototype.constructor = PIXI.Sprite;
PIXI.Sprite.prototype.width;
PIXI.Sprite.prototype.height;
PIXI.Sprite.prototype.setTexture = function(texture) {};
PIXI.Sprite.prototype.onTextureUpdate = function() {};
PIXI.Sprite.prototype.getBounds = function(matrix) {};
PIXI.Sprite.prototype._renderWebGL = function(renderSession) {};
PIXI.Sprite.prototype._renderCanvas = function(renderSession) {};
PIXI.Sprite.fromFrame = function(frameId) {};
PIXI.Sprite.fromImage = function(imageId, crossorigin, scaleMode) {};
PIXI.SpriteBatch = function(texture) {};
PIXI.SpriteBatch.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.SpriteBatch.prototype.constructor = PIXI.SpriteBatch;
PIXI.SpriteBatch.prototype.initWebGL = function(gl) {};
PIXI.SpriteBatch.prototype.updateTransform = function() {};
PIXI.SpriteBatch.prototype._renderWebGL = function(renderSession) {};
PIXI.SpriteBatch.prototype._renderCanvas = function(renderSession) {};
PIXI.MovieClip = function(textures) {};
PIXI.MovieClip.prototype = Object.create( PIXI.Sprite.prototype );
PIXI.MovieClip.prototype.constructor = PIXI.MovieClip;
PIXI.MovieClip.prototype.totalFrames;
PIXI.MovieClip.prototype.stop = function() {};
PIXI.MovieClip.prototype.play = function() {};
PIXI.MovieClip.prototype.gotoAndStop = function(frameNumber) {};
PIXI.MovieClip.prototype.gotoAndPlay = function(frameNumber) {};
PIXI.MovieClip.prototype.updateTransform = function() {};
PIXI.MovieClip.fromFrames = function(frames) {};
PIXI.MovieClip.fromImages = function(images) {};
PIXI.FilterBlock = function() {};
PIXI.FilterBlock.prototype.constructor = PIXI.FilterBlock;
PIXI.Text = function(text, style) {};
PIXI.Text.prototype = Object.create(PIXI.Sprite.prototype);
PIXI.Text.prototype.constructor = PIXI.Text;
PIXI.Text.prototype.width;
PIXI.Text.prototype.height;
PIXI.Text.prototype.setStyle = function(style) {};
PIXI.Text.prototype.setText = function(text) {};
PIXI.Text.prototype.updateText = function() {};
PIXI.Text.prototype.updateTexture = function() {};
PIXI.Text.prototype._renderWebGL = function(renderSession) {};
PIXI.Text.prototype._renderCanvas = function(renderSession) {};
PIXI.Text.prototype.determineFontProperties = function(fontStyle) {};
PIXI.Text.prototype.wordWrap = function(text) {};
PIXI.Text.prototype.getBounds = function(matrix) {};
PIXI.Text.prototype.destroy = function(destroyBaseTexture) {};
PIXI.Text.fontPropertiesCache = {};
PIXI.Text.fontPropertiesCanvas = document.createElement('canvas');
PIXI.Text.fontPropertiesContext = PIXI.Text.fontPropertiesCanvas.getContext('2d');
PIXI.BitmapText = function(text, style) {};
PIXI.BitmapText.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.BitmapText.prototype.constructor = PIXI.BitmapText;
PIXI.BitmapText.prototype.setText = function(text) {};
PIXI.BitmapText.prototype.setStyle = function(style) {};
PIXI.BitmapText.prototype.updateText = function() {};
PIXI.BitmapText.prototype.updateTransform = function() {};
PIXI.BitmapText.fonts = {};
PIXI.InteractionData = function() {};
PIXI.InteractionData.prototype.getLocalPosition = function(displayObject, point) {};
PIXI.InteractionData.prototype.constructor = PIXI.InteractionData;
PIXI.InteractionManager = function(stage) {};
PIXI.InteractionManager.prototype.constructor = PIXI.InteractionManager;
PIXI.InteractionManager.prototype.collectInteractiveSprite = function(displayObject, iParent) {};
PIXI.InteractionManager.prototype.setTarget = function(target) {};
PIXI.InteractionManager.prototype.setTargetDomElement = function(domElement) {};
PIXI.InteractionManager.prototype.removeEvents = function() {};
PIXI.InteractionManager.prototype.update = function() {};
PIXI.InteractionManager.prototype.rebuildInteractiveGraph = function() {};
PIXI.InteractionManager.prototype.onMouseMove = function(event) {};
PIXI.InteractionManager.prototype.onMouseDown = function(event) {};
PIXI.InteractionManager.prototype.onMouseOut = function(event) {};
PIXI.InteractionManager.prototype.onMouseUp = function(event) {};
PIXI.InteractionManager.prototype.hitTest = function(item, interactionData) {};
PIXI.InteractionManager.prototype.onTouchMove = function(event) {};
PIXI.InteractionManager.prototype.onTouchStart = function(event) {};
PIXI.InteractionManager.prototype.onTouchEnd = function(event) {};
PIXI.Stage = function(backgroundColor) {};
PIXI.Stage.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
PIXI.Stage.prototype.constructor = PIXI.Stage;
PIXI.Stage.prototype.setInteractionDelegate = function(domElement) {};
PIXI.Stage.prototype.updateTransform = function() {};
PIXI.Stage.prototype.setBackgroundColor = function(backgroundColor) {};
PIXI.Stage.prototype.getMousePosition = function() {};
PIXI.hex2rgb = function(hex) {};
PIXI.rgb2hex = function(rgb) {};
PIXI.AjaxRequest = function() {};
PIXI.packColorRGBA = function(r, g, b, a) {};
PIXI.packColorRGB = function(r, g, b) {};
PIXI.unpackColorRGB = function(r, g, b) {};
PIXI.canUseNewCanvasBlendModes = function() {};
PIXI.getNextPowerOfTwo = function(number) {};
PIXI.isPowerOfTwo = function(width, height) {};
PIXI.EventTarget.call = function callCompat(obj) {};
PIXI.EventTarget.mixin = function mixin(obj) {};
PIXI.Event = function(target, name, data) {};
PIXI.Event.prototype.stopPropagation = function stopPropagation() {};
PIXI.Event.prototype.stopImmediatePropagation = function stopImmediatePropagation() {};
PIXI.autoDetectRenderer = function(width, height, options) {};
PIXI.autoDetectRecommendedRenderer = function(width, height, options) {};
PIXI.PolyK = {};
PIXI.PolyK.Triangulate = function(p) {};
PIXI.PolyK._PointInTriangle = function(px, py, ax, ay, bx, by, cx, cy) {};
PIXI.PolyK._convex = function(ax, ay, bx, by, cx, cy, sign) {};
PIXI.initDefaultShaders = function() {};
PIXI.CompileVertexShader = function(gl, shaderSrc) {};
PIXI.CompileFragmentShader = function(gl, shaderSrc) {};
PIXI._CompileShader = function(gl, shaderSrc, shaderType) {};
PIXI.compileProgram = function(gl, vertexSrc, fragmentSrc) {};
PIXI.PixiShader = function(gl) {};
PIXI.PixiShader.prototype.constructor = PIXI.PixiShader;
PIXI.PixiShader.prototype.init = function() {};
PIXI.PixiShader.prototype.initUniforms = function() {};
PIXI.PixiShader.prototype.initSampler2D = function(uniform) {};
PIXI.PixiShader.prototype.syncUniforms = function() {};
PIXI.PixiShader.prototype.destroy = function() {};
PIXI.PixiShader.defaultVertexSrc = [];
PIXI.PixiFastShader = function(gl) {};
PIXI.PixiFastShader.prototype.constructor = PIXI.PixiFastShader;
PIXI.PixiFastShader.prototype.init = function() {};
PIXI.PixiFastShader.prototype.destroy = function() {};
PIXI.StripShader = function(gl) {};
PIXI.StripShader.prototype.constructor = PIXI.StripShader;
PIXI.StripShader.prototype.init = function() {};
PIXI.StripShader.prototype.destroy = function() {};
PIXI.PrimitiveShader = function(gl) {};
PIXI.PrimitiveShader.prototype.constructor = PIXI.PrimitiveShader;
PIXI.PrimitiveShader.prototype.init = function() {};
PIXI.PrimitiveShader.prototype.destroy = function() {};
PIXI.ComplexPrimitiveShader = function(gl) {};
PIXI.ComplexPrimitiveShader.prototype.constructor = PIXI.ComplexPrimitiveShader;
PIXI.ComplexPrimitiveShader.prototype.init = function() {};
PIXI.ComplexPrimitiveShader.prototype.destroy = function() {};
PIXI.WebGLGraphics = function() {};
PIXI.WebGLGraphics.renderGraphics = function(graphics, renderSession) {};
PIXI.WebGLGraphics.updateGraphics = function(graphics, gl) {};
PIXI.WebGLGraphics.switchMode = function(webGL, type) {};
PIXI.WebGLGraphics.buildRectangle = function(graphicsData, webGLData) {};
PIXI.WebGLGraphics.buildRoundedRectangle = function(graphicsData, webGLData) {};
PIXI.WebGLGraphics.quadraticBezierCurve = function(fromX, fromY, cpX, cpY, toX, toY) {};
PIXI.WebGLGraphics.buildCircle = function(graphicsData, webGLData) {};
PIXI.WebGLGraphics.buildLine = function(graphicsData, webGLData) {};
PIXI.WebGLGraphics.buildComplexPoly = function(graphicsData, webGLData) {};
PIXI.WebGLGraphics.buildPoly = function(graphicsData, webGLData) {};
PIXI.WebGLGraphics.graphicsDataPool = [];
PIXI.WebGLGraphicsData = function(gl) {};
PIXI.WebGLGraphicsData.prototype.reset = function() {};
PIXI.WebGLGraphicsData.prototype.upload = function() {};
PIXI.glContexts = []; // this is where we store the webGL contexts for easy access.
PIXI.instances = [];
PIXI.WebGLRenderer = function(width, height, options) {};
PIXI.WebGLRenderer.prototype.constructor = PIXI.WebGLRenderer;
PIXI.WebGLRenderer.prototype.initContext = function() {};
PIXI.WebGLRenderer.prototype.render = function(stage) {};
PIXI.WebGLRenderer.prototype.renderDisplayObject = function(displayObject, projection, buffer) {};
PIXI.WebGLRenderer.prototype.resize = function(width, height) {};
PIXI.WebGLRenderer.prototype.updateTexture = function(texture) {};
PIXI.WebGLRenderer.prototype.handleContextLost = function(event) {};
PIXI.WebGLRenderer.prototype.handleContextRestored = function() {};
PIXI.WebGLRenderer.prototype.destroy = function() {};
PIXI.WebGLRenderer.prototype.mapBlendModes = function() {};
PIXI.WebGLRenderer.glContextId = 0;
PIXI.WebGLBlendModeManager = function() {};
PIXI.WebGLBlendModeManager.prototype.constructor = PIXI.WebGLBlendModeManager;
PIXI.WebGLBlendModeManager.prototype.setContext = function(gl) {};
PIXI.WebGLBlendModeManager.prototype.setBlendMode = function(blendMode) {};
PIXI.WebGLBlendModeManager.prototype.destroy = function() {};
PIXI.WebGLMaskManager = function() {};
PIXI.WebGLMaskManager.prototype.constructor = PIXI.WebGLMaskManager;
PIXI.WebGLMaskManager.prototype.setContext = function(gl) {};
PIXI.WebGLMaskManager.prototype.pushMask = function(maskData, renderSession) {};
PIXI.WebGLMaskManager.prototype.popMask = function(maskData, renderSession) {};
PIXI.WebGLMaskManager.prototype.destroy = function() {};
PIXI.WebGLStencilManager = function() {};
PIXI.WebGLStencilManager.prototype.setContext = function(gl) {};
PIXI.WebGLStencilManager.prototype.pushStencil = function(graphics, webGLData, renderSession) {};
PIXI.WebGLStencilManager.prototype.bindGraphics = function(graphics, webGLData, renderSession) {};
PIXI.WebGLStencilManager.prototype.popStencil = function(graphics, webGLData, renderSession) {};
PIXI.WebGLStencilManager.prototype.destroy = function() {};
PIXI.WebGLShaderManager = function() {};
PIXI.WebGLShaderManager.prototype.constructor = PIXI.WebGLShaderManager;
PIXI.WebGLShaderManager.prototype.setContext = function(gl) {};
PIXI.WebGLShaderManager.prototype.setAttribs = function(attribs) {};
PIXI.WebGLShaderManager.prototype.setShader = function(shader) {};
PIXI.WebGLShaderManager.prototype.destroy = function() {};
PIXI.WebGLSpriteBatch = function() {};
PIXI.WebGLSpriteBatch.prototype.setContext = function(gl) {};
PIXI.WebGLSpriteBatch.prototype.begin = function(renderSession) {};
PIXI.WebGLSpriteBatch.prototype.end = function() {};
PIXI.WebGLSpriteBatch.prototype.render = function(sprite) {};
PIXI.WebGLSpriteBatch.prototype.renderTilingSprite = function(tilingSprite) {};
PIXI.WebGLSpriteBatch.prototype.flush = function() {};
PIXI.WebGLSpriteBatch.prototype.renderBatch = function(texture, size, startIndex) {};
PIXI.WebGLSpriteBatch.prototype.stop = function() {};
PIXI.WebGLSpriteBatch.prototype.start = function() {};
PIXI.WebGLSpriteBatch.prototype.destroy = function() {};
PIXI.WebGLFastSpriteBatch = function(gl) {};
PIXI.WebGLFastSpriteBatch.prototype.constructor = PIXI.WebGLFastSpriteBatch;
PIXI.WebGLFastSpriteBatch.prototype.setContext = function(gl) {};
PIXI.WebGLFastSpriteBatch.prototype.begin = function(spriteBatch, renderSession) {};
PIXI.WebGLFastSpriteBatch.prototype.end = function() {};
PIXI.WebGLFastSpriteBatch.prototype.render = function(spriteBatch) {};
PIXI.WebGLFastSpriteBatch.prototype.renderSprite = function(sprite) {};
PIXI.WebGLFastSpriteBatch.prototype.flush = function() {};
PIXI.WebGLFastSpriteBatch.prototype.stop = function() {};
PIXI.WebGLFastSpriteBatch.prototype.start = function() {};
PIXI.WebGLFilterManager = function() {};
PIXI.WebGLFilterManager.prototype.constructor = PIXI.WebGLFilterManager;
PIXI.WebGLFilterManager.prototype.setContext = function(gl) {};
PIXI.WebGLFilterManager.prototype.begin = function(renderSession, buffer) {};
PIXI.WebGLFilterManager.prototype.pushFilter = function(filterBlock) {};
PIXI.WebGLFilterManager.prototype.popFilter = function() {};
PIXI.WebGLFilterManager.prototype.applyFilterPass = function(filter, filterArea, width, height) {};
PIXI.WebGLFilterManager.prototype.initShaderBuffers = function() {};
PIXI.WebGLFilterManager.prototype.destroy = function() {};
PIXI.FilterTexture = function(gl, width, height, scaleMode) {};
PIXI.FilterTexture.prototype.constructor = PIXI.FilterTexture;
PIXI.FilterTexture.prototype.clear = function() {};
PIXI.FilterTexture.prototype.resize = function(width, height) {};
PIXI.FilterTexture.prototype.destroy = function() {};
PIXI.CanvasBuffer = function(width, height) {};
PIXI.CanvasBuffer.prototype.constructor = PIXI.CanvasBuffer;
PIXI.CanvasBuffer.prototype.clear = function() {};
PIXI.CanvasBuffer.prototype.resize = function(width, height) {};
PIXI.CanvasMaskManager = function() {};
PIXI.CanvasMaskManager.prototype.constructor = PIXI.CanvasMaskManager;
PIXI.CanvasMaskManager.prototype.pushMask = function(maskData, renderSession) {};
PIXI.CanvasMaskManager.prototype.popMask = function(renderSession) {};
PIXI.CanvasTinter = function() {};
PIXI.CanvasTinter.getTintedTexture = function(sprite, color) {};
PIXI.CanvasTinter.tintWithMultiply = function(texture, color, canvas) {};
PIXI.CanvasTinter.tintWithOverlay = function(texture, color, canvas) {};
PIXI.CanvasTinter.tintWithPerPixel = function(texture, color, canvas) {};
PIXI.CanvasTinter.roundColor = function(color) {};
PIXI.CanvasTinter.cacheStepsPerColorChannel = 8;
PIXI.CanvasTinter.convertTintToImage = false;
PIXI.CanvasTinter.canUseMultiply = PIXI.canUseNewCanvasBlendModes();
PIXI.CanvasTinter.tintMethod = PIXI.CanvasTinter.canUseMultiply ? PIXI.CanvasTinter.tintWithMultiply :  PIXI.CanvasTinter.tintWithPerPixel;
PIXI.CanvasRenderer = function(width, height, options) {};
PIXI.CanvasRenderer.prototype.constructor = PIXI.CanvasRenderer;
PIXI.CanvasRenderer.prototype.render = function(stage) {};
PIXI.CanvasRenderer.prototype.destroy = function(removeView) {};
PIXI.CanvasRenderer.prototype.resize = function(width, height) {};
PIXI.CanvasRenderer.prototype.renderDisplayObject = function(displayObject, context) {};
PIXI.CanvasRenderer.prototype.mapBlendModes = function() {};
PIXI.CanvasGraphics = function() {};
PIXI.CanvasGraphics.renderGraphics = function(graphics, context) {};
PIXI.CanvasGraphics.renderGraphicsMask = function(graphics, context) {};
PIXI.CanvasGraphics.updateGraphicsTint = function(graphics) {};
PIXI.Graphics = function() {};
PIXI.Graphics.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
PIXI.Graphics.prototype.constructor = PIXI.Graphics;
PIXI.Graphics.prototype.cacheAsBitmap;
PIXI.Graphics.prototype.lineStyle = function(lineWidth, color, alpha) {};
PIXI.Graphics.prototype.moveTo = function(x, y) {};
PIXI.Graphics.prototype.lineTo = function(x, y) {};
PIXI.Graphics.prototype.quadraticCurveTo = function(cpX, cpY, toX, toY) {};
PIXI.Graphics.prototype.bezierCurveTo = function(cpX, cpY, cpX2, cpY2, toX, toY) {};
PIXI.Graphics.prototype.arcTo = function(x1, y1, x2, y2, radius) {};
PIXI.Graphics.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise) {};
PIXI.Graphics.prototype.beginFill = function(color, alpha) {};
PIXI.Graphics.prototype.endFill = function() {};
PIXI.Graphics.prototype.drawRect = function( x, y, width, height ) {};
PIXI.Graphics.prototype.drawRoundedRect = function( x, y, width, height, radius ) {};
PIXI.Graphics.prototype.drawCircle = function(x, y, radius) {};
PIXI.Graphics.prototype.drawEllipse = function(x, y, width, height) {};
PIXI.Graphics.prototype.drawPolygon = function(path) {};
PIXI.Graphics.prototype.clear = function() {};
PIXI.Graphics.prototype.generateTexture = function(resolution, scaleMode) {};
PIXI.Graphics.prototype._renderWebGL = function(renderSession) {};
PIXI.Graphics.prototype._renderCanvas = function(renderSession) {};
PIXI.Graphics.prototype.getBounds = function( matrix ) {};
PIXI.Graphics.prototype.updateLocalBounds = function() {};
PIXI.Graphics.prototype._generateCachedSprite = function() {};
PIXI.Graphics.prototype.updateCachedSpriteTexture = function() {};
PIXI.Graphics.prototype.destroyCachedSprite = function() {};
PIXI.Graphics.prototype.drawShape = function(shape) {};
PIXI.GraphicsData = function(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape) {};
PIXI.Graphics.POLY = 0;
PIXI.Graphics.RECT = 1;
PIXI.Graphics.CIRC = 2;
PIXI.Graphics.ELIP = 3;
PIXI.Graphics.RREC = 4;
PIXI.Polygon.prototype.type = PIXI.Graphics.POLY;
PIXI.Rectangle.prototype.type = PIXI.Graphics.RECT;
PIXI.Circle.prototype.type = PIXI.Graphics.CIRC;
PIXI.Ellipse.prototype.type = PIXI.Graphics.ELIP;
PIXI.RoundedRectangle.prototype.type = PIXI.Graphics.RREC;
PIXI.Strip = function(texture) {};
PIXI.Strip.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.Strip.prototype.constructor = PIXI.Strip;
PIXI.Strip.prototype._renderWebGL = function(renderSession) {};
PIXI.Strip.prototype._initWebGL = function(renderSession) {};
PIXI.Strip.prototype._renderStrip = function(renderSession) {};
PIXI.Strip.prototype._renderCanvas = function(renderSession) {};
PIXI.Strip.prototype._renderCanvasTriangleStrip = function(context) {};
PIXI.Strip.prototype._renderCanvasTriangles = function(context) {};
PIXI.Strip.prototype._renderCanvasDrawTriangle = function(context, vertices, uvs, index0, index1, index2) {};
PIXI.Strip.prototype.renderStripFlat = function(strip) {};
PIXI.Strip.prototype.setTexture = function(texture) {};
PIXI.Strip.prototype.onTextureUpdate = function() {};
PIXI.Strip.prototype.getBounds = function(matrix) {};
PIXI.Strip.DrawModes = {
    TRIANGLE_STRIP: 0,
    TRIANGLES: 1
};
PIXI.Rope = function(texture, points) {};
PIXI.Rope.prototype = Object.create( PIXI.Strip.prototype );
PIXI.Rope.prototype.constructor = PIXI.Rope;
PIXI.Rope.prototype.refresh = function() {};
PIXI.Rope.prototype.updateTransform = function() {};
PIXI.Rope.prototype.setTexture = function(texture) {};
PIXI.TilingSprite = function(texture, width, height) {};
PIXI.TilingSprite.prototype = Object.create(PIXI.Sprite.prototype);
PIXI.TilingSprite.prototype.constructor = PIXI.TilingSprite;
PIXI.TilingSprite.prototype.width;
PIXI.TilingSprite.prototype.height;
PIXI.TilingSprite.prototype.setTexture = function(texture) {};
PIXI.TilingSprite.prototype._renderWebGL = function(renderSession) {};
PIXI.TilingSprite.prototype._renderCanvas = function(renderSession) {};
PIXI.TilingSprite.prototype.getBounds = function() {};
PIXI.TilingSprite.prototype.onTextureUpdate = function() {};
PIXI.TilingSprite.prototype.generateTilingTexture = function(forcePowerOfTwo) {};
PIXI.AnimCache = {};
PIXI.SpineTextureLoader = function(basePath, crossorigin) {};
PIXI.SpineTextureLoader.prototype = PIXI.SpineTextureLoader;
PIXI.SpineTextureLoader.prototype.load = function(page, file) {};
PIXI.SpineTextureLoader.prototype.unload = function(texture) {};
PIXI.Spine = function (url) {};
PIXI.Spine.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.Spine.prototype.constructor = PIXI.Spine;
PIXI.Spine.prototype.autoUpdate;
PIXI.Spine.prototype.update = function(dt) {};
PIXI.Spine.prototype.autoUpdateTransform = function () {};
PIXI.Spine.prototype.createSprite = function (slot, attachment) {};
PIXI.Spine.prototype.createMesh = function (slot, attachment) {};
PIXI.BaseTextureCache = {};
PIXI.BaseTextureCacheIdGenerator = 0;
PIXI.BaseTexture = function(source, scaleMode) {};
PIXI.BaseTexture.prototype.constructor = PIXI.BaseTexture;
PIXI.EventTarget.mixin(PIXI.BaseTexture.prototype);
PIXI.BaseTexture.prototype.destroy = function() {};
PIXI.BaseTexture.prototype.updateSourceImage = function(newSrc) {};
PIXI.BaseTexture.prototype.dirty = function() {};
PIXI.BaseTexture.prototype.unloadFromGPU = function() {};
PIXI.BaseTexture.fromImage = function(imageUrl, crossorigin, scaleMode) {};
PIXI.BaseTexture.fromCanvas = function(canvas, scaleMode) {};
PIXI.TextureCache = {};
PIXI.FrameCache = {};
PIXI.TextureCacheIdGenerator = 0;
PIXI.Texture = function(baseTexture, frame, crop, trim) {};
PIXI.Texture.prototype.constructor = PIXI.Texture;
PIXI.EventTarget.mixin(PIXI.Texture.prototype);
PIXI.Texture.prototype.onBaseTextureLoaded = function() {};
PIXI.Texture.prototype.destroy = function(destroyBase) {};
PIXI.Texture.prototype.setFrame = function(frame) {};
PIXI.Texture.prototype._updateUvs = function() {};
PIXI.Texture.fromImage = function(imageUrl, crossorigin, scaleMode) {};
PIXI.Texture.fromFrame = function(frameId) {};
PIXI.Texture.fromCanvas = function(canvas, scaleMode) {};
PIXI.Texture.addTextureToCache = function(texture, id) {};
PIXI.Texture.removeTextureFromCache = function(id) {};
PIXI.TextureUvs = function() {};
PIXI.Texture.emptyTexture = new PIXI.Texture(new PIXI.BaseTexture());
PIXI.RenderTexture = function(width, height, renderer, scaleMode, resolution) {};
PIXI.RenderTexture.prototype = Object.create(PIXI.Texture.prototype);
PIXI.RenderTexture.prototype.constructor = PIXI.RenderTexture;
PIXI.RenderTexture.prototype.resize = function(width, height, updateBase) {};
PIXI.RenderTexture.prototype.clear = function() {};
PIXI.RenderTexture.prototype.renderWebGL = function(displayObject, matrix, clear) {};
PIXI.RenderTexture.prototype.renderCanvas = function(displayObject, matrix, clear) {};
PIXI.RenderTexture.prototype.getImage = function() {};
PIXI.RenderTexture.prototype.getBase64 = function() {};
PIXI.RenderTexture.prototype.getCanvas = function() {};
PIXI.RenderTexture.tempMatrix = new PIXI.Matrix();
PIXI.VideoTexture = function( source, scaleMode ) {};
PIXI.VideoTexture.prototype   = Object.create( PIXI.BaseTexture.prototype );
PIXI.VideoTexture.constructor = PIXI.VideoTexture;
PIXI.VideoTexture.prototype._onUpdate = function() {};
PIXI.VideoTexture.prototype.onPlayStart = function() {};
PIXI.VideoTexture.prototype.onPlayStop = function() {};
PIXI.VideoTexture.prototype.onCanPlay = function() {};
PIXI.VideoTexture.prototype.destroy = function() {};
PIXI.VideoTexture.baseTextureFromVideo = function( video, scaleMode ) {};
PIXI.VideoTexture.textureFromVideo = function( video, scaleMode ) {};
PIXI.VideoTexture.fromUrl = function( videoSrc, scaleMode ) {};
PIXI.AssetLoader = function(assetURLs, crossorigin) {};
PIXI.EventTarget.mixin(PIXI.AssetLoader.prototype);
PIXI.AssetLoader.prototype.constructor = PIXI.AssetLoader;
PIXI.AssetLoader.prototype._getDataType = function(str) {};
PIXI.AssetLoader.prototype.load = function() {};
PIXI.AssetLoader.prototype.onAssetLoaded = function(loader) {};

PIXI.AssetLoader.prototype.onProgress = function(function_param) {};
PIXI.AssetLoader.prototype.onComplete = function(function_param) {};

PIXI.JsonLoader = function (url, crossorigin) {};
PIXI.JsonLoader.prototype.constructor = PIXI.JsonLoader;
PIXI.EventTarget.mixin(PIXI.JsonLoader.prototype);
PIXI.JsonLoader.prototype.load = function () {};
PIXI.JsonLoader.prototype.onReadyStateChanged = function () {};
PIXI.JsonLoader.prototype.onJSONLoaded = function () {};
PIXI.JsonLoader.prototype.onLoaded = function () {};
PIXI.JsonLoader.prototype.onError = function () {};
PIXI.AtlasLoader = function (url, crossorigin) {};
PIXI.AtlasLoader.constructor = PIXI.AtlasLoader;
PIXI.EventTarget.mixin(PIXI.AtlasLoader.prototype);
PIXI.AtlasLoader.prototype.load = function () {};
PIXI.AtlasLoader.prototype.onAtlasLoaded = function () {};
PIXI.AtlasLoader.prototype.onLoaded = function () {};
PIXI.AtlasLoader.prototype.onError = function () {};
PIXI.SpriteSheetLoader = function (url, crossorigin) {};
PIXI.SpriteSheetLoader.prototype.constructor = PIXI.SpriteSheetLoader;
PIXI.EventTarget.mixin(PIXI.SpriteSheetLoader.prototype);
PIXI.SpriteSheetLoader.prototype.load = function () {};
PIXI.SpriteSheetLoader.prototype.onLoaded = function () {};
PIXI.ImageLoader = function(url, crossorigin) {};
PIXI.ImageLoader.prototype.constructor = PIXI.ImageLoader;
PIXI.EventTarget.mixin(PIXI.ImageLoader.prototype);
PIXI.ImageLoader.prototype.load = function() {};
PIXI.ImageLoader.prototype.onLoaded = function() {};
PIXI.ImageLoader.prototype.loadFramedSpriteSheet = function(frameWidth, frameHeight, textureName) {};
PIXI.BitmapFontLoader = function(url, crossorigin) {};
PIXI.BitmapFontLoader.prototype.constructor = PIXI.BitmapFontLoader;
PIXI.EventTarget.mixin(PIXI.BitmapFontLoader.prototype);
PIXI.BitmapFontLoader.prototype.load = function() {};
PIXI.BitmapFontLoader.prototype.onXMLLoaded = function() {};
PIXI.BitmapFontLoader.prototype.onLoaded = function() {};
PIXI.SpineLoader = function(url, crossorigin) {};
PIXI.SpineLoader.prototype.constructor = PIXI.SpineLoader;
PIXI.EventTarget.mixin(PIXI.SpineLoader.prototype);
PIXI.SpineLoader.prototype.load = function () {};
PIXI.SpineLoader.prototype.onLoaded = function () {};
PIXI.AbstractFilter = function(fragmentSrc, uniforms) {};
PIXI.AbstractFilter.prototype.constructor = PIXI.AbstractFilter;
PIXI.AbstractFilter.prototype.syncUniforms = function() {};
PIXI.AbstractFilter.prototype.apply = function(frameBuffer) {};
PIXI.AlphaMaskFilter = function(texture) {};
PIXI.AlphaMaskFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.AlphaMaskFilter.prototype.constructor = PIXI.AlphaMaskFilter;
PIXI.AlphaMaskFilter.prototype.onTextureLoaded = function() {};
PIXI.ColorMatrixFilter = function() {};
PIXI.ColorMatrixFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.ColorMatrixFilter.prototype.constructor = PIXI.ColorMatrixFilter;
PIXI.ColorMatrixFilter.prototype.matrix;
PIXI.GrayFilter = function() {};
PIXI.GrayFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.GrayFilter.prototype.constructor = PIXI.GrayFilter;
PIXI.GrayFilter.prototype.gray;
PIXI.DisplacementFilter = function(texture) {};
PIXI.DisplacementFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DisplacementFilter.prototype.constructor = PIXI.DisplacementFilter;
PIXI.DisplacementFilter.prototype.onTextureLoaded = function() {};
PIXI.DisplacementFilter.prototype.map;
PIXI.DisplacementFilter.prototype.scale;
PIXI.DisplacementFilter.prototype.offset;
PIXI.PixelateFilter = function() {};
PIXI.PixelateFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.PixelateFilter.prototype.constructor = PIXI.PixelateFilter;
PIXI.PixelateFilter.prototype.size;
PIXI.BlurXFilter = function() {};
PIXI.BlurXFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.BlurXFilter.prototype.constructor = PIXI.BlurXFilter;
PIXI.BlurXFilter.prototype.blur;
PIXI.BlurYFilter = function() {};
PIXI.BlurYFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.BlurYFilter.prototype.constructor = PIXI.BlurYFilter;
PIXI.BlurYFilter.prototype.blur;
PIXI.BlurFilter = function() {};
PIXI.BlurFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.BlurFilter.prototype.constructor = PIXI.BlurFilter;
PIXI.BlurFilter.prototype.blur;
PIXI.BlurFilter.prototype.blurX;
PIXI.BlurFilter.prototype.blurY;
PIXI.InvertFilter = function() {};
PIXI.InvertFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.InvertFilter.prototype.constructor = PIXI.InvertFilter;
PIXI.InvertFilter.prototype.invert;
PIXI.SepiaFilter = function() {};
PIXI.SepiaFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.SepiaFilter.prototype.constructor = PIXI.SepiaFilter;
PIXI.SepiaFilter.prototype.sepia;
PIXI.TwistFilter = function() {};
PIXI.TwistFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.TwistFilter.prototype.constructor = PIXI.TwistFilter;
PIXI.TwistFilter.prototype.offset;
PIXI.TwistFilter.prototype.radius;
PIXI.TwistFilter.prototype.angle;
PIXI.ColorStepFilter = function() {};
PIXI.ColorStepFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.ColorStepFilter.prototype.constructor = PIXI.ColorStepFilter;
PIXI.ColorStepFilter.prototype.step;
PIXI.DotScreenFilter = function() {};
PIXI.DotScreenFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DotScreenFilter.prototype.constructor = PIXI.DotScreenFilter;
PIXI.DotScreenFilter.prototype.scale;
PIXI.DotScreenFilter.prototype.angle;
PIXI.CrossHatchFilter = function() {};
PIXI.CrossHatchFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.CrossHatchFilter.prototype.constructor = PIXI.CrossHatchFilter;
PIXI.CrossHatchFilter.prototype.blur;
PIXI.RGBSplitFilter = function() {};
PIXI.RGBSplitFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.RGBSplitFilter.prototype.constructor = PIXI.RGBSplitFilter;
PIXI.RGBSplitFilter.prototype.red;
PIXI.RGBSplitFilter.prototype.green;
PIXI.RGBSplitFilter.prototype.blue;