import * as React from "react";
import { db } from "../../firebase";
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
  IonSegment,
  IonSegmentButton,
  IonImg,
  IonProgressBar
} from "@ionic/react";
import { notifications } from "ionicons/icons";
import * as ROUTES from "../../constants/routes";
import planeImg from "../../assets/imgs/SIA-B747.png";

class TaskComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      task: null
    };
  }

  public componentDidMount() {}

  public render() {
    return (
      <IonPage>
        <IonToolbar>
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
        <IonContent scrollY={false}>
          <IonGrid>
            <IonRow class="top-row">
              <IonCol size="4.5">
                <div className="welcome-text-box">
                  <IonImg src={planeImg} />
                  <IonText class="white">9V-SPK BOEING-747-412</IonText>
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
                    90%
                  </IonCardContent>
                  <IonCardContent class="header-card-footer">
                    <IonProgressBar
                      color="warning"
                      value={0.9}
                    ></IonProgressBar>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="7">
                <IonCard color="light">
                  <IonCardTitle class="task-card-title">
                    <IonText color="light">
                      TASK 32-11-02-004-001
                      <br />
                      Wing Landing Gear Shock Strut Removal
                    </IonText>
                  </IonCardTitle>
                  <IonCardContent class="task-list">
                    <IonContent>
                      <IonList>
                        <IonItem>
                          <IonButton color="success" size="large">
                            10
                          </IonButton>
                          <IonLabel>
                            Remove the lockbolt (16), the nut (15), the shim
                            (17),
                            <br /> and the bolt(14) from the shock strut (Detail
                            E).
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonButton color="warning" size="large">
                            11
                          </IonButton>
                          <IonLabel>
                            S 034-014 Remove the truck lock (AMM 32-11-23/401).
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonButton color="warning" size="large">
                            12
                          </IonButton>
                          <IonLabel>
                            S 034-015 (12) Remove the lockbolts (5), the
                            lubrication inserts (3), <br /> the nuts (2), the
                            washers (1), and the bolts (7) from each ...
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonContent>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard color="light">
                  <IonCardTitle class="reference-card-title">
                    <IonText color="light">References</IonText>
                  </IonCardTitle>
                  <IonCardContent class="reference-list">
                    <IonContent>
                      <IonList>
                        <IonItem>
                          <IonLabel>AMM 32-11-02 Figure 401</IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel>AMM 09-11-00/201, Towing</IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel>
                            AMM 32-00-30/201, Landing Gear Door Locks
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel>AMM 32-11-01/401, Wing Gear</IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel>
                            AMM 32-11-03/401, Wing Gear Drag Brace
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel>AIPC 32-11-11 Fig. 2</IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel>AIPC 32-11-14 Fig.2</IonLabel>
                        </IonItem>
                      </IonList>
                    </IonContent>
                  </IonCardContent>
                </IonCard>
                <IonCard color="light">
                  <IonCardTitle class="reference-card-title">
                    <IonText color="light">Materials and Tools</IonText>
                  </IonCardTitle>
                  <IonCardContent class="reference-list">
                    <IonContent>
                      <IonList>
                        <IonItem color="dark">
                          <IonHeader>Special Tools and Equipment</IonHeader>
                        </IonItem>
                        <IonItem>
                          <IonLabel>
                            (1) OHME65B01201-1 - <br />
                            Wing and Body Gear Overhead Mechanical Equipment
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel>
                            (2) 12PRE65B00161-1 - <br/>Pivot Pin Thread Protector
                          </IonLabel>
                        </IonItem>
                        <IonItem color="dark">
                          <IonHeader>Standard Tools and Equipment</IonHeader>
                        </IonItem>
                        <IonItem>
                          <IonLabel>(1) Axle Jack and Adapter</IonLabel>
                        </IonItem>
                      </IonList>
                    </IonContent>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

const authCondition = (authUser: any) => !!authUser;

export const Task = withAuthorization(authCondition)(TaskComponent);
