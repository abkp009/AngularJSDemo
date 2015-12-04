package com;

import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

public class MainTest {
public static void main(String[] args) {
    RestTemplate rt = new RestTemplate();
    rt.getMessageConverters().add(new MappingJacksonHttpMessageConverter());
    rt.getMessageConverters().add(new StringHttpMessageConverter());
    String url = "http://localhost:8373/AnjsSpringMvcEMS/login.spring";
    UserVO user = new UserVO();
    user.setName("Abhishek");
    user.setPassword("Pandey");
    user.setAge(25);
    UserVO u2 = rt.postForObject(url, user, UserVO.class);
    System.out.println(u2);
}
}
