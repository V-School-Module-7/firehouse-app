"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SearchBar = _interopRequireDefault(require("../components/SearchBar"));

var _Button = _interopRequireDefault(require("../components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay: grid;\n  grid-template-columns: 154px 154px;\n  grid-auto-rows: auto;\n  grid-gap: 20px;\n  width: 100vw;\n  margin: 16px auto 0px auto;\n  justify-content: center;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GeneralWrapper = _styledComponents["default"].div(_templateObject());

var SearchBarGeneral = (0, _styledComponents["default"])(_SearchBar["default"])(_templateObject2());

var ButtonsContainer = _styledComponents["default"].div(_templateObject3());