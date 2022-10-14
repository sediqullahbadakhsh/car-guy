import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const respons = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID viGB7NKqWmjV603lLjOCmghY-x07DHgDmt9sMul6cQY",
      },
    });
    this.setState({ images: respons.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        found: {this.state.images.length} images
      </div>
    );
  }
}
export default App;
