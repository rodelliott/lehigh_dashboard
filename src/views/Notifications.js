import React from "react";
import NotificationAlert from "react-notification-alert";

import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Notifications() {
  const [showModal, setShowModal] = React.useState(false);
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Notifications</Card.Title>
            <p className="card-category">
            </p>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md="6">
                <h5>
                  <small><b>Brand Alerts</b></small>
                </h5>
                <Alert className="alert-with-icon" variant="danger">
                  <span
                    data-notify="icon"
                    className="nc-icon nc-bell-55"
                  ></span>
                  <span>
                    <b>Helly Hansen will be going out of stock soon. Do not promote.</b>
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="warning">
                  <span
                    data-notify="icon"
                    className="nc-icon nc-delivery-fast"
                  ></span>
                  <span>
                  <b>All Boston Group brands (Muck, Xtratuf, Servus, Ranger and NEOS) are experiencing shipping delays.</b>
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="danger">
                  <span
                    data-notify="icon"
                    className="nc-icon nc-app"
                  ></span>
                  <span>
                  <b>Ariat is experiencing shipping and logistic constraints reducing the number of their styles available. They are working to resolve this issue.</b>
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="warning">
                  <span
                    data-notify="icon"
                    className="nc-icon nc-umbrella-13"
                  ></span>
                  <span>
                  <b>Recent flooding in Tennessee has affected the Dan Post/Laredo distribution center. Product availability is limited until further notice.</b>
                  </span>
                </Alert>
              </Col>
              <Col md="6">
                <h5>
                  <small><b>Brands/Styles To Promote</b></small>
                </h5>
                <Alert className="alert-with-icon" variant="primary">
                <span
                    data-notify="icon"
                    className="nc-icon nc-notification-70"
                  ></span>
                  <span>
                    <b>New Terra EKG Styles</b>
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="info">
                <span
                    data-notify="icon"
                    className="nc-icon nc-satisfied"
                  ></span>
                  <span>
                    <b>New OS1st Styles</b>
                  </span>
                </Alert>
                <Alert className="alert-with-icon" variant="primary">
                <span
                    data-notify="icon"
                    className="nc-icon nc-notification-70"
                  ></span>
                  <span>
                    <b>New Twisted X Styles</b>
                  </span>
                </Alert>
              </Col>
            </Row>
            <br></br>
            <br></br>
           
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Notifications;
