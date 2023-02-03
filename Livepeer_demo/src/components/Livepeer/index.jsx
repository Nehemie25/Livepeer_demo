import { Player } from '@livepeer/react';
import styled from 'styled-components'
import * as React from 'react';
 
import waterfallsPoster from '../../assets/waterfalls-poster.jpg';

const Image = styled.img`
width:400px;
height:400px;
`
const PlayerFrame = styled.div`
width:400px;
height:400px;
`
 
const PosterImage = () => {
  return (
    <Image
      src={waterfallsPoster}
      layout="fill"
      objectFit="cover"
      priority
      placeholder="blur"
      w
    />
  );
};
 
const playbackId =
  '69d11eab-b053-4553-b8fe-9883aafbe579';
 
export function Livepeer() {
  return (
    <PlayerFrame>
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      loop
      autoPlay
      showTitle={false}
      muted
      poster={<PosterImage />}
    />
    </PlayerFrame>
  );
}