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

function CustomFit() {
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
                      <Card.Title as="h4">Brand Standards<br /><a href="https://drive.google.com/file/d/1KFZqtV-5hjwAehIlKqlXeelVe9PXt3ZQ/view?usp=sharing" target="_blank">PDF</a></Card.Title>
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
              <i class="fas fa-2x fa-code text-success"></i>
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
              <i class="fas fa-2x fa-envelope-open-text text-success"></i>
                <Card.Title as="h4">CustomFit Open Rates</Card.Title>
                <p className="card-category">Campaign: 2021-0812-cf-reebok</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["80%", "20%"],
                      series: [10366, 3130],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 10,366<br />
                  <i className="fas fa-circle text-danger"></i> Total Opens: 3130<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 6.2%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 8/12
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <Card.Header>
              <i class="fas fa-2x fa-envelope-open-text text-success"></i>
                <Card.Title as="h4">Shoe Angel Open Rates</Card.Title>
                <p className="card-category">Campaign: 2021-0812-sa-reebok</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["80.7%", "19.3%"],
                      series: [181, 50],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 181<br />
                  <i className="fas fa-circle text-danger"></i> Total Opens: 50<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 8.6%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 8/12
                </div>
              </Card.Body>
            </Card>
          </Col>
          </Row>
      </Container>
    </>
  );
}
export default CustomFit;