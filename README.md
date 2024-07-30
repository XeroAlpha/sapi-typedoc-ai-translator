# 如何参与翻译

1. 克隆本项目。
```sh
git clone https://github.com/XeroAlpha/sapi-typedoc-ai-translator.git
```

2. 在同一目录下克隆 [Minecraft 脚本 API 文档网页生成器](https://github.com/XeroAlpha/sapi-typedoc)。

```sh
git clone https://github.com/XeroAlpha/sapi-typedoc.git
```

3. 安装 [Visual Studio Code](https://code.visualstudio.com/)（需要选中“将 Code 加入 PATH 环境变量”）。

4. 进入本项目所属文件夹，运行命令：
```sh
cd sapi-typedoc-ai-translator
npm install
npm run merge
```

5. 此时 Visual Studio Code 会自动跳出一个差异编辑器，展示 AI 翻译与原始文本的差异。对 AI 翻译进行修正后关闭差异编辑器（标签页）即可。

6. 校对完成后提交。复刻本项目或 [Minecraft 脚本 API 文档网页生成器](https://github.com/XeroAlpha/sapi-typedoc)，创建拉取请求。

# Merge 脚本参数

```
npm run merge [pattern1] [pattern2] ...
```

不传入 `[patternN]` 则为校对所有文件。可以传入一个文件名模式列表来筛选翻译的文件列表，详见 https://github.com/micromatch/micromatch 。

注意！如需中断翻译请直接在运行脚本的控制台按 Ctrl+C。关闭差异编辑器并不会关闭 Merge 脚本，反而会将当前文件视为校对完成。