import React from 'react';
import './shopping-cart-table.css';


const ShoppingCartTable = () => {
	const generatetableRaw = (item) => {
		return (
			<tr key={item.id}>
				<td>{item.id}</td>
				<td>{item.title}</td>
				<td>{item.count}</td>
				<td>{item.total}$</td>
				<td>
					<button className="btn btn-outline-danger btn-sm float-right">
						<i className="fa fa-trash-o"/>
					</button>
					<button className="btn btn-outline-success btn-sm float-right">
						<i className="fa fa-plus-circle"/>
					</button>
					<button className="btn btn-outline-warning btn-sm float-right">
						<i className="fa fa-minus-circle"/>
					</button>
				</td>
			</tr>
		)
	}

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
				<tr>
					<th>#</th>
					<th>Item</th>
					<th>Count</th>
					<th>Price</th>
					<th>Action</th>
				</tr>
				</thead>

				<tbody>
				something
				</tbody>
			</table>

			<div className="total">
				Total: 5$
			</div>
		</div>
	);
};

export default ShoppingCartTable;
