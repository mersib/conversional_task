const data = {
  Content: {
    type: "BoxComponent",
  },
  Children: {
    Headline: {
      Content: {
        type: "H1Component",
        props: {
          text: "Our benefits",
        },
      },
    },
    SecondHeadline: {
      Content: {
        type: "H2Component",
        props: {
          text: "This is why you will love our product",
        },
      },
    },
    MainPart: {
      Content: {
        type: "ListComponent",
        props: {
          li: ["free to use", "superfast", "and pretty, too!"],
        },
      },
    },
  },
};

export default data;
