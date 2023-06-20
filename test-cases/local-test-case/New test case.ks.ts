import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "6a1ee2b4-ce08-4b66-96f9-badc5e4f1ca2",
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
        id: "3095f338-f0be-4ecb-8fdb-4c7b670d39fd",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "c3c122d9-d737-41a7-b661-2519196e35ef",
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
    id: "189e7682-33af-4bc1-b9fc-e4b9cd40bcf3",
    attributes: { for: "txt-username", class: "col-sm-4 control-label" },
    childIndex: 1,
    hashes: { "md5.v1": "9174a96d841c4c91bfac5a14c6edab8d" },
    name: "label - Username",
    selectors: [
      {
        id: "3ef6e613-fde9-4caf-a6bd-5edcbfc3f545",
        type: "CSS",
        value: '[for="txt-username"]',
        isDefault: true,
      },
      {
        id: "fd7e7fd5-75c2-4746-b8c0-9946e3ad697a",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "label",
    text: "Username",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "d9edcac2-ea37-4444-a493-0050b56077d1",
    attributes: {},
    childIndex: 2,
    hashes: { "md5.v1": "fa42476c98e207a0c20728a418a3190f" },
    name: "h3 - We Care About Your Health",
    selectors: [
      {
        id: "c2457e82-e75b-41d2-9f6f-ea1b7c9d6625",
        type: "CSS",
        value: "h3",
        isDefault: true,
      },
      {
        id: "8e43c58c-4632-4529-a365-ba33aee1139d",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h3",
    text: "We Care About Your Health",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "f2324d23-c2b1-4725-a387-b0b54dcdbfd8",
    attributes: {
      id: "menu-toggle",
      href: "#",
      class: "btn btn-dark btn-lg toggle",
    },
    childIndex: 2,
    hashes: { "md5.v1": "bd1a4d233fee02bdbcf85af89867c9de" },
    name: "a - btn btn-dark btn-lg toggle",
    selectors: [
      {
        id: "e35b0bdb-272b-49e3-a6b8-8d736f25286d",
        type: "CSS",
        value: "#menu-toggle",
        isDefault: true,
      },
      {
        id: "e3052fce-30ac-4836-b310-e7e5fc1a9ac4",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click(
    {
      attributes: { class: "btn btn-default", id: "btn-login", type: "submit" },
      childIndex: 1,
      hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
      id: "74b1a293-9da1-4a03-895f-9ffb7fb9ad0c",
      name: "button - Login",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      selectorType: "CSS",
      selectors: [
        {
          id: "dd66ec24-6c51-42d1-9279-798bdb328971",
          isDefault: true,
          type: "CSS",
          value: "#btn-login",
        },
        {
          id: "ae24157f-2e15-4580-94a0-5586153b37ae",
          isDefault: true,
          type: "Attribute",
          value: null,
        },
      ],
      shadowRoot: null,
      tag: "button",
      text: "Login",
      type: "Web",
    },
    ""
  );
  await web.click({
    type: "Web",
    id: "49b77953-3a16-48a9-9380-4c65341dcf1c",
    attributes: { id: "to-top", href: "#top", class: "btn btn-dark btn-lg" },
    childIndex: 2,
    hashes: { "md5.v1": "e45e179a54c1f5febdddafe19ff11b14" },
    name: "a - btn btn-dark btn-lg",
    selectors: [
      {
        id: "90d2f7f7-17b1-4d8a-8074-0b461105584c",
        type: "CSS",
        value: "#to-top",
        isDefault: true,
      },
      {
        id: "396323b8-e22d-499d-b6b9-cff988cd2fbb",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser("");
  await web.openBrowser("https://github.com/");
  await web.click(
    {
      attributes: {
        "aria-label": "Pull requests you created",
        class:
          "js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade",
        "data-ga-click": "Header, click, Nav menu - item:pulls context:user",
        "data-hotkey": "g p",
        "data-selected-links": "/pulls /pulls/assigned /pulls/mentioned /pulls",
        "data-turbo": "false",
        href: "/pulls",
      },
      childIndex: 2,
      hashes: { "md5.v1": "45c8b9168b5c700800605659c32b63c6" },
      id: "d2dd849e-4e83-4e32-9af4-203129c72a9a",
      name: "a - Pull requests",
      pageUrl: "https://github.com/",
      parentIframe: null,
      selectorType: "CSS",
      selectors: [
        {
          id: "56f8a81a-4e34-4205-a554-cd83e15d1f27",
          isDefault: true,
          type: "CSS",
          value: '[href="\\/pulls"]',
        },
        {
          id: "3edee5be-3d55-48f6-84bf-00b61de0611f",
          isDefault: true,
          type: "Attribute",
          value: null,
        },
      ],
      shadowRoot: null,
      tag: "a",
      text: "Pull requests",
      type: "Web",
    },
    ""
  );
  await web.click(
    {
      type: "Web",
      id: "0aeef074-c4ea-442d-8511-ff6d16536f2e",
      attributes: {
        href: "/pulls?q=is%3Apr+author%3Asharpshaft26+archived%3Afalse+is%3Aclosed",
        class: "btn-link ",
        "data-ga-click": "Pull Requests, Table state, Closed",
        "data-turbo-frame": "_self",
      },
      childIndex: 2,
      hashes: { "md5.v1": "e86f519116ebc0c7d78607045ce2ab6e" },
      name: "a - 114 Closed",
      selectors: [
        {
          id: "7c757161-74a7-49b9-8700-e59b963e4324",
          type: "CSS",
          value:
            '.btn-link[data-ga-click="Pull\\ Requests\\,\\ Table\\ state\\,\\ Closed"][data-turbo-frame="_self"]',
          isDefault: true,
        },
        {
          id: "a1c361cf-842e-4642-9a8d-e57a62aee4ad",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "a",
      text: " 114 Closed",
      pageUrl: "https://github.com/pulls",
      parentIframe: null,
      shadowRoot: null,
    },
    ""
  );
  await web.click(
    {
      type: "Web",
      id: "e6ab62b5-90d4-49af-90c6-5c4209be4766",
      attributes: {},
      childIndex: 2,
      hashes: { "md5.v1": "333c2332f322a0345027400538303ea9" },
      name: "h3 - No results matched your search.",
      selectors: [
        {
          id: "add2de2a-c61a-4458-b9df-a2adeabf9f08",
          type: "CSS",
          value: ".blankslate h3",
          isDefault: true,
        },
        {
          id: "8a53c154-649b-462b-81d7-d3afaee312b2",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "h3",
      text: "No results matched your search.",
      pageUrl: "https://github.com/issues",
      parentIframe: null,
      shadowRoot: null,
    },
    ""
  );
  await web.click(
    {
      attributes: {
        "aria-current": "page",
        "aria-label": "Issues you created",
        class:
          "js-selected-navigation-item selected Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade",
        "data-ga-click": "Header, click, Nav menu - item:issues context:user",
        "data-hotkey": "g i",
        "data-selected-links":
          "/issues /issues/assigned /issues/mentioned /issues",
        "data-turbo": "false",
        href: "/issues",
      },
      childIndex: 3,
      hashes: { "md5.v1": "33c7849775b6f7ee33a95ec675953a06" },
      id: "d7f014d3-7183-4b15-947c-136005647715",
      name: "a - Issues",
      pageUrl: "https://github.com/issues",
      parentIframe: null,
      selectorType: "CSS",
      selectors: [
        {
          id: "9b7175a9-232b-45d9-bfb2-e30a4904ad68",
          isDefault: true,
          type: "CSS",
          value: '[href="\\/issues"]',
        },
        {
          id: "280feb30-7c79-486a-b75d-ac7b7793f629",
          isDefault: true,
          type: "Attribute",
          value: null,
        },
      ],
      shadowRoot: null,
      tag: "a",
      text: "Issues",
      type: "Web",
    },
    ""
  );
});