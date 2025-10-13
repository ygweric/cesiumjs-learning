/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
// /* eslint-disable no-unused-vars */
// import { input } from '@inquirer/prompts'
// import pinyin from 'chinese-to-pinyin'

import path from 'path'
import fs from 'fs'
import syncDirectory from 'sync-directory'

function extractMdPaths(data) {
  const mdPaths = []

  function recursiveSearch(items) {
    for (let item of items) {
      if (typeof item === 'string' && item.endsWith('.md')) {
        mdPaths.push(item) // 如果是 .md 文件路径，添加到数组中
      } else if (item.children && Array.isArray(item.children)) {
        recursiveSearch(item.children) // 递归处理子节点
      }
    }
  }

  recursiveSearch(data) // 开始递归
  return mdPaths
}

function getMarkdownFiles(mdModulePath, baseDir) {
  const relativePath =
    // eslint-disable-next-line prefer-template
    '/' + path.relative(baseDir, mdModulePath).replace(/\\/g, '/')

  let title = path.basename(relativePath)
  if (fs.existsSync(path.join(mdModulePath, '_title.txt'))) {
    title = fs.readFileSync(path.join(mdModulePath, '_title.txt'), 'utf-8')
  } else {
    console.log(`!!!!!!!!! ${mdModulePath} 没有 _title.txt 文件`)
  }

  const result = {
    path: relativePath, // 将路径转换为相对于基目录的相对路径，并替换反斜杠为正斜杠
    text: title,
    children: [],
  }

  // 读取当前目录下的所有文件和文件夹
  const subPaths = fs.readdirSync(mdModulePath).sort((a, b) => {
    // 将 index.md 排在最前面, 其余按字母排序
    if (a === 'index.md') {
      return -1
    }
    if (b === 'index.md') {
      return 1
    }

    return a.localeCompare(b)
  })

  subPaths.forEach((subPath) => {
    const fullPath = path.join(mdModulePath, subPath)
    const stat = fs.statSync(fullPath)
    console.log('reading md file fullPath', fullPath)
    if (stat.isDirectory()) {
      // 如果是目录，递归获取子文件夹的 md 文件
      const children = getMarkdownFiles(fullPath, baseDir)
      if (children.children.length > 0) {
        result.children.push(children)
      }
    } else if (stat.isFile() && path.extname(fullPath) === '.md') {
      // 如果是 .md 文件，添加到结果中
      // eslint-disable-next-line prefer-template
      const mdPath = '/' + path.relative(baseDir, fullPath).replace(/\\/g, '/') // 转换为相对路径

      result.children.push(mdPath)
    }
  })

  return result
}

const mdModulePathList = [
  path.resolve('docs/cesium'),
  path.resolve('docs/fe'),
  path.resolve('docs/tools'),
  path.resolve('docs/interview'),
]

const baseDir = path.resolve('docs')

const syncFilesToJson = (mdModulePath) => {
  const configFilePath = path.resolve(
    'docs/config',
    `${path.basename(mdModulePath)}.json`,
  )

  // const usedPaths = extractMdPaths(
  //   JSON.parse(fs.readFileSync(configFilePath, 'utf-8')),
  // )

  const noteConfigObject = getMarkdownFiles(mdModulePath, baseDir).children

  // console.log(JSON.stringify(noteConfigObject, null, 2))

  fs.writeFileSync(configFilePath, JSON.stringify(noteConfigObject, null, 2))
}

export const syncFilesDirectory = (watch = true) => {
  mdModulePathList.forEach((mdModulePath) => {
    syncFilesToJson(mdModulePath)

    if (watch) {
      fs.watch(mdModulePath, { recursive: true }, (eventType, filename) => {
        // could be either 'rename' or 'change'. new file event and delete
        // also generally emit 'rename'
        console.log(`eventType: ${eventType}, filename: ${filename}`)
        syncFilesToJson(mdModulePath)
      })
    }
  })
}
