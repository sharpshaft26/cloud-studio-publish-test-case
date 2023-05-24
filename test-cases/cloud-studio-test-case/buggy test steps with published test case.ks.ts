import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "213f9d9f-d9ad-4973-a16f-d92c28ab289a",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "4e2cd1725b0952f43013ef92c8b0a696" },
    name: "h1 - CURA Healthcare Service",
    selectors: [
      {
        id: "ca15ce6f-be8e-4c09-9100-a8d5966aaef1",
        type: "CSS",
        value: "h1",
        isDefault: true,
      },
      {
        id: "39576858-64b4-4506-b9bc-112c8704f4f3",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h1",
    text: "CURA Healthcare Service",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "18ff8335-7c91-4381-b46c-1b624acac70e",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "f280fb1b2ab0237106b67fed731e8468" },
    name: "strong - CURA Healthcare Service",
    selectors: [
      {
        id: "d2e3453d-7160-4f60-a226-1d83e4c3729d",
        type: "CSS",
        value: "strong",
        isDefault: true,
      },
      {
        id: "9a185f61-0a0b-4589-a1f6-faf791e82dad",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "strong",
    text: "CURA Healthcare Service",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "18ff8335-7c91-4381-b46c-1b624acac70e",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "f280fb1b2ab0237106b67fed731e8468" },
    name: "strong - CURA Healthcare Service",
    selectors: [
      {
        id: "d2e3453d-7160-4f60-a226-1d83e4c3729d",
        type: "CSS",
        value: "strong",
        isDefault: true,
      },
      {
        id: "9a185f61-0a0b-4589-a1f6-faf791e82dad",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "strong",
    text: "CURA Healthcare Service",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "d5e37554-9c86-4e41-ab85-be7da36ab096",
    attributes: {},
    childIndex: 2,
    hashes: { "md5.v1": "a8a9bd225046dc5363ecddaa32974ad1" },
    name: "p - Atlanta 550 Pharr Road NE Suite 525",
    selectors: [
      {
        id: "4aa32f59-37f0-44cc-adaf-a674069933f4",
        type: "CSS",
        value: "p:nth-child(2)",
        isDefault: true,
      },
      {
        id: "ac586971-2cde-4f4c-b9fc-5db8dc168b85",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "p",
    text: "Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "12d1a0c7-3175-407b-b7e9-3c3bcee82c1a",
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
        id: "c3acfb8c-1417-4010-86c7-1c2e348bcf62",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "1ae8e1a8-4668-4401-ab06-57d703b94645",
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
    id: "3abdef31-086b-4b41-9b5b-89e9e7705025",
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
        id: "05005f1f-2db7-4b25-af3c-0414564945c6",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "b5119ce3-17f5-4c7c-900e-363db7ac17e2",
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
      id: "3abdef31-086b-4b41-9b5b-89e9e7705025",
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
          id: "05005f1f-2db7-4b25-af3c-0414564945c6",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "b5119ce3-17f5-4c7c-900e-363db7ac17e2",
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
    "qwerty"
  );
  await web.setEncryptedText(
    {
      type: "Web",
      id: "fde94634-cbc1-4113-a067-e4be85c8f192",
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
          id: "3e6f7e87-f8ef-447c-834d-b80e33f21148",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "5af48376-ca11-49c4-b1fc-7a4e1a2a247b",
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
    "38ba048c74d7f733a19487cd72cc4376-U2FsdGVkX1/LYlmBJyBlds5Qz3by1poBxRkX4zJjqMw="
  );
  await web.click({
    type: "Web",
    id: "cb9c5863-5c92-4da2-8a14-7475f875aeb0",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "1df4148f-567a-4cf7-8303-6d91ec9c2bfe",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "b3b1bb12-1733-4fbd-86f1-84686f76b0f8",
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
  await web.click({
    type: "Web",
    id: "1bb4402e-6570-4271-a72b-bab37bd31c77",
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
        id: "c317e4e1-dce7-410f-b14e-88db01196bca",
        type: "CSS",
        value: "#menu-toggle",
        isDefault: true,
      },
      {
        id: "656b39c9-c1ef-491f-9999-2b6380515aee",
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
  await web.click({
    type: "Web",
    id: "08de9b60-e85a-4f0a-b7f4-9b1e0f8ad378",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "356a2d2b-1777-4b61-b995-44c69ea7513b",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "bfd89dc3-4687-4da5-95f8-67cccf0d778f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Home",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "9a08402c-4b49-4771-8e5b-f7d720b91fa9",
    attributes: {},
    childIndex: 2,
    hashes: { "md5.v1": "fa42476c98e207a0c20728a418a3190f" },
    name: "h3 - We Care About Your Health",
    selectors: [
      {
        id: "dc5187ac-ab35-4160-982a-d474cc56bde1",
        type: "CSS",
        value: "h3",
        isDefault: true,
      },
      {
        id: "644c1dc8-de96-47cd-8c3d-4a0473d389af",
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
    id: "9a08402c-4b49-4771-8e5b-f7d720b91fa9",
    attributes: {},
    childIndex: 2,
    hashes: { "md5.v1": "fa42476c98e207a0c20728a418a3190f" },
    name: "h3 - We Care About Your Health",
    selectors: [
      {
        id: "dc5187ac-ab35-4160-982a-d474cc56bde1",
        type: "CSS",
        value: "h3",
        isDefault: true,
      },
      {
        id: "644c1dc8-de96-47cd-8c3d-4a0473d389af",
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
    id: "c6e674e7-43db-4e5f-a095-e81de6ca7842",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "4e2cd1725b0952f43013ef92c8b0a696" },
    name: "h1 - CURA Healthcare Service",
    selectors: [
      {
        id: "a33fac1a-6721-4c90-89f5-51fd6e342e91",
        type: "CSS",
        value: "h1",
        isDefault: true,
      },
      {
        id: "12ed6fa3-400f-4e4b-9fd8-3bcfa0fa3fa4",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h1",
    text: "CURA Healthcare Service",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "c6e674e7-43db-4e5f-a095-e81de6ca7842",
    attributes: {},
    childIndex: 1,
    hashes: { "md5.v1": "4e2cd1725b0952f43013ef92c8b0a696" },
    name: "h1 - CURA Healthcare Service",
    selectors: [
      {
        id: "a33fac1a-6721-4c90-89f5-51fd6e342e91",
        type: "CSS",
        value: "h1",
        isDefault: true,
      },
      {
        id: "12ed6fa3-400f-4e4b-9fd8-3bcfa0fa3fa4",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h1",
    text: "CURA Healthcare Service",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
  await web.openBrowser("https://github.com/");
  await web.click({
    type: "Web",
    id: "1db4271f-4329-4d2c-81ed-fcdfd9efebed",
    attributes: {
      "data-hydro-click":
        '{"event_type":"feeds.feed_click","payload":{"click_target":"feed.original_tab","originating_url":"https://github.com/","user_id":95613009}}',
      "data-hydro-click-hmac":
        "7527a747bf7ca9dac4794411a4f203277782720df80754a5bb36b77f40866bee",
      id: "feed-original",
      type: "button",
      role: "tab",
      "aria-controls": "panel-1",
      "data-view-component": "true",
      class: "UnderlineNav-item",
      "aria-selected": "false",
      tabindex: "-1",
    },
    childIndex: 1,
    hashes: { "md5.v1": "03929aa2cb12e9eed8544f6b58a103a7" },
    name: "button - Following",
    selectors: [
      {
        id: "7dd46029-689c-441c-9f86-db7952a2ad2d",
        type: "CSS",
        value: "#feed-original",
        isDefault: true,
      },
      {
        id: "80788fc8-0346-4ecb-aaa2-acc3b340e593",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Following",
    pageUrl: "https://github.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "87014d2a-df3e-4f1c-983b-da342ff6e58a",
    attributes: {
      "data-hydro-click":
        '{"event_type":"feeds.feed_click","payload":{"click_target":"feed.next_tab","originating_url":"https://github.com/","user_id":95613009}}',
      "data-hydro-click-hmac":
        "e9ed1ab4f81be0dba638d1c671fe38973c6501fcb3eb4479d59c4d34a22a9e1b",
      id: "feed-next",
      type: "button",
      role: "tab",
      "aria-controls": "panel-2",
      "data-view-component": "true",
      class: "UnderlineNav-item",
      "aria-selected": "false",
      tabindex: "-1",
    },
    childIndex: 1,
    hashes: { "md5.v1": "3b637b36f451a4601078ef5ce8ec6421" },
    name: "button - For you Beta",
    selectors: [
      {
        id: "cc8b95ac-531e-4e2c-9c2f-d6226a6d2660",
        type: "CSS",
        value: "#feed-next",
        isDefault: true,
      },
      {
        id: "0e874278-62ef-4eb5-bd74-2874a80c32f8",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "For you Beta",
    pageUrl: "https://github.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "1db4271f-4329-4d2c-81ed-fcdfd9efebed",
    attributes: {
      "data-hydro-click":
        '{"event_type":"feeds.feed_click","payload":{"click_target":"feed.original_tab","originating_url":"https://github.com/","user_id":95613009}}',
      "data-hydro-click-hmac":
        "7527a747bf7ca9dac4794411a4f203277782720df80754a5bb36b77f40866bee",
      id: "feed-original",
      type: "button",
      role: "tab",
      "aria-controls": "panel-1",
      "data-view-component": "true",
      class: "UnderlineNav-item",
      "aria-selected": "false",
      tabindex: "-1",
    },
    childIndex: 1,
    hashes: { "md5.v1": "03929aa2cb12e9eed8544f6b58a103a7" },
    name: "button - Following",
    selectors: [
      {
        id: "7dd46029-689c-441c-9f86-db7952a2ad2d",
        type: "CSS",
        value: "#feed-original",
        isDefault: true,
      },
      {
        id: "80788fc8-0346-4ecb-aaa2-acc3b340e593",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Following",
    pageUrl: "https://github.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});