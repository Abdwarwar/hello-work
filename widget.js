(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <div>
      <h1 id="helloText">Hello, World!</h1>
    </div>
  `;

  class HelloWorldWidget extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const helloText = this.shadowRoot.getElementById("helloText");
      helloText.textContent = "Hello, Custom Widget!";
    }
  }

  customElements.define("com-sap-custom-helloworld", HelloWorldWidget);
})();
