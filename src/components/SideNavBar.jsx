import { Button, Container, Row, Stack } from "react-bootstrap";
import "../styles/sidebar-nav.css";


function SideNavBar() {
    return (
      <Container className="sidebar-nav" fluid>
        <Stack>
          <Button className="m-1">Dashboard</Button>
          <Button className="m-1">Products</Button>
          <Button className="m-1">Category</Button>
          <Button className="m-1">Orders</Button>
          <Button className="m-1">Reservations</Button>
        </Stack>
      </Container>
    );
}


export default SideNavBar;