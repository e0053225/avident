import React from "react";
import { withRouter, Link, RouteComponentProps } from "react-router-dom";
import {
  IonContent,
  IonText,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonList,
  IonItem
} from "@ionic/react";

const ReferenceListComponent: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [task, setTask] = React.useState();

  const renderReference = (reference: any) => {
    return (
      <IonItem key={reference.referenceNumber}>
        <IonLabel class="ion-text-wrap">
          {reference.referenceNumber} {reference.referenceName}
        </IonLabel>
      </IonItem>
    );
  };
  if (task) {
  return (
    <IonCard color="light">
      <IonCardTitle class="reference-card-title">
        <IonText color="light">References</IonText>
      </IonCardTitle>
      <IonCardContent class="reference-list">
        <IonContent>
          <IonList>
          {task.references.map(renderReference)}
          </IonList>
        </IonContent>
      </IonCardContent>
    </IonCard>
  );
} else if (props.location.state.selectedTask) {
    setTask(props.location.state.selectedTask);
  }
  return null;
};

export const ReferenceList = withRouter(ReferenceListComponent);
