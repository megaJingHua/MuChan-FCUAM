import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ToHighSchool from '@/pages/Home/toHighSchool'
import ToUniversity from '@/pages/Home/toUniversity'
import Recruit from '@/pages/Recruit'
import News from '@/pages/News'
import Scholarship from '@/pages/Scholarship'
import Highlight from '@/pages/Highlight'
import Course from '@/pages/Course'
import Program from '@/pages/Program'
import History from '@/pages/History'
import Characteristic from '@/pages/Characteristic'
import Goal from '@/pages/Goal'
import Capability from '@/pages/Capability'
import Innovation from '@/pages/Innovation'
import Teacher from '@/pages/Teacher'
import TeacherContainer from '@/pages/Teacher/TeacherContainer'
import Article from '@/pages/Article'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home }, // 首頁
    { path: '/high-school', name: 'ToHighSchool', component: ToHighSchool }, // 給高中生
    { path: '/university', name: 'ToUniversity', component: ToUniversity }, // 給大學生
    { path: '/news', name: 'News', component: News }, // 最新消息
    { path: '/recruit', name: 'Recruit', component: Recruit }, // 招生資訊
    { path: '/scholarship', name: 'Scholarship', component: Scholarship }, // 獎學金
    { path: '/highlight', name: 'Highlight', component: Highlight }, // 本系亮點
    { path: '/course', name: 'Course', component: Course }, // 課程列表
    { path: '/program', name: 'Program', component: Program }, // 學分學程
    { path: '/history', name: 'History', component: History }, // 系史
    { path: '/characteristic', name: 'Characteristic', component: Characteristic }, // 特色
    { path: '/goal', name: 'Goal', component: Goal }, // 教育目標
    { path: '/capability', name: 'Capability', component: Capability }, // 核心能力
    { path: '/innovation', name: 'Innovation', component: Innovation }, // 創新學制
    { path: '/teacher', name: 'Teacher', component: Teacher }, // 師資介紹
    { path: '/teacher-container', name: 'TeacherContainer', component: TeacherContainer }, // 師資介紹
    { path: '/article', name: 'Article', component: Article }, // 文章內文
  ],
})