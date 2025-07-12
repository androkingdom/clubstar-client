import { ChatMessage } from "@/types/chat";
import { MessageBubble } from "./MessageBubble";

interface MessageListProps {
  messages: ChatMessage[];
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

export function MessageList({ messages, bottomRef }: MessageListProps) {
  return (
    <div className="flex flex-col justify-end gap-2 min-h-screen">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
