import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "4040f242-c6c4-411b-b6b0-0c5475147543",
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
        id: "15554b74-8fce-4355-a40d-7ca7d85fc461",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "30d11383-7600-4c1a-91be-756f193a70ab",
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
    id: "c5613465-241a-4c19-bfec-b1f9f395e493",
    attributes: {
      type: "text",
      class: "form-control",
      placeholder: "Username",
      "aria-describedby": "demo_username_label",
      value: "John Doe",
      readonly: "",
    },
    childIndex: 2,
    hashes: { "md5.v1": "d658d4e8da92fe56536b7b268fa72a89" },
    name: "input - Username",
    selectors: [
      {
        id: "717b2fdc-65c5-4d5e-893f-baa21ae693eb",
        type: "CSS",
        value: '[value="John\\ Doe"]',
        isDefault: true,
      },
      {
        id: "6d77a618-9315-4870-8558-14549148dec8",
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
  });
  await web.click({
    type: "Web",
    id: "e045d07b-7256-441b-8c49-ac6cec511fc7",
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
        id: "5a8eefe1-ffc0-41a2-b0c7-97f781c66c8b",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "26e74784-e07c-4296-8e39-7b9c4103ce23",
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
  });
  await web.setText(
    {
      type: "Web",
      id: "e045d07b-7256-441b-8c49-ac6cec511fc7",
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
          id: "5a8eefe1-ffc0-41a2-b0c7-97f781c66c8b",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "26e74784-e07c-4296-8e39-7b9c4103ce23",
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
  await web.click({
    type: "Web",
    id: "4659e0ea-4659-4a87-a6ac-5dc9832b194a",
    attributes: {
      type: "text",
      class: "form-control",
      placeholder: "Password",
      "aria-describedby": "demo_password_label",
      value: "ThisIsNotAPassword",
      readonly: "",
    },
    childIndex: 2,
    hashes: { "md5.v1": "f6711b02ce671cc2b817baf776140264" },
    name: "input - Password",
    selectors: [
      {
        id: "37a9e17e-5e11-4eb4-8019-e79a8ac7b886",
        type: "CSS",
        value: '[value="ThisIsNotAPassword"]',
        isDefault: true,
      },
      {
        id: "30785c4e-9a94-4a7f-94ec-a6621c345551",
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
  });
  await web.click({
    type: "Web",
    id: "f8ff73c2-d723-4896-9fac-9216a247cfe8",
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
        id: "7a25ae64-7ae2-461c-8476-b53331bac0cc",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "22892eea-76f0-420b-b33e-d4c0a3a404f4",
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
  });
  await web.setEncryptedText(
    {
      type: "Web",
      id: "f8ff73c2-d723-4896-9fac-9216a247cfe8",
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
          id: "7a25ae64-7ae2-461c-8476-b53331bac0cc",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "22892eea-76f0-420b-b33e-d4c0a3a404f4",
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
    "9730d8450a6391f6a2cfe2ed5a5fa3fd-U2FsdGVkX1+1bMY/L1hUVLwEDJg7/m75v3ZoNs2SqtJ9IOVOqtDGYt6tok+ux5qh"
  );
});