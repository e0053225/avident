import * as React from "react";
import { db } from "../firebase";
import { withAuthorization } from "../firebase/withAuthorization";
import {
  IonSearchbar,
  IonContent,
  IonPage,
  IonText,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonButton,
  IonList,
  IonListHeader,
  IonItem,
  IonInput
} from "@ionic/react";
import { HeaderBar } from "../components/HeaderBar";

const OrderPartComponent = ({ history }: { [key: string]: any }) => (
  <IonPage>
    <HeaderBar />
    <IonContent scrollY={false}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonSearchbar value="Main Wheel 6'"></IonSearchbar>
            <IonList>
              <IonListHeader
                style={{ background: "lightGrey", textAlign: "center" }}
              >
                <IonCol>Name</IonCol>
                <IonCol>Part Number</IonCol>
                <IonCol size="2">Quantity Left</IonCol>
              </IonListHeader>
              <IonItem style={{ textAlign: "center" }}>
                <IonCol>Main wheel ECO 6' (Faeta)</IonCol>
                <IonCol>K216A000</IonCol>
                <IonCol size="2">0</IonCol>
              </IonItem>
              <IonItem style={{ textAlign: "center" }}>
                <IonCol>Main wheel ECO POWER 6' (Faeta)</IonCol>
                <IonCol>K226A000</IonCol>
                <IonCol size="2">7</IonCol>
              </IonItem>
              <IonItem style={{ textAlign: "center" }}>
                <IonCol>Main wheel 6' (Faeta)</IonCol>
                <IonCol>K206A000</IonCol>
                <IonCol size="2">4</IonCol>
              </IonItem>
            </IonList>
          </IonCol>

          <IonCol>
            <div className="order-parts-header">
              <IonText class="white">Order Page</IonText>
            </div>
            <img
              width="500px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMq-KXs6FWOGA_v8qgv0Q1Egw2XpRzn9mDQ9yHyE5ydkYJsmWE"
            ></img>
            <IonContent scrollY={false} style={{ textAlign: "center" }}>
              <IonText>Part Name: Carabiner rated for 1 Ton</IonText> <hr/>
              <IonText>Part Number: 2U704</IonText><hr/>
              <IonText>Note: complete assembly including brake</IonText><hr/>
              <IonText>Price: $395</IonText><br/>

              <IonInput
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "80px"
                }}
                color="dark"
                inputmode="numeric"
                placeholder="0"
                type="number"
              >
                QTY:
              </IonInput>
              <IonButton>Send Order</IonButton>
            </IonContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

const authCondition = (authUser: any) => !!authUser;

export const OrderPart = withAuthorization(authCondition)(OrderPartComponent);
