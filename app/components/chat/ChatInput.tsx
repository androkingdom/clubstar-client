import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <div className="flex items-end gap-2 w-full">
      {/* + Icon for file/docs */}
      <Button variant="ghost" size="icon" className="shrink-0">
        <Plus className="w-5 h-5 text-muted-foreground" />
      </Button>

      {/* Textarea */}
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your message..."
        className="resize-none min-h-[44px] max-h-40 text-sm"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      {/* Send Button */}
      <Button size="icon" onClick={handleSend} disabled={!value.trim()}>
        <Send className="w-4 h-4" />
      </Button>
    </div>
  );
}
