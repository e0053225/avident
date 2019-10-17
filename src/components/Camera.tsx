import * as React from "react";
import { Plugins, CameraResultType } from "@capacitor/core";
import {
  IonHeader,
  IonTabBar,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFabButton,
  IonIcon,
  IonRow
} from "@ionic/react";
import { camera, notifications } from "ionicons/icons";

const { Camera } = Plugins;

export class CameraComponent extends React.Component {
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }

  render() {
    return [
      <IonContent fullscreen scrollY={false}>
        <IonRow class="camera">
        </IonRow>
        <IonRow>
          <div className="center">
            <IonFabButton onClick={() => this.takePicture()}>
              <IonIcon icon={camera}></IonIcon>
              <></>
            </IonFabButton>
          </div>
        </IonRow>
      </IonContent>
    ];
  }
}
