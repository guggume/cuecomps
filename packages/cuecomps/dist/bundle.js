'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactStyledFlexboxgrid = require('react-styled-flexboxgrid');
var reactTransitionGroup = require('react-transition-group');

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n  font-style: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function getLineHeight(_ref) {
  var size = _ref.size,
      precise = _ref.precise,
      _ref$theme = _ref.theme,
      SIZES = _ref$theme.FONT.SIZES,
      PADDING = _ref$theme.TEXT.PADDING;

  if (precise) {
    return 1;
  }

  return "".concat((SIZES[size] || SIZES.normal) + PADDING * 2, "px");
}

var Text = styled__default.div(_templateObject(), function (_ref2) {
  var display = _ref2.display;
  return display || 'block';
}, function (_ref3) {
  var FAMILY = _ref3.theme.FONT.FAMILY;
  return FAMILY;
}, function (_ref4) {
  var size = _ref4.size,
      SIZES = _ref4.theme.FONT.SIZES;
  return "".concat(SIZES[size] || SIZES.normal, "px");
}, function (props) {
  return getLineHeight(props);
}, function (_ref5) {
  var weight = _ref5.weight,
      WEIGHTS = _ref5.theme.FONT.WEIGHTS;
  return WEIGHTS[weight] || WEIGHTS.normal;
}, function (_ref6) {
  var color = _ref6.color,
      type = _ref6.type,
      COLORS = _ref6.theme.TEXT.COLORS;
  return color || COLORS[type] || COLORS.normal;
}, function (_ref7) {
  var align = _ref7.align;
  return align || 'left';
}, function (_ref8) {
  var italic = _ref8.italic;
  return italic ? 'italic' : 'normal';
});

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-right: ", ";\n    margin-left: ", ";\n    color: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    &:after {\n      position: absolute;\n      content: '';\n      border: 2px solid #FFF;\n      right: 12px;\n      border-radius: 50%;\n      width: ", ";\n      height: ", ";\n      border-width: 2px;\n      border-color: #FFF transparent #FFF #FFF;\n      transition: opacity .3s ease-in-out;\n      animation: ", " 1s infinite;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  cursor: pointer;\n  outline: none;\n  transition: transform 100ms ease;\n  height: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  border: ", ";\n  background: ", ";\n\n  :hover {\n    border: ", ";\n    background: ", ";\n    ", " {\n      color: ", ";\n    }\n  }\n\n  :disabled {\n    cursor: auto;\n    border: ", ";\n    background: ", ";\n\n    ", " {\n      color: ", ";\n    }\n\n    .icon {\n      color: ", ";\n    }\n  }\n\n  :enabled:active {\n    transform: translateY(1px);\n  }\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    transform: translateX(-12px);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var getButtonHeight = function getButtonHeight(_ref) {
  var compact = _ref.compact,
      HEIGHTS = _ref.theme.BUTTON.HEIGHTS;

  if (compact) {
    return HEIGHTS.compact;
  }

  return HEIGHTS.normal;
};

var getSpinnerHeight = function getSpinnerHeight(_ref2) {
  var compact = _ref2.compact,
      SPINNERS = _ref2.theme.BUTTON.SPINNERS;

  if (compact) {
    return SPINNERS.compact;
  }

  return SPINNERS.normal;
};

var getBorder = function getBorder(_ref3) {
  var renderAs = _ref3.renderAs,
      BUTTONS = _ref3.theme.BUTTONS;
  var pusedo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return BUTTONS[renderAs]["border".concat(pusedo)] || BUTTONS[renderAs].border;
};

var getBackground = function getBackground(_ref4) {
  var renderAs = _ref4.renderAs,
      BUTTONS = _ref4.theme.BUTTONS;
  var pusedo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return BUTTONS[renderAs]["background".concat(pusedo)] || BUTTONS[renderAs].background;
};

var getTextColor = function getTextColor(_ref5) {
  var renderAs = _ref5.renderAs,
      BUTTONS = _ref5.theme.BUTTONS;
  var pusedo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return BUTTONS[renderAs]["color".concat(pusedo)] || BUTTONS[renderAs].color;
};

var rotate = styled.keyframes(_templateObject$1());
var Label = styled__default(Text)(_templateObject2(), function (props) {
  return getTextColor(props);
}, function (_ref6) {
  var underline = _ref6.underline;
  return underline ? 'underline' : 'none';
}, function (_ref7) {
  var busy = _ref7.busy;
  return busy && styled.css(_templateObject3());
});
var StyledButton = styled__default.button(_templateObject4(), function (_ref8) {
  var justify = _ref8.justify;
  return justify;
}, function (props) {
  return "".concat(getButtonHeight(props), "px");
}, function (_ref9) {
  var PADDING = _ref9.theme.BUTTON.PADDING;
  return "0 ".concat(PADDING, "px");
}, function (_ref10) {
  var RADIUS = _ref10.theme.BUTTON.RADIUS;
  return "".concat(RADIUS, "px");
}, function (props) {
  return getBorder(props);
}, function (props) {
  return getBackground(props);
}, function (props) {
  return getBorder(props, 'Hover');
}, function (props) {
  return getBackground(props, 'Hover');
}, Label, function (props) {
  return getTextColor(props, 'Hover');
}, function (props) {
  return getBorder(props, 'Disabled');
}, function (props) {
  return getBackground(props, 'Disabled');
}, Label, function (props) {
  return getTextColor(props, 'Disabled');
}, function (props) {
  return getTextColor(props, 'Disabled');
}, function (_ref11) {
  var busy = _ref11.busy;
  return busy && styled.css(_templateObject5(), function (props) {
    return "".concat(getSpinnerHeight(props), "px");
  }, function (props) {
    return "".concat(getSpinnerHeight(props), "px");
  }, rotate);
});

