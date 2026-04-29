# Li Mingyu's Personal Academic Website

Li Mingyu (李明宇) 的个人学术主页，基于 [al-folio](https://github.com/alshedivat/al-folio) Jekyll 主题构建。

**线上地址**: [https://MingyuLi.com](https://MingyuLi.com)

---

## 目录

- [项目概览](#项目概览)
- [本地开发](#本地开发)
- [网站结构](#网站结构)
- [导航系统](#导航系统)
- [双语规范](#双语规范)
- [页面维护指南](#页面维护指南)
  - [首页 (Home / About)](#首页-home--about)
  - [论文页 (Publications)](#论文页-publications)
  - [项目页 (Projects)](#项目页-projects)
  - [简历页 (CV)](#简历页-cv)
  - [杂记页 (Misc)](#杂记页-misc)
- [图片管理系统](#图片管理系统)
  - [目录结构](#目录结构)
  - [Gallery YAML 格式](#gallery-yaml-格式)
  - [添加项目图片](#添加项目图片)
  - [添加竞赛图片](#添加竞赛图片)
  - [图片规范](#图片规范)
- [添加新项目](#添加新项目)
- [添加新竞赛 / 荣誉](#添加新竞赛--荣誉)
- [常用配置](#常用配置)
- [部署](#部署)
- [常见问题](#常见问题)
- [技术栈参考](#技术栈参考)

---

## 项目概览

本站基于 [al-folio](https://github.com/alshedivat/al-folio) Jekyll 主题，主要特性：

- **双语支持** — 首页中英文独立版本，其他页面同页双语
- **项目 + 竞赛合并展示** — Projects 页面通过 Bootstrap 标签页切换 Research 和 Competitions 视图
- **数据驱动的图片管理** — 所有图片元数据集中在 `_data/gallery/` YAML 文件中
- **可展开的卡片式布局** — 项目卡片和竞赛卡片均支持 展开/收起 详情
- **悬停图片描述** — 画廊图片支持鼠标悬停显示描述文字
- **统一缩略图 + PhotoSwipe 图片查看器** — 图集缩略图统一裁切显示，点击后查看完整原图

## 本地开发

推荐使用 Docker 进行本地开发：

```bash
# 首次启动 / 常规启动
docker compose pull && docker compose up

# 访问 http://localhost:8080 查看网站

# 修改依赖或 Dockerfile 后重新构建
docker compose up --build

# 停止容器
docker compose down
```

**提交前必做**:

```bash
# 1. 格式化代码（首次需安装依赖）
npm install --save-dev prettier @shopify/prettier-plugin-liquid
npx prettier . --write

# 2. 本地构建验证
docker compose up --build
# 检查导航、页面、图片、暗色模式是否正常
```

## 网站结构

```
MingyuLi018.github.io/
├── _config.yml              # 全局站点配置
├── _data/
│   ├── navigation.yml       # 导航栏配置
│   ├── competitions.yml     # 竞赛 & 荣誉元数据
│   └── gallery/             # 图片画廊元数据
│       ├── competitions/    # 竞赛图片 YAML
│       │   ├── hec-am.yml
│       │   ├── bmhri.yml
│       │   ├── smartcar.yml
│       │   ├── shmech.yml
│       │   └── aistartup.yml
│       └── projects/        # 项目图片 YAML
│           ├── dexterous-hand.yml
│           ├── robotic-arm.yml
│           └── manufacturing-sim.yml
├── _includes/
│   ├── project_card.liquid          # 项目卡片模板
│   ├── competition_card.liquid      # 竞赛卡片模板
│   └── competitions_content.liquid  # 竞赛列表容器
├── _pages/
│   ├── about.md             # 英文首页 (/)
│   ├── zh/about.md          # 中文首页 (/zh/)
│   ├── projects.md          # 项目页（含标签页切换）
│   ├── publications.md      # 论文页
│   ├── cv.md                # 简历页
│   ├── competitions.md      # 重定向到 /projects/#competitions
│   └── misc.md              # 杂记页
├── _projects/               # 项目 Markdown 文件
│   ├── 1_project.md         # 灵巧手零样本视觉抓取
│   ├── 2_project.md         # 机械臂嵌入式控制
│   └── 3_project.md         # 智能制造仿真
├── _sass/
│   └── _components.scss     # 自定义组件样式
└── assets/img/
    ├── competitions/        # 竞赛图片文件
    │   ├── higher-education-cup-2025/
    │   ├── bmhri-cup-2025/
    │   ├── smart-car-2025/
    │   ├── shanghai-mech-innovation-2025/
    │   └── ai-startup-2023/
    └── projects/            # 项目图片文件（待上传）
        ├── dexterous-hand/
        ├── robotic-arm/
        └── manufacturing-sim/
```

## 导航系统

导航栏由 `_data/navigation.yml` 统一控制（不是各页面的 front matter）：

```yaml
en:
  - title: home          # 英文首页
    url: /
  - title: publications  # 论文
    url: /publications/
  - title: projects      # 项目（含竞赛标签页）
    url: /projects/
  - title: cv            # 简历
    url: /cv/
  - title: misc          # 杂记
    url: /misc/

zh:
  - title: "主页"
    url: /zh/
  - title: "论文"
    url: /publications/
  - title: "项目"
    url: /projects/
  - title: "简历"
    url: /cv/
  - title: "杂记"
    url: /misc/
```

**注意**:
- 原来的 `/competitions/` URL 已设置 meta-refresh 重定向到 `/projects/#competitions`
- 修改导航需要同时更新 `en` 和 `zh` 两个数组

## 双语规范

本站采用混合双语策略：

| 页面 | 双语方式 | 说明 |
|------|---------|------|
| 首页 (About) | 独立页面 | 英文版 `/`，中文版 `/zh/`，导航栏有 中/EN 切换按钮 |
| 其他所有页面 | 同页双语 | 英文内容在上，中文内容在下，共享同一 URL |

**统一格式**:
- 可折叠控件（`details`/`summary` 等）的**标签文案使用英文**；页面正文可保持中英并列等既有规范。
- 章节标题: `Section Title / 章节标题`（如 `Certificate / 获奖证书`）
- 项目/竞赛 front matter 中字段统一用 `_en` 和 `_zh` 后缀区分

## 页面维护指南

### 首页 (Home / About)

- **英文版**: `_pages/about.md`（layout: about, permalink: `/`）
- **中文版**: `_pages/zh/about.md`（layout: about, permalink: `/zh/`）

首页的个人信息在 front matter 中配置：

```yaml
profile:
  align: right
  image: prof_pic.jpg       # 头像图片（放在 assets/img/ 下）
  image_circular: false
  more_info: >
    <p>School of Mechanical Engineering</p>
    <p>Tongji University</p>
    <p>Shanghai, China</p>
```

首页 Markdown 正文部分为个人简介文字。

### 论文页 (Publications)

文件: `_pages/publications.md`

论文数据由 jekyll-scholar 从 `_bibliography/papers.bib` 自动生成。添加新论文：

1. 编辑 `_bibliography/papers.bib`，添加 BibTeX 条目
2. 如需预览图，将图片放入 `assets/img/publication_preview/`
3. 在 BibTeX 条目中设置 `preview = {图片文件名}`

### 项目页 (Projects)

文件: `_pages/projects.md`

项目页使用 Bootstrap 标签页切换两个视图：
- **Research / 科研项目** — 显示 `_projects/` 中的项目卡片
- **Competitions / 科技竞赛** — 显示 `_data/competitions.yml` 中的竞赛卡片

项目按 `importance` 字段排序（数值小的排在前面）。项目按 `category` 分组显示。

### 简历页 (CV)

文件: `_pages/cv.md`

使用 RenderCV 格式，简历数据在 `_cv/` 目录中管理。

### 杂记页 (Misc)

文件: `_pages/misc.md`

包含三个板块的占位内容，直接编辑 Markdown 即可：
- Fitness / 健身
- Life / 生活
- Tech Notes / 技术笔记

## 图片管理系统

本站采用统一的数据驱动图片管理方案：**图片文件**放在 `assets/img/` 下，**图片元数据**（尺寸、描述等）集中在 `_data/gallery/` YAML 文件中。

### 目录结构

```
assets/img/
├── competitions/               # 竞赛图片
│   └── <competition-folder>/   # 每个竞赛一个文件夹
│       ├── photo1.jpg
│       └── photo2.png
└── projects/                   # 项目图片
    └── <project-folder>/       # 每个项目一个文件夹
        ├── photo1.jpg
        └── photo2.jpg

_data/gallery/
├── competitions/               # 竞赛图片元数据
│   └── <gallery_key>.yml       # 与 competitions.yml 中的 gallery_key 对应
└── projects/                   # 项目图片元数据
    └── <gallery_key>.yml       # 与 _projects/*.md 中的 gallery_key 对应
```

### Gallery YAML 格式

**项目画廊** 支持两种写法（二选一或混用；分节有图时以分节为主）。**页面默认仅显示项目 `img` 封面（左侧一图）**；点击 **Show project details & gallery** 后，在同一展开区中**先**为详细介绍与主要贡献，**后**为图集（有图时标题为 “Project Gallery / 项目图集”；无图则显示占位提示）。

1. **平面列表** `images` — 适合少量图、不分节。

2. **分节** `preview` + `sections` — 与下述竞赛画廊**字段相同**；`preview` 为可选（仅多图时收起预览等场景可用）。

```yaml
# _data/gallery/projects/dexterous-hand.yml
dir: assets/img/projects/dexterous-hand
preview: []
sections:
  - title: "Hardware / 硬件"
    cols: 3
    images:
      - { file: overview.jpg, w: 1200, h: 800, caption: "…" }
```

**仅平面、不分节**时：

```yaml
# _data/gallery/projects/dexterous-hand.yml
dir: assets/img/projects/dexterous-hand    # 图片目录路径
images:
  - { file: overview.jpg, w: 1200, h: 800, caption: "System overview / 系统概览" }
  - { file: demo.gif, w: 600, h: 400, caption: "Grasping demo / 抓取演示" }
  - { file: result.png, w: 800, h: 600 }  # caption 可选，没有则不显示悬停文字
```

**竞赛画廊**（分节 + 预览）:

```yaml
# _data/gallery/competitions/hec-am.yml
dir: assets/img/competitions/higher-education-cup-2025    # 图片目录路径

preview:    # 预览图（收起时显示的 3 张缩略图）
  - { file: 1-certificate.jpg, w: 600, h: 855, fit: contain }
  - { file: 2-cad-front.png, w: 435, h: 450 }
  - { file: 3-printed.jpg, w: 1024, h: 531 }

sections:   # 展开后的分组画廊
  - title: "Certificate / 获奖证书"
    cols: 3     # 每行列数，默认 3
    images:
      - { file: 1-certificate.jpg, caption: "Award Certificate / 获奖证书", w: 600, h: 855, fit: contain }

  - title: "CAD Design / CAD 设计"
    cols: 3
    images:
      - { file: cad-assembly.jpg, caption: "Assembly view / 装配图", w: 554, h: 321 }
      - { file: cad-detail.png, caption: "Component detail / 零件细节", w: 343, h: 336 }
```

**字段说明**:

| 字段 | 必填 | 说明 |
|------|------|------|
| `dir` | 是 | 图片文件夹路径（相对于站点根目录） |
| `file` | 是 | 图片文件名 |
| `w` | 是 | 图片宽度（像素），供 PhotoSwipe 使用 |
| `h` | 是 | 图片高度（像素），供 PhotoSwipe 使用 |
| `caption` | 否 | 图片描述（鼠标悬停时显示），建议用 `English / 中文` 格式 |
| `cols` | 否 | 分节中每行显示的列数，默认 3 |
| `fit` | 否 | 缩略图填充方式；默认裁切显示，设为 `contain` 可完整显示证书、海报、文档类图片 |
| `position` | 否 | 缩略图裁切重心；可用 `top`、`center`、`bottom` 或 `50% 30%` 等 CSS `object-position` 值 |

**缩略图显示规则**:

- 图集缩略图默认使用统一的 `4 / 3` 比例和居中裁切，保证不同尺寸图片在网格中整齐排列。
- 点击缩略图后由 PhotoSwipe 打开原图，仍按 `w` / `h` 展示完整图片，不受缩略图裁切影响。
- 证书、海报、文档截图等不适合裁切的图片，建议加 `fit: contain`。
- 如果普通照片主体偏上或偏下，可用 `position` 调整裁切重心。

示例：

```yaml
# 证书完整显示，不裁切文字
- { file: certificate.jpg, caption: "Certificate / 获奖证书", w: 1024, h: 768, fit: contain }

# 普通照片仍裁切，但优先保留上半部分
- { file: team-photo.jpg, caption: "Team photo / 团队合照", w: 1024, h: 1366, position: top }
```

### 添加项目图片

1. 将图片放入 `assets/img/projects/<project-folder>/`（与各项目 YAML 的 `dir` 一致）
2. 编辑 `_data/gallery/projects/<gallery_key>.yml`：大量图片建议用 **`preview` + `sections`**（同竞赛），少量可用 **`images`** 平面列表
3. 确保 `w` 和 `h` 填写正确（可用图片查看器查看尺寸）

示例：为 `dexterous-hand` 项目添加一张图片：

```yaml
# _data/gallery/projects/dexterous-hand.yml
dir: assets/img/projects/dexterous-hand
images:
  - { file: system-overview.jpg, w: 1920, h: 1080, caption: "System overview / 系统概览" }
```

### 添加竞赛图片

1. 将图片放入 `assets/img/competitions/<competition-folder>/`
2. 编辑对应的 `_data/gallery/competitions/<gallery_key>.yml`
3. 在 `preview` 中选取 3 张代表性缩略图
4. 在 `sections` 中按类别分组所有图片

### 图片规范

- **GIF 文件**: 正常使用，PhotoSwipe 支持 GIF 动画显示，单个 GIF 建议控制在几 MB 以内
- **文件命名**: 使用小写英文 + 连字符，如 `cad-assembly-iso.jpg`
- **图片尺寸**: `w` 和 `h` 必须准确填写，否则 PhotoSwipe 查看器会显示异常
- **缩略图比例**: 图集缩略图统一为 `4 / 3`；普通照片默认裁切，证书/海报建议使用 `fit: contain`
- **路径约定**: 最终路径 = `dir` + `/` + `file`，如 `assets/img/competitions/higher-education-cup-2025/1-certificate.jpg`

## 添加新项目

1. **创建项目文件**: 在 `_projects/` 下新建 `N_project.md`（N 为编号）：

```yaml
---
layout: page
title: "Project Title in English"
title_zh: "项目中文标题"
description_en: "Brief description in English."
description_zh: "简短中文描述。"
img: assets/img/项目封面图.jpg          # 卡片左侧的封面图
importance: 4                           # 排序权重（数值小优先）
category: research                      # research 或 engineering
gallery_key: my-project                 # 对应 _data/gallery/projects/ 中的文件名
date_label: "2025 – Present"

details_en: |
  Detailed project description in English.

details_zh: |
  项目中文详细介绍。

contributions_en:
  - "First contribution"
  - "Second contribution"

contributions_zh:
  - "第一项贡献"
  - "第二项贡献"
---
```

2. **创建画廊文件**: 新建 `_data/gallery/projects/my-project.yml`：

```yaml
dir: assets/img/projects/my-project
images: []    # 暂无图片时留空数组
```

3. **添加图片**（可选）: 将图片放入 `assets/img/projects/my-project/`，更新画廊 YAML

4. **封面图**: 将项目封面图放在 `assets/img/` 下，front matter 中的 `img` 指向它

## 添加新竞赛 / 荣誉

### 添加竞赛条目

编辑 `_data/competitions.yml`，在合适的位置添加新条目：

```yaml
- key: my-competition              # 唯一标识符
  title: "Competition Title"       # 英文标题
  title_zh: "竞赛中文标题"           # 中文标题
  date: "2025.06"                  # 时间
  badge: "Currently Competing / 正在竞赛中"  # 可选，状态徽章
  description_en: "English description."     # 可选
  description_zh: "中文描述。"               # 可选
  gallery_key: my-competition      # 可选，对应画廊 YAML 文件名
  note: "Photos coming soon. / 照片即将上传"  # 可选，没有图片时的提示
```

### 添加分节标题

在竞赛列表中间可以插入分节标题（如 "Projects & Honors / 项目与荣誉"）：

```yaml
- section_title: "Section Name / 分节名称"
```

### 添加画廊

若竞赛有图片，创建 `_data/gallery/competitions/my-competition.yml`（格式见[Gallery YAML 格式](#gallery-yaml-格式)）。

### 无图片的竞赛

不设置 `gallery_key`，可添加 `note` 字段显示占位文字：

```yaml
- key: some-award
  title: "Award Title"
  title_zh: "奖项标题"
  date: "2025.12"
  note: "Photos coming soon. / 照片即将上传"
```

## 常用配置

### _config.yml 关键配置

| 配置项 | 说明 | 当前值 |
|--------|------|--------|
| `title` | 网站标题 | `"Li Mingyu 李明宇"` |
| `url` | 站点 URL | `https://MingyuLi.com` |
| `baseurl` | 子路径（留空） | `""` |
| `enable_darkmode` | 深色模式开关 | `false`（强制白底） |
| `lang` | 站点语言 | `en` |

### 修改深色/浅色模式

在 `_config.yml` 中找到 `enable_darkmode`：
- `true` — 启用深色模式切换按钮
- `false` — 强制使用白底浅色主题

### 修改个人信息

- **姓名**: `_config.yml` 中的 `first_name` / `last_name`
- **描述**: `_config.yml` 中的 `description`
- **头像**: 替换 `assets/img/prof_pic.jpg`
- **联系方式**: `_config.yml` 中的 social 相关字段

## 部署

本站通过 GitHub Pages 自动部署：

1. 推送到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 网站在几分钟内更新

```bash
git add .
git commit -m "描述你的改动"
git push origin main
```

**注意**: 推送前建议在本地 Docker 环境验证改动。

## 常见问题

### Windows 上 Git 报错 `nul` 相关

Windows 系统中 `nul` 是保留设备名。项目 `.gitignore` 中已添加 `nul` 以避免 Git 操作失败。如果遇到相关报错，确认 `.gitignore` 中包含 `nul`。

### PhotoSwipe 在标签页切换后图片尺寸异常

项目页的标签页切换脚本已处理此问题：切换标签页时自动触发 `window.dispatchEvent(new Event('resize'))` 让 PhotoSwipe 重新计算尺寸。

### 图片不显示

检查以下几点：
1. 图片文件是否已放入正确的 `assets/img/` 子目录
2. Gallery YAML 中的 `dir` 路径是否与实际目录匹配
3. Gallery YAML 中的 `file` 文件名是否与实际文件名完全一致（区分大小写）
4. 项目/竞赛的 `gallery_key` 是否与 YAML 文件名匹配

### 旧的 /competitions/ URL 怎么处理

`_pages/competitions.md` 已配置为 meta-refresh 重定向到 `/projects/#competitions`，所有旧链接会自动跳转。

### 触屏设备上图片描述不显示

CSS 已包含触屏设备回退方案：`@media (hover: none)` 下图片描述会始终显示（半透明背景）。

## 技术栈参考

| 技术 | 版本/说明 |
|------|---------|
| Jekyll | 静态站点生成器 |
| Bootstrap 4 + MDB v4.20.0 | UI 框架（注意: 使用 `data-toggle` 而非 `data-bs-toggle`）|
| PhotoSwipe v5.4.4 | 图片灯箱查看器 |
| kramdown | Markdown 渲染器 |
| jekyll-scholar | BibTeX 论文管理 |
| Prettier + @shopify/prettier-plugin-liquid | 代码格式化 |
| Docker | 本地开发环境 |
| GitHub Pages + GitHub Actions | 自动部署 |

---

基于 [al-folio](https://github.com/alshedivat/al-folio) 主题，MIT License。
