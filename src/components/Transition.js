import React from 'react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';
// The duration for each phase of the transition
// So the total duration will be _twice_ this
const timeout = 120;

const styles = {
  entering: {
    position: 'absolute',
    transform: 'rotate(90deg)',
  },
  entered: {
    transition: `transform ${timeout}ms ease-out`
  },
  exiting: {
    transition: `transform ${timeout}ms ease-out`,
  }
};

const Transition = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition key={location.pathname} timeout={timeout}>
      {(status) => (
        <div style={styles[status]}>
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
);

export default Transition;