var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getIcon = function (Icon) {
      return styled__default(Icon)(_templateObject6(), function (_ref12) {
        var iconPosition = _ref12.iconPosition,
            PADDING = _ref12.theme.BUTTON.PADDING;
        return iconPosition === 'left' ? "".concat(PADDING, "px") : 0;
      }, function (_ref13) {
        var iconPosition = _ref13.iconPosition,
            PADDING = _ref13.theme.BUTTON.PADDING;
        return iconPosition === 'right' ? "".concat(PADDING, "px") : 0;
      }, function (props) {
        return getTextColor(props);
      });
    };

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          icon = _this$props.icon,
          iconPosition = _this$props.iconPosition,
          onClick = _this$props.onClick,
          other = _objectWithoutProperties(_this$props, ["label", "icon", "iconPosition", "onClick"]);

      var Icon = icon ? this.getIcon(icon) : null;
      return React__default.createElement(StyledButton, Object.assign({
        justify: icon ? 'space-between' : 'center',
        onClick: onClick
      }, other), iconPosition === 'left' && Icon && React__default.createElement(Icon, Object.assign({
        className: "icon",
        iconPosition: iconPosition,
        size: 12
      }, other)), React__default.createElement(Label, Object.assign({
        align: Icon ? 'left' : 'center',
        weight: "bold"
      }, other), label), iconPosition === 'right' && Icon && React__default.createElement(Icon, Object.assign({
        className: "icon",
        iconPosition: iconPosition,
        size: 12
      }, other)));
    }
  }]);

  return Button;
}(React.PureComponent);

Button.defaultProps = {
  underline: false,
  renderAs: 'primary',
  icon: null,
  iconPosition: 'right',
  busy: false
};

var FlatButton =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FlatButton, _PureComponent);

  function FlatButton() {
    _classCallCheck(this, FlatButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlatButton).apply(this, arguments));
  }

  _createClass(FlatButton, [{
    key: "render",
    value: function render() {
      return React__default.createElement("div", null, "Flat Button");
    }
  }]);

  return FlatButton;
}(React.PureComponent);

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  background: ", ";\n  border-radius: ", ";\n  ", ";\n  overflow: hidden;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    justify-content: ", ";\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    align-items: ", ";\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    height: inherit;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: inherit;\n    & > :first-child {\n      padding-left: 0;\n    }\n\n    & > :last-child {\n      padding-right: 0;\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: ", ";\n  margin-right: 0;\n  margin-left: 0;\n  padding: ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  text-align: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-left: auto;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n  "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  padding: ", "\n  ", ";\n  ", ";\n  text-align: ", ";\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    justify-content: ", ";\n  "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    align-items: ", ";\n  "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    height: inherit;\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  padding: ", ";\n  ", ";\n  ", ";\n  ", ";\n  text-align: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var getGapSize = function getGapSize(_ref) {
  var gap = _ref.gap,
      LAYOUT = _ref.theme.LAYOUT;
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (typeof gap === 'boolean') {
    return "".concat(LAYOUT.GAP, "px");
  }

  return "".concat(Number.isFinite(gap) ? gap : def, "px");
};

var getGutterSize = function getGutterSize(_ref2) {
  var gutter = _ref2.gutter,
      LAYOUT = _ref2.theme.LAYOUT;
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (typeof gutter === 'boolean') {
    return "".concat(LAYOUT.GUTTER, "px");
  }

  return "".concat(Number.isFinite(gutter) ? gutter : def, "px");
};

var getPadding = function getPadding(props) {
  var gap = getGapSize(props);
  var gutter = getGutterSize(props);
  return "".concat(gap, " ").concat(gutter);
};

var FlexView = styled__default.div(_templateObject$2(), function (_ref3) {
  var flexDirection = _ref3.flexDirection;
  return flexDirection || 'column';
}, function (props) {
  return getPadding(props);
}, function (_ref4) {
  var inherit = _ref4.inherit;
  return inherit && styled.css(_templateObject2$1());
}, function (_ref5) {
  var alignItems = _ref5.alignItems;
  return alignItems && styled.css(_templateObject3$1(), alignItems);
}, function (_ref6) {
  var justifyContent = _ref6.justifyContent;
  return justifyContent && styled.css(_templateObject4$1(), justifyContent);
}, function (_ref7) {
  var align = _ref7.align;
  return align;
});
var Col = styled__default(reactStyledFlexboxgrid.Col)(_templateObject5$1(), function (props) {
  return "".concat(getGapSize(props), " ").concat(getGutterSize(props, props.theme.LAYOUT.GUTTER / 2));
}, function (_ref8) {
  var auto = _ref8.auto;
  return auto && styled.css(_templateObject6$1());
}, function (_ref9) {
  var autoRight = _ref9.autoRight;
  return autoRight && styled.css(_templateObject7());
}, function (_ref10) {
  var align = _ref10.align;
  return align;
});
var Row = styled__default(reactStyledFlexboxgrid.Row)(_templateObject8(), function (_ref11) {
  var reverse = _ref11.reverse;
  return reverse ? 'row-reverse' : 'row';
}, function (props) {
  return getPadding(props);
}, function (_ref12) {
  var nowrap = _ref12.nowrap;
  return nowrap && styled.css(_templateObject9());
}, function (_ref13) {
  var inherit = _ref13.inherit;
  return inherit && styled.css(_templateObject10());
}, function (_ref14) {
  var alignItems = _ref14.alignItems;
  return alignItems && styled.css(_templateObject11(), alignItems);
}, function (_ref15) {
  var justifyContent = _ref15.justifyContent;
  return justifyContent && styled.css(_templateObject12(), justifyContent);
}, function (_ref16) {
  var align = _ref16.align;
  return align;
});
var Card = styled__default(FlexView)(_templateObject13(), function (_ref17) {
  var background = _ref17.theme.CARD.background;
  return background;
}, function (_ref18) {
  var radius = _ref18.theme.CARD.radius;
  return "".concat(radius, "px");
}, function (_ref19) {
  var shadow = _ref19.shadow,
      CARD = _ref19.theme.CARD;
  return !shadow && shadow !== false && styled.css(_templateObject14(), CARD.shadow);
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 42px;\n  line-height: 14px;\n  border: 1px solid #BAC0C3;\n  border-radius: 4px;\n  outline: none;\n  font-family: ", ";\n  font-size: 14px;\n  padding: 14px;\n  margin-top: 8px;\n\n  :focus {\n    border-color: #0177FF;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled__default.input(_templateObject$3(), function (_ref) {
  var FAMILY = _ref.theme.FONT.FAMILY;
  return FAMILY;
});

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  function TextInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onChange = function (e) {
      var onChange = _this.props.onChange;
      onChange(e.target.value, e);
    };

    return _this;
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          error = _this$props.error,
          onChange = _this$props.onChange,
          other = _objectWithoutProperties(_this$props, ["label", "error", "onChange"]);

      return React__default.createElement("label", null, React__default.createElement(Row, null, React__default.createElement(Col, null, React__default.createElement(Text, {
        size: "small",
        precise: true
      }, label)), error && React__default.createElement(Col, {
        autoRight: true
      }, React__default.createElement(Text, {
        size: "small",
        type: "negative",
        precise: true
      }, error))), React__default.createElement(StyledInput, Object.assign({
        onChange: this.onChange
      }, other)));
    }
  }]);

  return TextInput;
}(React.PureComponent);

