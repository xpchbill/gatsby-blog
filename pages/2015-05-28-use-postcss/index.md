---
title: 使用 PostCss
date: "2016-02-24T22:40:32.169Z"
layout: post
path: "/use-postcss/"
---

## 简而言之

LPostCSS是什么？最好的定义来自于PostCSS自身项目在github上的描述：

>“PostCSS is a tool for transforming CSS with JS plugins. These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more.

简而言之，PostCSS是CSS变成JavaScript的数据，使它变成可操作。PostCSS是基于JavaScript插件，然后执行代码操作。PostCSS自身并不会改变CSS，它只是一种插件，为执行任何的转变铺平道路。

本质上是没有很制PostCSS插件操纵CSS，也就是说它可以适用于任何CSS。只要你能想到的，你都可以编写一个PostCSS插件，让它来转成CSS。

PostCSS插件可以像预处理器，它们可以优化和autoprefix代码；可以添加未来语法；可以添加变量和逻辑；可以提供完整的网格系统；可以提供编码的快捷方式......还有很多很多。
