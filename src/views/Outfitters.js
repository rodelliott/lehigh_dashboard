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
                      <i className="fas fa-percent text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Current Promo 8/4 - 8/18</p>
                      <Card.Title as="h4">Reebok Work + AirPods<br /><a href="https://pages.lehighoutfitters.com/reebok-work-giveaway" target="_blank">FORM</a></Card.Title>
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
                      <i className="fas fa-ad text-warning"></i>
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
                          23.4,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $307,300<br />
                  <i className="fas fa-check text-success"></i> Last updated 8/17/21 @ 11:59 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>


          <Row>
          <Col md="3">
            <Card>
              <Card.Header>
              <i class="fas fa-2x fa-envelope-open-text text-success"></i>
                <Card.Title as="h4">Email Open Rates</Card.Title>
                <p className="card-category">Campaign: 2021-0812-lo-reebok</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["73%", "27%"],
                      series: [2346, 901],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 2,346<br />
                  <i className="fas fa-circle text-danger"></i> Total Opens: 901<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 5.1%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 8/12
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5">
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
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
              <i class="fas fa-2x fa-shoe-prints text-success"></i>
                <Card.Title as="h4">Top Sellers</Card.Title>
                <p className="card-category">
                  Top Styles MTD
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
                        <td><a href="https://www.lehighoutfitters.com/3149.html">3149</a></td>
                        <td><a href="https://www.lehighoutfitters.com/lehigh-safety-shoes/">Lehigh Safety Shoes</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="https://www.lehighoutfitters.com/G6374.html">G6374</a></td>
                        <td><a href="https://www.lehighoutfitters.com/georgia-boot/">Georgia Boot</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a href="https://www.lehighoutfitters.com/RB4830.html">RB4830</a></td>
                        <td><a href="https://www.lehighoutfitters.com/reebok/">Reebok Work</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="https://www.lehighoutfitters.com/1107.html">1107</a></td>
                        <td><a href="https://www.lehighoutfitters.com/lehigh-safety-shoes/">Lehigh Safety Shoes</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a href="https://www.lehighoutfitters.com/GB00476.html">GB00476</a></td>
                        <td><a href="https://www.lehighoutfitters.com/georgia-boot/">Georgia Boot</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-check text-success"></i> Last updated 8/17/21 @ 11:59 p.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Outfitters;