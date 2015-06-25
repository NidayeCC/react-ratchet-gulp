var HeaderLink = React.createClass({
    render: function () {
        var align = "pull-" + this.props.align;
        var icon = this.props.icon;
        var klass = align + ' ' + icon;
        var content = this.props.content || '';
        var onClick = this.props.onClick || function(){};
        var href = this.props.href || '#';
        var slide = 'slide-' + (this.props.slide || 'in');

        return (
            <a className={klass} href={href} onClick={onClick} data-transition={slide}>{content}</a>
        );
    }
});