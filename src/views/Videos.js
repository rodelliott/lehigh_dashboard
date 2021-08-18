import React from "react";
import ChartistGraph from "react-chartist";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
          <Row>
          <Col md="6">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">CustomFit Videos</Card.Title>
                <p className="card-category"><i className="fab fa-youtube text-success"></i> <a href="https://www.youtube.com/channel/UCQWezX6E3wR8DxYLz-W3IYg">CF YouTube Channel Link</a></p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table className="table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1QKlnGRT3W2vR8LfL2Rlmj5dYqAHdJhsc/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> Meet Albert - Aetrex Albert Intro</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1mjYWEMbpefoQ1J8VSB_LIL3gvfpjasFp/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> Your Order's Journey</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/10l0P6anG1ZLGaQMXjGmLyky8pnvivlFh/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> Managed Safety Footwear Program</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1njl1KQgfwM_VurC_qxSwJ0Pjk3ycIBTy/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> CustomFit Safety Pledge</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1h1sgAGf4QAC4s-MfbsiNnIzMM98EDbVk/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> Command Center - Add/Edit/Remove Employees</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/11WWWYpFhm_Zmi8Y_mEc1Unr3Yq2i3lIo/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> Command Center - Employee Eligibility</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1GLs9RTXG0DVdpQjWqvouaAxrp8x0uKJU/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> Command Center - Track Order Returns</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1FAPhNrOjqWipAUfpiosR2pnlgN8BItqt/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> CustomFit - Easy Checkout Help</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1ViYTGLkpJloQVbswwzZetuY45W9TeEv_/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> CustomFit - How To Select A Style</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/19LROJK6yrs1w5bmQokJyO9a_eof9dA94/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> CustomFit - Easy Checkout Help (Spanish)</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1XTFbujBBOp2JLDdXhPGGpS4Ntu2g6-Zc/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> CustomFit - How To Select A Style (Spanish)</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="https://drive.google.com/file/d/1mZIapNjIP4sPq7lRdl5EMRHqEAHViCZO/view?usp=sharing"><i className="fas fa-arrow-down text-success"></i> Managed Safety Footwear Program (Fastenal)</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Brand Videos</Card.Title>
                <p className="card-category"><i className="fas fa-video text-success"></i> Videos From Vendors (ZIP File Downloads)</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table className="table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand A</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand B</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand C</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand D</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand E</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand F</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand G</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand H</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand I</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand J</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-success"></i> Brand K</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="">&nbsp;</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Dashboard;