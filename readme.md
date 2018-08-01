1.yarn add babel-core babel-preset-env babel-plugin-transform-react-jsx

2.yarn global add parcel-bundler
  


看了文章知道，createElement 是一个让jsx转译成js 的函数。
一：它是在哪里被运行的？ babel转译时吗？应该是transform-react-jsx这个插件运行了createElement方法。
二：createElement方法运行，又是怎么找到我们的jsx然后将它们转译呢？ 又是transform-react-jsx这个插件默默的做了吗？是这个插件里面有个正则匹配吗? 匹配<>? 然后将有这<>的代码进行转译？
我是不是可以这样理解:createElement 是一个让jsx转译成js 的方法， 他在babel的时候 经过transform-react-jsx这个插件 运行了，而且 这个函数应该是对jsx进行解剖，解剖的规则是通过正则来制定的，且jsx会被解剖成：            
1.jsx的最外层标签 
2.标签内的属性 
3.除最外层标签外里面所有的子内容或子标签
那么我就有一个最大的问题了：
我们又是怎么知道createElement方法里面有那些参数的呢？应该是将jsx解剖了之后，分析出来的？但是，我们是如何得知他解剖了之后的所获得的东西呢？毕竟一开始我们并不知道这个方法里面该如何放置参数。
