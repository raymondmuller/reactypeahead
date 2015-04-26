var React = require("react");

class TypeaheadInput extends React.Component {
	
	handleChange(e) {
		this.props.onChange(e)
	}
	handleBlur() {
		this.props.onBlur()
	}
	render() {
		return (
			<input ref="typeaheadInput"
				type="text"
				value={this.props.value}
				placeholder={this.props.placeholder}
				onBlur={this.handleBlur.bind(this)}
				onChange={this.handleChange.bind(this)} />
		)
	}
}

module.exports = TypeaheadInput;