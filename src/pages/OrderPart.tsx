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
  IonInput,
  IonAlert
} from "@ionic/react";
import { HeaderBar } from "../components/HeaderBar";
import partsImg from "../assets/imgs/partsImg.jpg";

const OrderPartComponent = ({ history }: { [key: string]: any }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  return (
    <IonPage>
      <HeaderBar />
      <IonContent scrollY={false}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar value="2U704"></IonSearchbar>
              <IonList>
                <IonListHeader
                  style={{ background: "lightGrey", textAlign: "center" }}
                >
                  <IonCol>Name</IonCol>
                  <IonCol>Part Number</IonCol>
                  <IonCol size="2">Quantity Left</IonCol>
                </IonListHeader>
                <IonItem style={{ textAlign: "center" }}>
                  <IonCol>Orange Carabiner</IonCol>
                  <IonCol>2U704</IonCol>
                  <IonCol size="2">20</IonCol>
                </IonItem>
                <IonItem style={{ textAlign: "center" }}>
                  <IonCol>Normal Carabiner</IonCol>
                  <IonCol>2U700</IonCol>
                  <IonCol size="2">10</IonCol>
                </IonItem>
                <IonItem style={{ textAlign: "center" }}>
                  <IonCol>Aluminium Carabiner</IonCol>
                  <IonCol>2U500</IonCol>
                  <IonCol size="2">30</IonCol>
                </IonItem>
              </IonList>
            </IonCol>

            <IonCol>
              <div className="order-parts-header">
                <IonText class="white">Order Page</IonText>
              </div>
              <img width="500px" src={partsImg}></img>
              <IonContent scrollY={false} style={{ textAlign: "center" }}>
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <IonText>Part Name: Orange Carabiner</IonText> <hr />
                <IonText>Part Number: 2U704</IonText>
                <hr />
                <IonText>Price: $35</IonText>
                <br />
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
                <IonButton onClick={() => setShowAlert(true)}>Send Order</IonButton>
                <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Success'}
          message={'Order has been placed'}
          buttons={['OK']}
        />
              </IonContent>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const authCondition = (authUser: any) => !!authUser;

export const OrderPart = withAuthorization(authCondition)(OrderPartComponent);
