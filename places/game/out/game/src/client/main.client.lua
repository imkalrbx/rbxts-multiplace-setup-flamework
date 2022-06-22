-- Compiled with roblox-ts v1.3.3
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local makeHelloFromCommon = TS.import(script, game:GetService("ReplicatedStorage"), "common", "module").makeHelloFromCommon
local makeHello = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "module").makeHello
print(makeHello("main.client.ts"))
print(makeHelloFromCommon("main.client.ts"))
