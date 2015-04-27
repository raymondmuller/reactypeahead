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