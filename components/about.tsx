"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a master degree in{" "}
        <span className="font-medium">Computer Applications</span>, I aiming to become a
        developer. I joined intern as {" "}
        <span className="font-medium">front-end developer</span>,{" "} where I learned to create web applications using Next.js with powerful UIs and REST APIs using basic Node.js.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving. Finding solutions and learning new concepts from them excites me. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Ant Design (Antd). I am always eager to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, carrom, and gardening in my house. I also enjoy{" "}
        <span className="font-medium">learning new things</span> and am currently
        exploring{" "}
        <span className="font-medium">basics of docker compose and some concepts in AWS</span>.
      </p>
    </motion.section>
  );
}
