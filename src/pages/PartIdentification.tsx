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
import { CameraComponent } from "../components/Camera";
import { HeaderBar } from "../components/HeaderBar";

const MODEL_PATH = process.env.PUBLIC_URL + "/model_web";

const PartIdentificationComponent = ({ history }: { [key: string]: any }) => {
  return (
    <IonPage>
      <HeaderBar />
      <IonContent fullscreen={true} scrollY={false}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <CameraComponent/>
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
