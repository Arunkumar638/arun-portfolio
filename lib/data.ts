import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import elearningImg from "@/public/elearning.png";
import horebmlmImg from "@/public/horebmlm.png";
import { LuGraduationCap } from "react-icons/lu";
import { PiGraduationCapBold } from "react-icons/pi";
import purepayImg from "@/public/purepay.png";
import carepulseImg from "@/public/carepulse.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end Developer (Intern)",
    location: "GYRONEB, Sivakasi",
    description:
      "I done my Intern as a React Developer for 6 months. I learned React, Next.js, TypeScript, Tailwind, Node and MongoDB. I done my Project E-learning Platform in that I contributed in Full-stack development using Next.js, TypeScript, Tailwind CSS, Node and MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "May-2023 - Nov-2023",
  },
  {
    title: "MERN Stack Developer",
    location: "Spiegel Technologies, Madurai",
    description:
      "I worked as a MERN Stack Developer. I learned Node, Express and MongoDB for developing REST API's and Interacting with Database. I done my projects like Purepay Wallet and Horeb MLM. I'm looking for new opportunities to upgrade my skills and learn new technologies and concepts.",
    icon: React.createElement(FaReact),
    date: "Nov-2023 - Aug-2024",
  },
] as const;

export const eduactionData = [
  {
    title: "B.sc(Computer Science)",
    location: "S.Vellaichamy Nadar College, Madurai",
    description:
      "I completed my undergraduate degree in Computer Science, where I developed an interest in programming languages. Initially, C and C++ were challenging, but learning Java and JavaScript made modern concepts easier to grasp. I also enjoyed studying Digital Principles, particularly Logic Gates and Digital Circuits.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct-2018 - Nov-2021",
  },
  {
    title: "MCA",
    location: "Mepco Schlenk Engineering College, Sivakasi",
    description:
      "I completed my Post Graduation in Computer Applications, where I participated in symposium events like paper presentations and Art from E-Waste. I am interested in learning new concepts and conducted a seminar on 5G Technology",
    icon: React.createElement(PiGraduationCapBold),
    date: "Oct-2021 - May-2023",
  },
] as const;

export const projectsData = [
  {
    title: "E-Learning Platform",
    description:
      "I Contributed in full-stack development in this project. It has features like course shopping, cart management, Payment for purchase course and all details managed by admin.",
    tags: ["React", "MongoDB", "CSS", "Axios", "Node"],
    imageUrl: elearningImg,
  },
  {
    title: "Horeb MLM",
    description:
      "I Contributed in Front-end development for this project. It is a MLM platform where users earn some bonuses based on their referrals. It has some features like KYC, Withdrawal, Earning history, leaderboard, etc.",
    tags: ["React", "TypeScript", "CSS", "Axios"],
    imageUrl: horebmlmImg,
  },
  {
    title: "Purepay Wallet",
    description:
      "I Contributed in Back-end development and Admin Panel for this project. It is a Crypto wallet for users. It has some features like KYC, 2FA, Import new tokens, Send and Recieve tokens.",
    tags: ["React","TypeScript", "CSS", "Axios", "Node", "MySQL"],
    imageUrl: purepayImg,
  },
  {
    title: "CarePulse",
    description:
      `This is my personal project for learning new technologies like Appwrite and Shadcn. It is a patient management app where users can book appointments, and admins can schedule or cancel them.`,
    tags: ["Next.js", "Shadcn", "TypeScript", "Tailwind CSS", "Appwrite", "Sentry", "Twilio"],
    imageUrl: carepulseImg,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "AWS",
  "Docker",
] as const;
