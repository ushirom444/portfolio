import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: 'div' | 'nav' | 'section' | 'h1' | 'h2' | 'p' | 'span';
  className?: string;
  style?: React.CSSProperties;
}

// Static, permanent component references. NEVER call motion.create() inside render!
const motionComponents = {
  div: motion.div,
  nav: motion.nav,
  section: motion.section,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
};

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
  ...rest
}) => {
  const MotionComponent = motionComponents[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
