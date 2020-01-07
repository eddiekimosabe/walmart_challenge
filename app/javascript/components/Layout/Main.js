import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Root, Header, Nav, Content, Footer } from 'mui-layout';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuRounded from '@material-ui/icons/MenuRounded';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SidebarNav from './SidebarNav';
import StoreIcon from '@material-ui/icons/Store';

const baseTheme = createMuiTheme();

const config = {
"navAnchor": "left",
"navVariant": {
  "xs": "temporary",
  "sm": "permanent",
  "md": "permanent"
},
"navWidth": {
  "xs": 240,
  "sm": 256,
  "md": 256
},
"collapsible": {
  "xs": false,
  "sm": true,
  "md": true
},
"collapsedWidth": {
  "xs": 64,
  "sm": 64,
  "md": 64
},
"clipped": {
  "xs": true,
  "sm": false,
  "md": false
},
"headerPosition": {
  "xs": "relative",
  "sm": "relative",
  "md": "relative"
},
"squeezed": {
  "xs": true,
  "sm": true,
  "md": false
},
"footerShrink": {
  "xs": false,
  "sm": true,
  "md": true
}
};

const pages = [

{
  title: 'Orders',
  href: '/orders',
  icon: <ListAltIcon />
},
{
  title: 'Users',
  href: '/users',
  icon: <PeopleIcon />
},
{
  title: 'Items',
  href: '/items',
  icon: <StoreIcon />
}
]

class Main extends Component {
	constructor(props){
		super(props);
	}

	render(){

		const {children} = this.props
		return (
			<ThemeProvider theme={baseTheme}>
				<Root config={config} style={{ minHeight: "100vh" }}>
			  <Header
			  	renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
			  >
			  </Header>
			  <Nav
			  renderIcon={collapsed => (collapsed ? <ChevronRight /> : <ChevronLeft />)}
			    header={
			      // you can provide fixed header inside nav
			      // change null to some react element
			      ctx => null
			    }
			  >
			    {/* nav goes here */}
					<SidebarNav pages={pages} />	      
			  </Nav>
			  <Content>
			    {children}
			  </Content>
			  <Footer>{/* footer goes here */}</Footer>
				</Root>
			</ThemeProvider>
			)
	}
}

export default Main;