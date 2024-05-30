// src/services/http.js
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://guan.imtixaan.org/gw',
	// baseURL: 'http://192.168.0.102:7889/gw',
	timeout: 10000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// 响应拦截器
axiosInstance.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return Promise.reject(error);
	}
);

export default axiosInstance;