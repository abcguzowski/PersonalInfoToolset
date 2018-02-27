webpackJsonp([0],{

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(12);
var styles = {
    footer: {
        padding: '0.5rem',
        fontSize: '1rem',
        backgroundColor: '#1f1f1f',
        textAlign: 'center',
        color: 'white'
    }
};
;
;
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("footer", { style: styles.footer },
            "Build with \u2665 by the\u00A0",
            React.createElement("a", { href: 'https://github.com/orgs/FountainJS/people' }, "FountainJS team")));
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(12);
var styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1f1f1f'
    },
    title: {
        flex: 1,
        fontSize: '1.5rem',
        margin: '1rem'
    },
    date: {
        flex: 1,
        textAlign: 'right',
        margin: '1rem',
        color: 'white'
    }
};
;
;
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("header", null,
            React.createElement("p", { style: styles.title },
                React.createElement("a", { href: 'https://github.com/FountainJS/generator-fountain-webapp', target: '_blank' }, "Fountain Generator")),
            React.createElement("p", { style: styles.date }, "Generated with FountainJS")));
    };
    return Header;
}(React.Component));
exports.Header = Header;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(12);
var Tech = /** @class */ (function () {
    function Tech(title, text1, text2, logo) {
        this.title = title;
        this.text1 = text1;
        this.text2 = text2;
        this.logo = logo;
    }
    return Tech;
}());
exports.Tech = Tech;
var styles = {
    tech: {
        height: '15rem',
        width: '15rem',
        border: '1px solid lightgray',
        borderRadius: '1rem',
        margin: '1rem',
        padding: '1rem'
    },
    logo: {
        width: '5rem',
        height: '5rem',
        float: 'right',
        margin: '0 0 .5rem .5rem'
    },
    h3: {
        fontSize: '1.5rem',
        margin: '0 0 2rem 0'
    }
};
;
;
var TechComponent = /** @class */ (function (_super) {
    __extends(TechComponent, _super);
    function TechComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechComponent.prototype.render = function () {
        return (React.createElement("div", { style: styles.tech },
            React.createElement("img", { style: styles.logo, src: this.props.tech.logo }),
            React.createElement("h3", { style: styles.h3 }, this.props.tech.title),
            React.createElement("p", null, this.props.tech.text1),
            React.createElement("p", null, this.props.tech.text2)));
    };
    TechComponent.propTypes = {
        tech: React.PropTypes.object.isRequired
    };
    return TechComponent;
}(React.Component));
exports.TechComponent = TechComponent;


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(12);
var axios_1 = __webpack_require__(54);
var tech_1 = __webpack_require__(213);
var styles = {
    container: {
        margin: '1rem'
    },
    h2: {
        fontWeight: 300,
        fontSize: '1.5rem'
    },
    techs: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
};
;
;
var Techs = /** @class */ (function (_super) {
    __extends(Techs, _super);
    function Techs() {
        var _this = _super.call(this) || this;
        _this.state = { techs: [] };
        return _this;
    }
    Techs.prototype.componentDidMount = function () {
        var _this = this;
        axios_1["default"]
            .get('app/techs/techs.json')
            .then(function (response) {
            _this.setState({ techs: response.data });
        });
    };
    Techs.prototype.render = function () {
        return (React.createElement("div", { style: styles.container },
            React.createElement("h2", { style: styles.h2 }, "Cooked with all these awesome technologies:"),
            React.createElement("div", { style: styles.techs }, this.state.techs.map(function (tech, i) { return (React.createElement(tech_1.TechComponent, { key: i, tech: tech })); }))));
    };
    return Techs;
}(React.Component));
exports.Techs = Techs;


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(12);
var styles = {
    title: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#cf4646',
        color: 'white'
    },
    h1: {
        fontWeight: 300,
        fontSize: '4rem',
        margin: '1rem'
    },
    logo: {
        height: '12rem',
        backgroundColor: 'white',
        borderRadius: '1rem',
        margin: '1rem'
    },
    h2: {
        fontWeight: 300,
        fontSize: '2rem',
        margin: '.5rem'
    }
};
;
;
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", { style: styles.h1 }, "'Allo, 'Allo!"),
            React.createElement("div", null,
                React.createElement("img", { style: styles.logo, src: 'http://fountainjs.io/assets/imgs/yeoman.png' }),
                React.createElement("img", { style: styles.logo, src: 'http://fountainjs.io/assets/imgs/fountain.png' })),
            React.createElement("h2", { style: styles.h2 }, "Always a pleasure scaffolding your apps.")));
    };
    return Title;
}(React.Component));
exports.Title = Title;


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(34);
var React = __webpack_require__(12);
var ReactDOM = __webpack_require__(35);
var main_1 = __webpack_require__(93);
__webpack_require__(92);
ReactDOM.render(React.createElement(main_1.Main, null), document.getElementById('root'));


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(12);
var header_1 = __webpack_require__(212);
var title_1 = __webpack_require__(215);
var techs_1 = __webpack_require__(214);
var footer_1 = __webpack_require__(211);
var styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    }
};
;
;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(header_1.Header, null),
            React.createElement("main", null,
                React.createElement(title_1.Title, null),
                React.createElement(techs_1.Techs, null)),
            React.createElement(footer_1.Footer, null)));
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ })

},[216]);