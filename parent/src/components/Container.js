import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = false;
    //this.global = 'nolan';
    this.state = { loaded: false };
  }
  
  loadScript = async () => {
    await this.insertScript(
      'http://127.0.0.1:8081/HighOrderComponent.bundle.js', 
      'componentContainer');
  }

  insertScript = (path, id) => {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = path;
      s.id = id;
      s.onload = () => {
        console.log('insertScript(): resolved');
        this.setState({ loaded: true });
        this.loaded = true;
        resolve(s);  // resolve with script, not event
      };
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  componentWillMount = () => {
    this.loadScript();
  }
  
  render = () => {
    if (this.state.loaded) {
      console.log('render(): Remote component has loaded');
      return (
        <div className="ui container">
          <div>Remote Content is rendered below.</div>
          { window.remoteComponent() }
        </div>
      );
    }
    console.log('render(): Remote component not loaded');
    return (<div>...loading</div>);
  }
};

export default Container;
