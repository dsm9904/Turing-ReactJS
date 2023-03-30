import Nav from 'react-bootstrap/Nav';
let Navigation=()=> {
  return (
    <>
     <Nav variant="pills" defaultActiveKey="/home" className="justify-content-end">
      <Nav.Item>
        <Nav.Link eventKey="link-2">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
    </>
  );
}

export default Navigation;