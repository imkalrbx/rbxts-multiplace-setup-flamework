import { Controller, OnInit } from "@flamework/core";

@Controller()
export default class HelloController implements OnInit {
	onInit(): void | Promise<void> {
		print("Local hello controller has been initialized!");
	}
}
