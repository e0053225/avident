import React from "react";
import { withRouter } from "react-router-dom";
import {
  IonContent,
  IonToolbar,
  IonCol,
  IonRow,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonList,
  IonSegmentButton,
  IonSegment,
  IonImg,
  IonProgressBar
} from "@ionic/react";
import planeImg from "../assets/imgs/SIA-B747.png";
import * as ROUTES from "../constants/routes";

const TaskListComponent = ({ history }: { [key: string]: any }) => (
      <IonCard color="light">
        <IonCardTitle class="header">
          <IonText color="light">Your Tasks</IonText>
        </IonCardTitle>
        <IonToolbar>
          <div slot="end">
            <IonSegment>
              <IonSegmentButton
                class="status-button"
              >
                <IonLabel>New</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                class="status-button"
              >
                <IonLabel>Started</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                class="status-button"
              >
                <IonLabel>Completed</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
        </IonToolbar>
        <IonCardContent class="task-list">
          <IonContent>
            <IonList>
              <IonCard button onClick={() => history.push(ROUTES.TASK)} color="light">
                <IonCardHeader class="ion-no-padding">
                  <h1>TASK 32-11-02-004-001</h1>
                </IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h2>Wing Landing Gear Shock Struct Removal</h2>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonCardContent class="ion-no-padding">
                        <IonImg src={planeImg} />
                        <IonText>9V-SPK BOEING-747-412</IonText>
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                      <IonText>Progress:</IonText>
                      <IonProgressBar
                        color="warning"
                        value={0.9}
                      ></IonProgressBar>
                </IonGrid>
              </IonCard>
              <IonCard button color="light">
                <IonCardHeader class="ion-no-padding">
                  <h1>TASK 32-11-02-404-019</h1>
                </IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h2>Wing Landing Gear Shock Struct Installation</h2>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonCardContent class="ion-no-padding">
                        <IonImg src={planeImg} />
                        <IonText>9V-SPK BOEING-747-412</IonText>
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                      <IonText>Progress:</IonText>
                      <IonProgressBar
                        color="error"
                        value={0}
                      ></IonProgressBar>
                </IonGrid>
              </IonCard>
              <IonCard button color="light">
                <IonCardHeader class="ion-no-padding">
                  <h1>TASK 32-11-02-603-001</h1>
                </IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h2>Wing Landing Gear Shock Struct Fluid Replacement</h2>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonCardContent class="ion-no-padding">
                        <IonImg src={planeImg} />
                        <IonText>9V-SPK BOEING-747-412</IonText>
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                      <IonText>Progress:</IonText>
                      <IonProgressBar
                        color="success"
                        value={1}
                      ></IonProgressBar>
                </IonGrid>
              </IonCard>
            </IonList>
          </IonContent>
        </IonCardContent>
      </IonCard>
    );

export const TaskList = withRouter(TaskListComponent);