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