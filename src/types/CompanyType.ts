import { PositionType } from "./PositionType";

export interface CompanyType {
    company: string,
    startDate: string,
    endDate: string,
    positions: PositionType[],
}