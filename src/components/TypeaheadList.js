var React = require('react');
var TypeaheadListItem = require("./TypeaheadListItem");

class TypeaheadList extends React.Component {
	onSelect(value) { 
		this.props.onSelect(value)
	}
	render() {
		var onSelect = this.onSelect.bind(this)
		return (
			<ul className="react-typeahead-list">
				{
		        this.props.items.map(function(item) {
		          return <TypeaheadListItem 
		          onSelect={onSelect}
		          key={item}>{item}</TypeaheadListItem>
		        })
       			}
			</ul>
		)
	}
}

module.exports = TypeaheadList