import * as React from "react";
import { withAuthorization } from "../firebase/withAuthorization";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButton,
  IonCol,
  IonRow,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonList,
  IonItem,
  IonImg,
  IonProgressBar
} from "@ionic/react";
import { HeaderBar } from "../components/HeaderBar";
import PDFViewer from "../components/PDFView";

const TaskComponent = ({ history }: { [key: string]: any }) => (
  <IonPage>
    <HeaderBar />
    <IonContent scrollY={false}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="top-row">
              <IonText class="white">
                TASK 32-11-02-004-001 <br />
                Wing Landing Gear Shock Strut Removal
              </IonText>
            </div>
            <div>
              <IonText>
                S 034-014 <br />
                Remove the truck lock (AMM 32-11-23/401).
              </IonText>
            </div>
          </IonCol>
          <IonCol>
            <IonContent fullscreen={true}>
              <PDFViewer pageNumber={8}/>
            </IonContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

const authCondition = (authUser: any) => !!authUser;

export const Task = withAuthorization(authCondition)(TaskComponent);
