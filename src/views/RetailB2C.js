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

function RetailB2C() {
  return (
    <>
      <Container fluid>
          {/* Retail B2C - Lehigh Sales */}
          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Lehigh Retail B2C</Card.Title>
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
                          127.8,
                          105.4,
                          81.0,
                          89.6,
                          83.5,
                          79.3,
                          78.8,
                          91.1,
                          84.2,
                          87.1,
                          82.8,
                          94.3,
                        ],
                        [
                          117.3,
                          93.5,
                          134.8,
                          126.9,
                          114.1,
                          120.8,
                          121.9,
                          118.5,
                          98.8,
                          110.0,
                          128.2,
                          10.4,
                        ],
                      ],
                    }}
                    type="Line"
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
                  <i className="fas fa-circle text-info"></i> 2020 Total Sales: $1,084,112<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $1,292,593<br />
                  <i className="fas fa-circle text-warning"></i> YTD Growth: 19.2%<br />
                  <i className="fas fa-check text-success"></i> Last updated 12/1/21 @ 9:00 a.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col md="6">
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
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $3,839
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $125
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Units Per Transaction: 1.2
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 31
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
                  <i className="fas fa-circle text-success"></i> Last updated 11/12/21 at 9:00 a.m.
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
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
                        <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/5040.html">5040 - LSS Steel Toe</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/XHY866.html">XHY866 - Michelin&reg; HydroEdge</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/G6374.html">G6374 - Georgia Giant Steel Toe</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/3149.html">3149 - LSS Unisex 12" Dielectric</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.lehighoutfitters.com/1107.html">1107 - LSS Unisex Swampers</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last Updated 12/1/21 at 9:00 a.m.<br />
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default RetailB2C;