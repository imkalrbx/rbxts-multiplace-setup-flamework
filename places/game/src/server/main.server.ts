import { Flamework } from "@flamework/core";
import { makeHelloFromCommon } from "common/shared/module";
import { makeHello } from "shared/module";

print(makeHello("main.server.ts"));
print(makeHelloFromCommon("main.server.ts"));

Flamework.addPaths("places/game/src/server/helloService.ts");
Flamework.addPaths("places/common/src/server/helloCommonService.ts");

Flamework.ignite();
