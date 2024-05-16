"use client"

import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const [text, setText] = useState("");
  const sendMessage = useMutation(api.chatroom.sendMessage);
  const getMessages = useQuery(api.chatroom.getMessages);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> 

      <div className="flex flex-col gap-4">
        {getMessages?.map((getMessage) => {
          return <div key={getMessage._id}>{getMessage.text}</div>
        })}
      </div>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        sendMessage({
            text,
        });
        setText("");
      }
      }>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          className="text-black"/>
        <button>Send</button>
      </form>
      </div>
    </main>
  );
}
