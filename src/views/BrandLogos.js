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
              <h6>If you'd like to store the logos locally on your machine the easiest method is to just download the zip file below.</h6>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <a href="https://github.com/rodelliott/workLogos/blob/master/BrandLogos.zip?raw=true"><i className="fas fa-arrow-down text-success"></i> Download All Brand Logos - <span><i>70.2 MB</i></span></a><br />
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
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Chinook/Chinook.zip?raw=true">Chinook</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Chippewa/Chippewa.zip?raw=true">Chippewa</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Converse/Converse.zip?raw=true">Converse</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Creative%20Rec/Creative%20Rec.zip?raw=true">Creative Rec</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Crocs/Crocs.zip?raw=true">Crocs</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dan%20Post/Dan%20Post.zip?raw=true">Dan Post</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Danner/Danner.zip?raw=true">Danner</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dansko/Dansko.zip?raw=true">Dansko</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dawgs/Dawgs.zip?raw=true">Dawgs</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/DeWalt/DeWalt.zip?raw=true">DeWalt</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dickies/Dickies.zip?raw=true">Dickies</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dingo/Dingo.zip?raw=true">Dingo</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dr%20Martens/Dr%20Martens.zip?raw=true">Dr. Martens</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dr%20Scholls/Dr%20Scholls.zip?raw=true">Dr. Scholl's</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/DragonGrip/DragonGrip.zip?raw=true">DragonGrip</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Dunlop/Dunlop.zip?raw=true">Dunlop</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Durango/Durango.zip?raw=true">Durango</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Easy%20Street/Easy%20Street.zip?raw=true">Easy Street</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Easy%20Works/Easy%20Works.zip?raw=true">Easy Works</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Elkay/Elkay.zip?raw=true">Elkay</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Emeril/Emeril.zip?raw=true">Emeril</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Emerson%20Process/Emerson%20Process.zip?raw=true">Emerson</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Entegris/Entegris.zip?raw=true">Entegris</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Estes/Estes.zip?raw=true">Estes</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Fila/Fila.zip?raw=true">Fila</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Fitbit/Fitbit.zip?raw=true">Fitbit</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Florsheim%20Work/Florsheim%20Work.zip?raw=true">Florsheim Work</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Footguard/Footguard.zip?raw=true">Footguard</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Frito%20Lay/Frito%20Lay.zip?raw=true">Frito Lay</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/G2E/G2E.zip?raw=true">G2E</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Genesis/Genesis.zip?raw=true">Genesis</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Genuine%20Grip/Genuine%20Grip.zip?raw=true">Genuine Grip</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Georgia/Georgia.zip?raw=true">Georgia</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/GitHub/GitHub.zip?raw=true">GitHub</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Grabbers/Grabbers.zip?raw=true">Grabbers</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Heartland/Heartland.zip?raw=true">Heartland</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Helly%20Hansen/Helly%20Hansen.zip?raw=true">Helly Hansen</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Hoss/Hoss.zip?raw=true">Hoss</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/ICW/ICW.zip?raw=true">ICW</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Impacto/Impacto.zip?raw=true">Impacto</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Iron%20Age/Iron%20Age.zip?raw=true">Iron Age</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/John%20Deere/John%20Deere.zip?raw=true">John Deere</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Justin%20Original/Justin%20Original.zip?raw=true">Justin Original</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/K-Swiss/K-Swiss.zip?raw=true">K-Swiss</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Keen/Keen.zip?raw=true">Keen</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Klogs/Klogs.zip?raw=true">Klogs</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Knapp/Knapp.zip?raw=true">Knapp</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Kodiak/Kodiak.zip?raw=true">Kodiak</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/LaCrosse/LaCrosse.zip?raw=true">LaCrosse</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Laredo/Laredo.zip?raw=true">Laredo</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Lehigh%20CustomFit/Lehigh%20CustomFit.zip?raw=true">Lehigh CF</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Lehigh%20Outfitters/Lehigh%20Outfitters.zip?raw=true">Lehigh O</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Lehigh%20Safety%20Shoes/Lehigh%20Safety%20Shoes.zip?raw=true">Lehigh SS</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Lilly/Lilly.zip?raw=true">Lilly</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Loves/Loves.zip?raw=true">Loves</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Ludowici/Ludowici.zip?raw=true">Ludowici</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Lyondell%20Basell/Lyondell%20Basell.zip?raw=true">Lyondell Bassell</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/MSC/MSC.zip?raw=true">MSC</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Maxx%20Dry/Maxx%20Dry.zip?raw=true">Maxx Dry</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/McRae%20Industrial/McRae%20Industrial.zip?raw=true">McRae Industrial</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Mellow%20Walk/Mellow%20Walk.zip?raw=true">Mellow Walk</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Michelin/Michelin.zip?raw=true">Michelin</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Miller%20Coors/Miller%20Coors.zip?raw=true">Miller Coors</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Moxie%20Trades/Moxie%20Trades.zip?raw=true">Moxie Trades</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Muck/Muck.zip?raw=true">Muck</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Nautilus/Nautilus.zip?raw=true">Nautilus</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/New%20Balance/New%20Balance.zip?raw=true">New Balance</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Nurse%20Mates/Nurse%20Mates.zip?raw=true">Nurse Mates</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Oliver/Oliver.zip?raw=true">Oliver</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Onguard/Onguard.zip?raw=true">Onguard</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Original%20SWAT/Original%20SWAT.zip?raw=true">Original SWAT</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Pepsi/Pepsi.zip?raw=true">Pepsi</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/PepsiCo/PepsiCo.zip?raw=true">PepsiCo</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Proctor%20And%20Gamble/Proctor%20And%20Gamble.zip?raw=true">P &amp; G</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Puma/Puma.zip?raw=true">Puma</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/QuickFit/QuickFit.zip?raw=true">QuickFit</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Ranger/Ranger.zip?raw=true">Ranger</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Reebok/Reebok.zip?raw=true">Reebok</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Refrigiwear/Refrigiwear.zip?raw=true">Refrigiwear</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Renaissance/Renaissance.zip?raw=true">Renaissance</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Rockport%20Works/Rockport%20Works.zip?raw=true">Rockport Works</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Rocky/Rocky.zip?raw=true">Rocky</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Royer/Royer.zip?raw=true">Royer</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Sanita/Sanita.zip?raw=true">Sanita</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Seattle%20Children's/Seattle%20Children's.zip?raw=true">Seattle Children's</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Servus/Servus.zip?raw=true">Servus</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Shoe%20Angel/Shoe%20Angel.zip?raw=true">Shoe Angel</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Skechers/Skechers.zip">Skechers</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Skidbusters/Skidbusters.zip?raw=true">Skidbusters</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/SlipGrips/SlipGrips.zip?raw=true">SlipGrips</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Smoky%20Mountain/Smoky%20Mountain.zip?raw=true">Smoky Mountain</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/SpaceX/SpaceX.zip?raw=true">SpaceX</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Spenco/Spenco.zip?raw=true">Spenco</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Spring%20Step/Spring%20Step.zip?raw=true">Spring Step</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Stanley/Stanley.zip?raw=true">Stanley</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Steel%20Blue/Steel%20Blue.zip?raw=true">Steel Blue</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Strack%20Van%20Til/Strack%20Van%20Til.zip?raw=true">Strack Van Til</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Tenneco/Tenneco.zip?raw=true">Tenneco</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Terra/Terra.zip?raw=true">Terra</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Thorogood/Thorogood.zip?raw=true">Thorogood</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Timberland/Timberland.zip?raw=true">Timberland</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Tingley/Tingley.zip?raw=true">Tingley</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Tony%20Lama/Tony%20Lama.zip?raw=true">Tony Lama</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Twisted%20X/Twisted%20X.zip?raw=true">Twisted X</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/V_AND_M/V_AND_M.zip?raw=true">V &amp; M</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Vallen/Vallen.zip?raw=true">Vallen</a></td>
                        <td><a href="https://github.com/rodelliott/workLogos/blob/master/Xtratuf/Xtratuf.zip">Xtratuf</a></td>
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