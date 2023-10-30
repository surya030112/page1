import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Group77_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle1072?: string;
    root?: string;
  };
}
/* @figmaId 242:2988 */
export const Group77_Property1Default: FC<Props> = memo(function Group77_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle1070}></div>
      <div className={classes.rectangle1071}></div>
      <div className={`${props.classes?.rectangle1072 || ''} ${classes.rectangle1072}`}></div>
      <div className={classes.organized}>Organized</div>
    </div>
  );
});
