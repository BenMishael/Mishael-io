"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import whitelogoImg from "@/public/white_logo.svg";
import blacklogoImg from "@/public/black_logo.svg";

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <motion.div 
      className="absolute top-0 transform -translate-x-1/2 z-50 mt-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center">
        <Image
          src={theme === 'dark' ? whitelogoImg : blacklogoImg}
          alt="Logo"
          width={200}
          height={150}
        />
      </div>
    </motion.div>
  );
};

export default Logo;