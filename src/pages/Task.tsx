import * as React from "react";
import { withAuthorization } from "../firebase/withAuthorization";
import { RouteComponentProps } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButton,
  IonCol,
  IonRow,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonList,
  IonItem,
  IonImg,
  IonProgressBar
} from "@ionic/react";
import { HeaderBar } from "../components/HeaderBar";
import PDFViewer from "../components/PDFView";

const TaskComponent: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [task, setTask] = React.useState();
  const [step, setStep] = React.useState();
  if (task && step) {
    return (
  <IonPage>
    <HeaderBar />
    <IonContent scrollY={false}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="top-row">
              <IonText class="white">
                {task.taskNumber}
              </IonText>
              <br/>
              <IonText class="white">
                {task.taskName}
              </IonText>
              <hr/>
              <IonText class="white">
                Step: {step.stepNumber}/{task.totalSteps}
              </IonText>
            </div>
            <div>
              <IonText>
                {step.stepInstruction}
              </IonText>
              <IonText>
                {step.stepReference}
              </IonText>
            </div>
          </IonCol>
          <IonCol>
            <IonContent fullscreen={true}>
              <IonText>Currently Viewing: {step.stepReference}</IonText>
              <PDFViewer pageNumber={step.stepPage}/>
            </IonContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);
} else if (props.location.state.selectedTask && props.location.state.selectedStep) {
  setTask(props.location.state.selectedTask);
  setStep(props.location.state.selectedStep);
}
return null;
};

const authCondition = (authUser: any) => !!authUser;

export const Task = withAuthorization(authCondition)(TaskComponent);
