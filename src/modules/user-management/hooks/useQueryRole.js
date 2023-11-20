import { useQuery } from '@tanstack/react-query';

import api from '@/modules/shared/libs/axios';

const request = async () => {
  const { data } = await api.request({
    method: 'GET',
    url: '/roles',
  });

  return data;
};

const useQueryRole = () => {
  return useQuery({
    queryKey: ['all-roles'],
    queryFn: request,
  });
};

export default useQueryRole;
