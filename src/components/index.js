export default (Vue) => {
  const modules = import.meta.glob('./*/index.vue', { eager: true });
  for (let x in modules) {
    const name = x.replace(/(\.\/)|(\/index\.vue)/g, '')
    if (name) {
      Vue.component('a-' + name, modules[x].default)
    }
  }
}
