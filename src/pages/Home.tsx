import * as React from "react";
import { withAuthorization } from "../firebase/withAuthorization";
import { SignOutButton } from "../components/SignOutButton";
import {
  IonPage,
  IonContent,
  IonCol,
  IonRow,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonButton,
  IonImg
} from "@ionic/react";
import { book, cart, construct, qrScanner } from "ionicons/icons";
import TaskList from "../components/TaskList";
import { HeaderBar } from "../components/HeaderBar";
import { RouteComponentProps } from "react-router-dom";
import { TASKS } from "../data/tasks";
import OrderImg from "../assets/imgs/noun_cart.png";
import manualImg from "../assets/imgs/noun_manual.png";
import wrenchImg from "../assets/imgs/noun_Wrench.png";
import identifyImg from "../assets/imgs/noun_qrscanner.png";

const HomePage: React.FunctionComponent<RouteComponentProps<{}>> = (
  props: RouteComponentProps<{}>
) => {
  let today = new Date();
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let date =
    weekday[today.getDay()] +
    " " +
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear();
  let scheduledTask = TASKS.reduce((a, b) => {
    if (b.progress !== 100) {
      return a + 1;
    } else return a;
  }, 0);
  return (
    <IonPage>
      <HeaderBar />
      <IonContent scrollY={false}>
        <IonGrid>
          <IonRow class="top-row">
            <IonCol size="4.5">
              <div className="welcome-text-box">
                <IonText class="welcome-text">Welcome back, Randy!</IonText>
              </div>
              <SignOutButton />
            </IonCol>
            <IonCol size="2.5">
              <IonCard class="header-card" color="light">
                <IonCardTitle class="header-card-title">{date}</IonCardTitle>
                <IonCardContent class="header-card-content">
                  {scheduledTask}
                </IonCardContent>
                <IonCardContent class="header-card-footer">
                  Scheduled Task Remaining
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="2.5">
              <IonCard class="header-card" color="light">
                <IonCardTitle class="header-card-title">
                  Task Completed
                </IonCardTitle>
                <IonCardContent class="header-card-content">56</IonCardContent>
                <IonCardContent class="header-card-footer">
                  You are level 17
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="2.5">
              <IonCard class="header-card" color="light">
                <IonCardTitle class="header-card-title">
                  Total Points
                </IonCardTitle>
                <IonCardContent class="header-card-content">
                  379 pts
                </IonCardContent>
                <IonButton color="dark" size="small" fill="outline">
                  <IonCardContent class="header-card-footer">
                    Redeem Points
                  </IonCardContent>
                </IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="7">
              <TaskList></TaskList>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol size="6">
                  <IonCard button color="light">
                    <IonCardHeader class="card-title">
                      Tech Manual
                    </IonCardHeader>
                    <IonCardContent class="card-icon">
                      <IonImg class="icon-size" src={manualImg} />
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard button color="light">
                    <IonCardHeader class="card-title">
                      Order Parts
                    </IonCardHeader>
                    <IonCardContent class="card-icon">
                    <IonImg class="icon-size" src={OrderImg} />
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonCard button color="light">
                    <IonCardHeader class="card-title">
                      Report Defects
                    </IonCardHeader>
                    <IonCardContent class="card-icon">
                      <IonImg class="icon-size" src={wrenchImg} />
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard button color="light">
                    <IonCardHeader class="card-title">
                      Identify Parts
                    </IonCardHeader>
                    <IonCardContent class="card-icon">
                      <IonImg class="icon-size" src={identifyImg} />
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const authCondition = (authUser: any) => !!authUser;

export const Home = withAuthorization(authCondition)(HomePage);
