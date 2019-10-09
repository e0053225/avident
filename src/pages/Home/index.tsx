import * as React from "react";
import { db } from "../../firebase";
import { withAuthorization } from "../../firebase/withAuthorization";
import { SignOutButton } from "./SignOutButton";
import {
  IonToolbar,
  IonTitle,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonContent,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
  IonPage,
  IonItem,
  IonText
} from "@ionic/react";
import * as ROUTES from "../../constants/routes";

class HomeComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      users: null
    };
  }

  public componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  public render() {
    const { users }: any = this.state;

    return (
      <IonPage>
        <IonHeader mode="ios" translucent={true}>
          <IonToolbar color="primary" mode="ios">
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonText>
            <h1>Welcome to Avident</h1>
          </IonText>
          <IonButton color="primary" href={ROUTES.DASHBOARD}>
            Go to dashboard
          </IonButton>
          <SignOutButton />
        </IonContent>
      </IonPage>
    );
  }
}

const authCondition = (authUser: any) => !!authUser;

export const Home = withAuthorization(authCondition)(HomeComponent);
