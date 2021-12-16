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
                    <p className="card-category">Current Promo 12/1 - 12/31</p>
                      <Card.Title as="h4">Keen $250 Visa<br /><a href="https://pages.slipgrips.com/keen-giveaway" target="_blank">LINK</a></Card.Title>
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
                      <p className="card-category">Next Promo</p>
                      <Card.Title as="h4">Only Janelle Knows<br /><a href="https://pages.slipgrips.com/giveaway" target="_blank"></a></Card.Title>
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
                          8.8,
                          6.9,
                          5.3,
                          3.6,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $121,194<br />
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
                <Card.Title as="h4">SlipGrips Email Trends</Card.Title>
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
                        "9/20",
                        "10/01",
                        "10/07",
                        "10/14",
                        "10/21",
                        "10/22",
                        "10/28",
                        "10/29",
                        "11/4",
                        "11/5",
                        "11/9",
                        "11/12",
                        "11/16",
                        "11/19",
                        "11/26",
                        "11/29",
                        "12/1",
                        "12/3",
                        "12/10"
                      ],
                      series: [    
                        [
                          26,
                          26,
                          29,
                          41,
                          26,
                          24,
                          37,
                          27,
                          23,
                          25,
                          24,
                          18,
                          18,
                          20,
                          16,
                          19,
                          24,
                          18,
                          19,
                          20,
                          20,
                          19,
                          29,
                          24,
                          21
                        ],
                        [
                          4,
                          5,
                          4,
                          14,
                          5,
                          5,
                          20,
                          10,
                          9,
                          24,
                          30,
                          10,
                          16,
                          8,
                          6,
                          9,
                          10,
                          6,
                          8,
                          8,
                          7,
                          9,
                          15,
                          5,
                          6
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
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $352
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $69
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Units Per Transaction: 1.21
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 5
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-search text-success"></i> Top Search Term: food service
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last updated 12/1/21 at 9:00 a.m.
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
                        <i className="fas fa-font text-success"></i> Continue SEO Improvements
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
                        <i className="fas fa-circle text-warning"></i> <a href="https://www.slipgrips.com/RB1100.html">RB1100 - Reebok Jorie</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.slipgrips.com/77188BLK.html">77188BLK - Skechers Work Cessnock</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.slipgrips.com/5LM00679.html">5LM00679 - Fila Memory</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.slipgrips.com/5332.html">5332 - SlipGrips Steel Toe</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.slipgrips.com/SG4290.html">SG4290 - SlipGrips Oxford</a>
                        </td>
                      </tr>
                    
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last Updated 11/12/21 at 9:00 a.m.<br />
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" class="mx-auto">
            <Card className="card-tasks">
              <Card.Body>
                <div className="table-full-width" class="text-center">
                <iframe height="1000" width="1200" src="https://datastudio.google.com/embed/reporting/1b4b5d45-d043-4e86-a8c9-8f682b3aa53f/page/LuBV" frameborder="0" allowfullscreen></iframe>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SlipGrips;