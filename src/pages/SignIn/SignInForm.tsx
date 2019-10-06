import * as React from "react";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";
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
} from '@ionic/react';

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  password?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  password: string;
}

export class SignInForm extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    password: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);

    this.state = { ...SignInForm.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...SignInForm.INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(SignInForm.propKey("error", error));
      });

    event.preventDefault();
  };

  public render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <IonPage>
              <IonHeader>
                  <IonToolbar color="primary">
                      <IonTitle>Sign In</IonTitle>
                  </IonToolbar>
              </IonHeader>

              <IonContent>
                  <IonRow class="row">
                      <div>
                          <IonText><h2 no-margin margin-vertical className="text-center">Sign In</h2></IonText>
                      </div>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonInput
                              name="email"
                              value={email}
                              onIonChange={event => this.setStateWithEvent(event, "email")}
                              clearInput
                              type="email"
                              placeholder="Email"
                              class="input"
                              padding-horizontal
                              clear-input="true"></IonInput>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonInput
                              clearInput
                              name="password"
                              value={password}
                              onIonChange={event => this.setStateWithEvent(event, "password")}
                              type="password"
                              placeholder="Password"
                              class="input"
                              padding-horizontal
                              clear-input="true"></IonInput>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonButton disabled={isInvalid} onClick={event => this.onSubmit(event)} type="submit" expand="block" color="undefined" class="btn-transition"><strong className="white">Sign In</strong></IonButton>
                      </IonCol>
                  </IonRow>
                  {error && <p>{error.message}</p>}
              </IonContent >
          </IonPage >
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(SignInForm.propKey(columnType, (event.target as any).value));
  }
}
