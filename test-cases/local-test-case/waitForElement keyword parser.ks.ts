import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "4276f153-019e-49a7-a965-49cb622e0ad0",
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
        id: "2fb8b220-38c9-454d-b132-f8412ba10e46",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "8c10e481-15fb-48e8-b2fb-05b667604bf6",
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
  await web.waitForElementPresent(
    {
      type: "Web",
      id: "6da9be1d-8a0a-4c36-b63f-a5244134dbf9",
      attributes: {},
      childIndex: 1,
      hashes: { "md5.v1": "de9ca85128fd393fefc5579b4f6d7ea4" },
      name: "h2 - Login",
      selectors: [
        {
          id: "51df0851-42a2-4a84-80e5-d81399063ffe",
          type: "CSS",
          value: "h2",
          isDefault: true,
        },
        {
          id: "58380109-5fcc-4e77-b433-05360b9c2c15",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "h2",
      text: "Login",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    30
  );
});