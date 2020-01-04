import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import hello from '@/components/HelloWorld'
import index from '@/components/index'
import accountOverview from '@/components/accountOverview'
import AccountsSafety from '@/components/AccountsSafety'
import productDetail from '@/components/productDetail'
import productList from '@/components/productList'
import productExercise from '@/components/productExercise'
import exerciseAccount from '@/components/exerciseAccount'
import setPhone from '@/components/setPhone'
import accountBalance from '@/components/accountBalance'
import identityCheckout_1 from '@/components/identityCheckout_1'
import identityCheckout_2 from '@/components/identityCheckout_2'
import buyingInterest from '@/components/buyingInterest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: hello
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/accountOverview',
      name: 'accountOverview',
      component: accountOverview
    },
    {
      path: '/accountsSafety',
      name: 'AccountsSafety',
      component: AccountsSafety
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
    },
    {
      path: '/productExercise',
      name: 'productExercise',
      component: productExercise
    },
    {
      path: '/exerciseAccount',
      name: 'exerciseAccount',
      component: exerciseAccount
    },
    {
      path: '/setPhone',
      name: 'setPhone',
      component: setPhone
    },
    {
      path: '/accountBalance',
      name: 'accountBalance',
      component: accountBalance
    },
    {
      path: '/identityCheckout_1',
      name: 'identityCheckout_1',
      component: identityCheckout_1
    },
    {
      path: '/identityCheckout_2',
      name: 'identityCheckout_2',
      component: identityCheckout_2
    },
    {
      path: '/buyingInterest',
      name: 'buyingInterest',
      component: buyingInterest
    }
  ]
})
