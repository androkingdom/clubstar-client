import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";

interface ClubCardProps {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  isPublic: boolean;
  onDelete: (id: string) => void;
}

export function ClubCard({
  id,
  name,
  description,
  slug,
  imageUrl,
  isPublic,
  onDelete,
}: ClubCardProps) {
  return (
    <Card className="overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
      {/* Club Banner Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-36 object-cover"
        loading="lazy"
      />

      <CardHeader className="text-lg font-bold">
        <div className="flex justify-between items-center">
          <span>{name}</span>
          <Badge variant={isPublic ? "default" : "secondary"}>
            {isPublic ? "Public" : "Private"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>{description}</p>
        <p className="text-xs italic text-primary/70">Slug: {slug}</p>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button
          variant="destructive"
          size="icon"
          onClick={() => onDelete(id)}
          className="opacity-80 hover:opacity-100"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
