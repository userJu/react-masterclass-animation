import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 155), rgb(79, 68, 80));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};

// const boxVariants = {
//   hover: { rotateZ: "90deg" },
//   click: { borderRadius: "100px" },
// };

// const Svg = styled.svg`
//   width: 300px;
//   height: 300px;
//   path {
//     stroke: white;
//     stroke-width: 2;
//   }
// `;

// const svg = {
//   start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
//   end: {
//     pathLength: 1,
//     fill: "rgba(255,255,255,1)",
//   },
// };

// const boxVariants = {
//   initial: { opacity: 0, scale: 0 },
//   visible: { opacity: 1, scale: 1, rotateZ: 360 }, // 나올때는 이렇게
//   leaving: { opacity: 0, scale: 0, y: 50 }, // 사라질 때는 이렇게
// };

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  // const [visible, setVisible] = useState(1);
  // const [back, setBack] = useState(false);
  // const nextPlease = () => {
  //   setBack(false);
  //   setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  // };
  // const prevPlease = () => {
  //   setBack(true);
  //   setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  // };

  // const [showing, setShowing] = useState(false);
  // const toggleShowing = () => {
  //   setShowing((prev) => !prev);
  // };
  // const x = useMotionValue(0);
  // const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  // const gradient = useTransform(
  //   x,
  //   [-800, 800],
  //   [
  //     "linear-gradient(135deg, rgb(0, 182, 238), rgb(71, 68, 80))",
  //     "linear-gradient(135deg, rgb(28, 238, 0), rgb(79, 68, 80))",
  //   ]
  // );
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  // useEffect(() => {
  //   // x.onChange(() => {
  //   //   console.log(x.get());
  //   // });
  //   potato.onChange(() => {
  //     console.log(potato.get());
  //   });
  // }, [x]);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
