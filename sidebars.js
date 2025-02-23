const sidebarData = require("./config/sidebar/index.json");

const sidebars = {
  greenidOverview: [
    {
      type: "autogenerated",
      dirName: "greenid-overview",
    },
  ],
  developerGuides: [
    {
      type: "autogenerated",
      dirName: "developer-guides",
    },
  ],
  integrationMethods: [
    {
      type: "autogenerated",
      dirName: "integration-methods",
    },
  ],
  // not needed as Redocusaurus generates the side bar
  // apiReference: [
  //   {
  //     type: "autogenerated",
  //     dirName: "api-reference"
  //   },
  // ],
  updatesAndRelease: [
    {
      type: "autogenerated",
      dirName: "updates-and-releases",
    },
  ],
  customerSupportFaqs: [
    {
      type: "autogenerated",
      dirName: "customer-support-faqs",
    },
    {
      type: "link",
      label: "greenID (GBG) Status Page",
      href: "https://www.gbgstatus.com/",
    },
  ],
};

module.exports = sidebars;
