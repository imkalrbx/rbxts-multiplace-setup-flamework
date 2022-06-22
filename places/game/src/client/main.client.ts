import { makeHelloFromCommon } from "common/shared/module";
import { makeHello } from "shared/module";

print(makeHello("main.client.ts"));
print(makeHelloFromCommon("main.client.ts"));
