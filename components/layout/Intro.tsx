"use client";
import { useState, useEffect } from "react";
import React from "react";

export function Intro() {
  const titles = [
    "Computer Science Student",
    "Competitive programmer",
    "Software developer",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed);
      }
    } else {
      if (displayText === currentTitle) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentTitleIndex, displayText, isDeleting]);
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl sm:text-8xl font-bold mb-4">Gustavo Coutiño</h1>
      <h2 className="text-2xl sm:text-3xl font-medium h-8">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
}
