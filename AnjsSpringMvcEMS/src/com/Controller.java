package com;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@org.springframework.stereotype.Controller
public class Controller {

	/*
	 * @RequestMapping(value = "login", method = RequestMethod.GET) public
	 * 
	 * @ResponseBody UserVO login(@RequestParam("name") String name,
	 * 
	 * @RequestParam("password") String password) {
	 * System.out.println("Server controller");
	 * 
	 * UserVO user = new UserVO(name, password, 26, 23892.99, "Kolkata"); return
	 * user;
	 * 
	 * }
	 */
	@RequestMapping(value = "login", method = RequestMethod.POST)
	public @ResponseBody
	UserVO login(@RequestBody UserVO user) {
		System.out.println("Server controller");
		System.out.println(user.getName());
		System.out.println(user.getPassword());
		UserVO userResponse = null;
		if ("Abhishek".equalsIgnoreCase(user.getName())
				&& "Pandey".equalsIgnoreCase(user.getPassword())) {
			userResponse = new UserVO(user.getName(), user.getPassword(), 26,
					23892.99, "Kolkata");
		}
		return userResponse;

	}

	@RequestMapping(value = "getUserDetail", method = RequestMethod.GET)
	public @ResponseBody
	UserVO getUserDetail(HttpServletRequest request) {
		System.out.println("Server controller");
		String name = (String) request.getParameter("name");
		if (null != name) {
			name = name.trim();
		}
		System.out.println(name);
		UserVO userResponse = null;
		userResponse = new UserVO(name, "44235#$%", 26, 23892.99, "Kolkata");

		return userResponse;

	}

}
