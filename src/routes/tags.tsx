import { DesktopTags } from "@/components/desktop/DesktopTags";
import { MobileTags } from "@/components/mobile/MobileTags";
import { createFileRoute } from "@tanstack/react-router";
import { useMediaQuery } from "react-responsive";

export const Route = createFileRoute("/tags")({
  component: () => <Tags />,
});

function Tags() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return <>{isDesktop ? <DesktopTags /> : <MobileTags />}</>;
}
