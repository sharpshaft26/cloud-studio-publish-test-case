import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser(
    "https://katalon-test.s3.amazonaws.com/aut/html/form.html"
  );
  await web.click({
    type: "Web",
    id: "d97328a6-f480-4bbd-a20a-a054b2a8c8b9",
    attributes: {
      type: "text",
      class: "form-control",
      id: "first-name",
      name: "firstName",
    },
    childIndex: 1,
    hashes: { "md5.v1": "57968df2692e26f003aeb5594d4b7b27" },
    name: "input - firstName",
    selectors: [
      {
        id: "906ac324-92ae-4793-b1c0-3183f11bc302",
        type: "CSS",
        value: "#first-name",
        isDefault: true,
      },
      {
        id: "6c54fec3-dba6-400f-9543-314f78eac17f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "d97328a6-f480-4bbd-a20a-a054b2a8c8b9",
      attributes: {
        type: "text",
        class: "form-control",
        id: "first-name",
        name: "firstName",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57968df2692e26f003aeb5594d4b7b27" },
      name: "input - firstName",
      selectors: [
        {
          id: "906ac324-92ae-4793-b1c0-3183f11bc302",
          type: "CSS",
          value: "#first-name",
          isDefault: true,
        },
        {
          id: "6c54fec3-dba6-400f-9543-314f78eac17f",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
      parentIframe: null,
      shadowRoot: null,
    },
    "abcdef"
  );
  await web.click({
    type: "Web",
    id: "5e9cbcdd-80e6-47d6-ba3d-4e81cd0b6af9",
    attributes: {
      type: "password",
      class: "form-control",
      id: "password",
      name: "password",
    },
    childIndex: 1,
    hashes: { "md5.v1": "bea90ebb95957c1fede6071f6668d98d" },
    name: "input - password",
    selectors: [
      {
        id: "75e85043-6c9e-40fc-9732-5c2665751929",
        type: "CSS",
        value: "#password",
        isDefault: true,
      },
      {
        id: "1df1a47f-e235-42c7-8528-8ba8d2fa68fc",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setEncryptedText(
    {
      type: "Web",
      id: "5e9cbcdd-80e6-47d6-ba3d-4e81cd0b6af9",
      attributes: {
        type: "password",
        class: "form-control",
        id: "password",
        name: "password",
      },
      childIndex: 1,
      hashes: { "md5.v1": "bea90ebb95957c1fede6071f6668d98d" },
      name: "input - password",
      selectors: [
        {
          id: "75e85043-6c9e-40fc-9732-5c2665751929",
          type: "CSS",
          value: "#password",
          isDefault: true,
        },
        {
          id: "1df1a47f-e235-42c7-8528-8ba8d2fa68fc",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
      parentIframe: null,
      shadowRoot: null,
    },
    "4eee25835b58ab6d2354de21dca35779-U2FsdGVkX18PON1EeMIWQThziwGhIriCptWetyGVgys="
  );
  await web.check({
    type: "Web",
    id: "32e042f5-91fb-4c9d-9777-bd3ea16b97f6",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "36362c778d2925319c3255774d8455d6" },
    name: "input - ",
    selectors: [
      {
        id: "fa887dc5-e308-4191-a277-fdb4f52cebcc",
        type: "CSS",
        value: '.checkbox:nth-child(1) [value=""]',
        isDefault: true,
      },
      {
        id: "1509dccf-e96d-4a62-9da0-80df21a919e2",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "007ff480-bca3-4ec6-82a2-299e61f47e77",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "c2c461079c51b4ff40a8a5bed43d9fa2" },
    name: "label - Take online courses",
    selectors: [
      {
        id: "10e2589f-0d8a-44f3-9537-03cc32c6f67a",
        type: "CSS",
        value: ".checkbox:nth-child(2) label",
        isDefault: true,
      },
      {
        id: "6f6f65e2-f2c9-4ce9-81e9-fe2bc21295f8",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "Take online courses",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.scrollToElement({
    type: "Web",
    id: "fe66f1e5-f568-4a2f-a1af-cdc99b9a2a68",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "397772cdf854785b27d3f2e3dae41cbd" },
    name: "label - Via discovery and experiment",
    selectors: [
      {
        id: "9b97b057-eb5b-4e29-b528-04e7275a2412",
        type: "CSS",
        value: ".checkbox:nth-child(6) label",
        isDefault: true,
      },
      {
        id: "4c5d58bc-09ab-42ab-b8a1-189b548d7e2c",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "Via discovery and experiment",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.check({
    type: "Web",
    id: "81ea05a2-b721-43ac-a34a-09b65fc94485",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "58652cccfa5c0256c9d3b30cba5b3982" },
    name: "input - ",
    selectors: [
      {
        id: "44f14b15-a6a2-4723-85ba-de0d4b7ad7ec",
        type: "CSS",
        value: '.checkbox:nth-child(3) [value=""]',
        isDefault: true,
      },
      {
        id: "3c807aa0-82c1-441c-bb37-7b3c0b706833",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "c452fa6e-ec93-47b4-9230-560e0571a5b3",
    attributes: {
      class: "form-control",
      rows: "5",
      id: "comment",
      name: "comment",
    },
    childIndex: 1,
    hashes: { "md5.v1": "8b5e52ba53e3a6a87949118e414d2daa" },
    name: "textarea - comment",
    selectors: [
      {
        id: "89943e1b-5362-40fa-b983-583e2322e09e",
        type: "CSS",
        value: "#comment",
        isDefault: true,
      },
      {
        id: "691682da-089c-4f1b-a5ba-41d3dd7be3c2",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "textarea",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "c452fa6e-ec93-47b4-9230-560e0571a5b3",
      attributes: {
        class: "form-control",
        rows: "5",
        id: "comment",
        name: "comment",
      },
      childIndex: 1,
      hashes: { "md5.v1": "8b5e52ba53e3a6a87949118e414d2daa" },
      name: "textarea - comment",
      selectors: [
        {
          id: "89943e1b-5362-40fa-b983-583e2322e09e",
          type: "CSS",
          value: "#comment",
          isDefault: true,
        },
        {
          id: "691682da-089c-4f1b-a5ba-41d3dd7be3c2",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "textarea",
      text: "",
      pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
      parentIframe: null,
      shadowRoot: null,
    },
    "qwerty"
  );
  await web.scrollToElement({
    type: "Web",
    id: "fa450c22-87c7-4ac4-9a18-cfd08045498b",
    attributes: { for: "gender", class: "control-label col-sm-2" },
    childIndex: 1,
    hashes: { "md5.v1": "678ba65dc07ce8dee0504c6ac68443b1" },
    name: "label - Gender",
    selectors: [
      {
        id: "5c7c0ae7-ebc5-4d12-af4b-b8193d886ac4",
        type: "CSS",
        value: '[for="gender"]',
        isDefault: true,
      },
      {
        id: "b108b2dd-1190-47a0-94a2-93550cf28c58",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "Gender",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "bf950f39-329a-4eed-9bc9-be15da035de1",
    attributes: { type: "radio", name: "gender" },
    childIndex: 1,
    hashes: { "md5.v1": "d69ec245d788eaded7f7a9215f2e5634" },
    name: "input - gender",
    selectors: [
      {
        id: "9eb99bc5-38fb-4dcf-8f9c-d2e36ccc5acb",
        type: "CSS",
        value: '.radio-inline:nth-child(1) [name="gender"]',
        isDefault: true,
      },
      {
        id: "90c59e8b-fd8c-41e7-90c1-9637a69b268a",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "1bab3689-9319-4864-93bd-bc2c0a732583",
    attributes: { class: "radio-inline" },
    childIndex: 2,
    hashes: { "md5.v1": "0327f13f35dc137bce039c73c4d1a0b4" },
    name: "label - Female",
    selectors: [
      {
        id: "7405528f-7af1-4755-a451-798c6f88cc68",
        type: "CSS",
        value: ".radio-inline:nth-child(2)",
        isDefault: true,
      },
      {
        id: "240babfb-2f7a-42e7-8bcd-438e4a30c5d7",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "Female",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "b307aace-a205-4170-886a-df262508ae7a",
    attributes: { type: "radio", name: "gender" },
    childIndex: 1,
    hashes: { "md5.v1": "02995dca1c24b559efee215e05eb4f0e" },
    name: "input - gender",
    selectors: [
      {
        id: "279ea4a3-fde4-417c-9358-a5079a4cf515",
        type: "CSS",
        value: '.radio-inline:nth-child(3) [name="gender"]',
        isDefault: true,
      },
      {
        id: "2593df76-8309-4c00-a4ca-b133c8c8a549",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "bf950f39-329a-4eed-9bc9-be15da035de1",
    attributes: { type: "radio", name: "gender" },
    childIndex: 1,
    hashes: { "md5.v1": "d69ec245d788eaded7f7a9215f2e5634" },
    name: "input - gender",
    selectors: [
      {
        id: "9eb99bc5-38fb-4dcf-8f9c-d2e36ccc5acb",
        type: "CSS",
        value: '.radio-inline:nth-child(1) [name="gender"]',
        isDefault: true,
      },
      {
        id: "90c59e8b-fd8c-41e7-90c1-9637a69b268a",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.scrollToElement({
    type: "Web",
    id: "2ade59a9-2791-4abd-b64e-6582738831b5",
    attributes: { class: "col-sm-offset-2 col-sm-10" },
    childIndex: 1,
    hashes: { "md5.v1": "5b2884f8774ea72585bb52da9e3e11be" },
    name: "div - Submit",
    selectors: [
      {
        id: "f3b7ccc9-2cb9-4261-8368-d03bcb7b913f",
        type: "CSS",
        value: ".form-group:nth-child(13) div",
        isDefault: true,
      },
      {
        id: "4c29ccc9-b4ed-4453-b8fa-12e383a071d3",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "Submit",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "3a60a0f8-348b-4265-a6ed-f92718edde90",
    attributes: { type: "submit", id: "submit", class: "btn btn-primary" },
    childIndex: 1,
    hashes: { "md5.v1": "d81f27a20014232719a8cef127e982c9" },
    name: "button - Submit",
    selectors: [
      {
        id: "9525536c-6c2b-44d1-9c9b-81fc89f63ca8",
        type: "CSS",
        value: "#submit",
        isDefault: true,
      },
      {
        id: "bed85a4d-312c-43fe-916a-5f8b16ea3d25",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Submit",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});