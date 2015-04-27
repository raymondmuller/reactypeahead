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