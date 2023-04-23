import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/dirs',
    'src/index',
    'src/worker-sort',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
