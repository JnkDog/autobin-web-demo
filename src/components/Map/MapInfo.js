import React from 'react';
import Container from '@material-ui/core/Container';
import { MapboxScene, PointLayer } from '@antv/l7-react';

import SideBar from '../SideBar/SideBar';
import useStyles from "./styles";

const mapCfg = {
    // center: [55.86812581416994, -4.2447524327457895],
    // it needs to change order when get the value
    // from Google
    center: [-4.2447524327457895, 55.86812581416994],
    pitch: 0,
    style: 'dark',
    zoom: 8.6,
    maxZoom: 15
}

const MapInfo = () => {
    const classes = useStyles();
    const [data, setData] = React.useState();

    React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            'https://gw.alipayobjects.com/os/basement_prod/337ddbb7-aa3f-4679-ab60-d64359241955.json',
          );
          const data = await response.json().then(data => {
                        data.features = data.features.filter(item => {
                            return item.properties.capacity > 800;
                        });
          setData(data);
          
        })};
        fetchData();
    }, []);

    return(
        <div className={classes.root}>
          <SideBar title={"Data Visualization"}/>
            <div className={classes.content}>
              <Container >     
              <MapboxScene
                map={mapCfg}
              >
                {/* use fild to bind fx */}
                  {data && (
                      <PointLayer
                      key={'2'}
                      source={{
                        data: data,
                      }}
                      size={{
                        field: 'capacity',
                        values: [0, 16]
                      }}
                      color={{
                        field: 'capacity',
                        values: [
                          '#34B6B7',
                          '#4AC5AF',
                          '#5FD3A6',
                          '#7BE39E',
                          '#A1EDB8',
                          '#CEF8D6'
                        ],
                      }}
                      shape={{
                        values: 'circle',
                      }}
                      style={{
                        opacity: 1,
                      }}
                    />
                  )}
              </MapboxScene>
              </Container>
            </div>
        </div>
    );
};

export default MapInfo;