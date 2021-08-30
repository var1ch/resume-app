import React from 'react';

type imageName = 'person' | 'university';

interface Props {
  imageName: imageName;
}

export const Image = (props: Props) => {
  switch (props.imageName) {
    case 'person':
      return;
  }
};
