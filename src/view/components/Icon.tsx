import React from 'react';

type iconName = 'theme' | 'home' | 'skills' | 'contacts';

interface Props {
  iconName: iconName;
}

export const Icon = (props: Props) => {
  switch (props.iconName) {
    case 'theme':
      return;
    case 'home':
      return;
    case 'skills':
      return;
    case 'contacts':
      return;
  }
};
