import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser(
    "https://katalon-test.s3.amazonaws.com/aut/html/form.html"
  );
  await web.click({
    type: "Web",
    id: "373d8bca-c086-427d-904f-81cee711434d",
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
        id: "9d1c9351-0e28-4b37-ac08-950e2af9990a",
        type: "CSS",
        value: "#first-name",
        isDefault: true,
      },
      {
        id: "2f56a5f7-9864-42f1-bb7d-36e227984dff",
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
      id: "373d8bca-c086-427d-904f-81cee711434d",
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
          id: "9d1c9351-0e28-4b37-ac08-950e2af9990a",
          type: "CSS",
          value: "#first-name",
          isDefault: true,
        },
        {
          id: "2f56a5f7-9864-42f1-bb7d-36e227984dff",
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
    "abc"
  );
  await web.click({
    type: "Web",
    id: "98076e8d-f59e-429b-a051-732c7a9f5091",
    attributes: {
      type: "text",
      class: "form-control",
      id: "last-name",
      name: "lastName",
    },
    childIndex: 1,
    hashes: { "md5.v1": "8539708e94305f4a0074483ac30100ec" },
    name: "input - lastName",
    selectors: [
      {
        id: "ee968759-234d-4fc6-9079-9fade7604e97",
        type: "CSS",
        value: "#last-name",
        isDefault: true,
      },
      {
        id: "64e25b84-114c-418d-ab52-a43033d4401f",
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
      id: "98076e8d-f59e-429b-a051-732c7a9f5091",
      attributes: {
        type: "text",
        class: "form-control",
        id: "last-name",
        name: "lastName",
      },
      childIndex: 1,
      hashes: { "md5.v1": "8539708e94305f4a0074483ac30100ec" },
      name: "input - lastName",
      selectors: [
        {
          id: "ee968759-234d-4fc6-9079-9fade7604e97",
          type: "CSS",
          value: "#last-name",
          isDefault: true,
        },
        {
          id: "64e25b84-114c-418d-ab52-a43033d4401f",
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
    "def"
  );
  await web.click({
    type: "Web",
    id: "aafad99a-a55f-4149-84fb-5ab6fb5aef6e",
    attributes: { class: "radio-inline" },
    childIndex: 3,
    hashes: { "md5.v1": "9c4314749a8eb95aa9e30375320faa92" },
    name: "label - In Between",
    selectors: [
      {
        id: "cfd5f590-6340-4b1b-b80e-20caa245888c",
        type: "CSS",
        value: ".radio-inline:nth-child(3)",
        isDefault: true,
      },
      {
        id: "00dc6700-3d66-4093-ad3b-8e84c9c0c763",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "In Between",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "f0c73c80-2b89-446a-abe3-c8cf0cb6dd1a",
    attributes: { type: "radio", name: "gender" },
    childIndex: 1,
    hashes: { "md5.v1": "cadd1f97cc2fb5b54ad2b4532dd684b6" },
    name: "input - gender",
    selectors: [
      {
        id: "cd25bed0-13c7-44e2-a2a3-83cd057c3d1b",
        type: "CSS",
        value: '.radio-inline:nth-child(2) [name="gender"]',
        isDefault: true,
      },
      {
        id: "c2b3fde9-f702-46ba-b631-688bd1503c58",
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
    id: "a07f599d-77c3-4ed0-a995-a4626eeb0107",
    attributes: { type: "radio", name: "gender" },
    childIndex: 1,
    hashes: { "md5.v1": "d69ec245d788eaded7f7a9215f2e5634" },
    name: "input - gender",
    selectors: [
      {
        id: "b6d81206-2342-4703-925e-04219c59c530",
        type: "CSS",
        value: '.radio-inline:nth-child(1) [name="gender"]',
        isDefault: true,
      },
      {
        id: "f3da3005-4113-4ac1-96da-50c2dc8d68ce",
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
    id: "a2876014-1dfc-4d30-a913-4685b6b5b8e9",
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
        id: "f90c3053-803c-48f2-bc33-c7a37fc76a72",
        type: "CSS",
        value: "#password",
        isDefault: true,
      },
      {
        id: "5870f4eb-6e43-4440-9b9c-a7348a2402d1",
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
      id: "a2876014-1dfc-4d30-a913-4685b6b5b8e9",
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
          id: "f90c3053-803c-48f2-bc33-c7a37fc76a72",
          type: "CSS",
          value: "#password",
          isDefault: true,
        },
        {
          id: "5870f4eb-6e43-4440-9b9c-a7348a2402d1",
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
    "3013f810e6594d5d4f85b9a390f65c2e-U2FsdGVkX19FvaflnASMVpcjcCIzBSdBZwHvVO0sGlM="
  );
  await web.click({
    type: "Web",
    id: "e50b6eb1-5b85-4df0-8be8-138f007f5db5",
    attributes: { class: "form-control", name: "role", id: "role" },
    childIndex: 1,
    hashes: { "md5.v1": "59bfac91d6b7335f83f58b30959e19f7" },
    name: "select - Developer",
    selectors: [
      {
        id: "31d9c128-021f-437e-b76a-caa291f83a94",
        type: "CSS",
        value: "#role",
        isDefault: true,
      },
      {
        id: "23806ee3-ebdc-4107-bef9-aa496a5ad64c",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "select",
    text: "Developer\nQA\nManager\nTechnical Architect\nBusiness Analyst",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.selectOptionByValue(
    {
      type: "Web",
      id: "e50b6eb1-5b85-4df0-8be8-138f007f5db5",
      attributes: { class: "form-control", name: "role", id: "role" },
      childIndex: 1,
      hashes: { "md5.v1": "59bfac91d6b7335f83f58b30959e19f7" },
      name: "select - Developer",
      selectors: [
        {
          id: "31d9c128-021f-437e-b76a-caa291f83a94",
          type: "CSS",
          value: "#role",
          isDefault: true,
        },
        {
          id: "23806ee3-ebdc-4107-bef9-aa496a5ad64c",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "select",
      text: "Developer\nQA\nManager\nTechnical Architect\nBusiness Analyst",
      pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
      parentIframe: null,
      shadowRoot: null,
    },
    "QA"
  );
  await web.click({
    type: "Web",
    id: "e50b6eb1-5b85-4df0-8be8-138f007f5db5",
    attributes: { class: "form-control", name: "role", id: "role" },
    childIndex: 1,
    hashes: { "md5.v1": "59bfac91d6b7335f83f58b30959e19f7" },
    name: "select - Developer",
    selectors: [
      {
        id: "31d9c128-021f-437e-b76a-caa291f83a94",
        type: "CSS",
        value: "#role",
        isDefault: true,
      },
      {
        id: "23806ee3-ebdc-4107-bef9-aa496a5ad64c",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "select",
    text: "Developer\nQA\nManager\nTechnical Architect\nBusiness Analyst",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.selectOptionByValue(
    {
      type: "Web",
      id: "e50b6eb1-5b85-4df0-8be8-138f007f5db5",
      attributes: { class: "form-control", name: "role", id: "role" },
      childIndex: 1,
      hashes: { "md5.v1": "59bfac91d6b7335f83f58b30959e19f7" },
      name: "select - Developer",
      selectors: [
        {
          id: "31d9c128-021f-437e-b76a-caa291f83a94",
          type: "CSS",
          value: "#role",
          isDefault: true,
        },
        {
          id: "23806ee3-ebdc-4107-bef9-aa496a5ad64c",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "select",
      text: "Developer\nQA\nManager\nTechnical Architect\nBusiness Analyst",
      pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
      parentIframe: null,
      shadowRoot: null,
    },
    "Developer"
  );
  await web.scrollToElement({
    type: "Web",
    id: "509be15c-bae4-44a4-97b6-91b17be3a0c6",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "397772cdf854785b27d3f2e3dae41cbd" },
    name: "label - Via discovery and experiment",
    selectors: [
      {
        id: "7108ed1e-1fac-4f92-ae5d-a86cf3b37350",
        type: "CSS",
        value: ".checkbox:nth-child(6) label",
        isDefault: true,
      },
      {
        id: "f8fd499c-0df4-46d1-a035-0a41e9874feb",
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
    id: "203c9dbf-26af-4f12-af8b-1959cded2c0b",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "36362c778d2925319c3255774d8455d6" },
    name: "input - ",
    selectors: [
      {
        id: "2ad7a440-97b7-4c19-b37c-1b5337aee4c9",
        type: "CSS",
        value: '.checkbox:nth-child(1) [value=""]',
        isDefault: true,
      },
      {
        id: "dc0854f1-c92f-425e-b654-432a94345af0",
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
    id: "4352e4fb-3bb3-4108-a7fa-a5dddb52fdaa",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "c2c461079c51b4ff40a8a5bed43d9fa2" },
    name: "label - Take online courses",
    selectors: [
      {
        id: "91db2e81-8e82-4ce4-859e-1a2c0a029690",
        type: "CSS",
        value: ".checkbox:nth-child(2) label",
        isDefault: true,
      },
      {
        id: "b66c072b-8e56-4ed4-926d-54c889b9f55e",
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
  await web.check({
    type: "Web",
    id: "962a6cda-3bb3-435b-bce9-68892997f442",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "58652cccfa5c0256c9d3b30cba5b3982" },
    name: "input - ",
    selectors: [
      {
        id: "eb1797d8-0ba4-44a0-8a67-77a3527ced49",
        type: "CSS",
        value: '.checkbox:nth-child(3) [value=""]',
        isDefault: true,
      },
      {
        id: "8aca6aac-341d-4475-a7f8-22dae04d105b",
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
    id: "accfab6b-24a9-4aef-952f-d40ca6d63e49",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "2f4a710a70dacfa08202c9e672408ffd" },
    name: "label - Join tech cons",
    selectors: [
      {
        id: "94f3fec6-3761-453b-b836-0ebb96b45131",
        type: "CSS",
        value: ".checkbox:nth-child(4) label",
        isDefault: true,
      },
      {
        id: "db74afe8-4097-4114-b7e6-cd8802313f5e",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "Join tech cons",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.check({
    type: "Web",
    id: "28f59ee7-9d45-4ae7-80fa-ea9a858a1aa0",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "30d47058fdbc3fe3bd0af64e17f0eb22" },
    name: "input - ",
    selectors: [
      {
        id: "ac1bdafd-f666-40d6-be19-0e7dea8ee95f",
        type: "CSS",
        value: '.checkbox:nth-child(5) [value=""]',
        isDefault: true,
      },
      {
        id: "3c2c0e6c-3c95-4c46-b2f2-cf6e66df379c",
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
    id: "509be15c-bae4-44a4-97b6-91b17be3a0c6",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "397772cdf854785b27d3f2e3dae41cbd" },
    name: "label - Via discovery and experiment",
    selectors: [
      {
        id: "7108ed1e-1fac-4f92-ae5d-a86cf3b37350",
        type: "CSS",
        value: ".checkbox:nth-child(6) label",
        isDefault: true,
      },
      {
        id: "f8fd499c-0df4-46d1-a035-0a41e9874feb",
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
  await web.click({
    type: "Web",
    id: "3335d693-f902-48a7-9b52-62d93cfbf27b",
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
        id: "3017999a-2157-4961-aea0-08b3e65c3649",
        type: "CSS",
        value: "#comment",
        isDefault: true,
      },
      {
        id: "73f7cbc1-95ad-40a7-9e1d-41dddf52a4e2",
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
      id: "3335d693-f902-48a7-9b52-62d93cfbf27b",
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
          id: "3017999a-2157-4961-aea0-08b3e65c3649",
          type: "CSS",
          value: "#comment",
          isDefault: true,
        },
        {
          id: "73f7cbc1-95ad-40a7-9e1d-41dddf52a4e2",
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
  await web.click({
    type: "Web",
    id: "73f158d7-11f7-436d-9f9f-13c4e492edff",
    attributes: { type: "submit", id: "submit", class: "btn btn-primary" },
    childIndex: 1,
    hashes: { "md5.v1": "d81f27a20014232719a8cef127e982c9" },
    name: "button - Submit",
    selectors: [
      {
        id: "c0743668-2149-49e4-8f32-d771857312bb",
        type: "CSS",
        value: "#submit",
        isDefault: true,
      },
      {
        id: "99ff8b0d-9b1a-4f0b-b01f-0cd70f124f85",
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
});