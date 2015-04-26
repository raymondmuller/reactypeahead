var React = require('react');
var TypeaheadInput = require('./TypeaheadInput');
var TypeaheadList = require('./TypeaheadList');
var TypeaheadListItem = require('./TypeaheadListItem');

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Typeahead[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Typeahead.prototype=Object.create(____SuperProtoOf____Class0);Typeahead.prototype.constructor=Typeahead;Typeahead.__superConstructor__=____Class0;
	function Typeahead(props) {"use strict";
	    ____Class0.call(this,props);
	    this.state = {initialItems: this.props.data
       		,
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
  		console.log("BLURRING")
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
var React = require("react");

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){TypeaheadInput[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;TypeaheadInput.prototype=Object.create(____SuperProtoOf____Class1);TypeaheadInput.prototype.constructor=TypeaheadInput;TypeaheadInput.__superConstructor__=____Class1;function TypeaheadInput(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
	
	Object.defineProperty(TypeaheadInput.prototype,"handleChange",{writable:true,configurable:true,value:function(e) {"use strict";
		this.props.onChange(e)
	}});
	Object.defineProperty(TypeaheadInput.prototype,"handleBlur",{writable:true,configurable:true,value:function() {"use strict";
		this.props.onBlur()
	}});
	Object.defineProperty(TypeaheadInput.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		return (
			React.createElement("input", {ref: "typeaheadInput", 
				type: "text", 
				value: this.props.value, 
				placeholder: this.props.placeholder, 
				onBlur: this.handleBlur.bind(this), 
				onChange: this.handleChange.bind(this)})
		)
	}});


module.exports = TypeaheadInput;
var React = require('react');
var TypeaheadListItem = require("./TypeaheadListItem");

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){TypeaheadList[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;TypeaheadList.prototype=Object.create(____SuperProtoOf____Class2);TypeaheadList.prototype.constructor=TypeaheadList;TypeaheadList.__superConstructor__=____Class2;function TypeaheadList(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}
	Object.defineProperty(TypeaheadList.prototype,"onSelect",{writable:true,configurable:true,value:function(value) {"use strict"; 
		this.props.onSelect(value)
	}});
	Object.defineProperty(TypeaheadList.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		var onSelect = this.onSelect.bind(this)
		return (
			React.createElement("ul", {className: "react-typeahead-list"}, 
				
		        this.props.items.map(function(item) {
		          return React.createElement(TypeaheadListItem, {
		          onSelect: onSelect, 
		          key: item}, item)
		        })
       			
			)
		)
	}});


module.exports = TypeaheadList
var React = require("react");

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){TypeaheadListItem[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;TypeaheadListItem.prototype=Object.create(____SuperProtoOf____Class3);TypeaheadListItem.prototype.constructor=TypeaheadListItem;TypeaheadListItem.__superConstructor__=____Class3;function TypeaheadListItem(){"use strict";if(____Class3!==null){____Class3.apply(this,arguments);}}
	Object.defineProperty(TypeaheadListItem.prototype,"handleClick",{writable:true,configurable:true,value:function() {"use strict";
		this.props.onSelect(this.props.children)
	}});
	Object.defineProperty(TypeaheadListItem.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		return (
			React.createElement("li", {onMouseDown: this.handleClick.bind(this), className: "react-typeahead-list-item"}, 
				this.props.children
			)
		)
	}});


module.exports = TypeaheadListItem