var React = require('react');
var TypeaheadInput = require('./TypeaheadInput');
var TypeaheadList = require('./TypeaheadList');
var TypeaheadListItem = require('./TypeaheadListItem');

class Typeahead extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {initialItems: this.props.data
       		,
	       items: []
			};
		  }
  	onSelect(value) {
  		this.setState({
  			items: [],
  			inputValue: value
  		});

  		if(this.props.onSelect) {
  			this.props.onSelect(value);
  		}
  	}
  	onBlur() {
  		console.log("BLURRING")
  		this.setState({
  			items: []
  		})
  		if(this.props.onBlur) {
  			this.props.onBlur
  		}
  	}
	handleChange(event){
		this.setState({
			inputValue: event.target.value
		})
		var updatedList = this.props.data
		if(event.target.value.length) {
			updatedList = updatedList.filter(function(item){
				  return (
				  	item[0].toLowerCase().search(
						event.target.value[0].toLowerCase()) !== -1 && 
				  		event.target.value.length <= item.length
				)
			  })
		}
		else {
			updatedList = []
		}
		if(this.props.limit) {
			if(updatedList.length > this.props.limit) updatedList.length =  this.props.limit
		}
		this.setState({items: updatedList});
	}


	render(){
		var onSelect = this.onSelect.bind(this)
		var onBlur = this.onBlur.bind(this)
		return (
			<div className="react-typeahead">
				<TypeaheadInput value={this.state.inputValue} placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)} onBlur={onBlur}/>
				<div style={{'position': 'relative'}}>
					<TypeaheadList items={this.state.items} onSelect={onSelect}></TypeaheadList>
				</div>
			</div>
		)
	}
}

module.exports = Typeahead;