import { CompanyType } from "../types/CompanyType";
import { InstituteType } from "../types/InstituteType";
import { PositionType } from "../types/PositionType";

export default function InstitutePosition({
  instituteName,
  course,
  endYear,percentage,startYear
}: InstituteType) {
  return (
    <>
        <li>
          <b><u> {instituteName} [{startYear} - {endYear}] </u></b>
          <ul>
                <li><strong>Course:</strong> {course}</li>
                <li><strong>Percentage:</strong> {percentage}%</li>
          </ul>
        </li>
    </>
  );
}
