import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "2638f2cb-f949-4334-8f3c-0c27e3f58e73",
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
        id: "cd98e1b3-f635-42b9-9aad-86ff4a350931",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "13149d16-a849-4cb5-a160-7ecb91840e3f",
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
  await web.setText(
    {
      type: "Web",
      id: "e872ea85-59cc-492c-8561-dad570277be3",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "c0f4eab1-7371-439e-b5c4-69dae10dcaaa",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "dc6c7394-cebc-4322-9de2-803d992d5cbb",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "John Doe"
  );
  await web.setEncryptedText(
    {
      type: "Web",
      id: "55bcf2e2-fe14-46ad-8bcb-d41ade9a4c03",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "e2ebb404-2329-42df-b824-c17bfe37ad32",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "7845f0b1-95b7-4dd5-b4a4-92c04ee8e346",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "e5505ead0248f732bd1a5ce6736f7545-U2FsdGVkX19oTcZk7thjcKyXWbrVxGrqWpti6cK2kxrQLXEbzFMy3nlCrH+4NMZo"
  );
  await web.click({
    type: "Web",
    id: "503bd896-cbc3-4210-94c3-1adfef94f0d1",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "77a36512-fbee-42f3-90ae-7181d015ca6b",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "1e97c627-21df-4c30-a1c5-ddb820d51264",
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
});