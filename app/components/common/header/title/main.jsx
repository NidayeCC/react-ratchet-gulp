var HeaderTitle = React.createClass({
    render: function () {
        var title = this.props.title;
        return (
            <h1 className="title">{title}</h1>
        );
    }
});