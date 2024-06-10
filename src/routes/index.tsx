import { createFileRoute } from "@tanstack/react-router";
import { useMediaQuery } from "react-responsive";
import { DesktopHome } from "@/components/desktop/DesktopHome";
import { MobileHome } from "@/components/mobile/MobileHome";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return <>{isDesktop ? <DesktopHome /> : <MobileHome />}</>;
}
