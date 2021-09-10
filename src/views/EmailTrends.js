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

function EmailTrends() {
  return (
    <>
      <Container fluid>
          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">B2C + B2B Email Trends</Card.Title>
                <p className="card-category">Open Rates</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "7/22",
                        "7/29",
                        "8/4",
                        "8/12",
                        "8/19",
                        "8/26",
                        "9/3",
                        "9/9",
                      ],
                      series: [
                        [
                          33,
                          33,
                          20,
                          33,
                          35,
                          26,
                          24,
                          26,
                        ],
                        [
                          33,
                          31,
                          30,
                          33,
                          35,
                          22,
                          21,
                          27,
                        ],
                        [
                          30,
                          28,
                          26,
                          26,
                          29,
                          41,
                          26,
                          24,
                        ],
                        [
                          21,
                          21,
                          30,
                          25,
                          26,
                          14,
                          25,
                          32,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 12,
                      axisX: {
                        showGrid: true,
                      },
                      height: "250px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  LO - Blue&nbsp;&nbsp;
                  LSS - Red&nbsp;&nbsp;
                  SG - Orange&nbsp;&nbsp;
                  CF - Purple<br />
                  <i className="fas fa-check text-success"></i> Last updated 9/9/21 @ 10:30 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
      </Container>
    </>
  );
}
export default EmailTrends;