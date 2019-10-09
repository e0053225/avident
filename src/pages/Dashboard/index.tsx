import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withAuthorization } from "../../firebase/withAuthorization";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCol,
  IonRow,
  IonInput,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
  IonChip,
  IonLabel,
  IonBadge,
  IonIcon,
  IonList,
  IonItem,
  IonSegment,
  IonSegmentButton
} from "@ionic/react";
import {
  notifications,
  book,
  cart,
  construct,
  qrScanner
} from "ionicons/icons";
import "./Dashboard.css";
import { TaskList } from "./taskList";

const DashboardComponent = ({ history }: { [key: string]: any }) => (
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
    <IonContent scrollY={false}>
      <IonGrid>
        <IonRow class="top-row">
          <IonCol size="4.5">
            <div className="welcome-text-box">
            <IonText class="welcome-text">Welcome back, Randy!</IonText>
            </div>
          </IonCol>
          <IonCol size="2.5">
            <IonCard class="header-card" color="light">
              <IonCardTitle class="header-card-title">18/10/2019</IonCardTitle>
              <IonCardContent class="header-card-content">5</IonCardContent>
              <IonCardContent class="header-card-footer">Scheduled Task Remaining</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="2.5">
          <IonCard class="header-card" color="light">
              <IonCardTitle class="header-card-title">Task Completed</IonCardTitle>
              <IonCardContent class="header-card-content">56</IonCardContent>
              <IonCardContent class="header-card-footer">You are level 17</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="2.5">
          <IonCard class="header-card" color="light">
              <IonCardTitle class="header-card-title">Total Points</IonCardTitle>
              <IonCardContent class="header-card-content">379 pts</IonCardContent>
              <IonCardContent class="header-card-footer">Redeem Points</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="7">
            <TaskList></TaskList>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonCol size="6">
                <IonCard button color="light">
                  <IonCardHeader class="card-title">Tech Manual</IonCardHeader>
                  <IonCardContent class="card-icon">
                    <IonIcon class="icon-size" icon={book} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard button color="light">
                  <IonCardHeader class="card-title">Order Parts</IonCardHeader>
                  <IonCardContent class="card-icon">
                    <IonIcon class="icon-size" icon={cart} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonCard button color="light">
                  <IonCardHeader class="card-title">
                    Report Defects
                  </IonCardHeader>
                  <IonCardContent class="card-icon">
                    <IonIcon class="icon-size" icon={construct} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard button color="light">
                  <IonCardHeader class="card-title">
                    Identify Parts
                  </IonCardHeader>
                  <IonCardContent class="card-icon">
                    <IonIcon class="icon-size" icon={qrScanner} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

const authCondition = (authUser: any) => !!authUser;

export const Dashboard = withAuthorization(authCondition)(DashboardComponent);
