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
                      <p className="card-category">Lehigh Safety Shoes</p>
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
                      <i className="fas fa-percent text-dark"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Current Promo 8/4 - 8/18</p>
                      <Card.Title as="h4">Reebok Work + AirPods<br /><a href="https://pages.lehighsafetyshoes.com/reebok-work-giveaway" target="_blank">FORM</a></Card.Title>
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
                          40.1,
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
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $498,700<br />
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
              <i class="fas fa-2x fa-envelope-open-text text-dark"></i>
                <Card.Title as="h4">Email Open Rates</Card.Title>
                <p className="card-category">Campaign: 2021-0812-lss-reebok</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["72.5%", "27.5%"],
                      series: [1396, 383],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="stats">
                    <i className="fas fa-circle text-info"></i> Total Sends: 1,396<br />
                  <i className="fas fa-circle text-danger"></i> Total Opens: 383<br />
                  <i className="fas fa-circle text-warning"></i> Click-Through Rate: 8.1%<br />
                  <i className="far fa-clock text-success"></i> Campaign sent 8/12
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
                        <td><a href="https://www.lehighsafetyshoes.com/RB4040.html">RB4040</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/reebok/">Reebok Work</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="https://www.lehighsafetyshoes.com/IA0195.html">IA0195</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/iron-age/">Iron Age</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a href="https://www.lehighsafetyshoes.com/SE4570.html">SE4570</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/justin-work/">Justin Original</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="https://www.lehighsafetyshoes.com/52562.html">52562</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/timberland-pro/">Timberland PRO</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a href="https://www.lehighsafetyshoes.com/RKK0347.html">RKK0347</a></td>
                        <td><a href="https://www.lehighsafetyshoes.com/rocky/">Rocky</a></td>
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
export default SafetyShoes;