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