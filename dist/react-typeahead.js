var React = require('react');
var TypeaheadInput = require('./TypeaheadInput');
var TypeaheadList = require('./TypeaheadList');
var TypeaheadListItem = require('./TypeaheadListItem');

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Typeahead[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Typeahead.prototype=Object.create(____SuperProtoOf____Class0);Typeahead.prototype.constructor=Typeahead;Typeahead.__superConstructor__=____Class0;
	function Typeahead(props) {"use strict";
	    ____Class0.call(this,props);
	    this.state = {
	    	initialItems: this.props.data,
       	items: []
				};
		  }
  	Object.defineProperty(Typeahead.prototype,"onSelect",{writable:true,configurable:true,value:function(value) {"use strict";
  		this.setState({
  			items: [],
  			inputValue: value
  		});

  		if(this.props.onSelect) {
  			this.props.onSelect(value);
  		}
  	}});
  	Object.defineProperty(Typeahead.prototype,"onBlur",{writable:true,configurable:true,value:function() {"use strict";
  		this.setState({
  			items: []
  		})
  		if(this.props.onBlur) {
  			this.props.onBlur
  		}
  	}});
	Object.defineProperty(Typeahead.prototype,"handleChange",{writable:true,configurable:true,value:function(event){"use strict";
		this.setState({
			inputValue: event.target.value
		})
		var updatedList;
		if(event.target.value.length) {
			updatedList = this.props.data.filter(function(item){
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
		if(this.props.limit && updatedList.length > this.props.limit) {
			updatedList = updatedList.slice(0, this.props.limit)
		}
		
		this.setState({items: updatedList});
	}});
	Object.defineProperty(Typeahead.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
		var onSelect = this.onSelect.bind(this)
		var onBlur = this.onBlur.bind(this)
		return (
			React.createElement("div", {className: "react-typeahead"}, 
				React.createElement(TypeaheadInput, {value: this.state.inputValue, placeholder: this.props.placeholder, onChange: this.handleChange.bind(this), onBlur: onBlur}), 
				React.createElement("div", {style: {'position': 'relative'}}, 
					React.createElement(TypeaheadList, {items: this.state.items, onSelect: onSelect})
				)
			)
		)
	}});


module.exports = Typeahead;