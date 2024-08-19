'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
    try {
      setSubmitting(true);
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      });
      setSubmitting(false);
      if (!res?.error) {
        toast.success('Successfully logged in');
        router.push(callbackUrl);
      } else {
        reset({ password: '' });
        const message = 'Invalid email or password';
        toast.error(message);
        setError(message);
      }
    } catch (error: any) {
      toast.error(error.message);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="grid gap-4">
          {error && (
            <p className='text-center bg-red-300 py-4 mb-6 rounded'>{error}</p>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register('email')}
            />
            {errors['email'] && (
              <span className='text-red-500 text-xs pt-1 block'>
                {errors['email']?.message as string}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              {...register('password')}
            />
            {errors['password'] && (
              <span className='text-red-500 text-xs pt-1 block'>
                {errors['password']?.message as string}
              </span>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? 'Loading...' : 'Login'}
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => signIn('google', { callbackUrl })}
            type="button"
          >
            Login with Google
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => signIn('github', { callbackUrl })}
            type="button"
          >
            Login with GitHub
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}