import React from 'react';
import NavLink from 'react-router-dom';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import blueGrey from '@material-ui/core/colors/blueGrey';


const styles = theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: theme.spacing(1)
  },
  button: {
    color: blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
});

const SidebarNav = props => {
  const { pages, history, classes, ...rest } = props;
  return (
    <React.Fragment>
    <List
      {...rest}
    >
      {pages.map(page => (
            <ListItem
              button
              disableGutters
              key={page.title}
              onClick={() => history.push(page.href)}
              className={classes.item}
            >
              <ListItemIcon className={classes.icon}>
              	{page.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} />

            </ListItem>
      ))}
    </List>
    </React.Fragment>
  );
};;

export default withRouter(withStyles(styles)(SidebarNav));