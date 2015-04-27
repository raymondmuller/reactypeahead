var React = require("react");

class TypeaheadInput extends React.Component {
	render() {
		return (
			<input ref="typeaheadInput"
				type="text"
				value={this.props.value}
				placeholder={this.props.placeholder}
				onBlur={this.props.onBlur}
				onChange={this.props.onChange} />
		)
	}
}

module.exports = TypeaheadInput;