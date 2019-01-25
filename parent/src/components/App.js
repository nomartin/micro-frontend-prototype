import React from 'react';
import Container from './Container';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <h1>Remote Container Test App</h1>
        <Container />
      </div>
    );
  }
}

export default App;
