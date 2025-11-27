import { h, Component } from "preact";
import BaseWidget from "./BaseWidget";

export default class FeaturedDealsWidget extends Component {
  render({ position }) {
    return (
      <BaseWidget title="Featured Deals" position={position} twoBorder="true">
        <br />
        <br />
        <br />
      </BaseWidget>
    );
  }
}
