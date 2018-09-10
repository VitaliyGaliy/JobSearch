import React from 'react';
import { Provider } from 'react-redux';
import store from './src/reducers';
import Navigator from './src/routes';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'ProximaNova-Light': require('./assets/fonts/ProximaNova-Light.ttf'),
      'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
      'SourceSansPro': require('./assets/fonts/SourceSansPro.ttf'),
      'SourceSansPro-Italic': require('./assets/fonts/SourceSansPro-Italic.ttf'),
      'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
      'ProximaNova-Bold': require('./assets/fonts/ProximaNova-Bold.ttf'),
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
      'proximanova-extrabold': require('./assets/fonts/proximanova-extrabold.otf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded ?
        <Provider store={store}>
        <Navigator />
        </Provider>
        :
        null
    )
  }
}
