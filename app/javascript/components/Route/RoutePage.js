import React, { Component } from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RouteWithLayout from './RouteWithLayout';
import Main from '../Layout/Main';
import ItemsPage from '../Items/ItemsPage';
import OrdersPage from '../Orders/OrdersPage';
import UsersPage from '../Users/UsersPage';
import UserForm from '../Users/UserForm';
import OrderForm from '../Orders/OrderForm';
import ItemForm from '../Items/ItemForm';

const history = createBrowserHistory();

class RoutePage extends Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="container">
				<Router history={history}>
					<Switch>

						<RouteWithLayout
						  component={ItemsPage}
						  exact
						  layout={Main}
						  path="/items/:id?"
						/>
						<RouteWithLayout
						  component={OrderForm}
						  exact
						  layout={Main}
						  path="/orders/new"
						/>
						<RouteWithLayout
						  component={OrderForm}
						  exact
						  layout={Main}
						  path="/orders/:id/edit"
						/>
						<RouteWithLayout
						  component={OrdersPage}
						  exact
						  layout={Main}
						  path="/orders/:id?"
						/>
						<RouteWithLayout
						  component={UserForm}
						  exact
						  layout={Main}
						  path="/users/new"
						/>
						<RouteWithLayout
						  component={UserForm}
						  exact
						  layout={Main}
						  path="/users/:id/edit"
						/>
						<RouteWithLayout
						  component={UsersPage}
						  exact
						  layout={Main}
						  path="/users/:id?"
						/>
					</Switch>
				</Router>
			</div>
		)
	}

}

export default (RoutePage);