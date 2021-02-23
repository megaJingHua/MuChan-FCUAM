import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import News from '@/pages/News/News.vue'
import Article from '@/pages/Article/Article.vue'
import Recruit from '@/pages/Recruit/Recruit.vue'
import RecruitContaine from '@/pages/Recruit/RecruitContaine.vue'
import Scholarship from '@/pages/Scholarship/Scholarship.vue'
import ScholarshipContaine from '@/pages/Scholarship/ScholarshipContaine.vue'
import Course from '@/pages/Course/Course.vue'
import CourseContaine from '@/pages/Course/CourseContaine.vue'
import HeightLight from '@/pages/HeightLight/HeightLight.vue'
import History from '@/pages/History/History.vue'
import Program from '@/pages/Program/Program.vue'
import ProgramMaster from '@/pages/Program/ProgramMaster.vue'
import ProgramUniversity from '@/pages/Program/ProgramUniversity.vue'
import Characteristic from '@/pages/Characteristic/Characteristic.vue'
import Capability from '@/pages/Capability/Capability.vue'
import Goal from '@/pages/Goal/Goal.vue'
import University from '@/pages/IslandPages/IslandUniversity.vue'
import Parent from '@/pages/IslandPages/IslandParent.vue'
import Senior from '@/pages/IslandPages/IslandSenior.vue'
import Teacher from '@/pages/Teacher/TeacherHome.vue'
import TeacherAm from '@/pages/Teacher/TeacherAm.vue'
import TeacherOffice from '@/pages/Teacher/TeacherOffice.vue'
import TeacherContainer from '@/pages/Teacher/TeacherContainer.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', name: 'Home', component: Home},
      { path: '/news', name: 'News', component: News },
      { path: '/article', name: 'Article', component: Article },
      { path: '/recruit', name: 'Recruit', component: Recruit },
      { path: '/recruit/containe', name: 'RecruitContaine', component: RecruitContaine },
      { path: '/scholarship', name: 'Scholarship', component: Scholarship},
      { path: '/scholarship/containe', name: 'ScholarshipContaine', component: ScholarshipContaine},
      { path: '/course', name: 'Course', component: Course},
      { path: '/course/containe', name: 'CourseContaine', component: CourseContaine},
      { path: '/heightlight', name: 'HeightLight', component: HeightLight},
      { path: '/history', name: 'History', component: History},
      { path: '/program', name: 'Program', component: Program},
      { path: '/programMaster', name: 'ProgramMaster', component: ProgramMaster},
      { path: '/programUniversity', name: 'ProgramUniversity', component: ProgramUniversity},
      { path: '/characteristic', name: 'Characteristic', component: Characteristic},
      { path: '/capability', name: 'Capability', component: Capability},
      { path: '/goal', name: 'Goal', component: Goal},
      { path: '/university', name: 'University', component: University},
      { path: '/parent', name: 'Parent', component: Parent},
      { path: '/senior', name: 'Senior', component: Senior},
      { path: '/teacher', name: 'Teacher', component: Teacher},
      { path: '/teacher_am', name: 'TeacherAm', component: TeacherAm},
      { path: '/teacher_office', name: 'TeacherOffice', component: TeacherOffice},
      { path: '/teacher_container', name: 'TeacherContainer', component: TeacherContainer}
      
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  })