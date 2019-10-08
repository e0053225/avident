import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { SignInForm } from "./SignInForm";
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
  IonGrid
} from '@ionic/react';
import './SignIn.css';

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <IonPage>
  <IonHeader>
    <IonToolbar color="primary">
      <IonTitle>Sign In</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent fullscreen={true} class="background-image">
  <IonGrid>
    <IonRow><IonCol><h1></h1></IonCol></IonRow>
    <IonRow><IonCol><h1></h1></IonCol></IonRow>
    <IonRow><IonCol><h1></h1></IonCol></IonRow>
    <IonRow><IonCol><h1></h1></IonCol></IonRow>
    <IonRow><IonCol><h1></h1></IonCol></IonRow>
    <IonRow><IonCol><h1></h1></IonCol></IonRow>
    <IonRow>
  <IonCol size="4"></IonCol>
  <IonCol><SignInForm history={history} /></IonCol>
  <IonCol size="4"></IonCol>
  </IonRow>
  </IonGrid>
  </IonContent>
  </IonPage>
  
);

export const SignIn = withRouter(SignInComponent);
