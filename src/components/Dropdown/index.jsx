import posed, { PoseGroup } from "react-pose";
import Card from "components/styled/Card";
import styled from "styled-components";

const AnimatedDropdownPoses = {
  PRE_ENTER_DROPDOWN_POSE: "PRE_ENTER_DROPDOWN_POSE",
  ENTER_DROPDOWN_POSE: "ENTER_DROPDOWN_POSE",
  EXIT_DROPDOWN_POSE: "EXIT_DROPDOWN_POSE"
};

const DEFAULT_ORIGIN_X = "50%";
const DEFAULT_ORIGIN_Y = "50%";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.top};
`;

const transition = {
  duration: 200
};

const getOriginProps = () => ({
  originX: ({ animationOrigin }) =>
    animationOrigin ? `${animationOrigin[0]}%` : DEFAULT_ORIGIN_X,
  originY: ({ animationOrigin }) =>
    animationOrigin ? `${animationOrigin[1]}%` : DEFAULT_ORIGIN_Y
});

const StyledCard = styled(Card)`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 15px 10px;
`;

const AnimatedContainer = posed(Container)({
  [AnimatedDropdownPoses.PRE_ENTER_DROPDOWN_POSE]: {
    opacity: 0,
    scale: 0.8
  },
  [AnimatedDropdownPoses.ENTER_DROPDOWN_POSE]: {
    opacity: 1,
    scale: 1,
    beforeChildren: true,
    ...getOriginProps(),
    transition
  },
  [AnimatedDropdownPoses.EXIT_DROPDOWN_POSE]: {
    opacity: 0,
    scale: 0.8,
    afterChildren: true,
    ...getOriginProps(),
    transition
  }
});

const Content = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const AnimatedContent = posed(Content)({
  [AnimatedDropdownPoses.PRE_ENTER_DROPDOWN_POSE]: {
    opacity: 0
  },
  [AnimatedDropdownPoses.ENTER_DROPDOWN_POSE]: {
    opacity: 1,
    transition
  },
  [AnimatedDropdownPoses.EXIT_DROPDOWN_POSE]: {
    opacity: 0,
    transition
  }
});

const AnimatedDropdown = ({
  active,
  onDropdownAnimationChange,
  onContentAnimationChange,
  className,
  animationOrigin,
  children
}) => {
  const {
    PRE_ENTER_DROPDOWN_POSE,
    ENTER_DROPDOWN_POSE,
    EXIT_DROPDOWN_POSE
  } = AnimatedDropdownPoses;

  return (
    <PoseGroup
      preEnterPose={PRE_ENTER_DROPDOWN_POSE}
      enterPose={ENTER_DROPDOWN_POSE}
      exitPose={EXIT_DROPDOWN_POSE}
      flipMove={false}
    >
      {active && (
        <AnimatedContainer
          key="animated-dropdown-container"
          className={className}
          onPoseComplete={onDropdownAnimationChange}
          animationOrigin={animationOrigin}
        >
          <StyledCard>
            <AnimatedContent onPoseComplete={onContentAnimationChange}>
              {children}
            </AnimatedContent>
          </StyledCard>
        </AnimatedContainer>
      )}
    </PoseGroup>
  );
};

export default AnimatedDropdown;
