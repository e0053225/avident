import * as React from "react";
import { withAuthorization } from "../firebase/withAuthorization";
import { RouteComponentProps, Link } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonCol,
  IonRow,
  IonText,
  IonGrid,
  IonButton,
  IonItem,
  IonLabel,
  IonTabBar,
  IonList,
  IonModal,
  IonCard
} from "@ionic/react";
import { HeaderBar } from "../components/HeaderBar";
import PDFViewer from "../components/PDFView";
import * as ROUTES from "../constants/routes";

const TaskComponent: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const [task, setTask] = React.useState();
  const [step, setStep] = React.useState();
  const [file, setFile] = React.useState();
  const [page, setPage] = React.useState();
  const [showModal, setShowModal] = React.useState(false);

  if (task && step) {
    const renderInstructions = (instruction: any) => {
      return (
        <IonItem onClick={() => {
          setFile(instruction.reference.split("/")[0]);
          setPage(1);
        }} key={instruction.instruction} color="medium">
          <IonCol>
            <IonText class="ion-text-wrap">{instruction.instruction}</IonText>
          </IonCol>
          <IonCol size="3">
            <IonText style={{ fontSize: "12px" }}>
              {instruction.reference}
            </IonText>
          </IonCol>
        </IonItem>
      );
    };

    return (
      <IonPage>
        <HeaderBar />
        <IonContent scrollY={false}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <div className="task-card-title">
                  <IonText class="white">{task.taskNumber}</IonText>
                  <br />
                  <IonText class="white">{task.taskName}</IonText>
                  <hr />
                  <IonText class="white">
                    Step: {step.stepNumber}/{task.totalSteps}
                  </IonText>
                </div>
                <div style={{ background: "white" }}>
                  <IonItem
                    onClick={() => {
                      setFile(step.stepReference.split("/")[0]);
                      setPage(1);
                    }}
                    color="white"
                  >
                    <IonCol size="2">
                      <IonButton
                        disabled={step.stepNumber < task.currentStep}
                        class="step-button"
                        color={
                          step.stepNumber < task.currentStep
                            ? "success"
                            : "warning"
                        }
                      >
                        {step.stepNumber}
                      </IonButton>
                    </IonCol>
                    <IonCol>
                      <IonText class="ion-text-wrap">
                        {step.stepInstruction}
                      </IonText>
                    </IonCol>
                    <IonCol size="4">
                      <IonText class="ion-text-wrap">
                        {step.stepReference}
                      </IonText>
                    </IonCol>
                  </IonItem>
                </div>
                <IonContent style={{height: "400px"}}>
                <IonList>
                  {step.stepInstructionList.map(renderInstructions)}
                </IonList>
                </IonContent>
                <IonRow
                  style={{ width: "500px", position: "fixed", bottom: "50px" }}
                >
                  <IonCol class="ion-no-padding">
                    <IonModal isOpen={showModal}>
                      <IonList>
                        <IonItem>
                          <IonGrid>
                            <IonRow>
                              <IonCol size="5">
                                <IonText
                                  color="dark"
                                  style={{ fontSize: "12px" }}
                                >
                                  17 Oct 2019 09:38PM
                                </IonText>
                              </IonCol>
                              <IonCol size="5">
                                <IonText
                                  color="dark"
                                  style={{ fontSize: "12px" }}
                                >
                                  AMM TASK 09-11-00
                                </IonText>
                              </IonCol>
                            </IonRow>
                            <IonRow>
                              <IonCol style={{ fontWeight: "bold" }} size="5">
                                Engineer: Deepak C.
                              </IonCol>
                              <IonCol size="5">Ground pin installed</IonCol>
                            </IonRow>
                          </IonGrid>
                        </IonItem>
                        <IonItem>
                          <IonGrid>
                            <IonRow>
                              <IonCol size="5">
                                <IonText
                                  color="dark"
                                  style={{ fontSize: "12px" }}
                                >
                                  18 Oct 2019 01:45PM
                                </IonText>
                              </IonCol>
                              <IonCol size="5">
                                <IonText
                                  color="dark"
                                  style={{ fontSize: "12px" }}
                                >
                                  AMM TASK 11-32-00
                                </IonText>
                              </IonCol>
                            </IonRow>
                            <IonRow>
                              <IonCol style={{ fontWeight: "bold" }} size="5">
                                Engineer: Leonard Neo
                              </IonCol>
                              <IonCol size="5">
                                Circuit breaker locked. Unlock before takeoff.
                              </IonCol>
                            </IonRow>
                          </IonGrid>
                        </IonItem>
                      </IonList>
                      <IonButton onClick={() => setShowModal(false)}>
                        Close Comments
                      </IonButton>
                    </IonModal>
                    <IonButton
                      onClick={() => setShowModal(true)}
                      color="danger"
                      expand="full"
                    >
                      Comments(2)
                    </IonButton>
                  </IonCol>
                  <IonCol class="ion-no-padding">
                    <IonButton
                      color="success"
                      disabled={step.stepNumber >= task.totalSteps}
                      onClick={() => setStep(task.steps[step.stepNumber])}
                      expand="full"
                    >
                      Next step
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol>
                <IonContent fullscreen={true}>
                  <IonText>Currently Viewing: {file}</IonText>
                  <PDFViewer pageNumber={page} fileName={file} />
                </IonContent>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  } else if (
    props.location.state.selectedTask &&
    props.location.state.selectedStep
  ) {
    setTask(props.location.state.selectedTask);
    setStep(props.location.state.selectedStep);
    setFile(props.location.state.selectedTask.taskReference);
    setPage(props.location.state.selectedStep.stepPage);
  }
  return null;
};

const authCondition = (authUser: any) => !!authUser;

export const Task = withAuthorization(authCondition)(TaskComponent);
