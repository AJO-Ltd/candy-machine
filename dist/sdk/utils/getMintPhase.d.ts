import { MaybeUndef } from "@formfunction-hq/formfunction-program-shared";
import { Dayjs } from "dayjs";
import MintPhase from "../../sdk/types/MintPhase";
export default function getMintPhase({ allowlistSaleStartTimeUnix, publicSaleEndTimeUnix, publicSaleStartTimeUnix, }: {
    allowlistSaleStartTimeUnix: MaybeUndef<Dayjs>;
    publicSaleEndTimeUnix: Dayjs;
    publicSaleStartTimeUnix: Dayjs;
}): MintPhase;
//# sourceMappingURL=getMintPhase.d.ts.map