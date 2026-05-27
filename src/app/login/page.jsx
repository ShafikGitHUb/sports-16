"use client"
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    const onSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email:user.email,
            password:user.password
    })

      if(data){
       toast.success('Successfully created!');
        redirect("/")
    }
    if(error){
        toast.error('error');
    }
    }
    const handleGoogleSignin = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};
    return (
        <div className="max-w-7xl  mx-auto mt-6 ">
            <div className="text-center">
                <h1 className="text-2xl">Login</h1>
            </div>
            <Card className="border p-6 w-[85%] md:w-[99%] mx-auto">
                         <Form onSubmit={onSubmit} className="flex  flex-col gap-4">
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={6}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
 <div className="flex justify-center gap-2">
        <Button className={"w-full rounded-none bg-sky-500"} type="submit">
          Login
        </Button>
      </div>
    </Form>
         <div className="flex flex-col gap-2 mt-1 items-center">
                    <div className="flex items-center w-full">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500 text-sm">OR</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <Button onClick={handleGoogleSignin} className="w-full rounded-none bg-white border border-gray-300 text-gray-700">
                        <FaGoogle />Login With Google</Button>
                    <p className="text-sm mt-2 text-gray-600">
                        Don't have an account?
                        <Link href="/signup" className="text-sky-500 hover:underline font-semibold">
                            Registration
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;