import { Flamework } from "@flamework/core";
import { makeHelloFromCommon } from "common/shared/module";
import { makeHello } from "shared/module";

print(makeHello("main.client.ts"));
print(makeHelloFromCommon("main.client.ts"));

Flamework.addPaths("places/game/src/client/helloController.ts");
Flamework.addPaths("places/common/src/client/helloCommonController.ts");

Flamework.ignite();
