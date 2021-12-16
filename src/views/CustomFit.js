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
                      <i className="fas fa-percent text-success"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Current Promo 12/1 - 12/31</p>
                      <Card.Title as="h4">Keen $250 Visa<br /><a href="https://pages.customfit.me/keen-giveaway" target="_blank">FORM</a></Card.Title>
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
                          3.70,
                          4.61,
                          4.09,
                          2.05,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $50,476,161<br />
                  <i className="fas fa-check text-success"></i> Last updated 12/16/21 @ 9:00 a.m. EST
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
                        "8/4",
                        "8/12",
                        "8/19",
                        "8/26",
                        "9/3",
                        "9/9",
                        "9/16",
                        "9/22",
                        "10/1",
                        "10/4",
                        "10/14",
                        "10/21",
                        "10/28",
                        "11/1",
                        "11/3",
                        "11/10",
                        "11/15",
                        "11/17",
                        "11/24",
                        "11/25",
                        "11/29",
                        "12/1"
                      ],
                      series: [
                        [
                          30,
                          25,
                          26,
                          14,
                          25,
                          32,
                          19,
                          24,
                          23,
                          35,
                          23,
                          36,
                          19,
                          23,
                          22,
                          22,
                          22,
                          17,
                          20,
                          37,
                          18,
                          20
                        ],
                        [
                          8,
                          7,
                          12,
                          10,
                          6,
                          6,
                          8,
                          8.4,
                          10,
                          6,
                          10,
                          6,
                          8,
                          8,
                          9,
                          10,
                          9,
                          11,
                          10,
                          4,
                          8,
                          10
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      seriesBarDistance: 12,
                      showArea: true,
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
                  <i className="fas fa-check text-success"></i> Last updated 12/1/21 @ 9:00 a.m. EST
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
                        <Card.Title as="h4">Orders: 383,601<br />Returns: 44,609<br />Return Rate: 11.6%</Card.Title>
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
                        <Card.Title as="h4">Orders: 450,114<br />Returns: 44,850<br />Return Rate: 9.9%</Card.Title>
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
                        <Card.Title as="h5">YTD Sales: $4,195,878</Card.Title>
                        <Card.Title as="h5">Return Rate: 9%</Card.Title>
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
                      <Card.Title as="h5">YTD Sales: $3,656,004</Card.Title>
                      <Card.Title as="h5">Return Rate: 9.5%</Card.Title>
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
                        <Card.Title as="h5">YTD Sales: $1,330,900</Card.Title>
                        <Card.Title as="h5">Return Rate: 10.5%</Card.Title>
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
                        <Card.Title as="h5">YTD Sales: $965,471</Card.Title>
                        <Card.Title as="h5">Return Rate: 7.7%</Card.Title>
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
                        <Card.Title as="h5">YTD Sales: $124,025</Card.Title>
                        <Card.Title as="h5">Return Rate: 7%</Card.Title>
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
                      <Card.Title as="h5">YTD Sales: $80,909</Card.Title>
                      <Card.Title as="h5">Return Rate: 6.8%</Card.Title>
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
          <Col md="4">
            <Card className="card-tasks">
              <Card.Header>
              <i class="fas fa-2x fa-pastafarianism text-success"></i>
                <Card.Title as="h4">More Sales Stats</Card.Title>
                <p className="card-category">SFCC Metrics</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                    <tr>
                        <td>
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $146,401
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $112
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 1,307
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Returns Per Day: 128
                        </td>
                      </tr>
                     
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last updated 11/12/21 at 9:00 a.m.
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
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
          <Col md="4">
            <Card className="card-tasks">
              <Card.Header>
              <i class="fas fa-2x fa-shoe-prints text-success"></i>
                <Card.Title as="h4">Top Sellers</Card.Title>
                <p className="card-category">Top 5 YTD</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                        <i className="fas fa-circle text-warning"></i> MID412B1 - New Balance 412v1
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> RB4041 - Reebok Sublite
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> A176A - Timberland PRO Powertrain
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> 3149 - LSS 12" Dielectric
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> 65016 - Timberland PRO Direct Attach
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last Updated 11/18/21 at 9:00 a.m.<br />
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
      </Container>
    </>
  );
}
export default CustomFit;