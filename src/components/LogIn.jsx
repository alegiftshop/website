import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function LogIn() {
  return (
    <div className="translate-y-[-32px] ">
      <Tabs
        defaultActiveKey="login"
        id="uncontrolled-tab-example"
        className="mb-3 flex justify-center"
      >
        <Tab eventKey="login" title="Log In" className="mx-3">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={""} className="w-full">
              Enter
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="register" title="Register" className="mx-3">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Account name</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={""} className="w-full">
              Submit
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
}
