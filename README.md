# 神的孩子们 (God's Children)

一个互动式文字叙事游戏,探索社会安全网失效下的人性选择。

[English](#english) | [日本語](#japanese) | [한국어](#korean)

## 🎮 简介

这是一个基于真实事件改编的互动叙事游戏,通过多个选择和分支剧情,让玩家体验不同的人生轨迹和结局。游戏支持中文、英文、日文和韩文四种语言。

## ✨ 特性

- 🌐 多语言支持(中文/英文/日文/韩文)
- 🎯 多重结局系统
- 📊 隐藏属性系统
- 🎨 复古 CRT 终端风格界面
- 📱 响应式设计,支持移动端

## 🚀 快速开始

### 前置要求

- Node.js 20+
- npm 或 yarn

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/your-username/children_of_god.git
cd children_of_god

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

## 📦 部署

### Cloudflare Pages(推荐)

本项目已优化用于 Cloudflare Pages 部署:

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Workers & Pages** > **Create application** > **Pages**
3. 连接您的 GitHub 仓库
4. 配置构建设置:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 点击 **Save and Deploy**

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 其他部署方式

项目也支持部署到:
- Vercel
- Netlify
- GitHub Pages
- 任何支持静态网站的托管服务

## 🛠️ 技术栈

- **框架**: React 19
- **语言**: TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS(内联)
- **图标**: Lucide React

## 📁 项目结构

```
children_of_god/
├── App.tsx           # 主应用组件
├── data.ts          # 游戏数据(回合、结局)
├── types.ts         # TypeScript 类型定义
├── index.tsx        # 应用入口
├── index.html       # HTML 模板
├── vite.config.ts   # Vite 配置
└── package.json     # 项目配置
```

## 🎯 游戏机制

- **属性系统**: 三个隐藏属性影响剧情走向
  - SYS (System Faith) - 系统信仰
  - OBE (Obedience) - 服从度
  - FAM (Family Bond) - 家庭纽带

- **多结局**: 根据选择和属性值解锁不同结局
- **条件选项**: 某些选项需要特定属性值才能解锁

## 🤝 贡献

欢迎提交 Issue 和 Pull Request!

## 📄 许可证

MIT License

---

<a name="english"></a>
## English

An interactive narrative game exploring human choices under failed social safety nets.

### Quick Start
```bash
npm install
npm run dev
```

### Deploy to Cloudflare Pages
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

---

<a name="japanese"></a>
## 日本語

社会安全網の崩壊下での人間の選択を探る、インタラクティブなナラティブゲーム。

### クイックスタート
```bash
npm install
npm run dev
```

---

<a name="korean"></a>
## 한국어

사회 안전망 붕괴 하의 인간의 선택을 탐구하는 인터랙티브 내러티브 게임.

### 빠른 시작
```bash
npm install
npm run dev
```
