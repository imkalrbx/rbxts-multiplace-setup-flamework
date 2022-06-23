import { Service, OnInit } from "@flamework/core";

@Service()
export default class HelloController implements OnInit {
	onInit(): void | Promise<void> {
		print("Common hello service has been initialized!");
	}
}
