import { zodResolver } from '@hookform/resolvers/zod';
import { EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginSchema } from '../schema/loginSchema';

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    return navigate('/dashboard', {
      replace: true,
    });
  };

  return (
    <div className="h-screen flex items-center p-5 justify-center w-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-200 via-white to-orange-200">
      <div className="bg-white shadow-lg p-10 max-w-md w-full rounded-2xl">
        <div className="text-center flex flex-col items-center mb-10">
          <img src="/icon.png" alt="Zis Icon" className="h-20 w-20" />
          <h2 className="text-3xl font-semibold">Masuk Ziswaf Indosat</h2>
        </div>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              id="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...form.register('email')}
            />
            <p className="text-sm text-error">{form.formState.errors?.email?.message}</p>
          </fieldset>

          <fieldset>
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...form.register('password')}
              />
              <button
                type="button"
                className="absolute right-2 bottom-2 z-0 bg-white border-none btn btn-square btn-sm"
              >
                <EyeOff size={16} />
              </button>
            </div>

            <p className="text-sm text-error">{form.formState.errors?.password?.message}</p>
          </fieldset>
          <button type="submit" className="btn btn-accent text-white btn-md w-full">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
