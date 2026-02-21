import { useRive } from "rive-react";

export const Avatar = () => {
  const STATE_MACHINE_NAME = "State Machine 1";

  const { RiveComponent } = useRive({
    src: "/avatar.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  return (
    <div className="h-full">
      <RiveComponent />
    </div>
  );
};
