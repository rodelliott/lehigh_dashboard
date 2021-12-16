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

function Outfitters() {
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
                      <i className="fas fa-scroll text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                      <p className="card-category">Lehigh Outfitters</p>
                      <Card.Title as="h4">Brand Standards<br /><a href="https://github.com/rodelliott/lehigh_dashboard/blob/master/src/assets/pdfs/LehighOutfitters_BrandStandards.pdf?raw=true" target="_blank">PDF</a></Card.Title>
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
                      <i className="fas fa-percent text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Current Promo 12/1 - 12/31</p>
                      <Card.Title as="h4">Keen $250 Visa<br /><a href="https://pages.lehighoutfitters.com/keen-giveaway" target="_blank">FORM</a></Card.Title>
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
                      <i className="fas fa-percent text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Next Promo</p>
                      <Card.Title as="h4">Only Janelle Knows<br /><a href="https://pages.lehighoutfitters.com/giveaway" target="_blank"></a></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
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
                          39.9,
                          31.6,
                          37.8,
                          51.3,
                          24.4,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $468,854<br />
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
                <Card.Title as="h4">Lehigh Outfitters Email Trends</Card.Title>
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
                        "10/01",
                        "10/07",
                        "10/14",
                        "10/21",
                        "10/28",
                        "11/1",
                        "11/3",
                        "11/10",
                        "11/15",
                        "11/17",
                        "11/24",
                        "11/26",
                        "11/29",
                        "12/1"
                      ],
                      series: [
                        [
                         
                          20,
                          33,
                          35,
                          26,
                          24,
                          26,
                          28,
                          29,
                          31,
                          27,
                          26,
                          21,
                          20,
                          18,
                          25,
                          22,
                          18,
                          17,
                          21,
                          15,
                          15,
                          22
                        ],
                        [
                         
                          6,
                          5,
                          7,
                          9,
                          8,
                          8,
                          9,
                          6,
                          10,
                          9,
                          22,
                          9,
                          15,
                          6,
                          16,
                          17,
                          10,
                          19,
                          17,
                          10,
                          11,
                          19
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
                  <i className="fas fa-check text-success"></i> Last updated 11/18/21 @ 9:00 a.m. EST
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
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $1,331
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $147
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Units Per Transaction: 1.3
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 9
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-search text-success"></i> Top Search Term: georgia boot
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
                        <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/G6374.html">G6374 - Georgia Giant Steel Toe</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/RKW0306.html">RKW0306 - Rocky Original Ride</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/XHY866.html">XHY866 - Michelin&reg; HydroEdge</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/65016.html">65016 - Timberland PRO Direct</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/1107.html">1107 - LSS Swampers</a>
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
                <iframe height="1000" width="1200" src="https://datastudio.google.com/embed/reporting/939e239c-a546-439b-a1d8-57e1e42782d3/page/LuBV" frameborder="0" allowfullscreen></iframe>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Outfitters;