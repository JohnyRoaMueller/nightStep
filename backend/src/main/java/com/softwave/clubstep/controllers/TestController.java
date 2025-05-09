package com.softwave.clubstep.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class TestController {

    Logger logger = LoggerFactory.getLogger(getClass());
    
    @GetMapping("/api/test/{test}")
    @ResponseBody
    public String doTest(@PathVariable("test") String test) {

        logger.info("test: {}", test);

        return new String(test);
    }

}
