import { h, Component } from "preact";
import CategoryWidget from "./widgets/CategoryWidget";
import AlphabetizedCategoryWidget from "./widgets/AlphabetizedCategoryWidget";
import SearchWidget from "./widgets/SearchWidget";

export default class LeftColumn extends Component {
  render() {
    return (
      <div class="left-column">
        <CategoryWidget />
        <AlphabetizedCategoryWidget />
        <SearchWidget />
      </div>
    );
  }
}
