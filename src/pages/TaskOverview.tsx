import * as React from "react";
import { withAuthorization } from "../firebase/withAuthorization";
import {
  IonPage,
  IonContent,
  IonCol,
  IonRow,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonProgressBar
} from "@ionic/react";
import planeImg from "../assets/imgs/SIA-B787-10.png";
import { HeaderBar } from "../components/HeaderBar";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import { StepsList } from "../components/StepsList";
import { ReferenceList } from "../components/ReferenceList";
import { MaterialsList } from "../components/MaterialsList";
import { RouteComponentProps } from "react-router";

const TaskOverviewPage: React.FunctionComponent<
  RouteComponentProps<{}>
> = props => {
  const [task, setTask] = React.useState();
  if (task) {
    return (
      <IonPage>
        <HeaderBar />
        <IonContent scrollY={false}>
          <IonGrid>
            <IonRow class="top-row">
              <IonCol size="4.5">
                <div className="welcome-text-box">
                  <IonImg src={planeImg} />
                  <IonText class="white">
                    {task.tailNumber} {task.planeModel}
                  </IonText>
                  <hr />
                  <IonText class="white">Arrival: 20 Sep 2019, 07:43</IonText>
                  <br />
                  <IonText class="white">Departure: 21 Sep 2019, 09:55</IonText>
                </div>
              </IonCol>
              <IonCol size="2.5">
                <IonCard class="header-card" color="light">
                  <IonCardTitle class="header-card-title">
                    Logs Gallery
                  </IonCardTitle>
                  <IonCardContent class="header-card-content">5</IonCardContent>
                  <IonCardContent class="header-card-footer">
                    9 pages captured
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="2.5">
                <IonCard class="header-card" color="light">
                  <IonCardTitle class="header-card-title">
                    Time Left
                  </IonCardTitle>
                  <IonCardContent class="header-card-content">
                    26h
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="2.5">
                <IonCard class="header-card" color="light">
                  <IonCardTitle class="header-card-title">
                    Progress
                  </IonCardTitle>
                  <IonCardContent class="header-card-content">
                    {task.progress}%
                  </IonCardContent>
                  <IonCardContent class="header-card-footer">
                    <IonProgressBar
                      color={
                        task.progress === 100
                          ? "success"
                          : task.progress === 0
                          ? "danger"
                          : "warning"
                      }
                      value={task.progress / 100}
                    ></IonProgressBar>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="7">
                <StepsList {...task} />
              </IonCol>
              <IonCol>
                <ReferenceList />
                <MaterialsList />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  } else if(props.location.state && props.location.state.selectedTask) {
    setTask(props.location.state.selectedTask);
  }
  return null;
};

const authCondition = (authUser: any) => !!authUser;

export const TaskOverview = withAuthorization(authCondition)(TaskOverviewPage);
