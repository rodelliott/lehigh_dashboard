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
          <Col md="6">
            <Card>
              <Card.Header>
              <i class="fas fa-2x fa-draw-polygon text-success"></i>
                <Card.Title as="h4">Brand Logos</Card.Title>
                <p className="card-category">All Current Brands / Business Logos</p>
              </Card.Header>
              <Card.Body>
              <h6>If you'd like to store the logos locally on your machine the easiest method is to just download the two zip files below.</h6>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <a href="https://github.com/rodelliott/workLogos/blob/master/A-M.zip?raw=true"><i className="fas fa-arrow-down text-success"></i> Download Brand Icons (A-M)</a><br />
                  <a href="https://github.com/rodelliott/workLogos/blob/master/N-Z.zip?raw=true"><i className="fas fa-arrow-down text-success"></i> Download Brand Icons (N-Z)</a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
              <i class="fas fa-2x fa-drafting-compass text-success"></i>
                <Card.Title as="h4">Single Brand Logos</Card.Title>
                <p className="card-category">
                  If you just need a specific brand you may download a zip folder that contains all associated files.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Brands</th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/4ES/4ES.zip?raw=true">4EurSole</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/ADM/ADM.zip?raw=true">ADM</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/AK%20Steel/AK%20Steel.zip?raw=true">AK Steel</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/ASTM/ASTM.zip?raw=true">ASTM</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Aetrex/Aetrex.zip?raw=true">Aetrex</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Albanese/Albanese.zip?raw=true">Albanese</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Alegria/Alegria.zip?raw=true">Alegria</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Alsco/Alsco.zip?raw=true">Alsco</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Apple/Apple.zip?raw=true">Apple</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Ariat/Ariat.zip?raw=true">Ariat</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Asics/Asics.zip?raw=true">Asics</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Avenger/Avenger.zip?raw=true">Avenger</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Baffin/Baffin.zip?raw=true">Baffin</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Battle%20Ops/Battle%20Ops.zip?raw=true">Battle Ops</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Beckett%20Springs/Beckett%20Springs.zip?raw=true">Beckett Springs</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Bella%20Vita/Bella%20Vita.zip?raw=true">Bella Vita</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Berne/Berne.zip?raw=true">Berne</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Black%20Diamond/Black%20Diamond.zip?raw=true">Black Diamond</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Blue%20Harbor/Blue%20Harbor.zip?raw=true">Blue Harbor</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Blundstone/Blundstone.zip?raw=true">Blundstone</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Bulwark/Bulwark.zip?raw=true">Bulwark</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/CTB%20Inc/CTB%20Inc.zip?raw=true">CTB Inc</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Carhartt/Carhartt.zip?raw=true">Carhartt</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Cherokee/Cherokee.zip?raw=true">Cherokee</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Chinook</a></td>
                        <td><a href="#">Chippewa</a></td>
                        <td><a href="#">Converse</a></td>
                        <td><a href="#">Creative Rec</a></td>
                        <td><a href="#">Crocs</a></td>
                        <td><a href="#">Dan Post</a></td>
                        <td><a href="#">Danner</a></td>
                        <td><a href="#">Dansko</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Dawgs</a></td>
                        <td><a href="#">DeWalt</a></td>
                        <td><a href="#">Dickies</a></td>
                        <td><a href="#">Dingo</a></td>
                        <td><a href="#">Dr. Martens</a></td>
                        <td><a href="#">Dr. Scholl's</a></td>
                        <td><a href="#">DragonGrip</a></td>
                        <td><a href="#">Dunlop</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Durango</a></td>
                        <td><a href="#">Easy Street</a></td>
                        <td><a href="#">Easy Works</a></td>
                        <td><a href="#">Elkay</a></td>
                        <td><a href="#">Emeril</a></td>
                        <td><a href="#">Emerson</a></td>
                        <td><a href="#">Entegris</a></td>
                        <td><a href="#">Estes</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Fila</a></td>
                        <td><a href="#">Fitbit</a></td>
                        <td><a href="#">Florsheim Work</a></td>
                        <td><a href="#">Footguard</a></td>
                        <td><a href="#">Frito Lay</a></td>
                        <td><a href="#">G2E</a></td>
                        <td><a href="#">Genesis</a></td>
                        <td><a href="#">Genuine Grip</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Georgia</a></td>
                        <td><a href="#">GitHub</a></td>
                        <td><a href="#">Grabbers</a></td>
                        <td><a href="#">Heartland</a></td>
                        <td><a href="#">Helly Hansen</a></td>
                        <td><a href="#">Hoss</a></td>
                        <td><a href="#">ICW</a></td>
                        <td><a href="#">Impacto</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Iron Age</a></td>
                        <td><a href="#">John Deere</a></td>
                        <td><a href="#">Justin Original</a></td>
                        <td><a href="#">K-Swiss</a></td>
                        <td><a href="#">Keen</a></td>
                        <td><a href="#">Klogs</a></td>
                        <td><a href="#">Knapp</a></td>
                        <td><a href="#">Kodiak</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">LaCrosse</a></td>
                        <td><a href="#">Laredo</a></td>
                        <td><a href="#">Lehigh CF</a></td>
                        <td><a href="#">Lehigh O</a></td>
                        <td><a href="#">Lehigh SS</a></td>
                        <td><a href="#">Lilly</a></td>
                        <td><a href="#">Loves</a></td>
                        <td><a href="#">Ludowici</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Lyondell Bassell</a></td>
                        <td><a href="#">MSC</a></td>
                        <td><a href="#">Maxx Dry</a></td>
                        <td><a href="#">McRae Industrial</a></td>
                        <td><a href="#">Mellow Walk</a></td>
                        <td><a href="#">Michelin</a></td>
                        <td><a href="#">Miller Coors</a></td>
                        <td><a href="#">Moxie Trades</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Muck</a></td>
                        <td><a href="#">Nautilus</a></td>
                        <td><a href="#">New Balance</a></td>
                        <td><a href="#">Nurse Mates</a></td>
                        <td><a href="#">Oliver</a></td>
                        <td><a href="#">Onguard</a></td>
                        <td><a href="#">Original SWAT</a></td>
                        <td><a href="#">Pepsi</a></td>
                    </tr>
                    <tr>
                        <td><a href="">PepsiCo</a></td>
                        <td><a href="#">P &amp; G</a></td>
                        <td><a href="#">Puma</a></td>
                        <td><a href="#">QuickFit</a></td>
                        <td><a href="#">Ranger</a></td>
                        <td><a href="#">Reebok</a></td>
                        <td><a href="#">Refrigiwear</a></td>
                        <td><a href="#">Renaissance</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Rockport Works</a></td>
                        <td><a href="#">Rocky</a></td>
                        <td><a href="#">Royer</a></td>
                        <td><a href="#">Sanita</a></td>
                        <td><a href="#">Seattle Children's</a></td>
                        <td><a href="#">Servus</a></td>
                        <td><a href="#">Shoe Angel</a></td>
                        <td><a href="#">Skechers</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Skidbusters</a></td>
                        <td><a href="#">SlipGrips</a></td>
                        <td><a href="#">Smoky Mountain</a></td>
                        <td><a href="#">SpaceX</a></td>
                        <td><a href="#">Spenco</a></td>
                        <td><a href="#">Spring Step</a></td>
                        <td><a href="#">Stanley</a></td>
                        <td><a href="#">Steel Blue</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Strack Van Til</a></td>
                        <td><a href="#">Tenneco</a></td>
                        <td><a href="#">Terra</a></td>
                        <td><a href="#">Thorogood</a></td>
                        <td><a href="#">Timberland</a></td>
                        <td><a href="#">Tingley</a></td>
                        <td><a href="#">Tony Lama</a></td>
                        <td><a href="#">Twisted X</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">V &amp; M</a></td>
                        <td><a href="#">Vallen</a></td>
                        <td><a href="#">Xtratuf</a></td>
                        <td><a href="#"></a></td>
                        <td><a href="#"></a></td>
                        <td><a href="#"></a></td>
                        <td><a href="#"></a></td>
                        <td><a href="#"></a></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Dashboard;