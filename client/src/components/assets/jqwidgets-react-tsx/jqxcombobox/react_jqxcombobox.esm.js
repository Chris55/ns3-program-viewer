import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import { createElement, PureComponent } from 'react';

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

var JqxComboBox = /** @class */ (function (_super) {
    __extends(JqxComboBox, _super);
    function JqxComboBox(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxComboBox' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxComboBox.getDerivedStateFromProps = function (props, state) {
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
    JqxComboBox.prototype.componentDidMount = function () {
        var widgetOptions = this._manageProps();
        this._jqx(this._componentSelector).jqxComboBox(widgetOptions);
        this._wireEvents();
    };
    JqxComboBox.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
        this._wireEvents();
    };
    JqxComboBox.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
    };
    JqxComboBox.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxComboBox(options);
    };
    JqxComboBox.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxComboBox(option);
    };
    JqxComboBox.prototype.addItem = function (item) {
        return this._jqx(this._componentSelector).jqxComboBox('addItem', item);
    };
    JqxComboBox.prototype.clearSelection = function () {
        this._jqx(this._componentSelector).jqxComboBox('clearSelection');
    };
    JqxComboBox.prototype.clear = function () {
        this._jqx(this._componentSelector).jqxComboBox('clear');
    };
    JqxComboBox.prototype.close = function () {
        this._jqx(this._componentSelector).jqxComboBox('close');
    };
    JqxComboBox.prototype.checkIndex = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('checkIndex', index);
    };
    JqxComboBox.prototype.checkItem = function (item) {
        this._jqx(this._componentSelector).jqxComboBox('checkItem', item);
    };
    JqxComboBox.prototype.checkAll = function () {
        this._jqx(this._componentSelector).jqxComboBox('checkAll');
    };
    JqxComboBox.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxComboBox('destroy');
    };
    JqxComboBox.prototype.disableItem = function (item) {
        this._jqx(this._componentSelector).jqxComboBox('disableItem', item);
    };
    JqxComboBox.prototype.disableAt = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('disableAt', index);
    };
    JqxComboBox.prototype.enableItem = function (item) {
        this._jqx(this._componentSelector).jqxComboBox('enableItem', item);
    };
    JqxComboBox.prototype.enableAt = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('enableAt', index);
    };
    JqxComboBox.prototype.ensureVisible = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('ensureVisible', index);
    };
    JqxComboBox.prototype.focus = function () {
        this._jqx(this._componentSelector).jqxComboBox('focus');
    };
    JqxComboBox.prototype.getItem = function (index) {
        return this._jqx(this._componentSelector).jqxComboBox('getItem', index);
    };
    JqxComboBox.prototype.getItemByValue = function (value) {
        return this._jqx(this._componentSelector).jqxComboBox('getItemByValue', value);
    };
    JqxComboBox.prototype.getVisibleItems = function () {
        return this._jqx(this._componentSelector).jqxComboBox('getVisibleItems');
    };
    JqxComboBox.prototype.getItems = function () {
        return this._jqx(this._componentSelector).jqxComboBox('getItems');
    };
    JqxComboBox.prototype.getCheckedItems = function () {
        return this._jqx(this._componentSelector).jqxComboBox('getCheckedItems');
    };
    JqxComboBox.prototype.getSelectedItem = function () {
        return this._jqx(this._componentSelector).jqxComboBox('getSelectedItem');
    };
    JqxComboBox.prototype.getSelectedItems = function () {
        return this._jqx(this._componentSelector).jqxComboBox('getSelectedItems');
    };
    JqxComboBox.prototype.getSelectedIndex = function () {
        return this._jqx(this._componentSelector).jqxComboBox('getSelectedIndex');
    };
    JqxComboBox.prototype.insertAt = function (item, index) {
        return this._jqx(this._componentSelector).jqxComboBox('insertAt', item, index);
    };
    JqxComboBox.prototype.isOpened = function () {
        return this._jqx(this._componentSelector).jqxComboBox('isOpened');
    };
    JqxComboBox.prototype.indeterminateIndex = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('indeterminateIndex', index);
    };
    JqxComboBox.prototype.indeterminateItem = function (item) {
        this._jqx(this._componentSelector).jqxComboBox('indeterminateItem', item);
    };
    JqxComboBox.prototype.loadFromSelect = function (selectTagId) {
        this._jqx(this._componentSelector).jqxComboBox('loadFromSelect', selectTagId);
    };
    JqxComboBox.prototype.open = function () {
        this._jqx(this._componentSelector).jqxComboBox('open');
    };
    JqxComboBox.prototype.removeItem = function (item) {
        return this._jqx(this._componentSelector).jqxComboBox('removeItem', item);
    };
    JqxComboBox.prototype.removeAt = function (index) {
        return this._jqx(this._componentSelector).jqxComboBox('removeAt', index);
    };
    JqxComboBox.prototype.selectIndex = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('selectIndex', index);
    };
    JqxComboBox.prototype.selectItem = function (item) {
        this._jqx(this._componentSelector).jqxComboBox('selectItem', item);
    };
    JqxComboBox.prototype.searchString = function () {
        return this._jqx(this._componentSelector).jqxComboBox('searchString');
    };
    JqxComboBox.prototype.updateItem = function (item, itemValue) {
        this._jqx(this._componentSelector).jqxComboBox('updateItem', item, itemValue);
    };
    JqxComboBox.prototype.updateAt = function (item, index) {
        this._jqx(this._componentSelector).jqxComboBox('updateAt', item, index);
    };
    JqxComboBox.prototype.unselectIndex = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('unselectIndex', index);
    };
    JqxComboBox.prototype.unselectItem = function (item) {
        this._jqx(this._componentSelector).jqxComboBox('unselectItem', item);
    };
    JqxComboBox.prototype.uncheckIndex = function (index) {
        this._jqx(this._componentSelector).jqxComboBox('uncheckIndex', index);
    };
    JqxComboBox.prototype.uncheckItem = function (item) {
        this._jqx(this._componentSelector).jqxComboBox('uncheckItem', item);
    };
    JqxComboBox.prototype.uncheckAll = function () {
        this._jqx(this._componentSelector).jqxComboBox('uncheckAll');
    };
    JqxComboBox.prototype.val = function (value) {
        if (value) {
            this._jqx(this._componentSelector).jqxComboBox('val', value);
        }
        else {
            return this._jqx(this._componentSelector).jqxComboBox('val');
        }
    };
    JqxComboBox.prototype._manageProps = function () {
        var widgetProps = ['animationType', 'autoComplete', 'autoOpen', 'autoItemsHeight', 'autoDropDownHeight', 'closeDelay', 'checkboxes', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableHover', 'enableSelection', 'enableBrowserBoundsDetection', 'height', 'itemHeight', 'multiSelect', 'minLength', 'openDelay', 'popupZIndex', 'placeHolder', 'remoteAutoComplete', 'remoteAutoCompleteDelay', 'renderer', 'renderSelectedItem', 'rtl', 'selectedIndex', 'showArrow', 'showCloseButtons', 'searchMode', 'search', 'source', 'scrollBarSize', 'template', 'theme', 'validateSelection', 'valueMember', 'width'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxComboBox.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).off(originalEventName);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    return JqxComboBox;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;

export default JqxComboBox;
export { jqx, JQXLite };
