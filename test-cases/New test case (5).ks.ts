import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser(
    "https://katalon-test.s3.amazonaws.com/aut/html/form.html"
  );
  await web.click({
    type: "Web",
    id: "485975e4-9f03-4f06-866b-a9ac38e76c71",
    attributes: {
      type: "text",
      class: "form-control",
      id: "last-name",
      name: "lastName",
    },
    childIndex: 1,
    hashes: {},
    name: "input - lastName",
    selectors: [
      {
        id: "bc51dcd4-5444-424a-bc4a-0511fe44ffbd",
        type: "CSS",
        value: "#last-name",
        isDefault: true,
      },
      {
        id: "db1abe3b-3da6-42e9-afed-65eca5c9b18c",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-test.s3.amazonaws.com/aut/html/form.html",
  });
  await web.closeBrowser();
  await web.openBrowser(
    "https://katalon-test.s3.amazonaws.com/aut/html/form.html"
  );
  await web.click({
    type: "Web",
    id: "cfc9b46f-ced0-437f-8cb8-63842f513df3",
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
        id: "c94c7910-0e42-4fea-b97a-89591333f88d",
        type: "CSS",
        value: "#first-name",
        isDefault: true,
      },
      {
        id: "6fa9c81d-78bf-4195-8a74-c7cac9c41657",
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
      id: "cfc9b46f-ced0-437f-8cb8-63842f513df3",
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
          id: "c94c7910-0e42-4fea-b97a-89591333f88d",
          type: "CSS",
          value: "#first-name",
          isDefault: true,
        },
        {
          id: "6fa9c81d-78bf-4195-8a74-c7cac9c41657",
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
    "asdasdas"
  );
  await web.setText(
    {
      type: "Web",
      id: "f6dd59cc-0034-4d82-90ac-55ce0842d2f8",
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
          id: "210abc86-88c0-4bdd-a8aa-45eac2f554e0",
          type: "CSS",
          value: "#last-name",
          isDefault: true,
        },
        {
          id: "1974957c-15ad-4e59-86e9-eaaa69b06604",
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
    "uuuuw"
  );
  await web.scrollToElement({
    type: "Web",
    id: "a9959da2-12f5-4b63-9ceb-610241f29734",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "397772cdf854785b27d3f2e3dae41cbd" },
    name: "label - Via discovery and experiment",
    selectors: [
      {
        id: "e824e12d-05aa-4c41-825d-d2576a28af0d",
        type: "CSS",
        value: ".checkbox:nth-child(6) label",
        isDefault: true,
      },
      {
        id: "c8a9a3ba-5503-4dcc-8603-cdf724bf5ad0",
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
    id: "713f4243-b0f4-401f-a6c9-3a8823674b2c",
    attributes: { type: "checkbox", value: "" },
    childIndex: 1,
    hashes: { "md5.v1": "b4be56b3bf8bbf17885d29ff821c85b6" },
    name: "input - ",
    selectors: [
      {
        id: "4024afe5-0ef8-41a1-9cc6-b4646dfac8e2",
        type: "CSS",
        value: '.checkbox:nth-child(6) [value=""]',
        isDefault: true,
      },
      {
        id: "927685b0-e403-4cd6-a50f-064028d6f280",
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
    id: "25a72ff3-4100-4b28-9a14-fc3046bddbd8",
    attributes: { type: "submit", id: "submit", class: "btn btn-primary" },
    childIndex: 1,
    hashes: { "md5.v1": "d81f27a20014232719a8cef127e982c9" },
    name: "button - Submit",
    selectors: [
      {
        id: "ac69ac8d-4956-43bd-a878-1bb82853bcbf",
        type: "CSS",
        value: "#submit",
        isDefault: true,
      },
      {
        id: "c9037fd2-c506-4ee1-b553-fa982eece0c4",
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