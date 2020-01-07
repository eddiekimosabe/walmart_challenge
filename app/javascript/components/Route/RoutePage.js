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
						  component={ItemForm}
						  exact
						  layout={Main}
						  path="/items/new"
						/>
						<RouteWithLayout
						  component={ItemForm}
						  exact
						  layout={Main}
						  path="/items/:id/edit"
						  componentProps={{formType: "edit"}}
						/>
						<RouteWithLayout
						  component={ItemsPage}
						  exact
						  layout={Main}
						  path="/items/:id?"
						  componentProps={{formType: "new"}}
						/>
						<RouteWithLayout
						  component={OrderForm}
						  exact
						  layout={Main}
						  path="/users/:userId/orders/new"
						/>
						<RouteWithLayout
						  component={OrderForm}
						  exact
						  layout={Main}
						  path="/orders/:id/edit"
						  componentProps={{formType: "edit"}}
						/>
						<RouteWithLayout
						  component={OrdersPage}
						  exact
						  layout={Main}
						  path="/orders/:id?"
						  componentProps={{formType: "new"}}
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
						  componentProps={{formType: "edit"}}
						/>
						<RouteWithLayout
						  component={UsersPage}
						  exact
						  layout={Main}
						  path="/users/:id?"
						  componentProps={{formType: "new"}}
						/>

						<Redirect to="/users" />
					</Switch>
				</Router>
			</div>
		)
	}

}

export default (RoutePage);