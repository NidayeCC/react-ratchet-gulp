var LoginHeader = React.createClass({
    onMenuClick: function(){
        console.info("显示菜单咯");
    },
    render: function () {
        return (
            <div>
                <HeaderLink icon="icon icon-person" align="left" onClick={this.onMenuClick}/>
                <HeaderTitle title="用户登录" />
                <HeaderLink icon="icon icon-home" align="right"/>
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
                    <input type="text" name="username" placeholder="用户名"/>
                    <input type="password" name="password" placeholder="密码"/>
                    <button className="btn btn-block btn-primary" ref="loginBtn" onClick={this.doLogin}>登录</button>
                </form>
            </div>
        );
    }
});
