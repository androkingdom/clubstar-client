// Ui Components
import { motion } from "framer-motion";
import {
  Mail,
  User,
  Lock,
  Loader,
  UserPlus,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Variants } from "framer-motion";

// Form and Form Validation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterSchema,
} from "@/lib/validations/register.schema";

// Utils
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useState } from "react";
import { registerUser } from "@/api/auth/register";
import { setUser } from "@/context/features/user/userSlice";
import { useAppDispatch } from "@/hooks/useStore";
import { AxiosError } from "axios";

const pageMotion: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const fieldMotion: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: RegisterSchema) => {
    try {
      const response = await registerUser(data);
      console.log(response);
      if (!response.success) {
        toast.error(response.message);
        return;
      }
      dispatch(setUser(response.data.user));
      toast.success(response.message);
      navigate("/");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.message);
    }
  };

  return (
    <motion.main
      className="min-h-screen flex items-center justify-center px-4"
      initial="hidden"
      animate="show"
      variants={pageMotion}
    >
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Register to Clubstar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            initial="hidden"
            animate="show"
            variants={pageMotion}
          >
            {/* Name Field */}
            <motion.div variants={fieldMotion} className="space-y-2">
              <Label htmlFor="username">Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  placeholder="john doe"
                  className="pl-9"
                  autoComplete="off"
                  {...register("username")}
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fieldMotion} className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@mail.com"
                  className="pl-9"
                  autoComplete="email"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div variants={fieldMotion} className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="••••••"
                  className="pl-9"
                  autoComplete="off"
                  {...register("password")}
                />
                <Button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground cursor-pointer"
                  variant="secondary"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                >
                  {isPasswordVisible ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password?.message}
                </p>
              )}
            </motion.div>

            {/* Submit */}
            <motion.div variants={fieldMotion}>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <UserPlus className="mr-2 h-4 w-4" />
                )}
              </Button>
            </motion.div>
          </motion.form>
          <motion.div
            variants={fieldMotion}
            className="mt-4 flex items-center justify-between text-sm text-muted-foreground"
          >
            <p>Already have an account?</p>

            <Link to="/user/login">
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-1 text-primary"
              >
                <Sparkles className="w-4 h-4" />
                Login
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.main>
  );
}
