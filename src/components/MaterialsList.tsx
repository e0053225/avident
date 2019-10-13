import React from "react";
import { withRouter, Link, RouteComponentProps } from "react-router-dom";
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
  IonProgressBar,
  IonItem,
  IonButton,
  IonHeader
} from "@ionic/react";
import * as ROUTES from "../constants/routes";

const MaterialsListComponent: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [task, setTask] = React.useState();

  const renderMaterialCategory = (materialCategory: any, index: any) => {
    return (
      <div key={index}>
        <IonItem color="dark">
          <IonLabel class="ion-text-wrap">{materialCategory.materialCategory}</IonLabel>
        </IonItem>
        {materialCategory.materialList.map(renderMaterial)}
      </div>
    );
  };
  const renderMaterial = (material: any) => {
    return (
      <IonItem key={material.materialNumber}>
        <IonLabel class="ion-text-wrap">
          {material.materialNumber} {material.materialName}
        </IonLabel>
      </IonItem>
    );
  };
  if (task) {
    return (
      <IonCard color="light">
        <IonCardTitle class="reference-card-title">
          <IonText color="light">Materials and Tools</IonText>
        </IonCardTitle>
        <IonCardContent class="reference-list">
          <IonContent>
            <IonList>{task.materials.map(renderMaterialCategory)}</IonList>
          </IonContent>
        </IonCardContent>
      </IonCard>
    );
  } else if (props.location.state.selectedTask) {
    setTask(props.location.state.selectedTask);
  }
  return null;
};

export const MaterialsList = withRouter(MaterialsListComponent);
