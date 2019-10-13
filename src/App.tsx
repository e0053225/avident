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
import { SignIn } from './pages/SignIn'
import * as ROUTES from './constants/routes';
import { TaskOverview } from './pages/TaskOverview';

import "@ionic/core/css/core.css";
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";
import { Task } from './pages/Task';

require('dotenv').config()

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
      <IonApp class="ios">
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={ROUTES.HOME} component={Home} exact={true} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} exact={true} />
            <Route path={ROUTES.TASK} component={Task} exact={true} />
            <Route path={ROUTES.TASK_OVERVIEW} component={TaskOverview} exact={true} />
            <Route exact path="/" render={() => <Redirect to={ROUTES.HOME} />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href={ROUTES.HOME}>
              <IonIcon icon={home}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="task" href={ROUTES.TASK}>
              <IonIcon icon={logIn}/>
              <IonLabel>Task</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
    );
  }
}

export const App = withAuthentication(AppComponent);
