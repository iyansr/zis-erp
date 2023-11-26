import { keepPreviousData, useQuery } from '@tanstack/react-query';

import api from '@/modules/shared/libs/axios';

const request = async (params = {}) => {
  const { page = 1 } = params || {};
  const { data } = await api.request({
    method: 'GET',
    url: '/document-types',
    params: {
      page,
      ...params,
    },
  });

  return data;
};

const useQueryDocumentTypes = (params = {}) => {
  return useQuery({
    queryKey: ['all-document-types', params],
    queryFn: () => request(params),
    placeholderData: keepPreviousData,
  });
};

export default useQueryDocumentTypes;
