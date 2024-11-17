(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="hello-world-container">
      <h1></h1>
    </div>
  `;

  class HelloWorldWidget extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this._text = "Hello World"; // Default text
    }

    connectedCallback() {
      this._updateText();
    }

    // Define a property to bind text
    static get observedAttributes() {
      return ["text"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "text") {
        this._text = newValue;
        this._updateText();
      }
    }

    _updateText() {
      const h1 = this.shadowRoot.querySelector("h1");
      h1.textContent = this._text;
    }

    // Example method
    init() {
      console.log("Widget initialized!");
    }

    // Event trigger (click event)
    _onClick() {
      this.dispatchEvent(new Event("onClick"));
    }
  }

  customElements.define("com-sap-custom-helloworld", HelloWorldWidget);
})();