TextInput.defaultProps = {
  type: 'text',
  label: null,
  placeholder: '',
  error: null,
  onChange: function onChange() {}
};

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var Item =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Item, _PureComponent);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          item = _this$props.item,
          renderItem = _this$props.renderItem;
      return renderItem({
        item: item,
        index: index
      });
    }
  }]);

  return Item;
}(React.PureComponent);

var List =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(List, _PureComponent2);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          keyExtractor = _this$props2.keyExtractor,
          ItemSeparatorComponent = _this$props2.ItemSeparatorComponent,
          other = _objectWithoutProperties(_this$props2, ["data", "keyExtractor", "ItemSeparatorComponent"]);

      var list = data.map(function (item, index) {
        return React__default.createElement(Item, Object.assign({
          key: keyExtractor(item),
          index: index,
          item: item
        }, other));
      });

      if (!ItemSeparatorComponent) {
        return list;
      }

      return list.reduce(function (acc, x) {
        if (acc === null) {
          return [x];
        }

        return [].concat(_toConsumableArray(acc), [React__default.createElement(ItemSeparatorComponent, {
          key: "separator-".concat(x.key)
        }), x]);
      }, null);
    }
  }]);

  return List;
}(React.PureComponent);

List.defaultProps = {
  keyExtractor: function keyExtractor(item) {
    return item.id;
  },
  ItemSeparatorComponent: null
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  transition: max-height 300ms ease-in-out;\n  max-height: ", ";\n  overflow: hidden;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var SectionHeader = styled__default.div(_templateObject$4());
var SectionContent = styled__default.div(_templateObject2$2(), function (_ref) {
  var height = _ref.height;
  return height ? "".concat(height, "px") : 0;
});

var Item$1 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Item, _PureComponent);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          sectionIndex = _this$props.sectionIndex,
          section = _this$props.section,
          item = _this$props.item,
          renderItem = _this$props.renderItem;
      return renderItem({
        item: item,
        section: section,
        index: index,
        sectionIndex: sectionIndex
      });
    }
  }]);

  return Item;
}(React.PureComponent);

var Section =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(Section, _PureComponent2);

  function Section() {
    var _this;

    _classCallCheck(this, Section);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Section).call(this));

    _this.onHeaderClick = function () {
      var open = _this.state.open;
      var height = 0;

      if (_this.sectionRef && !open) {
        height = _this.sectionRef.current.scrollHeight;
      }

      _this.setState({
        open: !open,
        height: height
      });
    };

    _this.state = {
      height: 0,
      open: false
    };
    _this.sectionRef = React__default.createRef();
    return _this;
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this$props2 = this.props,
          sectionIndex = _this$props2.index,
          dataKey = _this$props2.dataKey,
          section = _this$props2.section,
          itemKeyExtractor = _this$props2.itemKeyExtractor,
          other = _objectWithoutProperties(_this$props2, ["index", "dataKey", "section", "itemKeyExtractor"]);

      return section[dataKey].map(function (item, index) {
        return React__default.createElement(Item$1, Object.assign({
          key: itemKeyExtractor(item),
          index: index,
          sectionIndex: sectionIndex,
          item: item,
          section: section
        }, other));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          index = _this$props3.index,
          section = _this$props3.section,
          renderSectionHeader = _this$props3.renderSectionHeader,
          renderSectionFooter = _this$props3.renderSectionFooter;
      var _this$state = this.state,
          open = _this$state.open,
          height = _this$state.height;
      return React__default.createElement("div", null, React__default.createElement(SectionHeader, {
        onKeyPress: this.onHeaderClick,
        onClick: this.onHeaderClick,
        role: "button",
        tabIndex: 0
      }, renderSectionHeader(section, index, open)), React__default.createElement(SectionContent, {
        height: height,
        ref: this.sectionRef
      }, this.renderItems()), renderSectionFooter(section, index));
    }
  }]);

  return Section;
}(React.PureComponent);

Section.defaultProps = {
  itemKeyExtractor: function itemKeyExtractor(section) {
    return section.id;
  }
};

var SectionList =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(SectionList, _PureComponent3);

  function SectionList() {
    _classCallCheck(this, SectionList);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionList).apply(this, arguments));
  }

  _createClass(SectionList, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          sectionKeyExtractor = _this$props4.sectionKeyExtractor,
          other = _objectWithoutProperties(_this$props4, ["data", "sectionKeyExtractor"]);

      return data.map(function (section, index) {
        return React__default.createElement(Section, Object.assign({
          key: sectionKeyExtractor(section),
          index: index,
          section: section
        }, other));
      });
    }
  }]);

  return SectionList;
}(React.PureComponent);

SectionList.defaultProps = {
  sectionKeyExtractor: function sectionKeyExtractor(section) {
    return section.id;
  }
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background: ", ";\n  transition: width 300ms ease-in-out;\n  width: ", ";\n  height: 100%;\n  border-radius: 0;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  background: ", ";\n  width: 100%;\n  height: ", ";\n  border-radius: ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Background = styled__default.div(_templateObject$5(), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, function (_ref2) {
  var height = _ref2.height;
  return "".concat(height, "px");
}, function (_ref3) {
  var height = _ref3.height,
      corners = _ref3.corners;
  return corners ? "".concat(height / 2, "px") : 0;
});
var Progress = styled__default.div(_templateObject2$3(), function (_ref4) {
  var backgroundColor = _ref4.backgroundColor;
  return backgroundColor;
}, function (_ref5) {
  var progress = _ref5.progress;
  return "".concat(progress, "%");
});

var ProgressBarHorizontal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProgressBarHorizontal, _PureComponent);

  function ProgressBarHorizontal() {
    _classCallCheck(this, ProgressBarHorizontal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBarHorizontal).apply(this, arguments));
  }

  _createClass(ProgressBarHorizontal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          progress = _this$props.progress,
          corners = _this$props.corners,
          backgroundColor = _this$props.backgroundColor,
          progressColor = _this$props.progressColor;
      return React__default.createElement(Background, {
        height: height,
        corners: corners,
        backgroundColor: backgroundColor
      }, React__default.createElement(Progress, {
        height: height,
        progress: progress,
        backgroundColor: progressColor
      }));
    }
  }]);

  return ProgressBarHorizontal;
}(React.PureComponent);

