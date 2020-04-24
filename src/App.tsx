import * as React from 'react';
import { useOvermind } from './overmind';

export const Hello: React.FunctionComponent = () => {
  const { actions } = useOvermind();

  return (
    <button onClick={actions.logHello} />
  );
}
