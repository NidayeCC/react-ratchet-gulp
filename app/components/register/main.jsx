var RegisterHeader = React.createClass({
    render: function () {
        return (
            <div>
                <HeaderLink icon="icon icon-left" align="left" href="./login.html"/>
                <HeaderTitle title="用户注册" />
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
                    <input type="text" name="username" placeholder="用户名"/>
                    <input type="password" name="password" placeholder="密码"/>
                    <input type="password" name="password2" placeholder="重复密码"/>
                    <button className="btn btn-block btn-positive" ref="RegisterBtn" onClick={this.doRegister}>注册</button>
                </form>
            </div>
        );
    }
});
