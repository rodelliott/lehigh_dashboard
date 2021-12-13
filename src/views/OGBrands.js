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
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">OG Brands B2C</Card.Title>
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
                          762.3,
                          926.5,
                          839.8,
                          1404.8,
                          1420.7,
                          1126.6,
                          1047.6,
                          1248.1,
                          1522.0,
                          1666.7,
                          2661.4,
                          2552.3,
                        ],
                        [
                          1579.8,
                          1461.4,
                          1789.0,
                          1535.6,
                          1372.6,
                          1350.6,
                          1266.4,
                          1274.0,
                          1571.4,
                          1613.3,
                          2126.5,
                          153.2,
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
                  <i className="fas fa-circle text-info"></i> 2020 Total Sales: $17,148,727<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales: $17,093,839<br />
                  <i className="fas fa-circle text-warning"></i> YTD Growth: -0.32%<br />
                  <i className="fas fa-check text-success"></i> Last updated 12/1/21 @ 9:00 a.m. EST
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Rocky Boots Sales (SFCC)</Card.Title>
                <p className="card-category">Values below are in hundred thousands</p>
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
                        "Sept",
                        "Oct",
                        "Nov",
                        "Dec"
                      ],
                      series: [
                        [
                          373,
                          437,
                          418,
                          656,
                          606,
                          524,
                          533,
                          644,
                          734,
                          893,
                          1319,
                          1169,
                        ],
                        [
                          749,
                          742,
                          803,
                          687,
                          595,
                          580,
                          619,
                          636,
                          697,
                          807,
                          1064,
                          0,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 20,
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
                <i className="fas fa-circle text-info"></i> 2020 Total Sales - $8,306,225<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales - $7,979,166<br />
                  <i className="fas fa-check text-success"></i> Last Updated 12/1/21 at 9:30 a.m.<br />
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
                <Card.Title as="h4">More RB Sales Stats</Card.Title>
                <p className="card-category">SFCC Metrics</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                    <tr>
                        <td>
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $23,890
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $134
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 178
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Units Per Transaction: 1.16
                        </td>
                      </tr>
                      <tr>
                        <td>
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last updated 12/1/21 at 9:30 a.m.
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
                        <i className="fas fa-circle text-warning"></i> <a href="https://www.rockyboots.com/RKC050.html">RKC050 - S2V Tactical</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.rockyboots.com/RKC072.html">RKC072 - S2V Predator</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.rockyboots.com/FQ0000104.html">FQ0000104 - S2V Tactical</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.rockyboots.com/RKC042.html">RKC042 - Lightweight Commercial</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.rockyboots.com/RKC053.html">RKC053 - S2V Steel Toe</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last Updated 10/12/21 at 2:30 p.m.<br />
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>


          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Georgia Boot Sales (SFCC)</Card.Title>
                <p className="card-category">Values below are in hundred thousands</p>
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
                        "Sept",
                        "Oct",
                        "Nov",
                        "Dec"
                      ],
                      series: [
                        [
                          256,
                          310,
                          279,
                          480,
                          522,
                          406,
                          318,
                          391,
                          532,
                          476,
                          868,
                          945,
                        ],
                        [
                          537,
                          463,
                          586,
                          514,
                          458,
                          472,
                          418,
                          407,
                          590,
                          613,
                          774,
                          0,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 20,
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
                <i className="fas fa-circle text-info"></i> 2020 Total Sales - $5,781,767<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales - $5,831,217<br />
                  <i className="fas fa-check text-success"></i> Last Updated 12/1/21 at 9:30 a.m.<br />
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
                <Card.Title as="h4">More GB Sales Stats</Card.Title>
                <p className="card-category">SFCC Metrics</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                    <tr>
                        <td>
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $17,459
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $136
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 128
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Units Per Transaction: 1.1
                        </td>
                      </tr>
                      <tr>
                        <td>
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last updated 12/1/21 at 9:30 a.m.
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
                        <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/G5153.html">G5153 - Wedge Work Wellington</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/G6152.html">G6152 - Wedge Work Boot</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/GR262.html">GR262 - Giant Romeo</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/G6274.html">G6274 - Giant Work Boot</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/G5814.html">G5814 - Carbo-Tec Wellington</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last Updated 10/12/21 at 2:30 p.m.<br />
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>

          <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Durango Boots Sales (SFCC)</Card.Title>
                <p className="card-category">Values below are in hundred thousands</p>
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
                        "Sept",
                        "Oct",
                        "Nov",
                        "Dec"
                      ],
                      series: [
                        [
                          134,
                          180,
                          143,
                          269,
                          293,
                          196,
                          197,
                          213,
                          253,
                          298,
                          474,
                          409,
                        ],
                        [
                          294,
                          256,
                          400,
                          335,
                          320,
                          299,
                          230,
                          232,
                          284,
                          192,
                          289,
                          0,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 20,
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
                <i className="fas fa-circle text-info"></i> 2020 Total Sales - $3,058,323<br />
                  <i className="fas fa-circle text-danger"></i> 2021 YTD Sales - $3,130,250<br />
                  <i className="fas fa-check text-success"></i> Last Updated 12/1/21 at 9:30 a.m.<br />
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
                <Card.Title as="h4">More DB Sales Stats</Card.Title>
                <p className="card-category">SFCC Metrics</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                    <tr>
                        <td>
                        <i className="fas fa-wallet text-success"></i> Avg Sales Per Day: $9,372
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <i className="fas fa-barcode text-success"></i> Avg Order Value: $119
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-boxes text-success"></i> Avg Orders Per Day: 78
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-box text-success"></i> Avg Units Per Transaction: 1.13
                        </td>
                      </tr>
                      <tr>
                        <td>
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last updated 12/1/21 at 9:30 a.m.
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
                        <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/DDB0077.html">DDB0077 - Rebel Crossed Guns</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/DB5554.html">DB5554 - Rebel Patriotic</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/DDB0218.html">DDB0218 - Rebel Black Western</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/DDB0109.html">DDB0109 - Ultra-Lite Western</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-circle text-warning"></i> <a href="https://www.georgiaboot.com/DRD0335.html">DRD0335 - Dream Catcher</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-circle text-success"></i> Last Updated 10/07/21 at 2:30 p.m.<br />
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
                <iframe height="1000" width="1200" src="https://datastudio.google.com/embed/reporting/ea04e721-c9e9-4dac-ad06-ccee9afc8ecc/page/LuBV" frameborder="0" allowfullscreen></iframe>

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