import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { SiMotorola } from "react-icons/si";
import bookboardImg from "@/public/bookboard_screen.jpg";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Telecommunication Specialist",
    location: "IDF, Israel",
    description: `
      I served as a Cell Towers and Satellite Communication Specialist in the IDF from 2014 to 2017. I constructed portable encrypted cellular towers and collaborated with the Israeli Navy's Shayetet 3 unit to ensure seamless network access across the Middle East. My experience honed my technical skills and reinforced my commitment to mission-critical operations.
    `,
    icon: React.createElement(FaPersonMilitaryRifle),
    date: "2014 - 2017",
  },

  {
    title: "Cellular System Center 'Vered Harim'",
    location: "Motorola Solutions, Airport City, Israel",
    description: `
      During my military service, I completed the "Vered Harim" system center technician course at
      Motorola Solutions, which was an intensive program designed to teach students how to
      identify and handle faults in the system. Throughout the course, we were taught the ins and
      outs of the system, including how information is transferred to the relevant party at the core.
    `,
    icon: React.createElement(SiMotorola),
    date: "06/2016 - 09/2016",
  },

  {
    title: "Private Math Tutor",
    location: "Tel-Aviv, Israel",
    description:
      "Before starting my Computer Science degree I used to pass lessons of math for students at middle-school and help them to be prepared for their exams",
    icon: React.createElement(BiMath),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Bookboard",
    description:
      "a mobile application that streamlines the process of booking study rooms in educational institutions by allowing users to view availability, reserve slots, and manage their bookings.",
    tags: ["Java", "Firebase", "Android","Figma"],
    imageUrl: bookboardImg,
  },
] as const;

export const skillsData = [
  "Java",
  "C Programming Language",
  "Python",
  "Flutter",
  "Mongo DB",
  "Firebase",
  "MySQL"
] as const;
