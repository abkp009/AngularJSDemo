package com;


public class UserVO {

	private String name;

	private String password;

	private int age;

	private double salary;

	private String address;

	public UserVO() {

	}

	public UserVO(String name, String password, int age, double salary,
			String address) {

		this.name = name;
		this.password = password;
		this.age = age;
		this.salary = salary;
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
}
