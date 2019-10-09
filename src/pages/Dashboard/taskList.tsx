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
  IonIcon,
  IonList,
  IonItem,
  IonSegmentButton,
  IonSegment,
  IonImg,
  IonProgressBar
} from "@ionic/react";
import planeImg from "../../assets/imgs/SIA-B747.png";
import * as ROUTES from "../../constants/routes";

class TaskListComponent extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      list: [],
      selectedStatus: ""
    };
  }
  public componentDidMount() {}

  public render() {
    return (
      <IonCard color="light">
        <IonCardTitle class="header">
          <IonText color="light">Your Tasks</IonText>
        </IonCardTitle>
        <IonToolbar>
          <div slot="end">
            <IonSegment>
              <IonSegmentButton
                onIonSelect={() => this.setState({ selectedStatus: "New" })}
                class="status-button"
              >
                <IonLabel>New</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                onIonSelect={() => this.setState({ selectedStatus: "Started" })}
                class="status-button"
              >
                <IonLabel>Started</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                onIonSelect={() =>
                  this.setState({ selectedStatus: "Completed" })
                }
                class="status-button"
              >
                <IonLabel>Completed</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
        </IonToolbar>
        <IonCardContent class="task-list">
          <IonContent>
            <IonList>
              <IonCard button href={ROUTES.TASK} color="light">
                <IonCardHeader class="ion-no-padding">
                  <h1>TASK 32-11-02-004-001</h1>
                </IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h2>Wing Landing Gear Shock Struct Removal</h2>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonCardContent class="ion-no-padding">
                        <IonImg src={planeImg} />
                        <IonText>9V-SPK BOEING-747-412</IonText>
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                      <IonText>Progress:</IonText>
                      <IonProgressBar
                        color="warning"
                        value={0.9}
                      ></IonProgressBar>
                </IonGrid>
              </IonCard>
              <IonCard button color="light">
                <IonCardHeader class="ion-no-padding">
                  <h1>TASK 32-11-02-404-019</h1>
                </IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h2>Wing Landing Gear Shock Struct Installation</h2>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonCardContent class="ion-no-padding">
                        <IonImg src={planeImg} />
                        <IonText>9V-SPK BOEING-747-412</IonText>
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                      <IonText>Progress:</IonText>
                      <IonProgressBar
                        color="error"
                        value={0}
                      ></IonProgressBar>
                </IonGrid>
              </IonCard>
              <IonCard button color="light">
                <IonCardHeader class="ion-no-padding">
                  <h1>TASK 32-11-02-603-001</h1>
                </IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h2>Wing Landing Gear Shock Struct Fluid Replacement</h2>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonCardContent class="ion-no-padding">
                        <IonImg src={planeImg} />
                        <IonText>9V-SPK BOEING-747-412</IonText>
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                      <IonText>Progress:</IonText>
                      <IonProgressBar
                        color="success"
                        value={1}
                      ></IonProgressBar>
                </IonGrid>
              </IonCard>
            </IonList>
          </IonContent>
        </IonCardContent>
      </IonCard>
    );
  }
}

const authCondition = (authUser: any) => !!authUser;

export const TaskList = withAuthorization(authCondition)(TaskListComponent);
