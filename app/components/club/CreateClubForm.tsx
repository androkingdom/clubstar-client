import { motion } from "framer-motion";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createClubSchema,
  type CreateClubSchema,
} from "@/lib/validations/club.schema";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader, Plus } from "lucide-react";
import { createClub } from "@/api/club/create";

const fieldMotion = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function CreateClubForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateClubSchema>({
    resolver: zodResolver(createClubSchema),
    mode: "onChange", // 👈 IMPORTANT
  });

  const onSubmit = async (data: CreateClubSchema) => {
    console.log("🔥 Creating club:", data);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("visibility", String(data.visibility ?? true));

    if (data.clubIcon && data.clubIcon[0]) {
      formData.append("clubIcon", data.clubIcon[0]); // file from input[type="file"]
    }
    try {
      const response = await createClub(formData);
      if (!response.success) throw new Error(response.message);
      console.log("Sending:", data instanceof FormData ? "[FormData]" : data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* Club Name */}
      <motion.div variants={fieldMotion}>
        <Label htmlFor="name">Club Name</Label>
        <Input
          id="name"
          placeholder="e.g. Cyber Ronins"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </motion.div>

      {/* Club Slug */}
      <motion.div variants={fieldMotion}>
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" placeholder="cyber-ronins" {...register("slug")} />
        {errors.slug && (
          <p className="text-sm text-red-500">{errors.slug.message}</p>
        )}
      </motion.div>

      {/* Description */}
      <motion.div variants={fieldMotion}>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe your club"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </motion.div>

      {/* Club Icon */}
      <motion.div variants={fieldMotion}>
        <Label htmlFor="clubIcon">Club Image</Label>
        <Input
          id="clubIcon"
          type="file"
          accept="image/*"
          {...register("clubIcon")}
        />
        {errors.clubIcon && (
          <p className="text-sm text-red-500">
            {(errors.clubIcon as FieldError).message}
          </p>
        )}
      </motion.div>

      {/* Is Public */}
      <motion.div variants={fieldMotion}>
        <Label htmlFor="visibility">Visibility</Label>
        <div className="flex items-center gap-2">
          <input
            id="visibility"
            type="checkbox"
            {...register("visibility")}
            className="h-4 w-4"
          />
          <span className="text-sm text-muted-foreground">Public Club</span>
        </div>
        {/* Optional Error Message */}
        {errors.visibility && (
          <p className="text-sm text-red-500">
            {(errors.visibility as FieldError).message}
          </p>
        )}
      </motion.div>

      <motion.div variants={fieldMotion}>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <Loader className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Plus className="w-4 h-4 mr-2" />
          )}
          Create Club
        </Button>
      </motion.div>
    </motion.form>
  );
}
