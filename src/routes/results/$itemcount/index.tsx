import DesktopResults from "@/components/desktop/DesktopResults";
import { MobileResults } from "@/components/mobile/MobileResults";
import { createFileRoute } from "@tanstack/react-router";
import { useMediaQuery } from "react-responsive";

export const Route = createFileRoute("/results/$itemcount/")({
  component: () => <Results />,
});

export function Results() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { itemcount } = Route.useParams();

  return (
    <>
      {isDesktop ? (
        <DesktopResults itemCount={+itemcount} />
      ) : (
        <MobileResults itemCount={+itemcount} />
      )}
    </>
  );
}
