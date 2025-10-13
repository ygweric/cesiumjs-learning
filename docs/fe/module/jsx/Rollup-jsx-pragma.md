# pragma: jsx 如何理解

## Q:我在rollup打包时候可以添加配置, 那么在当前配置文件想添加想通 的配置“ pragma: 'jsx',”该如何做

我在rollup打包时候可以添加配置，

```
[
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'jsx',
        pragmaFrag: 'Fragment'
      }
    ]
```

那么在当前配置文件想添加想通 的配置“ pragma: 'jsx',”该如何做

## A: 在你当前的 Gulp + TypeScript 配置中，要实现与 Rollup 中 Babel 插件相同的 `pragma: 'jsx'` 配置（即指定 JSX 转换的函数名），需要通过 TypeScript 编译器的配置来实现，因为你这里使用的是 TypeScript 直接处理 JSX，而非 Babel。

具体做法是在 TypeScript 编译选项中添加 `jsxFactory` 和 `jsxFragmentFactory` 配置，对应 Babel 的 `pragma` 和 `pragmaFrag`。

可以在 `getTSCompilerOptions` 函数中添加相关配置，如下所示：

javascript

运行

```javascript
export function getTSCompilerOptions(
  moduleKind: 'esnext' | 'commonjs',
  userTSCompilerOptions: Record<string, unknown> = {},
  noEmitOnError: boolean
): Settings {
  delete userTSCompilerOptions['outDir'];
  return {
    moduleResolution: 'node',
    target: 'es2016',
    ...userTSCompilerOptions,
    noEmit: false,
    emitDeclarationOnly: false,
    declaration: true,
    isolatedModules: false,
    allowSyntheticDefaultImports: true,
    module: moduleKind,
    skipLibCheck: true,
    noEmitOnError: noEmitOnError,
    // 添加 JSX 相关配置，对应 Babel 的 pragma 和 pragmaFrag
    jsx: 'react', // 确保启用 JSX 处理
    jsxFactory: 'jsx', // 对应 pragma: 'jsx'
    jsxFragmentFactory: 'Fragment' // 对应 pragmaFrag: 'Fragment'
  };
}
```

### 配置说明：

- TypeScript 中的 `jsxFactory` 等价于 Babel 的 `pragma`，用于指定 JSX 转换时使用的函数（例如 `jsx` 替代默认的 `React.createElement`）。
- TypeScript 中的 `jsxFragmentFactory` 等价于 Babel 的 `pragmaFrag`，用于指定 JSX 片段使用的组件（例如 `Fragment` 替代默认的 `React.Fragment`）。
- 确保 `jsx` 选项设置为 `'react'` 或 `'preserve'` 等有效值，以启用 TypeScript 对 JSX 的处理。

这样配置后，TypeScript 编译器在转换 JSX 语法时，会使用你指定的 `jsx` 函数和 `Fragment` 组件，与 Rollup 中 Babel 插件的配置效果一致。
