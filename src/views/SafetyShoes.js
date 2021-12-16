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

function SafetyShoes() {
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
                      <i className="fas fa-ad text-dark"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                    <p className="card-category">Current Promo 12/1 - 12/31</p>
                      <Card.Title as="h4">Keen $250 Visa<br /><a href="https://pages.lehighsafetyshoes.com/keen-giveaway" target="_blank">LINK</a></Card.Title>
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
                      <i className="fas fa-scroll text-dark"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                  <p className="card-category">Next Promo</p>
                      <Card.Title as="h4">Only Janelle Knows<br /><a href="https://pages.lehighsafetyshoes.com/carhartt-giveaway" target="_blank"></a></Card.Title>
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
                      <i className="fas fa-percent text-dark"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Next Promo</p>
                      <Card.Title as="h4">Only Janelle Knows<br /><a href="https://www.lehighsafetyshoes.com/steel-blue" target="_blank"></a></Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
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
                          69.8,
                          58.4,
                          65.3,
                          68.0,
                          38.6,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $758,715<br />
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
                <Card.Title as="h4">Lehigh Safety Shoes Email Trends</Card.Title>
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
                          30,
                          33,
                          35,
                          22,
                          21,
                          27,
                          26,
                          33,
                          31,
                          31,
                          30,
                          31,
                          25,
                          32,
                          30,
                          29,
                          28,
                          24,
                          27,
                          27,
                          26,
                          27
                        ],
                        [
                          7,
                          8,
                          13,
                          8,
                          16,
                          12,
                          7,
                          7,
                          10,
                          10,
                          11,
                          14,
                          11,
                          10,
                          7,
                          7,
                          12,
                          8,
                          7,
                          10,
                          11,
                          8
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
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $2,156
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $131
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Units Per Transaction: 1.16
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 16
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-search text-success"></i> Top Search Term: reebok
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
                        <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighsafetyshoes.com/5040.html">5040 - LSS Steel Toe</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighsafetyshoes.com/3149.html">3149 - LSS Unisex 12" Dielectric</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighsafetyshoes.com/CMO3460.html">CMO3460 - Carhartt Force</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighsafetyshoes.com/XHY866.html">XHY866 - Michelin&reg; HydroEdge</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighsafetyshoes.com/RB4051.html">RB4051 - Reebok Sublite</a>
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
                <iframe height="1000" width="1200" src="https://datastudio.google.com/embed/reporting/be1588a1-147c-4995-9913-6974aeb3d402/page/LuBV" frameborder="0" allowfullscreen></iframe>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SafetyShoes;