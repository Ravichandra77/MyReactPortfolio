import React, { Component } from 'react';
import Grad from "../../images/grad.png";
import PostGrad from "../../images/post-grad.jpg";
import School from "../../images/school.png";


export default class TimeLine extends Component {
    render() {
        return (
<div className="timeline">
	<div className="items">
		<div className="imgBox">		
	 	<img src={PostGrad} alt="Post Graduation" />
		</div>
		<div className="wrap">
			<div className="date">2013 - 2015</div>
			<h3 className="title">Post Graduation</h3>
			<div className="content">
				<p>I did my post graduation MBA (Information technology) from KSOU.</p>
			</div>
		</div>
	</div>

	<div className="items">
		<div className="imgBox">
		<img src={Grad} alt="Graduation" />
		</div>
		<div className="wrap">
			<div className="date">2007 - 2010</div>
			<h3 className="title">Graduation</h3>
			<div className="content">
				<p>I graduated from bangalore University</p>
			</div>
		</div>
	</div>

	<div className="items">
		<div className="imgBox">
		<img src={School} alt="School" />
		</div>
		<div className="wrap">
			<div className="date">2007</div>
			<h3 className="title">High School University</h3>
			<div className="content">
				<p>I finished my schooling from vishwa chethana school.</p>
			</div>
		</div>
	</div>
</div>
        )
    }
}
