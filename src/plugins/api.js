//引入刚才的http.js文件
import https from './http.js';


export const getBannerList = (params) => {
	return https.get('/gwBanner/list', {
		params
	})
};

//分公司
export const getCompanys = (params) => {
	return https.get('/gwCompany/list', {
		params
	})
};

export const getCompanyById = (params) => {
	return https.get('/gwCompany/details', {
		params
	})
};


//新闻
export const getNews = (params) => {
	return https.get('/gwNews/list', {
		params
	})
};

export const getNewById = (params) => {
	return https.get('/gwNews/details', {
		params
	})
};

//公告
export const getNotices = (params) => {
	return https.get('/gwNotice/list', {
		params
	})
};

export const getNoticeById = (params) => {
	return https.get('/gwNotice/details', {
		params
	})
};


//视频
export const getVideos = (params) => {
	return https.get('/gwVideo/list', {
		params
	})
};

export const getVideoById = (params) => {
	return https.get('/gwVideo/details', {
		params
	})
};