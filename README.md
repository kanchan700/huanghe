# React项目

## 技术栈

类别	技术选择	说明
脚手架	Vite	极速的开发服务器和构建
语言	TypeScript	静态类型检查
UI 框架	React 18+	使用最新特性如 Hooks
路由	React Router	处理 SPA 路由
状态管理	Zustand (客户端) + TanStack Query (服务端)	轻量且高效的分工
UI 库	Ant Design	丰富的企业级组件
样式	Less/Sass (与 Antd 主题定制搭配) 或 Tailwind CSS	
HTTP 客户端	axios	功能强大的请求库
测试	Vitest + React Testing Library	单元/组件测试
代码规范	ESLint + Prettier + Husky	自动化代码检查和格式化

## 运行项目

## 项目结构

```
src/
  App.tsx             # 路由入口，含画廊/博客导航
  projects/
    gallery/          # 画廊子项目
      components/     # 画作卡片与弹窗
      data/           # 模拟画作数据
      Gallery.tsx     # 画廊主界面
      Gallery.css     # 画廊样式
    blog/             # 博客子项目（参考汝者非鱼）
      components/     # 文章卡片、详情弹窗
      data/           # 模拟文章数据
      Blog.tsx        # 博客主界面（搜索/分类/弹窗）
      Blog.css        # 博客样式
```

## 根目录文件作用

- `package.json`：项目元信息、依赖与脚本入口
- `pnpm-lock.yaml`：依赖锁定文件，保证安装一致性
- `index.html`：Vite 单页应用入口模板
- `vite.config.ts`：Vite 配置（插件、路径别名等）
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`：TypeScript 编译配置（基础/应用/Node 环境）
- `eslint.config.js`：ESLint 规则配置
- `README.md`：项目说明文档（你正在看的这一份）
- `.nvmrc`：Node 版本提示

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

启动后，在浏览器中打开 `http://localhost:5173` 查看应用。

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
pnpm preview
```

### 代码检查

```bash
pnpm lint
```