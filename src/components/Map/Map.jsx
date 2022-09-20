import React from 'react';
import googleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordiantes = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <googleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDMgWFqcEdKhZ9p2Cq2_-rR0pgKNjVnJjg' }}
        defaultCenter={coordiantes}
        center={coordiantes}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </googleMapReact>
    </div>
  );
}

export default Map;