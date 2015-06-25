var LoginHeader = React.createClass({
    onMenuClick: function(){
        console.info("Show menu");
    },
    render: function () {
        return (
            <div>
                <HeaderLink icon="icon icon-person" align="left" onClick={this.onMenuClick}/>
                <HeaderTitle title="Login" />
                <HeaderLink icon="icon icon-home" align="right" href="./register.html" slide="in"/>
            </div>
        );
    }
});

var LoginBody = React.createClass({
    doLogin: function () {
        console.info("do login");
    },
    render: function () {
        return (
            <div className="login">
                <form className="input-group">
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button className="btn btn-block btn-primary" ref="loginBtn" onClick={this.doLogin}>Login</button>
                </form>
            </div>
        );
    }
});
