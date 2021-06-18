# ChromePageRewrite
Chrome允许重写：新标签页、书签页、历史页三个页面。  
每个插件只允许重写一个页面，本程序可以一键生成三个插件，方便用户灵活定制三种页面。  

以新标签页插件为例，用户可以通过这个插件重写新标签页，把新标签页指定为一个URL地址。  

chrome页面重写链接：https://open.chrome.360.cn/extension_dev/override.html

书签管理器：从工具菜单上点击书签管理器时访问的页面，或者从地址栏直接输入 chrome://bookmarks。
历史记录：从工具菜单上点击历史记录时访问的页面，或者从地址栏直接输入 chrome://history。
新标签页：当创建新标签的时候访问的页面，或者从地址栏直接输入 chrome://newtab。

# 实现原理
使用iframe方式嵌入外部URL。  
使用python把新标签页复制成bookmark、history。  