import React from 'react';
import { Home, Skills, Person, SvgProps } from '../../resources';

type iconName = 'theme' | 'home' | 'skills' | 'person';

interface Props extends SvgProps {
  iconName: iconName;
}

export const Icon = (props: Props) => {
  switch (props.iconName) {
    case 'home':
      return <Home color={props.color} size={props.size} />;
    case 'skills':
      return <Skills color={props.color} size={props.size} />;
    case 'person':
      return <Person color={props.color} size={props.size} />;
    default:
      return <></>;
  }
};
