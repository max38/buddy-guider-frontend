import { Fragment } from "react";

import GoogleMapReact from "google-map-react";
import styled from 'styled-components';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'


const MapMakerPin = styled.div`
  & {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: #c30b82;
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -15px 0 0 -15px;
  }
  &:hover {
    background: #fff;
    cursor: pointer;
  }
  &:after {
    content: '';
    width: 22px;
    height: 22px;
    margin: 4px 0 0 4px;
    background: #fff;
    position: absolute;
    border-radius: 50%;
    text-align: center;
  }
`;

const IconLocation = styled(FontAwesomeIcon)`
  & {
    position: absolute;
    width: 20px;
    font-size: 20px;
    margin: 5px 5px;
    text-align: center;
    z-index: 1;
  }
`

// const AnyReactComponent = ({ text }) => <div><FontAwesomeIcon icon={faLocation} />{text}</div>;
const MapMakerComponent = ({ popover }) => <OverlayTrigger
    trigger="hover"
    key={'top'}
    placement={'top'}
    overlay={
      <Popover id={`popover-positioned-top`}>
        {popover.title && <Popover.Header as="h3">{popover.title}</Popover.Header>}
        <Popover.Body>
          {popover.content}
        </Popover.Body>
      </Popover>
    }
  >
    <MapMakerPin><IconLocation icon={faLocation} /></MapMakerPin>
</OverlayTrigger>;



export default function MapPropertyFinder(propsParam) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const props = {...defaultProps, ...propsParam}


  return (
    // Important! Alwys set the container height explicitlya
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAslxJpgifO65gueJ2njztld5NosKer1kA" }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      {props?.markers?.map((marker, i) => (
        <MapMakerComponent
          key={i} 
          lat={marker.lat}
          lng={marker.lng}
          popover={marker.popover}
        />
      ))}
    </GoogleMapReact>
  );
}
