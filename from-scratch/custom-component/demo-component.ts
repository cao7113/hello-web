class DemoComponent extends HTMLElement {
  constructor() {
    // 在构造函数中，必须先调用 super() 才能使用 this。
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        /* Styles for the host element */
        :host {
          display: block;
          width: 300px;
          margin: 0 auto;
          padding: 16px;
          background: white;
          border: 2px solid #4a90e2;
          border-radius: 8px;
          text-align: center;
          font-family: Arial, sans-serif;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* Hover state */
        :host(:hover) {
          transform: scale(1.05);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Highlighted state */
        :host([highlighted]) {
          border-color: #e94e77;
          background: #ffe4ec;
        }

        /* ::slotted 是一种 CSS 伪元素，专门用于为 Web Components 中通过插槽 (<slot>) 注入到 Shadow DOM 的内容应用样式。 */
        ::slotted(*) {
          color: #4a90e2;
          font-weight: bold;
        }
      </style>
      <div>
        <h2>Hello from Web Component</h2>
        <p>Try hovering or adding <code>highlighted</code> attribute!</p>
        <slot name="custom-content"></slot> <!-- Customizable content -->
      </div>
    `;


    this.shadowRoot.querySelector('div').addEventListener('click', () => {
      console.log('Component clicked!');
    });
  }
}

// Define the custom element
customElements.define('demo-component', DemoComponent);

