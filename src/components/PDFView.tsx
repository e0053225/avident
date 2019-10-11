import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { IonButton, IonText } from "@ionic/react";

type Props = {
  pageNumber: any
}

class PDFViewer extends Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  state = {
    numPages: 0,
    pageNumber: this.props.pageNumber || 1,
    isLastPage: false,
    isFirstPage: true
  };

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
          file="/document.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page height={1000} width={480} pageNumber={pageNumber} />
        </Document>
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
    );
  }
}

export default PDFViewer;