ProgressBarHorizontal.defaultProps = {
  height: 8,
  backgroundColor: '#DEEEFF',
  progressColor: 'linear-gradient(94.5deg, #0177FF 0%, #1F48D7 100%)',
  corners: true
};

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  text-anchor: middle;\n  dominant-baseline: middle;\n  stroke-width: 0;\n  font-weight: 700;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  transition: stroke-dashoffset 0.3s;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var SVG = styled__default.svg(_templateObject$6());
var Circle = styled__default.circle(_templateObject2$4());
var Text$1 = styled__default.text(_templateObject3$2(), function (_ref) {
  var FAMILY = _ref.theme.FONT.FAMILY;
  return FAMILY;
}, function (_ref2) {
  var textSize = _ref2.textSize;
  return "".concat(textSize, "px");
});

var ProgressBarRadial =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProgressBarRadial, _PureComponent);

  function ProgressBarRadial() {
    _classCallCheck(this, ProgressBarRadial);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBarRadial).apply(this, arguments));
  }

  _createClass(ProgressBarRadial, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          radius = _this$props.radius,
          progress = _this$props.progress,
          stroke = _this$props.stroke,
          backgroundColor = _this$props.backgroundColor,
          progressColor = _this$props.progressColor,
          fillColor = _this$props.fillColor,
          text = _this$props.text,
          textColor = _this$props.textColor,
          textSize = _this$props.textSize;
      var circumference = ProgressBarRadial.getCircumference(radius - stroke);
      return React__default.createElement(SVG, {
        width: radius * 2,
        height: radius * 2
      }, React__default.createElement(Circle, {
        cx: radius,
        cy: radius,
        r: radius - stroke,
        strokeWidth: stroke,
        fill: fillColor,
        stroke: backgroundColor
      }), React__default.createElement(Circle, {
        cx: radius,
        cy: radius,
        r: radius - stroke,
        strokeWidth: stroke,
        fill: fillColor,
        stroke: progressColor,
        strokeDasharray: "".concat(circumference, " ").concat(circumference),
        strokeDashoffset: circumference - circumference * progress * 0.01
      }), text && React__default.createElement(Text$1, {
        x: "50%",
        y: "50%",
        "text-anchor": "middle",
        stroke: textColor,
        textSize: textSize
      }, text));
    }
  }], [{
    key: "getCircumference",
    value: function getCircumference(radius) {
      return Math.PI * radius * 2;
    }
  }]);

  return ProgressBarRadial;
}(React.PureComponent);

ProgressBarRadial.defaultProps = {
  radius: 8,
  stroke: 2,
  backgroundColor: '#DEEEFF',
  progressColor: '#1657E4',
  fillColor: 'transparent',
  textColor: '#000000',
  textSize: 14,
  text: null
};

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: calc(50% - 2px);\n  bottom: 0;\n  height: 100%;\n  transform-origin: bottom;\n  transform: rotate(", "deg);\n  transition: transform .8s ease-in-out;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n  border-bottom: 20px solid #000000;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s;\n  transform-origin: center bottom;\n  transform: rotate(", "deg);\n  border: 1px solid #000000;\n  border-top-right-radius: ", ";\n  border-top-left-radius: ", ";\n  background-color: ", ";\n\n  &:after {\n    position: absolute;\n    content: '';\n    transform: rotate(45deg);\n    bottom: -2px;\n    right: -2px;\n    border: 2px solid;\n    border-bottom-color: black;\n    border-left-color: black;\n    border-top-color: transparent;\n    border-right-color: transparent;\n  }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 50%;\n  overflow: hidden;\n\n  &:before {\n    position: absolute;\n    content: '';\n    height: 200%;\n    width: 100%;\n    border-radius: 50%;\n    background-color: ", ";\n    border: 1px solid #000000;\n  }\n\n  &:after {\n    position: absolute;\n    content: '';\n    height: 4px;\n    width: 4px;\n    border-radius: 50%;\n    background-color: #000000;\n    bottom: -2px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled__default.div(_templateObject$7(), function (_ref) {
  var width = _ref.width;
  return "".concat(width, "px");
});
var Gauge = styled__default.div(_templateObject2$5(), function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
});
var Meter = styled__default.div(_templateObject3$3(), function (_ref3) {
  var danger = _ref3.danger;
  return 180 + 180 * danger * 0.01;
}, function (_ref4) {
  var width = _ref4.width;
  return "".concat(width / 2, "px");
}, function (_ref5) {
  var width = _ref5.width;
  return "".concat(width / 2, "px");
}, function (_ref6) {
  var progressColor = _ref6.progressColor;
  return progressColor;
});
var Needle = styled__default.div(_templateObject4$2(), function (_ref7) {
  var progress = _ref7.progress;
  return -90 + 180 * progress * 0.01;
});

var ProgressBarGauge =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProgressBarGauge, _PureComponent);

  function ProgressBarGauge() {
    _classCallCheck(this, ProgressBarGauge);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBarGauge).apply(this, arguments));
  }

  _createClass(ProgressBarGauge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          progress = _this$props.progress,
          danger = _this$props.danger,
          backgroundColor = _this$props.backgroundColor,
          progressColor = _this$props.progressColor;
      return React__default.createElement(Wrapper, {
        width: width
      }, React__default.createElement(Gauge, {
        backgroundColor: backgroundColor
      }, React__default.createElement(Meter, {
        progressColor: progressColor,
        danger: danger,
        width: width
      }), React__default.createElement(Needle, {
        progress: progress
      })));
    }
  }]);

  return ProgressBarGauge;
}(React.PureComponent);

