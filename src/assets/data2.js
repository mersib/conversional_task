const data2 = {
  Content: {
    type: "BoxComponent",
    props: {
      borderSize: "2px",
    },
  },
  Children: {
    Modal: {
      Content: {
        type: "ModalComponent",
        props: {
          isOpen: true,
          width: "500px",
          height: "400px",
        },
      },
      Children: {
        headline: {
          Content: {
            type: "H1Component",
            props: {
              text: "How did you like the app?",
            },
          },
        },
        text: {
          Content: {
            type: "ParagraphComponent",
            props: {
              text: "Please leave a review before you go.",
            },
          },
        },
      },
    },
    MainPage: {
      Content: {
        type: "BoxComponent",
        props: {
          borderSize: "1px",
        },
      },
      Children: {
        MainButton: {
          Content: {
            type: "ButtonComponent",
            props: {
              text: "Click me to open the modal",
            },
          },
        },
        MainLink: {
          Content: {
            type: "LinkComponent",
            props: {
              url: "https://lmgtfy.com/",
              text: "I open a link but I should also open the modal.",
            },
          },
        },
      },
    },
  },
};

export default data2;
