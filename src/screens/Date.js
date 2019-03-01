import React, { Component } from 'react';
import './Date.css';
import Calendar from '../components/Calendar';

class Date extends Component {
	render() {
		return (
			<div>
				<h1>TechLaucnch Events</h1>
				<div className="picker">
					<button>◀</button>
					<span>March</span>
					<button>▶</button>
				</div>
				<Calendar/>
			</div>
		);
	}
}

export default Date;