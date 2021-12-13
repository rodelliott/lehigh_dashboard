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
                <Card.Title as="h4">Lehigh Outfitters Email Trends</Card.Title>
                <p className="card-category">Open Rates &amp; CTR</p>
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
                          4,
                          5,
                          6,
                          5,
                          7,
                          9,
                          8,
                          8
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
                <i className="fas fa-circle text-info"></i> Open Rate<br />
                  <i className="fas fa-circle text-danger"></i> Click-Through Rate<br />
                  <i className="fas fa-check text-success"></i> Last updated 9/9/21 @ 11:30 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>


          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Lehigh Safety Shoes Email Trends</Card.Title>
                <p className="card-category">Open Rates &amp; CTR</p>
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
                          31,
                          30,
                          33,
                          35,
                          22,
                          21,
                          27,
                        ],
                        [
                          12,
                          9,
                          7,
                          8,
                          13,
                          8,
                          16,
                          12
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
                <i className="fas fa-circle text-info"></i> Open Rate<br />
                  <i className="fas fa-circle text-danger"></i> Click-Through Rate<br />
                  <i className="fas fa-check text-success"></i> Last updated 9/9/21 @ 11:30 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>




          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">SlipGrips Email Trends</Card.Title>
                <p className="card-category">Open Rates &amp; CTR</p>
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
                          5,
                          5,
                          4,
                          5,
                          4,
                          14,
                          5,
                          5
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
                <i className="fas fa-circle text-info"></i> Open Rate<br />
                  <i className="fas fa-circle text-danger"></i> Click-Through Rate<br />
                  <i className="fas fa-check text-success"></i> Last updated 9/9/21 @ 11:30 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>





          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">CustomFit Email Trends</Card.Title>
                <p className="card-category">Open Rates &amp; CTR</p>
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
                          21,
                          21,
                          30,
                          25,
                          26,
                          14,
                          25,
                          32,
                        ],
                        [
                          7,
                          8,
                          8,
                          7,
                          12,
                          10,
                          6,
                          6
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
                <i className="fas fa-circle text-info"></i> Open Rate<br />
                  <i className="fas fa-circle text-danger"></i> Click-Through Rate<br />
                  <i className="fas fa-check text-success"></i> Last updated 9/9/21 @ 11:30 p.m. EST
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