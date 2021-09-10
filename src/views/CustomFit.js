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
                      <Card.Title as="h4">Brand Standards<br /><a href="https://github.com/rodelliott/lehigh_dashboard/blob/master/src/assets/pdfs/Lehigh%20CustomFit%20Brand%20Guidelines.pdf?raw=true" target="_blank">PDF</a></Card.Title>
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
                      <i className="fas fa-scroll text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Shoe Angel</p>
                      <Card.Title as="h4">Brand Standards<br /><a href="https://github.com/rodelliott/lehigh_dashboard/blob/master/src/assets/pdfs/ShoeAngel_BrandStandards.pdf?raw=true" target="_blank">PDF</a></Card.Title>
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
                      <p className="card-category">Current Promo 8/26 - 9/23</p>
                      <Card.Title as="h4">Terra + Yeti<br /><a href="https://pages.customfit.me/terra-giveaway" target="_blank">FORM</a></Card.Title>
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
                          3.41,
                          4.42,
                          3.48,
                          3.34,
                        ],
                        [
                          5.45,
                          4.80,
                          5.74,
                          4.33,
                          3.87,
                          3.85,
                          3.73,
                          3.73,
                          1.08,
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
                  <i className="fas fa-circle text-info"></i> 2020 Total Sales: $43,659,271<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $36,794,407<br />
                  <i className="fas fa-check text-success"></i> Last updated 9/9/21 @ 11:30 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col lg="6" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-shipping-fast text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                        <p className="card-category">2020 Return Rates (Same Range as 2021)</p>
                        <Card.Title as="h4">Orders: 270,672<br />Returns: 31,710<br />Return Rate: 11.72%</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="6" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-dolly-flatbed text-success"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                        <p className="card-category">2021 YTD Return Rates</p>
                        <Card.Title as="h4">Orders: 328,686<br />Returns: 31,957<br />Return Rate: 9.72%</Card.Title>
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
          <Col lg="4" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-tools text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                        <p className="card-category">Georgia Boot</p>
                        <Card.Title as="h4">YTD Sales<br />$2,973,184</Card.Title>
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
                      <i className="fas fa-mountain text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Rocky</p>
                      <Card.Title as="h4">YTD Sales<br />$2,574,746</Card.Title>
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
                      <i className="fas fa-hat-cowboy text-dark"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                        <p className="card-category">Durango</p>
                        <Card.Title as="h4">YTD Sales<br />$1,063,382</Card.Title>
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
          <Col lg="4" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-hard-hat text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                        <p className="card-category">Lehigh Safety Shoes</p>
                        <Card.Title as="h4">YTD Sales<br />$769,001</Card.Title>
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
                      <i className="fas fa-tractor text-success"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Muck</p>
                      <Card.Title as="h4">YTD Sales<br />$81,217</Card.Title>
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
                      <i className="fas fa-tint-slash text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                        <p className="card-category">SlipGrips</p>
                        <Card.Title as="h4">YTD Sales<br />$79,851</Card.Title>
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
                          <i className="fab fa-paypal text-warning"></i> PayPal Integration
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-apple text-warning"></i> Apple Pay Integration
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-google text-warning"></i> Google Pay Integration
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-paint-brush text-warning"></i> CAT Landing style changes
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
                <p className="card-category">Campaign: 2021-0909-cf-assp-invite</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["68%", "32%"],
                      series: [7930, 2518],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 7930<br />
                  <i className="fas fa-circle text-danger"></i> Unique Opens: 2518<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 6.2%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 9/9
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <Card.Header>
              <i class="fas fa-2x fa-envelope-open-text text-primary"></i>
                <Card.Title as="h4">Shoe Angel Open Rates</Card.Title>
                <p className="card-category">Campaign: 2021-0909-sa-twistedx</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["85%", "15%"],
                      series: [176, 26],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 176<br />
                  <i className="fas fa-circle text-danger"></i> Total Opens: 26<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 27%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 8/26
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