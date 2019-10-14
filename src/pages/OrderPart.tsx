import * as React from "react";
import { db } from "../firebase";
import { withAuthorization } from "../firebase/withAuthorization";
import {
  IonToolbar,
  IonTitle,
  IonHeader,
  IonButtons,
  IonBackButton,
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
  IonText,
  IonChip,
  IonIcon,
  IonAvatar,
  IonGrid,
  IonCol,
  IonRow,
  IonFab,
  IonFabButton,
  IonCard,
  IonList,
  IonButton
} from "@ionic/react";
import { HeaderBar } from "../components/HeaderBar";

const OrderPartComponent = ({ history }: { [key: string]: any }) => (
  <IonPage>
    <HeaderBar />
    <IonContent scrollY={false}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="rowtop-">
              <IonSearchbar value="Main Wheel 6'"></IonSearchbar>
              <IonText class="white">
                TASK 32-11-02-004-001 <br />
                Wing Landing Gear Shock Strut Removal
              </IonText>
            </div>
          </IonCol>

          <IonCol>
            <IonContent class="header">Order Page</IonContent>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonGrid>
              <IonRow>
                <IonCol>Name</IonCol>
                <IonCol>Part Number</IonCol>
                <IonCol>Quantity Left</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Main wheel ECO 6' (Faeta)</IonCol>
                <IonCol>K216A000</IonCol>
                <IonCol>0</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Main wheel ECO POWER 6' (Faeta)</IonCol>
                <IonCol>K226A000</IonCol>
                <IonCol>7</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Main wheel 6' (Faeta)</IonCol>
                <IonCol>K206A000</IonCol>
                <IonCol>4</IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
          <IonCol>
            <IonRow>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMq-KXs6FWOGA_v8qgv0Q1Egw2XpRzn9mDQ9yHyE5ydkYJsmWE"></img>
            </IonRow>
            <IonRow>Main wheel ECO 6' (Faeta)</IonRow>
            <IonRow>K216A000</IonRow>
            <IonRow>Note: complete assembly including brake</IonRow>
            <IonRow>$395</IonRow>
            <IonRow>QTY:</IonRow>
            <IonRow><IonIcon name="arrow-back"></IonIcon><IonCard>0</IonCard><IonIcon name="arrow-forward"></IonIcon></IonRow>
            <IonRow><IonButton expand="block">Submit</IonButton></IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

const authCondition = (authUser: any) => !!authUser;

export const OrderPart = withAuthorization(authCondition)(OrderPartComponent);
