import { URL, fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
})
