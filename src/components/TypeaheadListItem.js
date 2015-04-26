var React = require("react");

class TypeaheadListItem extends React.Component {
	handleClick() {
		this.props.onSelect(this.props.children)
	}
	render() {
		return (
			<li onMouseDown={this.handleClick.bind(this)} className="react-typeahead-list-item">
				{this.props.children}
			</li>
		)
	}
}

module.exports = TypeaheadListItem