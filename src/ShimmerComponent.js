import React from 'react';
import {useRive, useStateMachineInput, Layout, Fit, Alignment} from '@rive-app/react-canvas';

const ShimmerComponent = ({shimmerPct = 100, shape, fit, ...rest}) => {
  const {rive, RiveComponent} = useRive({
    src: 'shimmer_v4.riv',
    autoplay: true,
    artboard: shape || 'Rectangle',
    stateMachines: "ShimmerMachine",
    layout: new Layout({
      fit: fit || Fit.FitWidth,
      alignment: Alignment.CenterLeft,
    })
  });

  useStateMachineInput(
    rive,
    "ShimmerMachine",
    "shimmerSizePct",
    shimmerPct,
  );

  return (
    <RiveComponent {...rest} />
  );
};

export default ShimmerComponent;
