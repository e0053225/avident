import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { home, logIn } from 'ionicons/icons';
import './App.css';
import { firebase } from "./firebase";
import { withAuthentication } from "./firebase/withAuthentication";
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { SignIn } from './pages/SignIn'
import * as ROUTES from './constants/routes';

class AppComponent extends Component {

    constructor(props: any) {
      super(props);
  
      this.state = {
        authUser: null
      };
    }
  
    public componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }
  render() {
    return (
      <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={ROUTES.HOME} component={Home} exact={true} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} exact={true} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact={true} />
            <Route exact path="/" render={() => <Redirect to={ROUTES.HOME} />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href={ROUTES.HOME}>
              <IonIcon icon={home}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="signIn" href={ROUTES.SIGN_IN}>
              <IonIcon icon={logIn}/>
              <IonLabel>Sign In</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
    );
  }
}

export const App = withAuthentication(AppComponent);
