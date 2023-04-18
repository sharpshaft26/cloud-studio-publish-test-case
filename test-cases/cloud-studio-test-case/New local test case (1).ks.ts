import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "dda544da-2f35-4391-9361-435a56707ee4",
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
        id: "b7dce2e1-cfc0-42bb-9ac9-faf96135bed9",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "559db2f1-e88c-465c-b051-8d15ad0953f1",
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
    id: "d145085d-ed3e-47fd-8eba-543d2423555b",
    attributes: { class: "fa fa-bars" },
    childIndex: 1,
    hashes: { "md5.v1": "7404fc617199bc0378c5447931ad5838" },
    name: "i - fa fa-bars",
    selectors: [
      {
        id: "c557d143-5e6a-4812-811c-6b8d7d1ff960",
        type: "CSS",
        value: ".fa-bars",
        isDefault: true,
      },
      {
        id: "bb6e0358-1ef4-4b61-a6a8-813d2f1165d6",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "i",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "afe66287-bb57-4b2a-ab57-fbf993046111",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "80473791-2fdc-4668-9e15-736f4ff85888",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "13b9de0e-7010-4314-aef6-7500efcb55ff",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Home",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
});