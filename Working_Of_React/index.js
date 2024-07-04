const reactElement = {
  type: "a",
  props: {
    href: "wwwfeuh.com",
    target: "_blank",
  },
  children: "click me",
};

function customRender(reactElement, container) {
  //   const domelement = document.createElement(reactElement.type);
  //   domelement.innerHTML = reactElement.children;
  //   domelement.setAttribute("href", reactElement.props.href);
  //   domelement.setAttribute("target", reactElement.props.target);

  const domelement = document.createElement(reactElement.type);
  domelement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;

    //loop
    domelement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domelement);
}

//take div
let main = document.querySelector("#root");

//called fxm for elemment and appended div
customRender(reactElement, main);

//note bundler do all this for us.....
