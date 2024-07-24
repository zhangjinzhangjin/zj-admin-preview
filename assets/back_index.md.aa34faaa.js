import{_ as s,o as n,c as a,O as l}from"./chunks/framework.eb2f041d.js";const i=JSON.parse('{"title":"后端框架概述","description":"","frontmatter":{},"headers":[],"relativePath":"back/index.md","filePath":"back/index.md"}'),p={name:"back/index.md"},o=l(`<h1 id="后端框架概述" tabindex="-1">后端框架概述 <a class="header-anchor" href="#后端框架概述" aria-label="Permalink to &quot;后端框架概述&quot;">​</a></h1><p>src目录如下</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">│  app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">spec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─helper</span></span>
<span class="line"><span style="color:#A6ACCD;">│      base</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─modules</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─img</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interface</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─pet</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      pet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      pet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interface</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      pet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      pet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      pet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─product</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─sys</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─auth</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  │  auth </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  │  auth </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">ts1</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  │  auth</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  │  auth</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  └─passport</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │          http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">strategy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │          jwt</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">strategy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─menu</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      menu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      menu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interface</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      menu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      menu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      menu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─role</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      role</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      role</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interface</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      role</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      role</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      role</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      └─user</span></span>
<span class="line"><span style="color:#A6ACCD;">│              user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│              user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interface</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│              user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│              user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│              user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">└─util</span></span>
<span class="line"><span style="color:#A6ACCD;">        util</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span></code></pre></div><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ul><li>项目目录结构同样比较清晰，不做过多陈述，有疑问去查nestjs官方文档即可~</li><li>框架当前已实现jwt鉴权，基础的用户，角色，菜单管理，文件上传等</li><li>具体的应用扩展开发，请移步 <a href="/zj-admin-preview/back/module.html">nestjs模块</a>~</li></ul><h2 id="示例图" tabindex="-1">示例图 <a class="header-anchor" href="#示例图" aria-label="Permalink to &quot;示例图&quot;">​</a></h2><p>就正常的swagger，不放截图了~</p>`,7),e=[o];function t(c,r,D,C,A,y){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
