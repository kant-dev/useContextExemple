import DecrementButton from "@/components/DecrementButton";
import DisplayCounter from "@/components/DisplayCounter";
import IncrementButton from "@/components/IncrementButton";
import { CounterProvider } from "@/contexts/CounterContext";
import Image from "next/image";

export default function Home() {
  return (
    <CounterProvider>
        <DisplayCounter/>
        <div className="flex gap-5 p-2">
          <IncrementButton/>
          <DecrementButton/>
        </div>
    </CounterProvider>
  );
}