ProgressBarGauge.defaultProps = {
  backgroundColor: '#2AC3AA',
  progressColor: '#EA5959'
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _templateObject10$1() {
  var data = _taggedTemplateLiteral(["\n  line-height: 18px;\n"]);

  _templateObject10$1 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  animation: ", " 360000s steps(10, end) infinite;\n  animation-delay: ", ";\n"]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  animation: ", " 36000s steps(10, end) infinite;\n  animation-delay: ", ";\n"]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  animation: ", " 600s steps(10, end) infinite;\n  animation-delay: ", ";\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  animation: ", " 3600s steps(6, end) infinite;\n  animation-delay: ", ";\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  animation: ", " 10s steps(10, end) infinite;\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  animation: ", " 60s steps(6, end) infinite;\n  animation-delay: ", ";\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 20px;\n  width: 8px;\n  display: inline-block;\n  overflow: hidden;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    top: 0;\n  }\n  100% {\n    top: -120px;\n  }\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    top: 0;\n  }\n  100% {\n    top: -200px;\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var moveten = styled.keyframes(_templateObject$8());
var movesix = styled.keyframes(_templateObject2$6());
var Wrapper$1 = styled__default.div(_templateObject3$4());
var Sec1 = styled__default.div(_templateObject4$3(), movesix, function (_ref) {
  var delay = _ref.delay;
  return "-".concat(delay, "s");
});
var Sec2 = styled__default.div(_templateObject5$2(), moveten);
var Min1 = styled__default.div(_templateObject6$2(), movesix, function (_ref2) {
  var delay = _ref2.delay;
  return "-".concat(delay, "s");
});
var Min2 = styled__default.div(_templateObject7$1(), moveten, function (_ref3) {
  var delay = _ref3.delay;
  return "-".concat(delay, "s");
});
var Hour2 = styled__default.div(_templateObject8$1(), moveten, function (_ref4) {
  var delay = _ref4.delay;
  return "-".concat(delay, "s");
});
var Hour1 = styled__default.div(_templateObject9$1(), moveten, function (_ref5) {
  var delay = _ref5.delay;
  return "-".concat(delay, "s");
});
var SplitText = styled__default(Text)(_templateObject10$1());
var TENS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SIXES = [0, 1, 2, 3, 4, 5];

var Clock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Clock, _PureComponent);

  function Clock() {
    _classCallCheck(this, Clock);

    return _possibleConstructorReturn(this, _getPrototypeOf(Clock).apply(this, arguments));
  }

  _createClass(Clock, [{
    key: "render",
    value: function render() {
      var startFrom = this.props.startFrom;

      var _Clock$getDigits = Clock.getDigits(startFrom),
          _Clock$getDigits2 = _slicedToArray(_Clock$getDigits, 6),
          H1 = _Clock$getDigits2[0],
          H2 = _Clock$getDigits2[1],
          M1 = _Clock$getDigits2[2],
          M2 = _Clock$getDigits2[3],
          S1 = _Clock$getDigits2[4],
          S2 = _Clock$getDigits2[5];

      var SEC2 = [].concat(_toConsumableArray(TENS.slice(S2)), _toConsumableArray(TENS.slice(0, S2)));
      var SEC1 = [].concat(_toConsumableArray(SIXES.slice(S1)), _toConsumableArray(SIXES.slice(0, S1)));
      var MIN2 = [].concat(_toConsumableArray(TENS.slice(M2)), _toConsumableArray(TENS.slice(0, M2)));
      var MIN1 = [].concat(_toConsumableArray(SIXES.slice(M1)), _toConsumableArray(SIXES.slice(0, M1)));
      var HOUR2 = [].concat(_toConsumableArray(TENS.slice(H2)), _toConsumableArray(TENS.slice(0, H2)));
      var HOUR1 = [].concat(_toConsumableArray(TENS.slice(H1)), _toConsumableArray(TENS.slice(0, H1)));
      var delayS1 = S2;
      var delayM2 = +"".concat(S1).concat(S2);
      var delayM1 = M2 * 60 + delayM2;
      var delayH2 = "".concat(M1).concat(M2) * 60 + delayM2;
      var delayH1 = H2 * 60 * 60 + delayH2;
      return React__default.createElement("div", null, React__default.createElement(Wrapper$1, null, React__default.createElement(Hour1, {
        delay: delayH1
      }, HOUR1.map(function (v) {
        return React__default.createElement(Text, {
          size: "small",
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$1, null, React__default.createElement(Hour2, {
        delay: delayH2
      }, HOUR2.map(function (v) {
        return React__default.createElement(Text, {
          size: "small",
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$1, null, React__default.createElement(SplitText, {
        size: "small",
        align: "center",
        weight: "bold"
      }, ":")), React__default.createElement(Wrapper$1, null, React__default.createElement(Min1, {
        delay: delayM1
      }, MIN1.map(function (v) {
        return React__default.createElement(Text, {
          size: "small",
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$1, null, React__default.createElement(Min2, {
        delay: delayM2
      }, MIN2.map(function (v) {
        return React__default.createElement(Text, {
          size: "small",
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$1, null, React__default.createElement(SplitText, {
        size: "small",
        align: "center",
        weight: "bold"
      }, ":")), React__default.createElement(Wrapper$1, null, React__default.createElement(Sec1, {
        delay: delayS1
      }, SEC1.map(function (v) {
        return React__default.createElement(Text, {
          size: "small",
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$1, null, React__default.createElement(Sec2, null, SEC2.map(function (v) {
        return React__default.createElement(Text, {
          size: "small",
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))));
    }
  }], [{
    key: "getDigits",
    value: function getDigits(time) {
      if (time < 0) {
        return [0, 0, 0, 0, 0, 0];
      }

      var hours = Math.trunc(time / 3600);
      var minutes = Math.trunc(time / 60);
      var seconds = Math.trunc(time % 60);
      return [Math.trunc(hours / 10), Math.trunc(hours % 10), Math.trunc(minutes % 60 / 10), Math.trunc(minutes % 60 % 10), Math.trunc(seconds / 10), Math.trunc(seconds % 10)];
    }
  }]);

  return Clock;
}(React.PureComponent);

Clock.defaultProps = {
  startFrom: 0
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties$1;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

const StyledIcon = React.forwardRef((props, ref) => {
  const title = props.title,
        size = props.size,
        otherProps = objectWithoutProperties(props, ["title", "size"]);

  const iconProps = {
    viewBox: '0 0 24 24',
    height: props.height !== undefined ? props.height : size,
    width: props.width !== undefined ? props.width : size,
    // @ts-ignore - aria is not always defined on SVG in React TypeScript types
    'aria-hidden': title == null ? 'true' : undefined,
    focusable: 'false',
    role: title != null ? 'img' : undefined,
    "fill": "currentColor"
  };
  const svgProps = Object.keys(otherProps).reduce((p, k) => {
    if (index(k)) {
      p[k] = otherProps[k];
    }

    return p;
  }, {});
  return React.createElement("svg", _extends_1({}, iconProps, svgProps, {
    ref: ref
  }), title && React.createElement("title", {
    key: "Close-title"
  }, title), React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    key: "k0"
  }));
});
const Close = styled__default(StyledIcon).withConfig({
  displayName: "Close",
  componentId: "sc-1onlea5-0"
})(["display:inline-block;vertical-align:middle;overflow:hidden;"]);
Close.displayName = 'Close';

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 12px;\n  cursor: pointer;\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4);\n  "]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  ", ";\n  overflow: ", ";\n  ", ";\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n    width: 420px;\n    min-height: 56px;\n    max-height: calc(100vh - 60px);\n    border-radius: 8px;\n  "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n      width: ", ";\n      height: ", ";\n      max-height: ", ";\n      border-radius: ", ";\n    "]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n      width: 100%;\n      height: 100%;\n      max-height: 100%;\n    "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

function getWrapperStyle(_ref) {
  var size = _ref.size,
      width = _ref.width,
      height = _ref.height,
      radius = _ref.radius;

  if (size === 'full-screen') {
    return styled.css(_templateObject$9());
  }

  if (size === 'custom') {
    return styled.css(_templateObject2$7(), width, height, height, radius || '8px');
  }

  return styled.css(_templateObject3$5());
}

var Wrapper$2 = styled__default.div(_templateObject4$4(), function (props) {
  return getWrapperStyle(props);
}, function (_ref2) {
  var overflow = _ref2.overflow;
  return overflow;
}, function (_ref3) {
  var transparent = _ref3.transparent,
      COLORS = _ref3.theme.COLORS;
  return !transparent && styled.css(_templateObject5$3(), COLORS.WHITE);
});
var CloseButtonWrapper = styled__default.div(_templateObject6$3());
var CloseIcon = styled__default(Close)(_templateObject7$2(), function (_ref4) {
  var COLORS = _ref4.theme.COLORS;
  return COLORS.WHITE;
});

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Comp = _this$props.Comp,
          props = _this$props.props,
          blocking = _this$props.blocking,
          transparent = _this$props.transparent,
          size = _this$props.size,
          onClose = _this$props.onClose,
          other = _objectWithoutProperties(_this$props, ["Comp", "props", "blocking", "transparent", "size", "onClose"]);

      return React__default.createElement(Wrapper$2, Object.assign({
        className: "wrapper",
        size: size,
        transparent: transparent
      }, other), React__default.createElement(Comp, Object.assign({
        transparent: transparent
      }, props, {
        closeModal: onClose
      })), !blocking && React__default.createElement(CloseButtonWrapper, {
        onClick: onClose
      }, React__default.createElement(CloseIcon, {
        size: 18
      })));
    }
  }]);

  return Modal;
}(React.PureComponent);

Modal.defaultProps = {
  transparent: false,
  overflow: 'auto',
  blocking: false,
  size: 'normal'
};

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: calc(100vh);\n  transform: scale(", ");\n  transition: transform .3s ease-in;\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(1, 35, 74, 0.75);\n  z-index: ", ";\n  opacity: ", ";\n  transition: opacity .3s ease-in;\n  pointer-events: ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var TIMEOUT = {
  enter: 0,
  exit: 400
};
var BackDrop = styled__default.div(_templateObject$a(), function (_ref) {
  var MODAL = _ref.theme.ZINDEX.MODAL;
  return MODAL;
}, function (_ref2) {
  var visible = _ref2.visible;
  return visible ? 1 : 0;
}, function (_ref3) {
  var visible = _ref3.visible;
  return visible ? 'all' : 'none';
});
var ScaleWrapper = styled__default.div(_templateObject2$8(), function (_ref4) {
  var visible = _ref4.visible;
  return visible ? 1 : 0;
});

var ModalProvider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ModalProvider, _PureComponent);

  function ModalProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onBackdropClick = function (e) {
      if (e.target === e.currentTarget) {
        var _this$props = _this.props,
            modal = _this$props.modal,
            onClose = _this$props.onClose;

        if (modal.options && modal.options.blocking) {
          return;
        }

        onClose();
      }
    };

    return _this;
  }

  _createClass(ModalProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          modal = _this$props2.modal,
          scrollDisableClass = _this$props2.scrollDisableClass;

      if (modal && !prevProps.modal) {
        document.body.classList.add(scrollDisableClass);
      } else if (!modal && prevProps.modal) {
        document.body.classList.remove(scrollDisableClass);
      }
    }
  }, {
    key: "renderModal",
    value: function renderModal(_ref5) {
      var name = _ref5.name,
          options = _ref5.options,
          props = _ref5.props;
      var _this$props3 = this.props,
          modals = _this$props3.modals,
          onClose = _this$props3.onClose;
      var Comp = modals[name];
      return React__default.createElement(Modal, Object.assign({
        key: name,
        Comp: Comp,
        props: props,
        onClose: onClose
      }, options));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var modal = this.props.modal;
      return React__default.createElement(reactTransitionGroup.TransitionGroup, null, modal && React__default.createElement(reactTransitionGroup.Transition, {
        key: modal.name,
        modal: modal,
        timeout: TIMEOUT
      }, function (state, childProps) {
        return React__default.createElement(BackDrop, {
          visible: state === 'entered'
        }, React__default.createElement(ScaleWrapper, {
          visible: state === 'entered',
          onClick: _this2.onBackdropClick
        }, React__default.createElement(React.Suspense, {
          fallback: React__default.createElement(Text, null, "Loading...")
        }, _this2.renderModal(childProps.modal))));
      }));
    }
  }]);

  return ModalProvider;
}(React.PureComponent);

ModalProvider.defaultProps = {
  modal: null,
  scrollDisableClass: 'disable-scroll'
};

var Module =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Module, _PureComponent);

  function Module() {
    _classCallCheck(this, Module);

    return _possibleConstructorReturn(this, _getPrototypeOf(Module).apply(this, arguments));
  }

  _createClass(Module, [{
    key: "renderModule",
    value: function renderModule() {
      var _this$props = this.props,
          visible = _this$props.visible,
          Component = _this$props.module,
          other = _objectWithoutProperties(_this$props, ["visible", "module"]);

      return React__default.createElement(Component, other);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          visible = _this$props2.visible,
          Loader = _this$props2.loadingComponent;

      if (!visible) {
        if (Loader) {
          return React__default.createElement(Loader, null);
        }

        return React__default.createElement(Text, {
          align: "center"
        }, "Loading...");
      }

      return this.renderModule();
    }
  }]);

  return Module;
}(React.PureComponent);

Module.defaultProps = {
  loadingComponent: null
};

var ModuleContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ModuleContainer, _PureComponent);

  _createClass(ModuleContainer, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var _props$resource = props.resource,
          isLoaded = _props$resource.isLoaded,
          isLoading = _props$resource.isLoading,
          isLoadingFailed = _props$resource.isLoadingFailed,
          isStale = _props$resource.isStale;
      var loadedOnce = state.loadedOnce,
          cache = state.cache;

      if (!loadedOnce && cache && (isLoaded || isStale)) {
        return {
          loadedOnce: true,
          failedOnce: false
        };
      }

      if (!loadedOnce && !cache && isLoading) {
        return {
          cache: true
        };
      }

      if (isLoaded) {
        return {
          failedOnce: false
        };
      }

      if (isLoadingFailed) {
        return {
          failedOnce: true
        };
      }

      return null;
    }
  }]);

  function ModuleContainer(props) {
    var _this;

    _classCallCheck(this, ModuleContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModuleContainer).call(this, props));
    var cache = _this.props.cache;
    _this.state = {
      loadedOnce: false,
      failedOnce: false,
      // eslint-disable-line react/no-unused-state
      cache: cache // eslint-disable-line react/no-unused-state

    };
    return _this;
  }

  _createClass(ModuleContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          resource = _this$props.resource,
          other = _objectWithoutProperties(_this$props, ["resource"]);

      var loadedOnce = this.state.loadedOnce;
      return React__default.createElement(Module, Object.assign({
        visible: loadedOnce
      }, other));
    }
  }]);

  return ModuleContainer;
}(React.PureComponent);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _templateObject7$3() {
  var data = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 100%;\n"]);

  _templateObject7$3 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: fixed;\n  width: 300px;\n  min-height: 100px;\n  top: 80px;\n  right: 20px;\n  padding: 12px 12px;\n  background: linear-gradient(56.99deg, #0177FF 0%, #1F48D7 100%);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 4px;\n  z-index: 13;\n  transform: translateX(350px);\n  transition: all 300ms ease-in-out;\n"]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n  color: #FFFFFF;\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  cursor: pointer;\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 4px;\n  font-family: 'Open Sans', sans-serif;\n  text-decoration: underline;\n  cursor: pointer;\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n  color: #FFFFFF;\n  width: 100%\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: 'Open Sans', sans-serif\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var TextMessage = styled__default.div(_templateObject$b());
var CtaWrapper = styled__default.div(_templateObject2$9());
var CtaLink = styled__default.a(_templateObject3$6());
var CloseBtnWrapper = styled__default.div(_templateObject4$5());
var CloseIcon$1 = styled__default(Close)(_templateObject5$4());
var ToastWrapper = styled__default.div(_templateObject6$4());
var CTDiv = styled__default.div(_templateObject7$3());
var transitionStyles = {
  entering: {
    transform: 'translateX(0)'
  },
  entered: {
    transform: 'translateX(0)',
    transition: 'all 300ms ease-in-out'
  },
  exiting: {
    transform: 'translateX(350px)'
  },
  exited: {
    transform: 'translateX(350px)'
  }
};

var NotificationToast =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NotificationToast, _PureComponent);

  function NotificationToast(props) {
    var _this;

    _classCallCheck(this, NotificationToast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NotificationToast).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      _this.setState({
        inProp: !!nextProps.message
      });
    };

    _this.componentDidUpdate = function () {
      var _this$props = _this.props,
          message = _this$props.message,
          ctaList = _this$props.ctaList;
      var isDismissible = !(ctaList !== null && ctaList.length > 0);

      if (message && isDismissible) {
        _this.startHideTimer();
      }

      if (!isDismissible) {
        _this.clearTimer();
      }
    };

    _this.hideToastTrigger = function () {
      var hideToast = _this.props.hideToast;
      hideToast();

      _this.clearTimer();
    };

    _this.ctaClick = function (ctaCallback) {
      ctaCallback();

      _this.hideToastTrigger();
    };

    _this.startHideTimer = function () {
      var timeout = _this.props.timeout;
      _this.timer = setTimeout(function () {
        _this.hideToastTrigger();
      }, timeout);
    };

    _this.clearTimer = function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
      }
    };

    _this.renderCtaList = function () {
      var ctaList = _this.props.ctaList;

      if (ctaList) {
        return ctaList.map(function (_ref) {
          var text = _ref.text,
              _onClick = _ref.onClick;
          return React__default.createElement(CtaLink, {
            key: text,
            onClick: function onClick() {
              return _this.ctaClick(_onClick);
            }
          }, text);
        });
      }

      return null;
    };

    _this.state = {
      inProp: !!props.message
    };
    return _this;
  }

  _createClass(NotificationToast, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          message = _this$props2.message,
          ctaList = _this$props2.ctaList;
      var inProp = this.state.inProp;
      var isDismissible = !(ctaList !== null && ctaList.length > 0);
      var duration = 1000;
      return React__default.createElement("div", null, React__default.createElement(reactTransitionGroup.Transition, {
        in: inProp,
        timeout: duration
      }, function (state) {
        return React__default.createElement(ToastWrapper, {
          style: _objectSpread({}, transitionStyles[state])
        }, isDismissible && React__default.createElement(CloseBtnWrapper, {
          onClick: _this2.hideToastTrigger
        }, React__default.createElement(CloseIcon$1, {
          size: 15
        })), React__default.createElement(CTDiv, null, React__default.createElement(TextMessage, null, message), React__default.createElement(CtaWrapper, null, _this2.renderCtaList())));
      }));
    }
  }]);

  return NotificationToast;
}(React.PureComponent);

