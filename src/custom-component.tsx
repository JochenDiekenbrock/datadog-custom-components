import { render, unmountComponentAtNode } from 'react-dom';
import { Button } from './button';

class MyCustomComponent extends HTMLElement {
  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  mount() {
    render(
      <div>
        <Button id={'inner-button'} />
      </div>,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this
    );
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}
customElements.define('my-custom-component', MyCustomComponent);
