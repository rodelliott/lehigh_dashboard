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
          <Col lg="4" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-scroll text-success"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                      <p className="card-category">Lehigh CustomFit</p>
                      <Card.Title as="h4">Brand Standards Guideline<br /><a href="https://drive.google.com/file/d/1KFZqtV-5hjwAehIlKqlXeelVe9PXt3ZQ/view?usp=sharing" target="_blank">PDF</a></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-percent text-success"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Current Promo 8/4 - 8/18</p>
                      <Card.Title as="h4">Reebok Work + AirPods<br /><a href="https://pages.customfit.me/reebok-work-giveaway" target="_blank">FORM</a></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-ad text-success"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Next Promo 8/18 - 9/15</p>
                      <Card.Title as="h4">Terra Promo<br /><a href="#" target="_blank">Coming Soon</a></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* CustomFit Sales */}
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">CustomFit Sales</Card.Title>
                <p className="card-category">Values below are in millions</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          5.05,
                          4.33,
                          3.56,
                          3.15,
                          3.09,
                          3.07,
                          3.08,
                          3.22,
                          0,
                          0,
                          0,
                          0,
                        ],
                        [
                          5.45,
                          4.80,
                          5.74,
                          4.33,
                          3.87,
                          3.85,
                          3.73,
                          1.69,
                          0,
                          0,
                          0,
                          0,
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
                  <i className="fas fa-circle text-info"></i> 2020 YTD Sales: $26,762,214<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $33,505,966<br />
                  <i className="fas fa-check text-success"></i> Last updated 8/12/21 @ 4:16 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Future Upgrades</Card.Title>
                <p className="card-category">Front-End / Back-End Development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                        <i className="fas fa-paint-brush text-success"></i> CAT Landing style changes
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-shopping-cart text-warning"></i> Up-sell section in CF review cart
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="far fa-window-maximize text-danger"></i> New CustomFit Header / Menu on after login pages
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-paypal text-danger"></i> PayPal Integration
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-apple text-danger"></i> Apple Pay Integration
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-google text-danger"></i> Google Pay Integration
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Final Testing / Go Live<br />
                  <i className="fas fa-circle text-warning"></i> In Development<br />
                  <i className="fas fa-circle text-danger"></i> Backlog<br />
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Order Volume (MTD)</Card.Title>
                <p className="card-category">Values below are in thousands</p>
              </Card.Header>
              <Card.Body>
              <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "MTD",
                      ],
                      series: [
                        [
                          11.9,
                        ],
                        [
                          15.1,
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
                  <i className="fas fa-circle text-info"></i> 2020 Orders: 11,952<br />
                  <i className="fas fa-circle text-danger"></i> 2021 Orders: 15,108<br />
                  <i className="fas fa-check text-success"></i> Last updated 8/12/21 @ 4:16 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Order Volume (YTD)</Card.Title>
                <p className="card-category">Values below are in thousands</p>
              </Card.Header>
              <Card.Body>
              <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "YTD",
                      ],
                      series: [
                        [
                          245.8,
                        ],
                        [
                          299.6,
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
                  <i className="fas fa-circle text-info"></i> 2020 Orders: 245,792<br />
                  <i className="fas fa-circle text-danger"></i> 2021 Orders: 299,615<br />
                  <i className="fas fa-check text-success"></i> Last updated 8/12/21 @ 4:16 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
          {/* Lehigh Safety Shoes Sales */}
          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Lehigh Safety Shoes Sales</Card.Title>
                <p className="card-category">Values below are in thousands</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          56.2,
                          37.8,
                          32.9,
                          38.0,
                          32.6,
                          31.3,
                          31.2,
                          36.5,
                          43.0,
                          43.9,
                          45.2,
                          52.6,
                        ],
                        [
                          65.2,
                          49.3,
                          76.1,
                          70.6,
                          65.4,
                          60.8,
                          71.2,
                          27.6,
                          0,
                          0,
                          0,
                          0,
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
                  <i className="fas fa-circle text-info"></i> 2020 Total Sales: $481,207<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $486,287<br />
                  <i className="fas fa-check text-success"></i> Last updated 8/12/21 @ 4:16 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          {/* Lehigh Outfitters Sales */}
          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Lehigh Outfitters Sales</Card.Title>
                <p className="card-category">Values below are in thousands</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          62.2,
                          58.6,
                          42.4,
                          45.1,
                          42.2,
                          40.6,
                          39.7,
                          45.8,
                          36.5,
                          38.5,
                          31.8,
                          35.9,
                        ],
                        [
                          42.7,
                          32.0,
                          43.9,
                          43.8,
                          37.6,
                          43.7,
                          40.2,
                          17.0,
                          0,
                          0,
                          0,
                          0,
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
                  <i className="fas fa-circle text-info"></i> 2020 Total Sales: $519,385<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $300,878<br />
                  <i className="fas fa-check text-success"></i> Last updated 8/12/21 @ 4:16 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          {/* SlipGrips Sales */}
          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">SlipGrips Sales</Card.Title>
                <p className="card-category">Values below are in thousands</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          9.4,
                          9.0,
                          5.7,
                          6.5,
                          8.7,
                          7.4,
                          7.9,
                          8.8,
                          4.7,
                          4.7,
                          5.2,
                          5.8,
                        ],
                        [
                          9.4,
                          12.2,
                          14.8,
                          12.5,
                          11.1,
                          16.3,
                          10.5,
                          3.1,
                          0,
                          0,
                          0,
                          0,
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
                  <i className="fas fa-circle text-info"></i> 2020 Total Sales: $83,520<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $90,886<br />
                  <i className="fas fa-check text-success"></i> Last updated 8/12/21 @ 4:16 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
      </Container>
    </>
  );
}
export default Dashboard;