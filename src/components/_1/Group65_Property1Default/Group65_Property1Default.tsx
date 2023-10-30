import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Group63Icon } from './Group63Icon.js';
import classes from './Group65_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 221:2170 */
export const Group65_Property1Default: FC<Props> = memo(function Group65_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.group63}>
        <Group63Icon className={classes.icon} />
      </div>
      <div className={classes.p}>P</div>
      <div className={classes.r}>R</div>
      <div className={classes.o}>O</div>
      <div className={classes.b}>B</div>
      <div className={classes.l}>L</div>
      <div className={classes.e}>E</div>
      <div className={classes.m}>M</div>
      <div className={classes.s}>S</div>
      <div className={classes.unnamed}>!</div>
    </div>
  );
});
