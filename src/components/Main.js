var React = require('react');
var Typeahead = require('./react-typeahead');

class Main extends React.Component {
	onSelect(item) {
		console.log("selected " + item);
	}
	onType(value) {
		console.log("typing " + value);
	}
	render() {
		var data = [
				"Abc",
				"Apple",
				"Apps",
				"Apes",
				"Adore",
				"Ara",
				"Atari",
				"Axe",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
  	    "Hash Browns"
	         ]
		return (
			<div className="main">
				<h2> React Typeahead Demo </h2>
				<Typeahead 
					data={data}
					placeholder="search"
					limit={5}
					onSelect={this.onSelect.bind(this)}
					onType={this.onType.bind(this)}
					/>
			</div>
		) 
	}
}

module.exports = Main

React.render(<Main />, document.body);