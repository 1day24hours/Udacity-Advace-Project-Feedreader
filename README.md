## 项目概述 Project Overview
本工具/仓库是前端纳米学位阅读器测试项目。旨在学习、体验使用 Jasmine 测试框架相关知识。
This tool/repository is a front-end nano-degree reader test project. Designed to learn and experience using the Jasmine testing framework.

测试是开发流程当中的重要一环，许多组织都实行 一套标准的开发程序，称为“测试驱动（TDD） 开发”。即开发人员首先编写测试，然后才 开始应用程序开发。所有测试的初始状态都是未通过， 然后开始编写应用程序代码，以通过测试。

无论我工作所在的组织是否实行测试驱动开发，还是利用测试来确保未来功能开发不对现有功能造成伤害，测试都是一项重要的必备技能！

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## 我将学习到什么内容？ What will I learn?
如何使用 Jasmine 针对预先存在的应用程序 编写多种测试。测试内容包括应用程序的 底层业务逻辑、事件处理和 DOM 操作。
I will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## 如何有助于我的职业生涯？How will this help my career?
* 要编写出高效的测试需要对应用程序进行多层面的分析， 包括 HTML、CSS 和 JavaScript，在调换团队 或加入新公司的情况下，是一项相当重要的技能。
* 优秀的测试能够快速分析出新代码 是否会对代码库中的现有功能造成破坏，免去了手动测试所有功能的麻烦。
* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## 核心功能 Core Function
1.编写一个测试遍历 allFeeds 对象里面的所有的源，来保证所有链接字段被定义而且链接不是空的。
Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2.编写一个测试遍历 allFeeds 对象里面的所有的源，来保证所有名字字段被定义而且不是空的。
Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3.写一个叫做 "The menu" 的测试用例
Write a new test suite named "The menu".
4.写一个测试用例保证菜单元素默认是隐藏的。需要分析 html 和 css 来搞清楚是怎么实现隐藏/展示菜单元素的。
Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5.写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。这个测试应该包含两个 expectation ： 当点击图标的时候菜单是否显示，再次点击的时候是否隐藏。
Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6.写一个叫做 "Initial Entries" 的测试用例
Write a test suite named "Initial Entries".
7.写一个测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素里面至少有一个 .entry 的元素。
Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
8.写一个叫做 "New Feed Selection" 的测试用例
Write a test suite named "New Feed Selection".
9.写一个测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## 目录 Table of Contents
### css.folder
* style.css 不需要修改的 style.css 文件 
Does not need to modify the style.css file


### fonts.folder
* 不需要的修改的一些文件
Unwanted modifications to some files

### index.html 打开 index.html 文件会加载页面和 jasmine 测试框架
index.html file to load page and jasmine testing framework

### jasmine.folder
#### lib.folder 
##### jasmine-2.1.2.floder 
* jasmine 版本驱动文件 version drive files
#### spec.folder 
* feedreader.js 测试主程序 main testing file

### js.folder 
* app.js 页面加载文件 page load file

### README.md 说明帮助文件

## 安装/构建 与 环境要求 Installation/Build & Environment Requisitions
下载文件，将 index.html 文件加载到浏览器（建议：Safari、Firefox、Chrome）打开即可。
在最下方可以看到利用 Jasmine 编写出的测试用例。

## 简易例子 Examples / Demos / Getting Started

## 常见事项 Common Pitfalls

## API与文档 API Documentations

## 社区支持 Known Bugs / Issues / Community Supports

## 如何贡献 Contributing

## LICENSES