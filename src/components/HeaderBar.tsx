import * as React from "react";
import {
  IonToolbar,
  IonChip,
  IonBadge,
  IonIcon,
  IonLabel,
  IonAvatar,
  IonButtons,
  IonBackButton,
  IonPopover,
  IonButton
} from "@ionic/react";
import { notifications } from "ionicons/icons";
import { SignOutButton } from "./SignOutButton";

export const HeaderBar = () => {
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton defaultHref="home" />
      </IonButtons>
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
  );
};
