import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { IonButton, IonText, IonRow, IonContent, IonCol } from "@ionic/react";

type Props = {
  pageNumber: any,
  fileName: any
}

class PDFViewer extends Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  state = {
    fileName: "/" + this.props.fileName + ".pdf",
    numPages: 0,
    pageNumber: this.props.pageNumber || 1,
    isLastPage: false,
    isFirstPage: true
  };
  
  componentDidUpdate(prevState: any) {
    if(this.props.fileName !== prevState.fileName){
      this.setState({fileName: "/" + this.props.fileName + ".pdf", pageNumber: this.props.pageNumber || 1})
    }
  }

  onDocumentLoadSuccess = ({ numPages }: any) => {
    this.setState({ numPages });
  };

  nextPage = () => {
    if (this.state.pageNumber < this.state.numPages) {
      var newPage = this.state.pageNumber + 1;
      this.setState({ pageNumber: newPage });
    }
  };

  prevPage = () => {
    if (this.state.pageNumber > 1) {
      var newPage = this.state.pageNumber - 1;
      this.setState({ pageNumber: newPage });
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;

    const prevDisabled = pageNumber === 1;
    const nextDisabled = pageNumber === numPages;
    return (
      <div>
        <Document
          file={this.state.fileName}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page height={590} pageNumber={pageNumber} />
        </Document>
        <div style={{paddingLeft: "120px"}}>
        <IonButton size="small" disabled={prevDisabled} onClick={this.prevPage}>
          Previous
        </IonButton>
        <IonText>
          Page {pageNumber} of {numPages}
        </IonText>
        <IonButton size="small" disabled={nextDisabled} onClick={this.nextPage}>
          Next
        </IonButton>
        </div>
      </div>
    );
  }
}

export default PDFViewer;
