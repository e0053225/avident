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
  IonButton
} from "@ionic/react";
import planeImg from "../assets/imgs/SIA-B747.png";
import * as ROUTES from "../constants/routes";

const StepsListComponent: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [task, setTask] = React.useState();

  const renderStep = (step: any) => {
    return (
      <IonItem key={step.stepNumber} color={step.stepNumber < task.currentStep ? "medium" : "grey"}>
        <Link
          key={task.taskNumber}
          to={{ pathname: ROUTES.TASK, state: { selectedTask: task, selectedStep: step } }}
        >
          <IonButton disabled={step.stepNumber < task.currentStep} class="step-button" color={step.stepNumber < task.currentStep ? "success" : "warning"}>
            {step.stepNumber}
          </IonButton>
        </Link>
          <IonLabel class="ion-text-wrap">{step.stepInstruction}</IonLabel>
      </IonItem>
    );
  };

  if (task) {
    return (
      <IonCard color="light">
        <IonCardTitle class="task-card-title">
          <IonRow>
            <IonCol>
              <IonText color="light">
                {task.taskNumber}
                <br />
                {task.taskName}
              </IonText>
            </IonCol>
            <IonCol size="2.5">
              <IonButton disabled={task.currentStep < task.totalSteps}>Complete</IonButton>
            </IonCol>
          </IonRow>
        </IonCardTitle>
        <div style={{textAlign:"right", padding:"5px 10px"}}>
        <IonLabel>{task.currentStep - 1}/{task.totalSteps} steps completed</IonLabel>
        </div>
        <IonCardContent class="step-list">
          <IonContent>
            <IonList>{task.steps.map(renderStep)}</IonList>
          </IonContent>
        </IonCardContent>
      </IonCard>
    );
  } else if (props.location.state.selectedTask) {
    setTask(props.location.state.selectedTask);
  }
  return null;
};

export const StepsList = withRouter(StepsListComponent);
