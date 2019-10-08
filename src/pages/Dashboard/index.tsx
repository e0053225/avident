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
  IonIcon
} from "@ionic/react";
import { notifications } from 'ionicons/icons';
import "./Dashboard.css";

const DashboardComponent = ({ history }: { [key: string]: any }) => (
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
    <IonContent>
      <IonGrid>
        <IonRow class="top-row">
          <IonCol>
            <IonCard color="light">
              <IonCardTitle>Welcome back, Randy!</IonCardTitle>
              <IonCardContent>1</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="light">
              <IonCardTitle>Date</IonCardTitle>
              <IonCardContent>1</IonCardContent>
              <IonCardSubtitle>Scheduled Task Remaining</IonCardSubtitle>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="light">
              <IonCardTitle>Task Completed</IonCardTitle>
              <IonCardContent>1</IonCardContent>
              <IonCardSubtitle>You are level 17</IonCardSubtitle>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="light">
              <IonCardTitle>Total Points</IonCardTitle>
              <IonCardContent>1</IonCardContent>
              <IonCardSubtitle>Redeem Points</IonCardSubtitle>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard color="light">
              <IonCardTitle class="header">
                <IonText color="light">Your Task</IonText>
              </IonCardTitle>
              <IonCardContent>1</IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonCol>
                <IonCard color="light">
                  <IonCardHeader>Tech Manual</IonCardHeader>
                  <IonCardContent>1</IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard color="light">
                  <IonCardHeader>Order Parts</IonCardHeader>
                  <IonCardContent>2</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard color="light">
                  <IonCardHeader>Report Defects</IonCardHeader>
                  <IonCardContent>3</IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard color="light">
                  <IonCardHeader>Identify Parts</IonCardHeader>
                  <IonCardContent>4</IonCardContent>
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
