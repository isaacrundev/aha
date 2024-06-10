import DesktopResults from "@/components/desktop/DesktopResults";
import { MobileResults } from "@/components/mobile/MobileResults";
import { createFileRoute } from "@tanstack/react-router";
import { useMediaQuery } from "react-responsive";

export const Route = createFileRoute("/results/$itemcount/$keywords/")({
  component: () => <Results />,
});

export function Results() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { itemcount, keywords } = Route.useParams();

  return (
    <>
      {isDesktop ? (
        <DesktopResults itemCount={+itemcount} keywords={keywords} />
      ) : (
        <MobileResults itemCount={+itemcount} keywords={keywords} />
      )}
    </>
  );
}
