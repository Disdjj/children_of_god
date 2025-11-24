# Cloudflare Pages 部署指南

本项目可以直接通过 Cloudflare Dashboard 连接 GitHub 仓库进行部署。

## 部署步骤

### 1. 登录 Cloudflare
访问 [Cloudflare Dashboard](https://dash.cloudflare.com)

### 2. 创建 Pages 项目
1. 点击左侧菜单 **Workers & Pages**
2. 点击 **Create application**
3. 选择 **Pages** 标签
4. 点击 **Connect to Git**

### 3. 连接 GitHub 仓库
1. 授权 Cloudflare 访问您的 GitHub 账号
2. 选择您的仓库(children_of_god)
3. 点击 **Begin setup**

### 4. 配置构建设置

填写以下配置:

```
项目名称: children-of-god (或自定义)
生产分支: main
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: / (保持默认)
```

### 5. 环境变量(可选)
目前项目不需要配置环境变量,直接跳过即可。

### 6. 保存并部署
点击 **Save and Deploy** 开始首次部署。

## 部署后

- 部署完成后会获得一个 `*.pages.dev` 域名
- 每次 push 到 main 分支会自动触发部署
- Pull Request 会自动创建预览环境

## 自定义域名

在 Cloudflare Dashboard 中:
1. 进入您的 Pages 项目
2. 点击 **Custom domains** 标签
3. 添加您的域名并配置 DNS

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

## 项目配置

- **构建工具**: Vite
- **框架**: React 19 + TypeScript
- **输出目录**: dist
- **Node 版本**: 20+

## 相关链接

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages)
- [Vite 文档](https://vitejs.dev)
