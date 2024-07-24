import{_ as s,o as n,c as a,O as l}from"./chunks/framework.eb2f041d.js";const F=JSON.parse('{"title":"前端框架概述","description":"","frontmatter":{},"headers":[],"relativePath":"front/index.md","filePath":"front/index.md"}'),p={name:"front/index.md"},o=l(`<h1 id="前端框架概述" tabindex="-1">前端框架概述 <a class="header-anchor" href="#前端框架概述" aria-label="Permalink to &quot;前端框架概述&quot;">​</a></h1><p>src目录如下</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">│  App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  permission</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─api</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─system</span></span>
<span class="line"><span style="color:#A6ACCD;">│          menu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          role</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─assets</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─imgs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      avatar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">jpg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      logo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">png</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─svgs</span></span>
<span class="line"><span style="color:#A6ACCD;">│          403</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          404</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          500</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          add</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          delete</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          edit</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          exit</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fullscreen</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          expend</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          full</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">screen</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          icon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          lang</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">select</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          login</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">bg</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          login</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">bg</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          message</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          money</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          nav</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          nav</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          password</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">edit</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          peoples</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          put</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">away2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          role</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">select</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          search1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          shopping</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          theme</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">center</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          triangle</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          triangle</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│          unfold</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─common</span></span>
<span class="line"><span style="color:#A6ACCD;">│      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Breadcrumb</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Dialog</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Echarts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      getEcharts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Editor</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Form</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      componentMap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      helper</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      useForm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      useRenderCheckbox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      useRenderRadio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      useRenderSelect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Hamburger</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─HeaderSearch</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      fuse</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ScreenFull</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─SearchFields</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─SvgIcon</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      SvgIcon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Table</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      helper</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─Upload</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─UserAvatar</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─__tests__</span></span>
<span class="line"><span style="color:#A6ACCD;">│          HelloWorld</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">spec</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─directives</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─waves</span></span>
<span class="line"><span style="color:#A6ACCD;">│          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          waves</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">css</span></span>
<span class="line"><span style="color:#A6ACCD;">│          waves</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─i18n</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─langs</span></span>
<span class="line"><span style="color:#A6ACCD;">│          zh</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">CN</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─layout</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  Dynamic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ExternalLink</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─components</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  AppMain</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │  Navbar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─rightMenu</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─Settings</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      LayoutSetting</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      MainSetting</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      ModifyPasswordDialog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─sidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      AppLink</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      Item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      Logo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      SidebarItem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      ├─sidebarH</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      AppLink</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      Item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      Logo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │      SidebarItem</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│      │</span></span>
<span class="line"><span style="color:#A6ACCD;">│      └─tagsView</span></span>
<span class="line"><span style="color:#A6ACCD;">│              index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│              ScrollPane</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">│      element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      nProgress</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─router</span></span>
<span class="line"><span style="color:#A6ACCD;">│      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─store</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─modules</span></span>
<span class="line"><span style="color:#A6ACCD;">│          app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          app1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          counter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          permission</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          tagsView</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│          user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─styles</span></span>
<span class="line"><span style="color:#A6ACCD;">│      elementHack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│      global</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│      main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│      sidebar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│      tagsView</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│      transition</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scss</span></span>
<span class="line"><span style="color:#A6ACCD;">│      var</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">css</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─utils</span></span>
<span class="line"><span style="color:#A6ACCD;">│      auth</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      deepClone</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      fullScreen</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      is</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      resize</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      slot</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      themeSet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      title</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│      validator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">└─views</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ZjView</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">    │      echartOptions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─form</span></span>
<span class="line"><span style="color:#A6ACCD;">    │      demo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─icons</span></span>
<span class="line"><span style="color:#A6ACCD;">    │      element</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">icons</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │      svg</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">icons</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─login</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │  404</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │  NoRoutes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─components</span></span>
<span class="line"><span style="color:#A6ACCD;">    │          index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    │          LoginForm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─product</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │  list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  │</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─components</span></span>
<span class="line"><span style="color:#A6ACCD;">    │          AddDialog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─redirect</span></span>
<span class="line"><span style="color:#A6ACCD;">    │      index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    └─system</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├─menu</span></span>
<span class="line"><span style="color:#A6ACCD;">        │  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">        │  │</span></span>
<span class="line"><span style="color:#A6ACCD;">        │  └─components</span></span>
<span class="line"><span style="color:#A6ACCD;">        │          IconDialog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">        │</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├─role</span></span>
<span class="line"><span style="color:#A6ACCD;">        │  │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">        │  │</span></span>
<span class="line"><span style="color:#A6ACCD;">        │  └─components</span></span>
<span class="line"><span style="color:#A6ACCD;">        │          AddDialog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">        │          PermissionDialog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">        │</span></span>
<span class="line"><span style="color:#A6ACCD;">        └─user</span></span>
<span class="line"><span style="color:#A6ACCD;">            │  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"><span style="color:#A6ACCD;">            │</span></span>
<span class="line"><span style="color:#A6ACCD;">            └─components</span></span>
<span class="line"><span style="color:#A6ACCD;">                    AddDialog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span></code></pre></div><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ul><li>项目目录结构比较清晰，不做过多陈述~</li><li>框架当前已实现了业务系统基础的UI布局，路由鉴权，切换主题等功能，扩展及二次开发无门槛无冗余，纯净而优雅~</li><li>框架中实现了包括SearchFields，Dialog，List，Form等常用组件，灵活且丰满，为高效研发助力~</li><li>通用组件具体应用，请移步 <a href="/zj-admin-preview/front/components.html">通用组件</a>~</li></ul><h2 id="示例图" tabindex="-1">示例图 <a class="header-anchor" href="#示例图" aria-label="Permalink to &quot;示例图&quot;">​</a></h2><p><img src="https://gitee.com/bigjbigj/zj-admin/raw/master/preview/dashboard.png" alt=""><img src="https://gitee.com/bigjbigj/zj-admin/raw/master/preview/theme.png" alt=""></p>`,7),e=[o];function c(A,C,t,D,r,y){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
