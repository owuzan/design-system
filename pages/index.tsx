import Badge from "@/ui/Badge";
import Button, { ButtonProps } from "@/ui/Button";
import React, { useCallback, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);
  const [icon, setIcon] = useState<IconType>(null);
  const [iconPosition, setIconPosition] =
    useState<ButtonProps<"button">["iconPosition"]>("left");

  const handleIcon = useCallback(() => {
    setIcon((before) => {
      return before ? null : FaCheck;
    });
  }, []);
  const handleIconPosition = useCallback(() => {
    setIconPosition((before) => {
      return before === "left" ? "right" : "left";
    });
  }, []);
  return (
    <div>
      <div className="py-20 flex items-center space-x-4 border-b border-gray-200 w-full max-w-screen-lg mx-auto">
        <Button
          hierarchy="secondary"
          onClick={() => setLoading((before) => !before)}
        >
          Toggle Loading
        </Button>
        <Button
          hierarchy="secondary"
          onClick={() => setBlock((before) => !before)}
        >
          Toggle Block
        </Button>
        <Button hierarchy="secondary" onClick={handleIcon}>
          Toggle Icon
        </Button>
        <Button hierarchy="secondary" onClick={handleIconPosition}>
          Toggle Icon Position
        </Button>
        <Button
          hierarchy="secondary"
          onClick={() => setDisabled((before) => !before)}
        >
          Toggle Disabled
        </Button>
      </div>
      <div
        className={`flex flex-wrap items-start w-full max-w-screen-lg mx-auto py-20 ${
          block ? "space-y-4" : "space-x-4"
        }`}
      >
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="primary"
          size="sm"
        >
          Button SM
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="primary"
          size="sm"
        >
          Button SM
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="primary"
          size="md"
        >
          Button MD
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="primary"
          size="lg"
        >
          Button LG
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="primary"
          size="xl"
        >
          Button XL
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="primary"
          size="2xl"
        >
          Button 2XL
        </Button>
      </div>
      <div
        className={`flex flex-wrap items-start w-full max-w-screen-lg mx-auto py-20 ${
          block ? "space-y-4" : "space-x-4"
        }`}
      >
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="secondary"
          size="sm"
        >
          Button SM
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="secondary"
          size="md"
        >
          Button MD
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="secondary"
          size="lg"
        >
          Button LG
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="secondary"
          size="xl"
        >
          Button XL
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="secondary"
          size="2xl"
        >
          Button 2XL
        </Button>
      </div>
      <div
        className={`flex flex-wrap items-start w-full max-w-screen-lg mx-auto py-20 ${
          block ? "space-y-4" : "space-x-4"
        }`}
      >
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="error"
          size="sm"
        >
          Button SM
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="error"
          size="md"
        >
          Button MD
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="error"
          size="lg"
        >
          Button LG
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="error"
          size="xl"
        >
          Button XL
        </Button>
        <Button
          iconPosition={iconPosition}
          icon={icon}
          block={block}
          disabled={disabled}
          loading={loading}
          hierarchy="error"
          size="2xl"
        >
          Button 2XL
        </Button>
      </div>
      <div
        className={`flex flex-wrap items-start w-full max-w-screen-lg mx-auto py-20 ${
          block ? "space-y-4" : "space-x-4"
        }`}
      >
        <Badge>Badge</Badge>
      </div>
    </div>
  );
};

export default Home;
