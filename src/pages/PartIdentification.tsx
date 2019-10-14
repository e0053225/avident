import * as React from "react";
import { db } from "../firebase";
import { withAuthorization } from "../firebase/withAuthorization";
import {
  IonToolbar,
  IonContent,
  IonLabel,
  IonBadge,
  IonPage,
  IonItem,
  IonText,
  IonChip,
  IonIcon,
  IonAvatar,
  IonGrid,
  IonCol,
  IonRow,
  IonFab,
  IonFabButton
} from "@ionic/react";
import { camera, notifications } from "ionicons/icons";
import * as ROUTES from "../constants/routes";
import "./PartIdentification.css";
import ReactDOM from "react-dom";
import { App } from "../App";

const MODEL_PATH = process.env.PUBLIC_URL + "/model_web";

const PartIdentificationComponent = ({ history }: { [key: string]: any }) => {

  return (
    <IonPage>
      <IonToolbar>
        <IonChip slot="end">
          <IonIcon icon={notifications} />
          <IonBadge color="warning">3</IonBadge>
        </IonChip>

        <IonChip slot="end">
          <IonLabel>Randy Tan</IonLabel>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
        </IonChip>
      </IonToolbar>
      <IonContent fullscreen={true}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonRow class="camera"> </IonRow>

              <IonRow>
              <div className ="center">
                <IonFabButton>
                  
                  <IonIcon icon={camera}></IonIcon>
                  <></>
                 
                </IonFabButton>
                </div>
              </IonRow>

              <IonRow></IonRow>
            </IonCol>

            <IonCol>
              <IonRow>
                <IonText class="bluetext"> Possible Matches Found</IonText>
              </IonRow>

              <IonRow class="results"> </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const authCondition = (authUser: any) => !!authUser;

export const PartIdentification = withAuthorization(authCondition)(
  PartIdentificationComponent
);

