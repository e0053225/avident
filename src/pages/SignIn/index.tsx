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
} from '@ionic/react';
import './SignIn.css';

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <div>
    <SignInForm history={history} />
  </div>
);

export const SignIn = withRouter(SignInComponent);
