var HeaderBtn = React.createClass({
    render: function () {
        var align = "btn btn-link btn-nav pull-" + this.props.align;
        var icon = this.props.icon;
        var content = this.props.content || '';
        return (
            <button className={align}>
                <span className={icon}>{content}</span>
            </button>
        );
    }
});