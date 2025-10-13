// eslint-disable-next-line no-unused-vars
import path from 'path'
// eslint-disable-next-line import/no-rename-default
import syncDirectory from 'sync-directory'

export const syncImagesToPublic = (watch = true) => {
  syncDirectory(`./docs/`, `./docs/.vuepress/public/images/docs/`, {
    watch,
    exclude: [
      /.*(md|mdx)$/i,
      /^\..*$/i, // '.obsidian', '.vuepress', etc
    ],
  })
}
