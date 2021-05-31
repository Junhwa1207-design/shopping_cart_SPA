import store from '@/store/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      // console.log(config);
      store.state.loading = true;
      config.headers.Authorization = store.state;

      return config;
    },
    function(error) {
      store.state.loading = false;
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function(response) {
      
      store.state.loading = false;
      return response;
    },
    function(error) {

      store.state.loading = false;
      return Promise.reject(error);
    },
  );
  return instance;
}
