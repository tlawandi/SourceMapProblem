define(["require", "exports", "library/Hello"], function (require, exports, Hello_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.action = function () {
            var a = new Hello_1.Hello();
            a.helloWorld();
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map