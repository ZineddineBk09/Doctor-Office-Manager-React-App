// src/components/signup/index.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/authSlice";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email().min(6),
  password: z.string().min(6),
});

type SignupForm = z.infer<typeof schema>;

export default function Signup() {
  const navigation = useNavigate();
  const dispatch: any = useDispatch();
  const { user, status, error } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SignupForm) => {
    dispatch(signUp(data));

    // redirect to dashboard
    navigation("/dashboard");
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email & password below to create a new account
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && (
                <span className="text-red-500">
                  {errors.password.message?.replace(/^Firebase: /, "")}
                </span>
              )}
            </div>
            <Button type="submit" className="w-full">
              {status === "loading" ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
          {error && <div className="text-red-500 mt-4">{error}</div>}
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/" className="underline">
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="images/login-bg.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent dark:from-primary dark:to-transparent" />
      </div>
    </div>
  );
}
