import { ChatMessage } from "@/types/chat";
import { cn } from "@/lib/utils"; // Shadcn’s className combiner

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isOwn = message.sender === "you"; // Replace with auth check later

  return (
    <div className={cn("flex", isOwn ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-xs px-4 py-2 rounded-lg text-sm shadow-sm",
          isOwn
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        )}
      >
        <p className="break-words whitespace-pre-wrap">{message.content}</p>
        <span className="text-[10px] text-muted-foreground block mt-1 text-right">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
