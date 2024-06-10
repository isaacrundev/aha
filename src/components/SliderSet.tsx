import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import classNames from "classnames";
import { v4 } from "uuid";
import { useMediaQuery } from "react-responsive";

export default function SliderSet({
  setItemCount,
}: {
  setItemCount: Dispatch<SetStateAction<number>>;
}) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const itemCountValues = [3, 6, 9, 12, 15, 50];
  const [sliderValue, setSliderValue] = useState([0]);
  const [sliderValueNum] = sliderValue;
  const [maxSliderValue, setMaxSliderValue] = useState(5.5);

  const handleSliderChange = (valueArr: number[]) => {
    setSliderValue(valueArr);
  };

  useEffect(() => {
    setItemCount(itemCountValues[sliderValueNum]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValueNum]);

  useEffect(() => {
    if (isDesktop) {
      setMaxSliderValue(5.33);
    } else {
      setMaxSliderValue(5.5);
    }
  }, [isDesktop]);

  return (
    <div className="flex flex-col w-full cursor-pointer">
      <Slider
        // defaultValue={[0]}
        value={sliderValueNum >= 5 ? [maxSliderValue] : sliderValue}
        max={maxSliderValue}
        onValueChange={handleSliderChange}
        className="pl-0.5"
      />
      <div className="pl-0.5 py-4 relative w-full">
        {itemCountValues.map((_, idx) => (
          <span
            key={v4()}
            className={classNames(
              "font-medium leading-6 flex absolute",
              { "text-white/50": idx !== sliderValueNum },
              { "left-[18.5%]": idx === 1 && !isDesktop },
              { "left-[35.5%]": idx === 2 && !isDesktop },
              { "left-[51.5%]": idx === 3 && !isDesktop },
              { "left-[68.5%]": idx === 4 && !isDesktop },
              { "left-[19%]": idx === 1 && isDesktop },
              { "left-[37.3%]": idx === 2 && isDesktop },
              { "left-[55%]": idx === 3 && isDesktop },
              { "left-[73.2%]": idx === 4 && isDesktop },
              { "right-0": idx === 5 }
            )}
          >
            {itemCountValues[idx]}
          </span>
        ))}
      </div>
    </div>
  );
}
// w-[19px]
