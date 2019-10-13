import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import * as routes from "../constants/routes";
import { firebase } from "../firebase";
import { AuthUserContext } from "./AuthUserContext";

export const withAuthorization = (condition: any) => (Component: any) => {
  class WithAuthorization extends React.Component<RouteComponentProps> {
    public componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    public render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <Component {...this.props}/> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization as any);
};
