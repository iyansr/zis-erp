import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import api from '@/modules/shared/libs/axios';

const login = async ({ username, password }) => {
  const { data } = await api.request({
    method: 'POST',
    url: '/auth/login',
    data: {
      username,
      password,
    },
  });

  return data;
};

const useMutateLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = data.token;

      localStorage.setItem('token', token);
      navigate('/dashboard');
    },
    onError: (error) => {
      console.log(error);
      alert(error.response.data?.message ?? error?.message);
    },
  });
};

export default useMutateLogin;
