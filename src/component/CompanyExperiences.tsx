import { CompanyType } from "../types/CompanyType";
import CompanyPosition from "./CompanyPosition";
import { User_data } from "../data/User_data";

export default function CompanyExperience(props: CompanyType) {

    const getCompanyExp = () => {
    let today = new Date();
    if(props.endDate?.toLowerCase()!='present'){
        today = new Date(props.endDate);
    }
    let olday = new Date(props.startDate);
    let yrs = today.getFullYear() - olday.getFullYear();
    let months = today.getMonth() - olday.getMonth();
    if (months < 0) {
        yrs--;
    }
    months = months < 0 ? 12 + months : months;
    // console.log('yrs', yrs, 'months', months)
    return yrs + '.' + months;
    }
  return (
    <>
      <li key={props.company}>
        <b>
          <u> {props.company}: [{getCompanyExp()} years] </u>
        </b>
        {props.positions?.map((e) => (
          <CompanyPosition
            key={e.title + e.startDate + e.endDate}
            title={e.title}
            startDate={e.startDate}
            endDate={e.endDate}
            responsibilities={e.responsibilities}
          />
        ))}
      </li>
    </>
  );
}
