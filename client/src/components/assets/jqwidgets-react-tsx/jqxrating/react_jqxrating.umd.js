require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxrating');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.react_jqxrating = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var JqxRating = /** @class */ (function (_super) {
        __extends(JqxRating, _super);
        function JqxRating(props) {
            var _this = _super.call(this, props) || this;
            /* tslint:disable:variable-name */
            _this._jqx = JQXLite;
            _this._id = 'JqxRating' + _this._jqx.generateID();
            _this._componentSelector = '#' + _this._id;
            _this.state = { lastProps: props };
            return _this;
        }
        JqxRating.getDerivedStateFromProps = function (props, state) {
            if (!Object.is) {
                Object.is = function (x, y) {
                    if (x === y) {
                        return x !== 0 || 1 / x === 1 / y;
                    }
                    else {
                        return x !== x && y !== y;
                    }
                };
            }
            var areEqual = Object.is(props, state.lastProps);
            if (!areEqual) {
                var newState = { lastProps: props };
                return newState;
            }
            return null;
        };
        JqxRating.prototype.componentDidMount = function () {
            var widgetOptions = this._manageProps();
            this._jqx(this._componentSelector).jqxRating(widgetOptions);
            this._wireEvents();
        };
        JqxRating.prototype.componentDidUpdate = function () {
            var widgetOptions = this._manageProps();
            this.setOptions(widgetOptions);
            this._wireEvents();
        };
        JqxRating.prototype.render = function () {
            return (React.createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
        };
        JqxRating.prototype.setOptions = function (options) {
            this._jqx(this._componentSelector).jqxRating(options);
        };
        JqxRating.prototype.getOptions = function (option) {
            return this._jqx(this._componentSelector).jqxRating(option);
        };
        JqxRating.prototype.disable = function () {
            this._jqx(this._componentSelector).jqxRating('disable');
        };
        JqxRating.prototype.enable = function () {
            this._jqx(this._componentSelector).jqxRating('enable');
        };
        JqxRating.prototype.getValue = function () {
            return this._jqx(this._componentSelector).jqxRating('getValue');
        };
        JqxRating.prototype.setValue = function (value) {
            this._jqx(this._componentSelector).jqxRating('setValue', value);
        };
        JqxRating.prototype.val = function (value) {
            if (value) {
                this._jqx(this._componentSelector).jqxRating('val', value);
            }
            else {
                return this._jqx(this._componentSelector).jqxRating('val');
            }
        };
        JqxRating.prototype._manageProps = function () {
            var widgetProps = ['count', 'disabled', 'height', 'itemHeight', 'itemWidth', 'precision', 'singleVote', 'value', 'width'];
            var options = {};
            for (var prop in this.props) {
                if (widgetProps.indexOf(prop) !== -1) {
                    options[prop] = this.props[prop];
                }
            }
            return options;
        };
        JqxRating.prototype._wireEvents = function () {
            for (var prop in this.props) {
                if (prop.indexOf('on') === 0) {
                    var originalEventName = prop.slice(2);
                    originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                    this._jqx(this._componentSelector).off(originalEventName);
                    this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
                }
            }
        };
        return JqxRating;
    }(React.PureComponent));
    var jqx = window.jqx;
    var JQXLite = window.JQXLite;

    exports.default = JqxRating;
    exports.jqx = jqx;
    exports.JQXLite = JQXLite;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
