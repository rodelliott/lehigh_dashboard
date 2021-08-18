import React from "react";
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

function Dashboard() {
  return (
    <>
      <Container fluid>
      <Row>
          <Col md="12">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Lifestyle Imagery</Card.Title>
                <p className="card-category"> Photos From Vendors (ZIP File Downloads)</p>
                <hr />
                <p className="card-category"><i className="fas fa-arrow-down text-success"></i> = Download Available</p>
                <p className="card-category"><i className="fas fa-arrow-down text-danger"></i> = Download Unavailable</p>
              </Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
          <Row>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4"><i className="fas fa-camera-retro text-success"></i>&nbsp;&nbsp;Brands # - C</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                <Table>
                    <tbody>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> 4EurSole</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Aetrex</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Anywear</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Ariat</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Avenger</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Baffin</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Battle Ops</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Bella Vita</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Berne</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Black Diamond</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Blundstone</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Bulwark</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Carhartt</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Cherokee</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Chippewa</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Crocs At Work</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
              <Card.Title as="h4"><i className="fas fa-camera-retro text-success"></i>&nbsp;&nbsp;Brands D - F</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Dan Post</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Dansko</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> DEWALT</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Dickies</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Dr. Martens</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Dr. Scholl's</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Dunlop</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Durango</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Easy Street</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Easy Works</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Emeril</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Fila</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Florsheim</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Florsheim Work</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Footguard</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="">&nbsp;</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4"><i className="fas fa-camera-retro text-success"></i>&nbsp;&nbsp;Brands G - K</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                <Table>
                    <tbody>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Genuine Grip</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Georgia Boot</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Geroline</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Grabbers</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Heartland Footwear</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Helly Hansen</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Hoss</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Impacto</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Infinity</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Iron Age</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Justin Boots</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Justin Work</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> KEEN Utility</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Klogs</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Knapp</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Kodiak</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
              <Card.Title as="h4"><i className="fas fa-camera-retro text-success"></i>&nbsp;&nbsp;Brands L - P</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Laredo</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Lehigh Safety Shoes</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Lugz</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Maxx Dry</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> McRae</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Mellow Walk</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Michelin</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Moxie Trades</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Muck</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Nautilus</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> NEOS</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> New Balance</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Original SWAT</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Puma Safety</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="">&nbsp;</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href="">&nbsp;</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4"><i className="fas fa-camera-retro text-success"></i>&nbsp;&nbsp;Brands Q - Sk</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                <Table>
                    <tbody>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Reebok Work</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> RefrigiWear</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Rockport Works</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Rocky</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Royer</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Sanita</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Servus</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Skechers Work</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> SkidBuster</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4"><i className="fas fa-camera-retro text-success"></i>&nbsp;&nbsp;Brands Sl - Z</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                <Table>
                    <tbody>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> SlipGrips</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Spenco</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Spring Step</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Steel Blue</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Terra</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Thorogood</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Timberland Pro</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Tingley</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <a href=""><i className="fas fa-arrow-down text-danger"></i> Tony Lama</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Dashboard;