var LoginHeader = React.createClass({displayName: "LoginHeader",
    onMenuClick: function(){
        console.info("Show menu");
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(HeaderLink, {icon: "icon icon-person", align: "left", onClick: this.onMenuClick}), 
                React.createElement(HeaderTitle, {title: "Login"}), 
                React.createElement(HeaderLink, {icon: "icon icon-home", align: "right", href: "./register.html", slide: "in"})
            )
        );
    }
});

var LoginBody = React.createClass({displayName: "LoginBody",
    doLogin: function () {
        console.info("do login");
    },
    render: function () {
        return (
            React.createElement("div", {className: "login"}, 
                React.createElement("form", {className: "input-group"}, 
                    React.createElement("input", {type: "text", name: "username", placeholder: "Username"}), 
                    React.createElement("input", {type: "password", name: "password", placeholder: "Password"}), 
                    React.createElement("button", {className: "btn btn-block btn-primary", ref: "loginBtn", onClick: this.doLogin}, "Login")
                )
            )
        );
    }
});

var RegisterHeader = React.createClass({displayName: "RegisterHeader",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(HeaderLink, {icon: "icon icon-left", align: "left", href: "./login.html", slide: "out"}), 
                React.createElement(HeaderTitle, {title: "Register"})
            )
        );
    }
});

var RegisterBody = React.createClass({displayName: "RegisterBody",
    doRegister: function () {
        console.info("do Register");
    },
    render: function () {
        return (
            React.createElement("div", {className: "register"}, 
                React.createElement("form", {className: "input-group"}, 
                    React.createElement("input", {type: "text", name: "username", placeholder: "Username"}), 
                    React.createElement("input", {type: "password", name: "password", placeholder: "Password"}), 
                    React.createElement("input", {type: "password", name: "password2", placeholder: "Password Confirm"}), 
                    React.createElement("button", {className: "btn btn-block btn-positive", ref: "RegisterBtn", onClick: this.doRegister}, "Register")
                )
            )
        );
    }
});

var HeaderBtn = React.createClass({displayName: "HeaderBtn",
    render: function () {
        var align = "btn btn-link btn-nav pull-" + this.props.align;
        var icon = this.props.icon;
        var content = this.props.content || '';
        return (
            React.createElement("button", {className: align}, 
                React.createElement("span", {className: icon}, content)
            )
        );
    }
});
var HeaderLink = React.createClass({displayName: "HeaderLink",
    render: function () {
        var align = "pull-" + this.props.align;
        var icon = this.props.icon;
        var klass = align + ' ' + icon;
        var content = this.props.content || '';
        var onClick = this.props.onClick || function(){};
        var href = this.props.href || '#';
        var slide = 'slide-' + (this.props.slide || 'in');

        return (
            React.createElement("a", {className: klass, href: href, onClick: onClick, "data-transition": slide}, content)
        );
    }
});
var HeaderTitle = React.createClass({displayName: "HeaderTitle",
    render: function () {
        var title = this.props.title;
        return (
            React.createElement("h1", {className: "title"}, title)
        );
    }
});