import { useRecoilState } from "recoil";
import { hourSelector, timeState } from "../atoms";

const Time = () => {
  const [time, setTime] = useRecoilState(timeState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTime(+e.currentTarget.value);
  };

  const handleHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };
  return (
    <div>
      <input value={time} onChange={handleChange} type="number" />
      <input value={hours} onChange={handleHoursChange} type="number" />
    </div>
  );
};

export default Time;
