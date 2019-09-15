import { Button } from "components/styled/Button";
import Icon from "components/Icon";

const ButtonComponent = ({
  btnType,
  type,
  isActive,
  isDisabled,
  isLoading,
  text,
  textLoading = "Sending"
}) => {
  return (
    <Button
      btnType={btnType}
      type={type}
      active={isActive}
      disabled={isDisabled}
    >
      {isLoading ? (
        <>
          {textLoading}
          <Icon type="spinner" size={2} fill="#fff" />
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default ButtonComponent;
