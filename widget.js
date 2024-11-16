(function () {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="hello-world-container">
            <h1>Hello, World!</h1>
        </div>
    `;

    class HelloWorldWidget extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: "open" });
            shadow.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("com-sap-custom-helloworld", HelloWorldWidget);
})();
