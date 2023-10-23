"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idl_1 = require("../../sdk/idl");
function getErrorMessageFromCandyMachineIdl(errorCode) {
    var _a;
    const idlError = idl_1.FORMFN_CANDY_MACHINE_IDL.errors.find((e) => e.code === errorCode);
    return (_a = idlError === null || idlError === void 0 ? void 0 : idlError.msg) !== null && _a !== void 0 ? _a : null;
}
exports.default = getErrorMessageFromCandyMachineIdl;
//# sourceMappingURL=getErrorMessageFromCandyMachineIdl.js.map