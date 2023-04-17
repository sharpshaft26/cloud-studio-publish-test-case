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
    hashes: { "md5.v1": "8539708e94305f4a0074483ac30100ec" },
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
      id: "485975e4-9f03-4f06-866b-a9ac38e76c71",
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
          id: "bc51dcd4-5444-424a-bc4a-0511fe44ffbd",
          type: "CSS",
          value: "#last-name",
          isDefault: true,
        },
        {
          id: "db1abe3b-3da6-42e9-afed-65eca5c9b18c",
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
  await web.closeBrowser();
});