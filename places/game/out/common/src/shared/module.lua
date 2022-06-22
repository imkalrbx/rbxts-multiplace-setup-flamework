-- Compiled with roblox-ts v1.3.3
local function makeHelloFromCommon(name)
	return "Hello from " .. (name .. ", I'm in common!")
end
return {
	makeHelloFromCommon = makeHelloFromCommon,
}
