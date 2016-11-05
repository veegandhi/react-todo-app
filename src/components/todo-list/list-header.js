import React, { Component } from 'react';

export  default class ListHeader extends Component {
	render(){
		return(
			<thead>
				<tr>
					<td>Task-name</td>		
					<td>Action</td>		
				</tr>
			</thead>
		);
	}
}