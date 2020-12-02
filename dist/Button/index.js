"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: 'ds-button',
    onClick: onClick
  }, text);
}