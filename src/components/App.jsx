import { h, Component } from "preact";
import LastUpdate from "./LastUpdate";
import LeftColumn from "./LeftColumn";
import Main from "./Main";
import RightColumn from "./RightColumn";
import Footer from "./Footer";
import Intro from "./Intro";
import Header from "./Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      lastUpdate: null,
    };

    this.onDealFetch = this.onDealFetch.bind(this);
  }

  onDealFetch({ lastUpdate }) {
    this.setState({
      lastUpdate,
    });
  }

  render() {
    const { lastUpdate } = this.state;

    return (
      <div id="app">
        <Header />
        <Intro />
        <LastUpdate lastUpdate={lastUpdate} />
        <section class="page-content">
          <LeftColumn />
          <Main onDealFetch={this.onDealFetch} />
          <RightColumn />
        </section>
        <Footer />
      </div>
    );
  }
}
