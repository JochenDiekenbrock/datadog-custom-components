import { render, unmountComponentAtNode } from 'react-dom';
import { Button } from './button';

class MyCustomComponentShadowRoot extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  mount() {
    render(
      <div>
        <Button id={'inner-button-shadow-root'} />
      </div>,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.shadowRoot!
    );
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}
customElements.define(
  'my-custom-component-shadow-root',
  MyCustomComponentShadowRoot
);
