import { loadConfig } from '@unocss/config'
import type { UnoGenerator } from '@unocss/core'
import { createGenerator } from '@unocss/core'
import { runAsWorker } from 'synckit'
import { sortRules } from './sort-rules'

async function getGenerator() {
  const { config, sources } = await loadConfig()
  if (!sources.length)
    throw new Error('[@ow3/eslint-plugin] No `uno.config.ts` file found. Please create a bug report.')
  return createGenerator(config)
}

let promise: Promise<UnoGenerator<any>> | undefined

runAsWorker(async (classes: string) => {
  promise = promise || getGenerator()
  const uno = await promise
  return await sortRules(classes, uno)
})