NotificationToast.defaultProps = {
  message: null,
  timeout: 2000,
  ctaList: null
};

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  background-color: ", ";\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var index$1 = styled__default.div(_templateObject$c(), function (_ref) {
  var height = _ref.height;
  return "".concat(height || 1, "px");
}, function (_ref2) {
  var transparent = _ref2.transparent,
      COLORS = _ref2.theme.COLORS;
  return transparent ? 'transparent' : COLORS.BORDER;
});

function _templateObject13$1() {
  var data = _taggedTemplateLiteral(["\n  line-height: 18px;\n"]);

  _templateObject13$1 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12$1() {
  var data = _taggedTemplateLiteral(["\n    animation: ", " 600s steps(10, end) infinite;\n    animation-delay: -", "s;\n  "]);

  _templateObject12$1 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  ", ";\n"]);

  _templateObject11$1 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$2() {
  var data = _taggedTemplateLiteral(["\n    animation: ", " 3600s steps(6, end) infinite;\n    animation-delay: -", "s;\n  "]);

  _templateObject10$2 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  ", ";\n"]);

  _templateObject9$2 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$2() {
  var data = _taggedTemplateLiteral(["\n    animation: ", " 10s steps(10, end) infinite;\n  "]);

  _templateObject8$2 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  ", ";\n"]);

  _templateObject7$4 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$5() {
  var data = _taggedTemplateLiteral(["\n    animation: ", " 60s steps(6, end) infinite;\n    animation-delay: -", "s;\n  "]);

  _templateObject6$5 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  ", "\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 22px;\n  width: 8px;\n  overflow: hidden;\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    top: 0;\n  }\n  100% {\n    top: -132px;\n  }\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    top: 0;\n  }\n  100% {\n    top: -220px;\n  }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var moveten$1 = styled.keyframes(_templateObject$d());
var movesix$1 = styled.keyframes(_templateObject2$a());
var Container = styled__default.div(_templateObject3$7());
var Wrapper$3 = styled__default.div(_templateObject4$6());
var Sec1$1 = styled__default.div(_templateObject5$5(), function (_ref) {
  var paused = _ref.paused,
      delay = _ref.delay;
  return !paused && styled.css(_templateObject6$5(), movesix$1, delay);
});
var Sec2$1 = styled__default.div(_templateObject7$4(), function (_ref2) {
  var paused = _ref2.paused;
  return !paused && styled.css(_templateObject8$2(), moveten$1);
});
var Min1$1 = styled__default.div(_templateObject9$2(), function (_ref3) {
  var paused = _ref3.paused,
      delay = _ref3.delay;
  return !paused && styled.css(_templateObject10$2(), movesix$1, delay);
});
var Min2$1 = styled__default.div(_templateObject11$1(), function (_ref4) {
  var paused = _ref4.paused,
      delay = _ref4.delay;
  return !paused && styled.css(_templateObject12$1(), moveten$1, delay);
});
var SplitText$1 = styled__default(Text)(_templateObject13$1());
var TENS$1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SIXES$1 = [0, 1, 2, 3, 4, 5];

var Timer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Timer, _PureComponent);

  function Timer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Timer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Timer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      timerCompleted: false
    };
    return _this;
  }

  _createClass(Timer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var time = this.props.time;
      this.timer = setTimeout(function () {
        _this2.setState({
          timerCompleted: true
        });
      }, time * 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          time = _this$props.time;
      var timerCompleted = this.state.timerCompleted;

      var _Timer$getDigits = Timer.getDigits(timerCompleted ? 0 : time),
          _Timer$getDigits2 = _slicedToArray(_Timer$getDigits, 4),
          M1 = _Timer$getDigits2[0],
          M2 = _Timer$getDigits2[1],
          S1 = _Timer$getDigits2[2],
          S2 = _Timer$getDigits2[3];

      var SEC2 = [].concat(_toConsumableArray(TENS$1.slice(S2 + 1)), _toConsumableArray(TENS$1.slice(0, S2 + 1))).reverse();
      var SEC1 = [].concat(_toConsumableArray(SIXES$1.slice(S1 + 1)), _toConsumableArray(SIXES$1.slice(0, S1 + 1))).reverse();
      var MIN2 = [].concat(_toConsumableArray(TENS$1.slice(M2 + 1)), _toConsumableArray(TENS$1.slice(0, M2 + 1))).reverse();
      var MIN1 = [].concat(_toConsumableArray(SIXES$1.slice(M1 + 1)), _toConsumableArray(SIXES$1.slice(0, M1 + 1))).reverse();
      var delayS1 = 9 - S2;
      var delayM2 = 59 - "".concat(S1).concat(S2);
      var delayM1 = 599 - M2 * 60 - "".concat(S1).concat(S2);
      return React__default.createElement(Container, null, React__default.createElement(Wrapper$3, null, React__default.createElement(Min1$1, {
        delay: delayM1,
        paused: timerCompleted
      }, MIN1.map(function (v) {
        return React__default.createElement(Text, {
          color: color,
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$3, null, React__default.createElement(Min2$1, {
        delay: delayM2,
        paused: timerCompleted
      }, MIN2.map(function (v) {
        return React__default.createElement(Text, {
          color: color,
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$3, null, React__default.createElement(SplitText$1, {
        color: color,
        align: "center",
        weight: "bold"
      }, ":")), React__default.createElement(Wrapper$3, null, React__default.createElement(Sec1$1, {
        delay: delayS1,
        paused: timerCompleted
      }, SEC1.map(function (v) {
        return React__default.createElement(Text, {
          color: color,
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))), React__default.createElement(Wrapper$3, null, React__default.createElement(Sec2$1, {
        paused: timerCompleted
      }, SEC2.map(function (v) {
        return React__default.createElement(Text, {
          color: color,
          align: "center",
          weight: "bold",
          key: v
        }, v);
      }))));
    }
  }], [{
    key: "getDigits",
    value: function getDigits(time) {
      if (time < 0) {
        return [0, 0, 0, 0];
      }

      var minutes = Math.trunc(time / 60);
      var seconds = Math.trunc(time % 60);
      return [Math.trunc(minutes % 60 / 10), Math.trunc(minutes % 60 % 10), Math.trunc(seconds / 10), Math.trunc(seconds % 10)];
    }
  }]);

  return Timer;
}(React.PureComponent);

Timer.defaultProps = {
  color: '#000000'
};

exports.Clock = Clock;
exports.Modal = ModalProvider;
exports.Module = ModuleContainer;
exports.NotificationToast = NotificationToast;
exports.Separator = index$1;
exports.Text = Text;
exports.Timer = Timer;
exports.Button = Button;
exports.FlatButton = FlatButton;
exports.TextInput = TextInput;
exports.FlexView = FlexView;
exports.Col = Col;
exports.Row = Row;
exports.Card = Card;
exports.List = List;
exports.SectionList = SectionList;
exports.ProgressBarHorizontal = ProgressBarHorizontal;
exports.ProgressBarRadial = ProgressBarRadial;
exports.ProgressBarGauge = ProgressBarGauge;
