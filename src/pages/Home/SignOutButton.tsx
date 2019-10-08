import * as React from "react";
import { auth } from "../../firebase";
import { IonButton } from "@ionic/react";

export const SignOutButton = () => (
  <IonButton onClick={auth.doSignOut} expand="block" color="warning"><strong className="white">Sign Out</strong></IonButton>
);
