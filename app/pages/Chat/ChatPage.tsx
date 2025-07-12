import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatInput } from "@/components/chat/ChatInput";
import { MessageList } from "@/components/chat/MessageList";
import { ChatMessage } from "@/types/chat";
import { useParams } from "react-router";
import { getSocket } from "@/socket";
import { useIsClient } from "@/hooks/useIsClient";

export function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const param = useParams();
  const { slug } = param;
  const isClient = useIsClient();

  // Auto-scroll to bottom on message update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // chat room join
  useEffect(() => {
    if (!isClient) return;
    console.log("slug:", slug);
    const socket = getSocket();
    socket.emit("room:join", { slug });
    return () => {
      socket.emit("room:leave", { slug });
    };
  }, [isClient, slug]);

  const addMessage = (msg: ChatMessage) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div className="flex flex-col h-full max-h-screen bg-background rounded-xl overflow-hidden shadow-lg border">
      {/* Header */}
      <div className="px-6 py-3 border-b bg-muted/50 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
        <h2 className="text-xl font-semibold text-primary"># {slug}</h2>
      </div>

      {/* Messages Scroll Area */}
      <ScrollArea className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
        <motion.div layout className="flex flex-col gap-2">
          <ScrollArea className="flex-1 px-4 py-2 overflow-y-auto">
            <MessageList messages={messages} bottomRef={bottomRef} />
          </ScrollArea>

          <div ref={bottomRef} />
        </motion.div>
      </ScrollArea>

      {/* Chat Input */}
      <div className="border-t bg-background/80 backdrop-blur-sm px-4 py-3">
        <ChatInput
          onSend={(content: string) => {
            if (!content.trim()) return;
            const msg: ChatMessage = {
              content,
              sender: "you", // Later: pull from auth/user
              timestamp: Date.now(),
            };
            addMessage(msg);
            // socket.emit("chat:message", { room: slug, content });
          }}
        />
      </div>
    </div>
  );
}
