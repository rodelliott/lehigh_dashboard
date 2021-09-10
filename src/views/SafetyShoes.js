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
                      <i className="fas fa-scroll text-dark"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                  <div className="numbers">
                  <p className="card-category">Current Promo 8/26 - 9/23</p>
                      <Card.Title as="h4">Terra + Yeti<br /><a href="https://pages.lehighsafetyshoes.com/terra-giveaway" target="_blank">FORM</a></Card.Title>
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
                      <p className="card-category">Title</p>
                      <Card.Title as="h4">Subtitle<br /><a href="https://pages.lehighsafetyshoes.com/reebok-work-giveaway" target="_blank">LINK</a></Card.Title>
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
                      <i className="fas fa-ad text-dark"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                    <p className="card-category">Title</p>
                      <Card.Title as="h4">Subtitle<br /><a href="https://pages.lehighsafetyshoes.com/reebok-work-giveaway" target="_blank">LINK</a></Card.Title>
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
                          11.4,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $539,805<br />
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
              <i class="fas fa-2x fa-envelope-open-text text-dark"></i>
                <Card.Title as="h4">Email Open Rates</Card.Title>
                <p className="card-category">Campaign: 2021-0909-lss-twistedx</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["72.9%", "27.1%"],
                      series: [1318, 357],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 1,318<br />
                  <i className="fas fa-circle text-danger"></i> Unique Opens: 357<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 12.3%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 9/9
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5">
            <Card className="card-tasks">
              <Card.Header>
              <i class="fas fa-2x fa-code text-dark"></i>
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
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
              <i class="fas fa-2x fa-shoe-prints text-dark"></i>
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
                        <td><a href="https://www.lehighsafetyshoes.com/5040.html">5040</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/lehigh-safety-shoes/">Lehigh Safety Shoes</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="https://www.lehighsafetyshoes.com/3149.html">3149</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/lehigh-safety-shoes/">Lehigh Safety Shoes</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a href="https://www.lehighsafetyshoes.com/XHY866.html">XHY866</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/michelin/">Michelin</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="https://www.lehighsafetyshoes.com/CMO3460.html">CMO3460</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/carhartt/">Carhartt</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a href="https://www.lehighsafetyshoes.com/N1435.html">N1435</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/nautilus/">Nautilus</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-check text-success"></i> Last updated 8/26/21 @ 10:30 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SafetyShoes;