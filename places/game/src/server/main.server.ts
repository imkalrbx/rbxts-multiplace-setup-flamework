import { makeHelloFromCommon } from "common/shared/module";
import { makeHello } from "shared/module";

print(makeHello("main.server.ts"));
print(makeHelloFromCommon("main.server.ts"));
