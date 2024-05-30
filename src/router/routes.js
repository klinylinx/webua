export default [
  {
    path: '/',  // 首页
    component: () => import('@/views/home/home'),
  },
  {
    path: '/news',  // 新闻中心
    component: () => import('@/views/news/news'),
  },
  {
    path: '/about',  // 关于集团
    component: () => import('@/views/about/about'),
  },
  {
    path: '/video',  // 集团视频
    component: () => import('@/views/video/video'),
  },
  {
    path: '/video_detail',  // 集团视频
    component: () => import('@/views/video_detail/video_detail'),
  },
  {
    path: '/dynamics',  // 集团动态
    component: () => import('@/views/dynamics/dynamics'),
  },
  {
    path: '/question',  // 常见问题
    component: () => import('@/views/question/question'),
  },
  {
    path: '/copyright',
    component: () => import('@/views/copyright/copyright'),
  },
  {
    path: '/lower',
    component: () => import('@/views/lower/lower'),
  },
  {
    path: '/privacy_security',
    component: () => import('@/views/privacy_security/privacy_security'),
  },
  {
    path: '/privacy_policy',
    component: () => import('@/views/privacy_policy/privacy_policy'),
  },
  {
    path: '/company',
    component: () => import('@/views/company/company'),
  },
  {
    path: '/new_detail',
    component: () => import('@/views/new_detail/new_detail'),
  },
]
