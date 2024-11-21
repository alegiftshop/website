import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button } from "react-bootstrap";

export default function LogIn() {
  return (
    <div className="translate-y-[-32px] ">
      <Tabs
        defaultActiveKey="login"
        id="uncontrolled-tab-example"
        className="mb-3 flex justify-center"
      >
        <Tab eventKey="login" title="Log In" className="mx-3">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                required
              />
              <a href="" className="link-text">
                I forgot my password.
              </a>
            </div>
            <Button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded mt-4"
            >
              Enter
            </Button>
          </form>
        </Tab>

        <Tab eventKey="register" title="Register" className="mx-3">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="accountname"
                className="block text-sm font-medium text-gray-700"
              >
                Account name
              </label>
              <input
                type="text"
                id="accountname"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="newemail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="newemail"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="newpassword"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="newpassword"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded mt-4"
            >
              Submit
            </Button>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
}
