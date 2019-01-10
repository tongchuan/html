import axios from 'axios'

// export default axios


// import axios from 'axios'
// import queryString from 'querystring'
// // import globalStore from '@/stores/common/globalStore'
// // import config from '@/stores/config'
// // console.log(config)



let instance =  axios.create({
  	baseURL: process.env.baseURI,
//   method: 'get',
  	headers: {
  		'Accept': '*/*',
        'Content-Type': 'application/json;charset=utf-8'
    },
	withCredentials: false,
	responseType: 'json',
	timeout: 0,
	transformRequest: [function(data){
		return data
	}],
	transformResponse:[function(data){
		return data
	}]
});
let dispatch
// // 添加请求拦截器
instance.interceptors.request.use(function (conf) {
//   // globalStore.showWait()
//   // 在发送请求之前做些什么
//   // if(!config.env && conf.method.toLowerCase() === 'post'){
//   // if(conf.method.toLowerCase() === 'post'){
//   // //   // console.log(!config.env)
//   //   conf.method = 'get'
//   // }
//   console.log(conf);
//   if(conf.headers['Content-Type']!='application/json;charset=utf-8'){
//     if(conf.method.toLowerCase() === 'post'){
//       conf.data = queryString.stringify(conf.data)
//     }else{
//       conf.params = queryString.stringify(conf.data)
//     }
//   }else{
    if(conf.method.toLowerCase() === 'post'){
      conf.data = JSON.stringify(conf.data)
    }else{
      conf.params = conf.data
    }
//     // conf.data = JSON.stringify(conf.data)
//     // conf.params = JSON.stringify(conf.data)


  
//   // if(conf.method.toLowerCase() === 'get' && conf.headers['Content-Type']!='application/json;charset=utf-8'){
//   //   conf.params = JSON.parse(conf.data)
//   // }
  // console.log(conf)
  dispatch = conf.dispatch
  return conf;
}, function (error) {
//   // globalStore.hideWait()
//   // 对请求错误做些什么
  return error;
});

// // 添加响应拦截器
instance.interceptors.response.use(function (response) {
	// console.log(dispatch);
	dispatch({type: 'MESSAGE_TYPE', data: {text:'kaishi'}})
	// console.log(response);
//   // globalStore.hideWait()
//   // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么

  return error;
});
console.log(instance.interceptors);
export default instance