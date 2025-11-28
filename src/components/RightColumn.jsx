import { h, Component } from "preact";
import NewsletterWidget from "./widgets/NewsletterWidget";
import RecommendWidget from "./widgets/RecommendWidget";
import HelpUsWidget from "./widgets/HelpUsWidget";
import FeaturedDealsWidget from "./widgets/FeaturedDealsWidget";

export default class LeftColumn extends Component {
  render() {
    return (
      <div class="right-column">
        <NewsletterWidget position="right" />
        <RecommendWidget position="right" />
        <HelpUsWidget position="right" />
        <FeaturedDealsWidget position="right" />
      </div>
    );
  }
}
