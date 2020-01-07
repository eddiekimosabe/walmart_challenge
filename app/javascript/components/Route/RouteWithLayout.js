import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, componentProps, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...componentProps} {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
