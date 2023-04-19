import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser(
    "https://katalon-test.s3.amazonaws.com/aut/html/form.html"
  );
  await web.click({
    type: "Web",
    id: "5ce79034-f7df-458f-8abc-6cc9615bf829",
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
        id: "44cb35bb-f2a8-4ac9-905c-aca9ffcb6da9",
        type: "CSS",
        value: "#first-name",
        isDefault: true,
      },
      {
        id: "60a9495f-fcb9-41e1-a835-3cbd5b93a705",
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
      id: "5ce79034-f7df-458f-8abc-6cc9615bf829",
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
          id: "44cb35bb-f2a8-4ac9-905c-aca9ffcb6da9",
          type: "CSS",
          value: "#first-name",
          isDefault: true,
        },
        {
          id: "60a9495f-fcb9-41e1-a835-3cbd5b93a705",
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
    id: "632666b0-c6fb-4373-8006-f7bd2103a8c5",
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
        id: "08fc8763-75c1-4194-b2b9-92e84d340756",
        type: "CSS",
        value: "#last-name",
        isDefault: true,
      },
      {
        id: "6a5ab3b8-3001-4935-b2f3-de8ac83cafc7",
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
      id: "632666b0-c6fb-4373-8006-f7bd2103a8c5",
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
          id: "08fc8763-75c1-4194-b2b9-92e84d340756",
          type: "CSS",
          value: "#last-name",
          isDefault: true,
        },
        {
          id: "6a5ab3b8-3001-4935-b2f3-de8ac83cafc7",
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
    id: "64f839b2-8f8e-4c43-b246-e4f661e274cb",
    attributes: { class: "radio-inline" },
    childIndex: 3,
    hashes: { "md5.v1": "9c4314749a8eb95aa9e30375320faa92" },
    name: "label - In Between",
    selectors: [
      {
        id: "c004843a-95e2-4ef4-8868-d4385bea856e",
        type: "CSS",
        value: ".radio-inline:nth-child(3)",
        isDefault: true,
      },
      {
        id: "20d63d59-d558-401b-94f4-706a8001791e",
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
    id: "77af312b-f6ff-40e2-a04d-fa0cb8e5c58f",
    attributes: { type: "radio", name: "gender" },
    childIndex: 1,
    hashes: { "md5.v1": "d69ec245d788eaded7f7a9215f2e5634" },
    name: "input - gender",
    selectors: [
      {
        id: "ced29be7-4433-41e7-b390-71cd9fbc0663",
        type: "CSS",
        value: '.radio-inline:nth-child(1) [name="gender"]',
        isDefault: true,
      },
      {
        id: "a3f6327a-bd91-40cc-9dba-4c06526be4a5",
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
    id: "108f29da-9fd2-4a85-b9c8-c4a92b1e81bd",
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
        id: "c0377d0a-4250-4ab6-9951-dc0afe07c3f8",
        type: "CSS",
        value: "#password",
        isDefault: true,
      },
      {
        id: "ac880941-0dba-467f-a32f-16dfc8b44402",
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
      id: "108f29da-9fd2-4a85-b9c8-c4a92b1e81bd",
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
          id: "c0377d0a-4250-4ab6-9951-dc0afe07c3f8",
          type: "CSS",
          value: "#password",
          isDefault: true,
        },
        {
          id: "ac880941-0dba-467f-a32f-16dfc8b44402",
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
    "74c33fbe97bbded7da1765a069ed0912-U2FsdGVkX1/+RK1LD5QpkNv+DDrDSY/OQFzA43EKUSA="
  );
  await web.scrollToElement({
    type: "Web",
    id: "ecb85d84-8333-4074-859b-6441c27a525e",
    attributes: { class: "form-group" },
    childIndex: 12,
    hashes: { "md5.v1": "c06fe8544cbd08cc39920a22462916df" },
    name: "div - Comment",
    selectors: [
      {
        id: "c76a895e-65fc-4ee5-91b8-76034548b774",
        type: "CSS",
        value: ".form-group:nth-child(12)",
        isDefault: true,
      },
      {
        id: "16d82df0-5084-402a-882b-a26e060220c5",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "Comment",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.check({
    type: "Web",
    id: "abfc0d04-ae29-4780-bd5a-469c2691632d",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "b4be56b3bf8bbf17885d29ff821c85b6" },
    name: "input - ",
    selectors: [
      {
        id: "59389447-4e5a-4b74-8fb4-13ce8438f861",
        type: "CSS",
        value: '.checkbox:nth-child(6) [value=""]',
        isDefault: true,
      },
      {
        id: "7503e4d7-2152-4021-b6da-0834096dcbd7",
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
  await web.check({
    type: "Web",
    id: "4bf1c501-e689-49d4-95c4-a532ac2f3ac8",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "36362c778d2925319c3255774d8455d6" },
    name: "input - ",
    selectors: [
      {
        id: "6907320f-d867-4f61-8353-49bde79e3c41",
        type: "CSS",
        value: '.checkbox:nth-child(1) [value=""]',
        isDefault: true,
      },
      {
        id: "bfaae95d-0d66-4d25-9690-e4dec4fd7bb9",
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
  await web.check({
    type: "Web",
    id: "980d7acf-b57d-4bcf-87e1-cde7efee5a79",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "58652cccfa5c0256c9d3b30cba5b3982" },
    name: "input - ",
    selectors: [
      {
        id: "1d0b319e-588b-42ec-ba29-6819753cf518",
        type: "CSS",
        value: '.checkbox:nth-child(3) [value=""]',
        isDefault: true,
      },
      {
        id: "959d4dc0-cfb1-4d00-8d06-67e79c4553b5",
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
    id: "8d4f4ae3-1cd4-41c8-97cc-910d587ab75d",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "2f4a710a70dacfa08202c9e672408ffd" },
    name: "label - Join tech cons",
    selectors: [
      {
        id: "657b4077-b8a4-45fa-90aa-82e80cd371b0",
        type: "CSS",
        value: ".checkbox:nth-child(4) label",
        isDefault: true,
      },
      {
        id: "0c299bf6-5d54-4b45-9864-fb334ef6528b",
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
  await web.click({
    type: "Web",
    id: "a5f3fc2a-f47e-4fb7-9c73-44b9317a5d33",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "75084cf3a876454432c5574d09a0683d" },
    name: "label - Read tech blogs",
    selectors: [
      {
        id: "5fca6fc2-87f6-433b-9366-22d1deb7d202",
        type: "CSS",
        value: ".checkbox:nth-child(5) label",
        isDefault: true,
      },
      {
        id: "db9525f6-f12c-4857-b391-b5202259f024",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "Read tech blogs",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.check({
    type: "Web",
    id: "e73a97a7-e790-47ed-8d3f-eb428d1ad296",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "e620a3226f463257b7c63770fc9b938e" },
    name: "input - ",
    selectors: [
      {
        id: "a481ca46-587c-4e50-956c-54aba6b90ea2",
        type: "CSS",
        value: '.checkbox:nth-child(2) [value=""]',
        isDefault: true,
      },
      {
        id: "4fc9c524-19e7-4881-a54f-07907705b6ad",
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
    id: "20ea5abf-cb45-4e08-b043-7ef8fb8eab05",
    attributes: {
      class: "form-control",
      rows: "5",
      id: "comment",
      name: "comment",
      spellcheck: "false",
    },
    childIndex: 3,
    hashes: { "md5.v1": "8b5e52ba53e3a6a87949118e414d2daa" },
    name: "textarea - comment",
    selectors: [
      {
        id: "10bd380e-9b00-4d57-800b-b6240d0e0cb8",
        type: "CSS",
        value: "#comment",
        isDefault: true,
      },
      {
        id: "0b2801a5-ae23-402f-87e1-09d2f7b66a20",
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
      id: "20ea5abf-cb45-4e08-b043-7ef8fb8eab05",
      attributes: {
        class: "form-control",
        rows: "5",
        id: "comment",
        name: "comment",
        spellcheck: "false",
      },
      childIndex: 3,
      hashes: { "md5.v1": "8b5e52ba53e3a6a87949118e414d2daa" },
      name: "textarea - comment",
      selectors: [
        {
          id: "10bd380e-9b00-4d57-800b-b6240d0e0cb8",
          type: "CSS",
          value: "#comment",
          isDefault: true,
        },
        {
          id: "0b2801a5-ae23-402f-87e1-09d2f7b66a20",
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
    "no comment"
  );
  await web.click({
    type: "Web",
    id: "f4ee5a68-9733-44a8-86ce-54481ea12be8",
    attributes: { type: "submit", id: "submit", class: "btn btn-primary" },
    childIndex: 1,
    hashes: { "md5.v1": "d81f27a20014232719a8cef127e982c9" },
    name: "button - Submit",
    selectors: [
      {
        id: "5bf34ca4-1f99-47de-995d-c86b6d905b5f",
        type: "CSS",
        value: "#submit",
        isDefault: true,
      },
      {
        id: "a9cfb976-d6bf-48e5-be55-2f04e593ebc8",
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