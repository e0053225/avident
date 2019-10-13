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
  IonProgressBar
} from "@ionic/react";
import planeImg from "../assets/imgs/SIA-B747.png";
import * as ROUTES from "../constants/routes";
import { TASKS, TaskInfo } from "../data/tasks";

const TaskListComponent: React.FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  const renderTaskCard = (task: any) => {
    return (
      <Link
        key={task.taskNumber}
        to={{ pathname: ROUTES.TASK_OVERVIEW, state: { selectedTask: task } }}
      >
        <IonCard button color="light">
          <IonCardHeader class="ion-no-padding">
            <h1>{task.taskNumber}</h1>
          </IonCardHeader>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonText>
                  <h2>{task.taskName}</h2>
                </IonText>
              </IonCol>
              <IonCol size="4">
                <IonCardContent class="ion-no-padding">
                  <IonImg src={planeImg} />
                  <IonText>
                    <h4>
                      {task.tailNumber} {task.planeModel}
                    </h4>
                  </IonText>
                </IonCardContent>
              </IonCol>
            </IonRow>
            <IonText>Progress:</IonText>
            <hr/>
            <IonProgressBar
              color={task.progress === 100 ? "success" : task.progress === 0 ? "danger" : "warning"}
              value={task.progress / 100}
            ></IonProgressBar>
          </IonGrid>
        </IonCard>
      </Link>
    );
  }
    return (
      <IonCard color="light">
        <IonCardTitle class="header">
          <IonText color="light">Your Tasks</IonText>
        </IonCardTitle>
        <IonToolbar>
          <div slot="end">
            <IonSegment>
              <IonSegmentButton class="status-button">
                <IonLabel>New</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton class="status-button">
                <IonLabel>Started</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton class="status-button">
                <IonLabel>Completed</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
        </IonToolbar>
        <IonCardContent class="task-list">
          <IonContent>
            <IonList>{TASKS.map(renderTaskCard)}</IonList>
          </IonContent>
        </IonCardContent>
      </IonCard>
    );
  }

export default withRouter(TaskListComponent);
