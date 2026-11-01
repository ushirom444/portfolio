import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, style }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = Math.min((i + 1) / characters.length + 0.1, 1);

        return (
          <CharSpan
            key={i}
            char={char}
            start={start}
            end={end}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};

const CharSpan: React.FC<{
  char: string;
  start: number;
  end: number;
  scrollYProgress: any;
}> = ({ char, start, end, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          opacity,
        }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;

