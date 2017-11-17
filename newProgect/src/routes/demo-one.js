export default {
  path: '/',
  component: require('../layouts/DemoLayout'),
  indexRoute: { onEnter: (nextState, replace) => replace('/one') },
  childRoutes: [{
    path: 'one',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('../components/demo-one/index'))
      })
    },
  }],
}