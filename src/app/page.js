"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TerminalSection from "@/components/terminalSection";
import EventsSection from "@/components/eventsSection";
import TeamsSection from "@/components/teamsSection";
import Testimonials from "@/components/testinomialSection";

export default function Home() {

  return (

    <>



      <TeamsSection />
      <TerminalSection />
      <EventsSection />
      <Testimonials />

    </>
  );
}
