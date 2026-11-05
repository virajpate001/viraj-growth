"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function TrackOnMount({ event, props }) {
  useEffect(() => {
    trackEvent(event, props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}