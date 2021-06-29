import { FC } from 'react';
import { Route  } from 'react-router-dom';
import MountTransition from '../MountTransition';

type Props = {
  exact?: boolean;
  path: string;
  slide?: number;
  slideUp?: number;
};

export const RouteTransition: FC<Props> = ({
  children,
  exact = false,
  path,
  slide = 0,
  slideUp = 0,
  ...rest
}) => (
  <Route exact={exact} path="/admang/service-center" {...rest}>
    <MountTransition slide={slide} slideUp={slideUp}>
      {children}
    </MountTransition>
  </Route>
);
