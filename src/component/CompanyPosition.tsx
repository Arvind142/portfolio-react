import { CompanyType } from "../types/CompanyType";
import { PositionType } from "../types/PositionType";

export default function CompanyPosition({
  title,
  startDate,
  endDate,
  responsibilities,
}: PositionType) {
  return (
    <>
      <ul>
        <li>
          <b> {title} [{startDate} - {endDate}] </b>
          <ul>
            <li>
              <u>Responsibilities:</u>
              <ul>
                {responsibilities?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
