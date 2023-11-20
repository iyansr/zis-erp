import { keepPreviousData, useQuery } from '@tanstack/react-query';

import api from '@/modules/shared/libs/axios';

const request = async (params = {}) => {
  const { page = 1 } = params || {};
  const { data } = await api.request({
    method: 'GET',
    url: '/users',
    params: {
      page,
      ...params,
    },
  });

  return data;
};

const useQueryUsers = (params = {}) => {
  return useQuery({
    queryKey: ['all-users', params],
    queryFn: () => request(params),
    placeholderData: keepPreviousData,
  });
};

export default useQueryUsers;
