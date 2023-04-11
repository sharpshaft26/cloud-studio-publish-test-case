import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "f77b64f4-8ea2-41c9-a08d-339d9e16444e",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "afa3a184-9ec8-42a1-a201-c596397921f9",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "e434d8f1-d84b-480f-9abb-4758858f650d",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "e17aac84-afba-4a12-b692-05a182e5d2ba",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "453a8e29-2b02-442d-9a48-59dc86d5f723",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "e84f2b63-691e-4cae-9c6d-531424b02f5d",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});