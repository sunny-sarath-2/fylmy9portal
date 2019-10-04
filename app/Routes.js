import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

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
  NotFound as NotFoundView,
  Article as ArticleView
} from "./views";

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
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout component={NewsView} layout={MainLayout} path="/News" />
      <RouteWithLayout
        component={ReviewsView}
        layout={MainLayout}
        path="/Reviews"
      />
      <RouteWithLayout
        component={ArticleView}
        layout={MainLayout}
        path="/article"
      />
      <RouteWithLayout
        component={TrailersView}
        layout={MainLayout}
        path="/trailers"
      />

      <RouteWithLayout
        component={InterViews}
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
