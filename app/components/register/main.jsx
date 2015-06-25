var RegisterHeader = React.createClass({
    render: function () {
        return (
            <div>
                <HeaderLink icon="icon icon-left" align="left" href="./login.html" slide="out"/>
                <HeaderTitle title="Register" />
            </div>
        );
    }
});

var RegisterBody = React.createClass({
    doRegister: function () {
        console.info("do Register");
    },
    render: function () {
        return (
            <div className="register">
                <form className="input-group">
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="password2" placeholder="Password Confirm"/>
                    <button className="btn btn-block btn-positive" ref="RegisterBtn" onClick={this.doRegister}>Register</button>
                </form>
            </div>
        );
    }
});
