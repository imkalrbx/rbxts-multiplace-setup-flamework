import { Controller, OnInit } from "@flamework/core";

@Controller()
export default class HelloController implements OnInit {
	onInit(): void | Promise<void> {
		print("Common hello controller has been initialized!");
	}
}
