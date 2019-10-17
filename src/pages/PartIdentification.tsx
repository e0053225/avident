import * as React from "react";
import { db } from "../firebase";
import { withAuthorization } from "../firebase/withAuthorization";
import {
  IonToolbar,
  IonContent,
  IonLabel,
  IonBadge,
  IonPage,
  IonItem,
  IonText,
  IonChip,
  IonIcon,
  IonAvatar,
  IonGrid,
  IonCol,
  IonRow,
  IonFab,
  IonFabButton,
  IonCard,
  IonButton,
  IonImg
} from "@ionic/react";
import { camera, notifications } from "ionicons/icons";
import * as ROUTES from "../constants/routes";
import "./PartIdentification.css";
import { HeaderBar } from "../components/HeaderBar";
import "./PartIdentification.css";
import axios from "axios";
import { storage } from "../firebase";

const partList: { [key: string]: string } = {
  "16701017ND": "DC Motor",
  "2U704": "Carabiner",
  NAS2003563E: "Servo Motor"
};
import ReactDOM from "react-dom";
import { App } from "../App";

const PartIdentificationComponent = ({ history }: { [key: string]: any }) => {
  const [image, setImage] = React.useState("");
  const [rawImage, setRawImage] = React.useState();
  const [resultList, setResultList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  var storageRef = storage.ref();
  const getIdentification = (URL: any) => {
    axios
      .get(
        "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify",
        {
          auth: {
            username: "apikey",
            password: "bg_wrKJlSk9MXnb5iSYli7LOminoZYSzZAB9DRmBAuU4"
          },
          params: {
            url: URL,
            version: "2018-03-19",
            classifier_ids: "DefaultCustomModel_179205815"
          }
        }
      )
      .then(response => {
        setResultList(response.data.images[0].classifiers[0].classes);
        setLoading(false);
      });
  };

  const uploadImage = () => {
    setLoading(true);
    storageRef
      .child("images")
      .put(rawImage)
      .then(function(snapshot) {
        storageRef
          .child("images")
          .getDownloadURL()
          .then(URL => getIdentification(URL));
      });
  };
  const renderResultList = (result: any, index: any) => {
    if (result.score > 0.9) {
      return (
        <IonCard color="light" style={{ height: "260px" }} key={index}>
          <IonImg
            style={{ width: "200px", height: "200px" }}
            src={"/" + result.class + ".JPG"}
          />
          <IonText>Part Number: {result.class}</IonText> <br />
          <IonText>Part Name: {partList[result.class]}</IonText> <br />
          <IonText>Confidence: {result.score}</IonText>
        </IonCard>
      );
    } else {
      return null;
    }
  };

  return (
    <IonPage>
      <HeaderBar />
      <IonContent scrollY={false}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonRow class="camera">
                <img className="image" src={image} />
              </IonRow>
              <IonRow>
                <div className="center">
                  <IonRow>
                    <IonFabButton
                      onClick={() => document.getElementById("file")!.click()}
                    >
                      <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                    <IonFabButton onClick={uploadImage} disabled={!rawImage}>
                      Upload
                    </IonFabButton>
                    <input
                      id="file"
                      type="file"
                      accept="image/*"
                      capture="camera"
                      style={{ display: "none" }}
                      onChange={event => {
                        if (event.target.files && event.target.files[0]) {
                          setImage(URL.createObjectURL(event.target.files[0]));
                          setRawImage(event.target.files[0]);
                        }
                      }}
                    />
                  </IonRow>
                </div>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonText class="bluetext"> Possible Matches Found</IonText>
              </IonRow>

              <IonRow class="results">
                {loading ? "Loading..." : resultList.map(renderResultList)}
                {resultList.map(renderResultList)}
                {resultList.map(renderResultList)}
                {resultList.map(renderResultList)}
                {resultList.map(renderResultList)}
                {resultList.map(renderResultList)}
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const authCondition = (authUser: any) => !!authUser;

export const PartIdentification = withAuthorization(authCondition)(
  PartIdentificationComponent
);
