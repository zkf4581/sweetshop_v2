# 🚀 GitHub Pages 部署指南（超简单）

## 方法一：最简单方法（推荐小白）

### 第1步：注册GitHub账号
1. 打开 https://github.com
2. 点击 "Sign up" 注册
3. 用邮箱注册即可（免费）

### 第2步：创建新仓库
1. 登录后点击右上角 "+" → "New repository"
2. 仓库名称填：`sweetshop`（或任意名称）
3. 选择 "Public"（公开）
4. ✅ 勾选 "Add a README file"
5. 点击 "Create repository"

### 第3步：上传网站文件
1. 进入刚创建的仓库
2. 点击 "Add file" → "Upload files"
3. 把这4个文件拖进去：
   - index.html
   - styles.css
   - script.js
   - README.md
4. 在下方 "Commit changes" 写：初次上传
5. 点击 "Commit changes"

### 第4步：开启GitHub Pages
1. 点击仓库的 "Settings"（设置）
2. 左侧找到 "Pages"
3. Source 选择：Deploy from a branch
4. Branch 选择：main（或master）
5. Folder 选择：/ (root)
6. 点击 "Save"

### 第5步：访问你的网站
等待1-2分钟后，你的网站地址是：
```
https://你的用户名.github.io/仓库名/
```
例如：`https://zhangxiaolong.github.io/sweetshop/`

---

## 方法二：特殊域名（username.github.io）

如果你想要更短的网址：`https://你的用户名.github.io`

1. 创建仓库时，仓库名必须是：`你的用户名.github.io`
2. 比如用户名是 `zhangxiaolong`，仓库名就是 `zhangxiaolong.github.io`
3. 上传文件后自动生效，网址就是：`https://zhangxiaolong.github.io`

---

## 📱 如何更新网站

### 在线修改（最简单）
1. 进入GitHub仓库
2. 点击要修改的文件（如 index.html）
3. 点击 ✏️ 编辑按钮
4. 修改内容
5. 点击 "Commit changes"
6. 等1-2分钟自动更新

### 上传新文件
1. 点击 "Add file" → "Upload files"
2. 拖入新文件
3. 提交即可

---

## ❓ 常见问题

### 网站打不开？
- 等待2-5分钟
- 检查 Settings → Pages 是否已启用
- 网址是否正确（注意大小写）

### 图片不显示？
- 确保使用网络图片链接
- 或把图片也上传到仓库

### 404错误？
- 检查 index.html 是否上传
- 确保文件名正确

### 更新后没变化？
- 清除浏览器缓存（Ctrl+F5）
- 等待1-2分钟

---

## 💡 小技巧

1. **自定义域名**
   - 买个域名（如 sweetshop.com）
   - 在 Settings → Pages → Custom domain 设置

2. **私密内容**
   - GitHub Pages 是公开的
   - 不要放敏感信息

3. **备份**
   - GitHub 自动保存所有历史版本
   - 可以随时恢复

---

## 🎉 完成！

恭喜！你的甜品店网站已经上线了，而且：
- ✅ 完全免费
- ✅ 自动HTTPS加密
- ✅ 全球CDN加速
- ✅ 99.9%在线率

分享你的网址给朋友们吧！