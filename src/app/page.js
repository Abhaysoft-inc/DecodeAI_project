"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TerminalSection from "@/components/terminalSection";
import EventsSection from "@/components/eventsSection";

export default function Home() {

  return (

    <>



      <TerminalSection />
      <EventsSection />

    </>
  );
}
