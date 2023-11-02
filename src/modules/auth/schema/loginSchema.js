import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email Harus Diisi', invalid_type_error: 'Email Harus Diisi' })
    .email('Email Tidak Valid'),
  password: z
    .string({ required_error: 'Password Harus Diisi', invalid_type_error: 'Password Harus Diisi' })
    .min(6, { message: 'Password Minimal 6 Karakter' })
    .max(100),
});
