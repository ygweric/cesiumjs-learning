import { syncFilesDirectory } from './commands/sync-files-to-json.mjs'
import { syncImagesToPublic } from './commands/syncImagesToPublic.mjs'

async function prebuild() {
  await syncImagesToPublic(process.env.WATCH === 'true')
  await syncFilesDirectory(process.env.WATCH === 'true')
}

prebuild()
