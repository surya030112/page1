import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.71518 12L4.64598 9.98681C4.06722 8.89705 3.16656 8.01224 2.0667 7.45292L0.000129304 6.40198L1.57959 5.73361C2.97865 5.14158 4.10105 4.04088 4.72028 2.65365L5.59818 0.686924L6.25681 2.32523C6.89309 3.90792 8.17295 5.14497 9.77637 5.72705L11.3132 6.28497L9.21807 7.49859C8.29805 8.03151 7.53617 8.79933 7.01041 9.72345L5.71518 12Z'
      fill='#0D0D0D'
    />
  </svg>
);

const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
