"use strict";
let __extends = (this && this.__extends) || (function () {
    let extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
let Core;
(function (Core) {
    let GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR
        function GameObject(asset_name, x, y, centered) {
            if (asset_name === void 0) { asset_name = "placeholder"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (centered === void 0) { centered = false; }
            let _this = _super.call(this, Config.Game.ASSETS.getResult(asset_name)) || this;
            // initialization
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._position = new Util.Vector2(0, 0, this);
            this._velocity = new Util.Vector2(0, 0);
            this._isColliding = false;
            this._isCentered = false;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.isCentered = centered;
            this.position = new Util.Vector2(x, y, this);
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "width", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
                this._halfWidth = this._computeHalfWidth();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
                this._halfHeight = this._computeHalfHeight();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "halfWidth", {
            get: function () {
                return this._halfWidth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "halfHeight", {
            get: function () {
                return this._halfHeight;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
                this.x = newPosition.x;
                this.y = newPosition.y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "velocity", {
            get: function () {
                return this._velocity;
            },
            set: function (newVelocity) {
                this._velocity = newVelocity;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "isColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newState) {
                this._isColliding = newState;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "isCentered", {
            get: function () {
                return this._isCentered;
            },
            set: function (newState) {
                this._isCentered = newState;
                if (newState) {
                    this._centerGameObject();
                }
            },
            enumerable: false,
            configurable: true
        });
        // PRIVATE METHODS
        GameObject.prototype._computeHalfWidth = function () {
            return this.width * 0.5;
        };
        _computeHalfHeight() {
            return this.height * 0.5;
        }
        _centerGameObject() {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
    }
    Core.GameObject = GameObject;
})(Core || (Core = {}));
//# sourceMappingURL=GameObject.js.map