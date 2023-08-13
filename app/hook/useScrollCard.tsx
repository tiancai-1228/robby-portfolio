"use client";

import React, { useRef, useState } from "react";

interface Prop {
  cardLength: number;
}

function useScrollCard({ cardLength }: Prop) {
  const [current, setCurrent] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const handleOnScroll = () => {
    if (!listRef.current || cardLength == 0) return;
    const cardWidth = listRef.current.scrollWidth / cardLength;
    setCurrent(Math.round(listRef.current.scrollLeft / cardWidth));
  };

  const handleScrollLeft = () => {
    if (current == 0) return;
    if (!listRef.current || cardLength == 0) return;

    const cardWidth = listRef.current.scrollWidth / cardLength;
    listRef.current?.scrollTo({
      top: 0,
      left: listRef.current.scrollLeft - cardWidth,
      behavior: "smooth",
    });
    setCurrent((pre) => pre - 1);
  };

  const handleScrollRight = () => {
    if (current == cardLength) return;
    if (!listRef.current || cardLength == 0) return;

    const cardWidth = listRef.current.scrollWidth / cardLength;
    listRef.current?.scrollTo({
      top: 0,
      left: listRef.current.scrollLeft + cardWidth,
      behavior: "smooth",
    });
    setCurrent((pre) => pre + 1);
  };
  return {
    current,
    listRef,
    handleOnScroll,
    handleScrollLeft,
    handleScrollRight,
  };
}

export default useScrollCard;
