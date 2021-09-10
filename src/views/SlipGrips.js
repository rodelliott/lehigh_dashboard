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

function SlipGrips() {
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
                      <i className="fas fa-scroll text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                      <p className="card-category">SlipGrips</p>
                      <Card.Title as="h4">Brand Standards<br /><a href="https://github.com/rodelliott/lehigh_dashboard/blob/master/src/assets/pdfs/SlipGrips_BrandStandards.pdf?raw=true" target="_blank">PDF</a></Card.Title>
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
                      <i className="fas fa-percent text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Current Promo - August</p>
                      <Card.Title as="h4">Back To School<br /><a href="https://pages.slipgrips.com/giveaway" target="_blank">FORM</a></Card.Title>
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
                      <i className="fas fa-ad text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Next Promo</p>
                      <Card.Title as="h4">Only Janelle Knows<br /><a href="#" target="_blank">Coming Soon</a></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
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
                          8.8,
                          2.5,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $99,039<br />
                  <i className="fas fa-check text-success"></i> Last updated 9/9/21 @ 11:30 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col md="3">
            <Card>
              <Card.Header>
              <i class="fas fa-2x fa-envelope-open-text text-danger"></i>
                <Card.Title as="h4">Email Open Rates</Card.Title>
                <p className="card-category">Campaign: 2021-0909-sg-rewards</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["76.4%", "23.6%"],
                      series: [783, 185],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 783<br />
                  <i className="fas fa-circle text-danger"></i> Unique Opens: 185<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 4.9%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 9/9
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5">
            <Card className="card-tasks">
              <Card.Header>
              <i class="fas fa-2x fa-code text-danger"></i>
                <Card.Title as="h4">Future Upgrades</Card.Title>
                <p className="card-category">Front-End / Back-End Development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                        <i className="fas fa-font text-success"></i> Continue SEO Improvements
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-shopping-cart text-warning"></i> Begin new homepage design
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fab fa-google text-danger"></i> Google Pay Integration
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-paint-brush text-danger"></i> New PDP Styling
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
          <Col md="4">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
              <i class="fas fa-2x fa-shoe-prints text-danger"></i>
                <Card.Title as="h4">Top Sellers</Card.Title>
                <p className="card-category">
                  Top Styles YTD
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Rank</th>
                      <th className="border-0">Style</th>
                      <th className="border-0">Brand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td><a href="https://www.slipgrips.com/RB1100.html">RB1100</a></td>
                        <td><a href="https://www.slipgrips.com/reebok/">Reebok</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="https://www.slipgrips.com/77188BLK.html">77188BLK</a></td>
                        <td><a href="https://www.slipgrips.com/skechers-work/">Skechers Work</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a href="https://www.slipgrips.com/5LM00679.html">5LM00679</a></td>
                        <td><a href="https://www.slipgrips.com/fila/">Fila</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="https://www.slipgrips.com/1LM00350B.html">1LM00350B</a></td>
                        <td><a href="https://www.slipgrips.com/fila/">Fila</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a href="https://www.slipgrips.com/77222BLK.html">77222BLK</a></td>
                        <td><a href="https://www.slipgrips.com/skechers-work/">Skechers Work</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-check text-success"></i> Last updated 8/26/21 @ 11:59 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SlipGrips;