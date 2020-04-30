import React from 'react';
import { DetailedTweet } from '../src/components/DetailedTweet';

export const Details = props => {
  return <DetailedTweet {...props.route.params} />;
};