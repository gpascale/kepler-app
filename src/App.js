import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import AutoSizer from 'react-virtualized-auto-sizer';
import Processors from 'kepler.gl/processors';
import nycTrips from './data/nyc-trips.csv';
import nycConfig from './data/nyc-config.json';
import { addDataToMap } from 'kepler.gl/actions';

import './App.css';

const MAPBOX_API_TOKEN = '';

class App extends Component {
  componentDidMount() {
    const data = Processors.processCsvData(nycTrips);
    const dataset = {
      data,
      info: {
        id: 'my_data'
      }
    };

    const addDataAction = addDataToMap({ datasets: dataset });
    setTimeout(() => {
      this.props.dispatch(addDataAction);
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AutoSizer>
            {({ width, height }) => {
              return (
                <KeplerGl
                  id="foo"
                  width={width}
                  height={height}
                  mapboxApiAccessToken={MAPBOX_API_TOKEN}
                />
              );
            }}
          </AutoSizer>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
