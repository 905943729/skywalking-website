(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(t,i,n){t.exports=n.p+"assets/img/Pinpoint-PK-skywalking.184b13d4.png"},268:function(t,i,n){t.exports=n.p+"assets/img/Insight-commit.f0263029.png"},269:function(t,i,n){t.exports=n.p+"assets/img/skywalking-trace-query.b024781a.png"},270:function(t,i,n){t.exports=n.p+"assets/img/rocketbot.69b37f26.png"},271:function(t,i,n){t.exports=n.p+"assets/img/Pinpoint-JVM-inspector.fed1145e.png"},272:function(t,i,n){t.exports=n.p+"assets/img/Pinpoint-trace-detail.c43d62d4.png"},273:function(t,i,n){t.exports=n.p+"assets/img/skywalking-trace-detail.27a222cc.png"},274:function(t,i,n){t.exports=n.p+"assets/img/skywalking-trace-sql.5ef53c6d.png"},275:function(t,i,n){t.exports=n.p+"assets/img/press-test.e0387fbe.png"},276:function(t,i,n){t.exports=n.p+"assets/img/supported-modules.091baa57.png"},310:function(t,i,n){"use strict";n.r(i);var e=[function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[this._v("作者：王振飞, 写于：2019-02-24\n"),i("strong",[this._v("说明")]),this._v("：此文是个人所写，版本归属作者，代表个人观点，仅供参考，不代表skywalking官方观点。\n"),i("strong",[this._v("说明")]),this._v("：本次对比基于skywalking-6.0.0-GA和Pinpoint-1.8.2（截止2019-02-19最新版本）。另外，我们这次技术选型直接否定了Zipkin，其最大原因是它对代码有侵入性，CAT也是一样。这是我们所完全无法接受的。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("这应该是目前最优秀的两款开源APM产品了，而且两款产品都通过字节码注入的方式，实现了对代码"),i("strong",[this._v("完全无任何侵入")]),this._v("，他们的对比信息如下：")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("img",{attrs:{src:n(267),alt:"Pinpoint P.K. skywalking"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("OAP说明")]),this._v(": skywalking6.x才有OAP这个概念，skywalking5.x叫collector。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("接下来，对每个PK项进行深入分析和对比。更多精彩和首发内容请关注公众号：【"),i("strong",[this._v("阿飞的博客")]),this._v("】。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("社区比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("这一点上面skywalking肯定完胜。一方面，skywalking已经进入apache孵化，社区相当活跃。而且项目发起人是中国人，我们能够进入官方群（Apache SkyWalking交流群："),i("code",[this._v("392443393")]),this._v("）和项目发起人吴晟零距离沟通，很多问题能第一时间得到大家的帮助（玩过开源的都知道，这个价值有多大）。\n而Pinpoint是韩国人开发的，免不了有沟通障碍。至于github上最近一年的commit频率，skywalking和Pinpoint旗鼓相当，都是接近20的水平:\n"),i("img",{attrs:{src:n(268),alt:"Insight commit"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("所以，社区方面，skywalking更胜一筹。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"支持语言比较"}},[i("strong",[this._v("支持语言比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[this._v("说明：Github上有开发者为Pinpoint贡献了对Node.js的支持，请戳链接：https://github.com/peaksnail/pinpoint-node-agent。但是已经停止维护，几年没更新了！")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("所以，支持语言方面，skywalking更胜一筹")]),this._v("。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"协议比较"}},[i("strong",[this._v("协议比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"存储比较-重要"}},[i("strong",[this._v("存储比较(重要)")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("另外，Pinpoint和skywalking都支持TTL，即历史数据保留策略。skywalking是在OAP模块的application.yml中配置从而指定保留时间。而Pinpoint是通过HBase的ttl功能实现，通过Pinpoint提供的hbase脚本"),i("code",[this._v("https://github.com/naver/pinpoint/blob/master/hbase/scripts/hbase-create.hbase")]),this._v("可以看到：ApplicationTraceIndex配置了"),i("code",[this._v("TTL => 5184000")]),this._v("，SqlMetaData_Ver2配合了"),i("code",[this._v("TTL => 15552000")]),this._v("，单位是秒。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[i("strong",[this._v("说明")]),this._v("：es并不是完全碾压HBase，es和HBase没有绝对的好和坏。es强在检索能力，存储能力偏弱(千亿以下，es还是完全有能力hold的住的)。HBase强在存储能力，检索能力偏弱。如果搜集的日志量非常庞大，那么es存储就比较吃力。当然，没有蹩脚的中间件，只有蹩脚的程序员，无论是es还是HBase，调优才是最关键的。同样的，如果对检索能力有一定的要求，那么HBase肯定满足不了你。所以，又到了根据你的业务和需求决定的时刻了，trade-off真是无所不在。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("img",{attrs:{src:n(269),alt:"skywalking trace query"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"ui比较"}},[i("strong",[this._v("UI比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Pinpoint的UI确实比skywalking稍微好些，尤其是服务的拓扑图展示。不过daocloud根据Pinpoint的风格为skywalking定制了一款UI。请戳链接：https://github.com/TinyAllen/rocketbot，项目介绍是："),i("code",[this._v("rocketbot: A UI for Skywalking")]),this._v("。截图如下所示；\n"),i("img",{attrs:{src:n(270),alt:"rocketbot: A UI for Skywalking"}}),this._v(" "),i("strong",[this._v("所以，只比较原生UI的话，Pinpoint更胜一筹。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"扩展性比较"}},[i("strong",[this._v("扩展性比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Pinpoint好像设计之初就没有过多考虑扩展性，无论是底层的存储，还是自定义探针实现等。而skywalking核心设计目标之一就是"),i("strong",[this._v("Pluggable")]),this._v("，即可插拔。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("以存储为例，pinpoint完全没有考虑扩展性，而skywalking如果要自定义实现一套存储，只需要定义一个类实现接口"),i("code",[this._v("org.apache.skywalking.oap.server.library.module.ModuleProvider")]),this._v("，然后实现一些DAO即可。至于Pinpoint则完全没有考虑过扩展底层存储。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("所以，扩展性方面skywalking更胜一筹")]),this._v("。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"告警比较"}},[i("strong",[this._v("告警比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Pinpoint每3分钟周期性检查过去5分钟的数据，如果有符合规则的告警，就会发送sms/email给用户组下的所有用户。需要说明的是，实现发送sms/email的逻辑需要自己实现，Pinpoint只提供了接口"),i("code",[this._v("com.navercorp.pinpoint.web.alarm.AlarmMessageSender")]),this._v("。并且Pinpoint发现告警持续时，会递增发送sms/email的时间间隔 3min -> 6min -> 12min -> 24min，防止sms/email狂刷。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[i("strong",[this._v("Pinpoint告警参考")]),this._v("：http://naver.github.io/pinpoint/1.8.2/alarm.html")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[i("strong",[this._v("skywalking告警参考")]),this._v("：https://github.com/apache/incubator-skywalking/blob/master/docs/en/setup/backend/backend-alarm.md。目前只支持official_analysis.oal脚本中Service, Service Instance, Endpoint scope的metric，其他scope的metric需要等待后续扩展。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Pinpoint和skywalking都支持常用的告警规则配置，但是skywalking采用webhooks的方式就灵活很多：短信通知，邮件通知，微信通知都是可以支持的。而Pinpoint只能sms/email通知，并且还需要引入MySQL存储，增加了整个系统复杂度。所以，"),i("strong",[this._v("告警方面，skywalking更胜一筹")]),this._v("。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"jvm监控"}},[i("strong",[this._v("JVM监控")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("img",{attrs:{src:n(271),alt:"Pinpoint JVM inspector"}}),this._v(" "),i("strong",[this._v("所以，对JVM的监控方面，Pinpoint更胜一筹。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"服务监控"}},[i("strong",[this._v("服务监控")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"跟踪粒度比较"}},[i("strong",[this._v("跟踪粒度比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Pinpoint在这方面做的非常好，跟踪粒度非常细。如下图所示，是Pinpoint对某个接口的trace信息：\n"),i("img",{attrs:{src:n(272),alt:"Pinpoint trace detail"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("而同一个接口skywalking的trace信息如下图所示：\n"),i("img",{attrs:{src:n(273),alt:"skywalking trace detail"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("img",{attrs:{src:n(274),alt:"skywalking trace sql"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[i("strong",[this._v("备注")]),this._v(": 此截图是skywalking加载了插件"),i("code",[this._v("apm-spring-annotation-plugin-6.0.0-GA.jar")]),this._v("（这个插件允许跟踪加了@Bean, @Service, @Component and @Repository注解的spring context中的bean的方法）。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("通过对比发现，"),i("strong",[this._v("在跟踪粒度方面，Pinpoint更胜一筹")]),this._v("。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"过滤追踪"}},[i("strong",[this._v("过滤追踪")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Pinpoint和skywalking都可以实现，而且配置的表达式都是基于ant风格。\nPinpoint在Web UI上配置 "),i("code",[this._v("filter wizard")]),this._v(" 即可自定义过滤追踪。\nskywalking通过加载apm-trace-ignore-plugin插件就能自定义过滤跟踪，skywalking这种方式更灵活，比如一台高配服务器上有若干个服务，在共用的agent配置文件apm-trace-ignore-plugin.config中可以配置通用的过滤规则，然后通过-D的方式为每个服务配置个性化过滤。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("所以，在过滤追踪方面，skywalking更胜一筹")]),this._v("。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"性能损耗"}},[i("strong",[this._v("性能损耗")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("img",{attrs:{src:n(275),alt:"压力测试"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[this._v("图片来源于：https://juejin.im/post/5a7a9e0af265da4e914b46f1")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("所以，在性能损耗方面，skywalking更胜一筹")]),this._v("。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"发布包比较"}},[i("strong",[this._v("发布包比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("strong",[this._v("所以，在发布包方面，skywalking更胜一筹")]),this._v("。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"支持组件比较"}},[i("strong",[this._v("支持组件比较")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("img",{attrs:{src:n(276),alt:"支持组件对比"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("strong",[this._v("WEB容器说明")]),this._v("：Pinpoint支持几乎所有的WEB容器，包括开源和商业的。而wkywalking只支持开源的WEB容器，对2款大名鼎鼎的商业WEB容器Weblogic和Wevsphere都不支持。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("strong",[this._v("RPC框架说明")]),this._v("：对RPC框架的支持，skywalking简直秒杀Pinpoint。连小众的motan和sofarpc都支持。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("strong",[this._v("MQ说明")]),this._v("：skywalking比Pinpoint多支持一个国产的MQ中间件RocketMQ，毕竟RocketMQ在国内名气大，而在国外就一般了。加之skywalking也是国产的。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("strong",[this._v("RDBMS/NoSQL说明")]),this._v("：Pinpoint对RDBMS和NoSQL的支持都要略好于skywalking，RDBMS方面，skywalking不支持MSSQL和MariaDB。而NoSQL方面，skywalking不支持Cassandra和HBase。至于Pinpoint不支持的H2，完全不是问题，毕竟生产环境是肯定不会使用H2作为底层存储的。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("strong",[this._v("Redis客户端说明")]),this._v("：虽然skywalking和Pinpoint都支持Redis，但是skywalking支持三种流行的Redis客户端：Jedis，Redisson，Lettuce。而Pinpoint只支持Jedis和Lettuce，再一次，韩国人开发的Pinpoint无视了目前中国人开发的GitHub上star最多的Redis Client -- Redisson。")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"总结"}},[i("strong",[this._v("总结")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",[i("li",[this._v("如果你有海量的日志存储需求，推荐Pinpoint。")]),this._v(" "),i("li",[this._v("如果你更看重二次开发的便捷性，推荐skywalking。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"参考链接"}},[i("strong",[this._v("参考链接")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("blockquote",[i("p",[this._v("如果觉得本文不错，请关注作者公众号：【"),i("strong",[this._v("阿飞的博客")]),this._v("】，多谢！")])])}],s=n(0),r=Object(s.a)({},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"apm巅峰对决：skywalking-p-k-pinpoint"}},[t._v("APM巅峰对决：skywalking P.K. Pinpoint")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("Pinpoint只支持Java和PHP，而skywalking支持5种语言：Java, C#, PHP, Node.js, Go。如果公司的服务涉及到多个开发语言，那么skywalking会是你更好的选择。并且，如果你要实现自己的探针（比如python语言），skywalking的二次开发成本也比Pinpoint更低。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("SkyWalking支持gRPC和http，不过建议使用gRPC，skywalking6.x版本已经不提供http方式（但是还会保留接收5.x的数据），以后会考虑删除。\n而Pinpoint使用的是thrift协议。\n协议本身没有谁好谁坏。")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("笔者认为，存储是skywalking和Pinpoint最大的差异所在，因为底层存储决定了上层功能。")]),t._v(" "),n("p",[t._v("Pinpoint只支持HBase，且扩展代价较大。这就意味着，如果选择Pinpoint，还要有能力hold住一套HBase集群（daocloud从Pinpoint切换到skywalking就是因为HBase的维护代价有点大）。在这方面，skywalking支持的存储就多很多，这样的话，技术选型时可以根据团队技术特点选择合适的存储，而且还可以自行扩展（不过生产环境上应该大部分是以es存储为主）。")]),t._v(" "),n("p",[t._v("Pinpoint只支持HBase的另一个缺陷就是，HBase本身查询能力有限（HBase只能支持三种方式查询：RowKey精确查找，SCAN范围查找，全表扫描）限制了Pinpoint的查询能力，所以其支持的查询一定是在时间的基础上（Pinpoint通过鼠标圈定一个时间范围后查看这个范围内的Trace信息）。而skywalking可以多个维度任意组合查询，例如：时间范围，服务名，Trace状态，请求路径，TraceId等。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("再以实现一个自己的探针为例（比如我要实现python语言的探针），Pinpoint选择thrift作为数据传输协议标准，而且为了节省数据传输大小，在传递常量的时候也尽量使用数据参考字典，传递一个数字而不是直接传递字符串等等。这些优化也增加了系统的复杂度：包括使用 Thrift 接口的难度、UDP 数据传输的问题、以及数据常量字典的注册问题等等。Pinpoint发展这么年才支持Java和PHP，可见一斑。而skywalking的数据接口就标准很多，并且支持OpenTracing协议，除了官方支持Java以外，C#、PHP和Node.js的支持都是由社区开发并维护。")]),t._v(" "),n("p",[t._v("还有后面会提到的告警，skywalking的可扩展性也要远好于Pinpoint。")]),t._v(" "),n("p",[t._v("最后，Pinpoint和skywalking都支持插件开发，Pinpoint插件开发参考：http://naver.github.io/pinpoint/1.8.2/plugindevguide.html。skywalking插件开发参考：https://github.com/apache/incubator-skywalking/blob/master/docs/en/guides/Java-Plugin-Development-Guide.md。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),n("p",[t._v("Pinpoint和skywalking都支持自定义告警规则。")]),t._v(" "),n("p",[t._v("但是恼人的是，Pinpoint如果要配置告警规则，还需要安装MySQL(配置告警时的用户，用户组信息以及告警规则都持久化保存在MySQL中)，这就导致Pinpoint的维护成本又高了一些，既要维护HBase又要维护MySQL。")]),t._v(" "),n("p",[t._v("Pinpoint支持的告警规则有：SLOW COUNT|RATE, ERROR COUNT|RATE, TOTAL COUNT, SLOW COUNT|RATE TO CALLEE, ERROR COUNT|RATE TO CALLEE, ERROR RATE TO CALLEE, HEAP USAGE RATE, JVM CPU USAGE RATE, DATASOURCE CONNECTION USAGE RATE。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),n("p",[t._v("skywalking配置告警不需要引入任何其他存储。skywalking在config/alarm-settings.xml中可以配置告警规则，告警规则支持自定义。")]),t._v(" "),n("p",[t._v("skywalking支持的告警规则（配置项中的名称是indicator-name）有：service_resp_time, service_sla, service_cpm, service_p99, service_p95, service_p90, service_p75, service_p50, service_instance_sla, service_instance_resp_time, service_instance_cpm, endpoint_cpm, endpoint_avg, endpoint_sla, endpoint_p99, endpoint_p95, endpoint_p90, endpoint_p75, endpoint_p50。")]),t._v(" "),n("p",[t._v("Skywalking通过HttpClient的方式远程调用在配置项webhooks中定义的告警通知服务地址。skywalking也支持silence-period配置，假设在TN这个时间点触发了告警，那么TN -> TN+period 这段时间内不会再重复发送该告警。")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),n("p",[t._v("skywalking支持监控：Heap, Non-Heap, GC(YGC和FGC)。\nPinpoint能够监控的指标主要有：Heap, Non-Heap, FGC, DirectBufferMemory, MappedBufferMemory，但是没有YGC。另外，Pinpoint还支持多个指标同一时间点查看的功能。如下图所示：")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),n("p",[t._v("包括操作系统，和部署的服务实例的监控。\nPinpoint支持的维度有：CPU使用率，Open File Descriptor，数据源，活动线程数，RT，TPS。\nskywalking支持的维度有：CPU使用率，SLA，RT，CPM（Call Per Minutes）。\n所以，这方面两者旗鼓相当，没有明显的差距。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),n("p",[t._v("由于Pinpoint采集信息太过详细，所以，它对性能的损耗最大。而skywalking默认策略比较保守，对性能损耗很小。\n有网友做过压力测试，对比如下：")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),n("p",[t._v("skywalking与时俱进，全系标配jar包，部署只需要执行start.sh脚本即可。而Pinpoint的collector和web还是war包，部署时依赖web容器（比如Tomcat）。拜托，都9012年了。")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),n("p",[t._v("skywalking和Pinpoint支持的中间件对比说明：")]),t._v(" "),n("ol",[t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),n("li",[n("strong",[t._v("日志框架说明")]),t._v("：Pinpoint居然不支持log4j2？但是已经有人开发了相关功能，详情请戳链接："),n("a",{attrs:{href:"https://github.com/naver/pinpoint/issues/3055",target:"_blank",rel:"noopener noreferrer"}},[t._v("log4j plugin support log4j2 or not? https://github.com/naver/pinpoint/issues/3055"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("通过对skywalking和Pinpoint支持中间件的对比我们发现，skywalking对国产软件的支持真的是全方位秒杀Pinpoint，比如小众化的RPC框架：motan（微博出品），sofarpc，阿里的RocketMQ，Redis客户端Redisson，以及分布式任务调度框架elastic-job等。当然也从另一方面反应国产开源软件在世界上的影响力还很小。")]),t._v(" "),n("p",[t._v("这方面没有谁好谁坏，毕竟每个公司使用的技术栈不一样。如果你对RocketMQ有强需求，那么skywalking是你的最佳选择。如果你对es有强需求，那么skywalking也是你的最佳选择。如果HBase是你的强需求，那么Pinpoint就是你的最佳选择。如果MSSQL是你的强需求，那么Pinpoint也是你的最佳选择。总之，这里完全取决你的项目了。")]),t._v(" "),t._m(52),t._v(" "),n("p",[t._v("经过前面对skywalking和Pinpoint全方位对比后我们发现，对于两款非常优秀的APM软件，有一种既生瑜何生亮的感觉。Pinpoint的优势在于：追踪数据粒度非常细、功能强大的用户界面，以及使用HBase作为存储带来的海量存储能力。而skywalking的优势在于：非常活跃的中文社区，支持多种语言的探针，对国产开源软件非常全面的支持，以及使用es作为底层存储带来的强大的检索能力，并且skywalking的扩展性以及定制化要更优于Pinpoint：")]),t._v(" "),t._m(53),t._v(" "),n("p",[t._v("最后，参考上面的对比，结合你的需求，哪些不能妥协，哪些可以舍弃，从而更好的选择一款最适合你的APM软件。")]),t._v(" "),t._m(54),t._v(" "),n("p",[t._v("参考[1]. https://github.com/apache/incubator-skywalking/blob/master/docs/en/setup/service-agent/java-agent/Supported-list.md\n参考[2]. http://naver.github.io/pinpoint/1.8.2/main.html#supported-modules\n参考[3]. https://juejin.im/post/5a7a9e0af265da4e914b46f1")]),t._v(" "),n("hr"),t._v(" "),t._m(55)])},e,!1,null,null,null);i.default=r.exports}}]);