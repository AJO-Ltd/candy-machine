import { Maybe } from "@formfunction-hq/formfunction-program-shared";
import { CandyMachineProgram } from "../../../sdk/idl";
import CandyMachineSplTokenAllowlistSettings from "../../../sdk/types/candy-machine/CandyMachineSplTokenAllowlistSettings";
type CandyMachineIdlAccount = Awaited<ReturnType<CandyMachineProgram["account"]["candyMachine"]["fetch"]>>;
type CandyMachineAccountData = Omit<CandyMachineIdlAccount["data"], "splTokenAllowlistSettings">;
type CandyMachineAccount = Omit<CandyMachineIdlAccount, "data"> & {
    data: CandyMachineAccountData & {
        splTokenAllowlistSettings: Maybe<CandyMachineSplTokenAllowlistSettings>;
    };
};
export default CandyMachineAccount;
//# sourceMappingURL=CandyMachineAccount.d.ts.map