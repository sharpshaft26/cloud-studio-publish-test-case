import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser(
    "https://katalon-test.s3.amazonaws.com/aut/html/form.html"
  );
  await web.click({
    type: "Web",
    id: "466d2209-5de6-4bfe-9b68-69f48cecab71",
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
        id: "70f592a4-7c87-455d-9720-d24d922fc57a",
        type: "CSS",
        value: "#first-name",
        isDefault: true,
      },
      {
        id: "4e6d5098-940d-4958-983e-b5c783b68fd2",
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
      id: "466d2209-5de6-4bfe-9b68-69f48cecab71",
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
          id: "70f592a4-7c87-455d-9720-d24d922fc57a",
          type: "CSS",
          value: "#first-name",
          isDefault: true,
        },
        {
          id: "4e6d5098-940d-4958-983e-b5c783b68fd2",
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
    "abcswe"
  );
  await web.closeBrowser();
});