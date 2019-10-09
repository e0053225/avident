  import * as React from "react";
  import { db } from "../../firebase";
  import { withAuthorization } from "../../firebase/withAuthorization";
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
  import * as ROUTES from '../../constants/routes';

  class IdentifyPartsComponent extends React.Component {
    constructor(props: any) {
      super(props);

      this.state= {
        users:null};
      }

      public render() {

        return(


          <IonPage>
          <IonToolbar>
          <IonChip slot="end">
          <IonIcon icon={notifications}/>
          <IonBadge color="warning">3</IonBadge>
          </IonChip>

          <IonChip slot="end">
          <IonLabel>Randy Tan</IonLabel>
          <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          </IonChip>
          </IonToolbar>
          <IonContent image = "part">


          </IonContent>
          </IonPage>
          )
      }
    }
    const authCondition = (authUser: any) => !!authUser;

    export const IdentifyParts = withAuthorization(authCondition)(IdentftyPartsComponent);
