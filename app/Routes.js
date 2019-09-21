import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  News as NewsView,
  UserList as UserListView,
  Reviews as ReviewsView,
  Trailers as TrailersView,
  Gossips as GossipsView,
  InterViews,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={NewsView}
        exact
        layout={MainLayout}
        path="/News"
      />
      <RouteWithLayout
        component={ReviewsView}
        exact
        layout={MainLayout}
        path="/Reviews"
      />
      <RouteWithLayout
        component={TrailersView}
        exact
        layout={MainLayout}
        path="/trailers"
      />
      <RouteWithLayout
        component={GossipsView}
        exact
        layout={MainLayout}
        path="/gallery"
      />
      <RouteWithLayout
        component={InterViews}
        exact
        layout={MainLayout}
        path="/interviews"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={GossipsView}
        exact
        layout={MainLayout}
        path="/Gossips"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
