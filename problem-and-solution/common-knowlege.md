## common knowlege


#### 乱数假文 lorem ipsum

Lorem ipsum，中文又称“乱数假文”， 是指一篇常用于排版设计领域的拉丁文文章

常见的Lorem ipsum起头如下：

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

sublime中文乱数假文插件
https://github.com/cjltsod/sublime-ChineseLoremIpsum

#### php中的PRC
date.timezone = PRC。PRC，People’s Republic of China，中华人民共和国，也就是日期使用中国的时区。

####  UTC
UTC是协调世界时(Universal Time Coordinated)英文缩写,是由国际无线电咨询委员会规定和推荐,并由国际时间局(BIH)负责保持的以秒为基础的时间标度.UTC相当于本初子午线(即经度0度)上的平均太阳时,过去曾用格林威治平均时(GMT)来表示.北京时间比UTC时间早8小时,以1999年1月1日0000UTC为例,UTC时间是零点,北京时间为1999年1月1日早上8点整.

#### HTTP协议 

###### HTTP协议是无状态协议 
无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。
客户端与服务器进行动态交互的Web应用程序出现之后，HTTP无状态的特性严重阻碍了这些应用程序的实现，毕竟交互是需要承前启后的，简单的购物车程序也要知道用户到底在之前选择了什么商品。于是，两种用于保持HTTP连接状态的技术就应运而生了，一个是Cookie，而另一个则是Session。HTTP本身是一个无状态的连接协议，为了支持客户端与服务器之间的交互，我们就需要通过不同的技术为交互存储状态，而这些不同的技术就是Cookie和Session了。

###### Cookie是通过客户端保持状态的解决方案。  
从定义上来说，Cookie就是由服务器发给客户端的特殊信息，而这些信息以文本文件的方式存放在客户端，然后客户端每次向服务器发送请求的时候都会带上这些特殊的信息。让我们说得更具体一些：当用户使用浏览器访问一个支持Cookie的网站的时候，用户会提供包括用户名在内的个人信息并且提交至服务器；接着，服务器在向客户端回传相应的超文本的同时也会发回这些个人信息，当然这些信息并不是存放在HTTP响应体（Response Body）中的，而是存放于HTTP响应头（Response Header）；当客户端浏览器接收到来自服务器的响应之后，浏览器会将这些信息存放在一个统一的位置，对于Windows操作系统而言，我们可以从： [系统盘]:\Documents and Settings\[用户名]\Cookies目录中找到存储的Cookie；自此，客户端再向服务器发送请求的时候，都会把相应的Cookie再次发回至服务器。而这次，Cookie信息则存放在HTTP请求头（Request Header）了。
有了Cookie这样的技术实现，服务器在接收到来自客户端浏览器的请求之后，就能够通过分析存放于请求头的Cookie得到客户端特有的信息，从而动态生成与该客户端相对应的内容。通常，我们可以从很多网站的登录界面中看到“请记住我”这样的选项，如果你勾选了它之后再登录，那么在下一次访问该网站的时候就不需要进行重复而繁琐的登录动作了，而这个功能就是通过Cookie实现的。

###### 与Cookie相对的一个解决方案是Session，它是通过服务器来保持状态的。
由于Session这个词汇包含的语义很多，因此需要在这里明确一下 Session的含义。首先，我们通常都会把Session翻译成会话，因此我们可以把客户端浏览器与服务器之间一系列交互的动作称为一个 Session。从这个语义出发，我们会提到Session持续的时间，会提到在Session过程中进行了什么操作等等；其次，Session指的是服务器端为客户端所开辟的存储空间，在其中保存的信息就是用于保持状态。从这个语义出发，我们则会提到往Session中存放什么内容，如何根据键值从 Session中获取匹配的内容等。
要使用Session，第一步当然是创建Session了。那么Session在何时创建呢？当然还是在服务器端程序运行的过程中创建的，不同语言实现的应用程序有不同创建Session的方法，而在Java中是通过调用HttpServletRequest的getSession方法（使用true作为参数）创建的。在创建了Session的同时，服务器会为该Session生成唯一的Session id，而这个Session id在随后的请求中会被用来重新获得已经创建的Session；在Session被创建之后，就可以调用Session相关的方法往Session中增加内容了，而这些内容只会保存在服务器中，发到客户端的只有Session id；当客户端再次发送请求的时候，会将这个Session id带上，服务器接受到请求之后就会依据Session id找到相应的Session，从而再次使用之。正是这样一个过程，用户的状态也就得以保持了。

###### 综上所述
HTTP本身是一个无状态的连接协议，为了支持客户端与服务器之间的交互，我们就需要通过不同的技术为交互存储状态，而这些不同的技术就是Cookie和Session了。

#### PV UV IP
+ PV(访问量)：即Page View, 即页面浏览量或点击量，用户每次刷新即被计算一次。
+ UV(独立访客)：即Unique
+ Visitor,访问您网站的一台电脑客户端为一个访客。00:00-24:00内相同的客户端只被计算一次。IP(独立IP)：指独立IP数。00:00-24:00内相同IP地址之被计算一次。

#### excel生成多个数据
```
="3020100000000" & TEXT(ROW(),"000")
```
打开一张excel表格,点击A1,输入上面的公式,在按`ctrl+enter`键即可得到你想要的批量数据

```
// 一次性生成10万个数据
=int(rand()*900000+100000)
```

#### 软件版本RC GA M等解释
+ RC版本(Release Candidate),Candidate是候选人的意思，用在软件上就是候选版本。Release是发行、发布的意思。Release.Candidate.就是发行候选版本。和Beta版最大的差别在于Beta阶段会一直加入新的功能，但是到了RC版本，几乎就不会加入新的功能了，而主要着重于除错!
 
+ GA版本,在很多软件下载的时候，你会发觉标识为GA或者CRx等。比如MySQL和JBoss都采用这种标识。那什么是GA呢。GA是GenerallyAvailable的缩写，意思是开发团队认为该版本是稳定版（有的软件可能会标识为stable版或者production版，其意思和GA相同），可以在较为关键的场合使用。如果你是要用在生产中的软件，或者你是一个新手，那么你最好选用GA版本。这是测试最为充分，最为稳定的版本。
 
+ M版本,M1,M2,M3中的M是MILESTONE的简写，里程碑的意思
+ Alpha:内部测试版
+ Beta:外部测试版
+ Build:内部标号
+ Corporation或Enterprise企业版
+ Delux:豪华版  (deluxe: 豪华的，华丽的)
+ DEMO演示版，一般会有功能限制
+ Free:免费版
+ Full:完全版
+ Final:正式版
+ Pro(professional):专业版
+ Plus:加强版
+ Retail:零售版
+ Release发行版，有时间限制
+ Shareware共享版，虽然不会要求注册但是一般也有功能限制
+ SR:修正版
+ Trial:试用版（一般有时间或者功能限制）

+ alpha、beta、gamma 用来标识测试的阶段和范围
+ alpha: 是指内测，即现在说的CB，指开发团队内部测试的版本或者有限用户体验测试版本;
+ beta: 是指公测，即针对所有用户公开的测试版本;
+ gamma: 是beta 版做过一些修改，成为正式发布的候选版本（Release Candidate）
+ RTM：(Release to Manufacture)是给工厂大量压片的版本，内容跟正式版是一样的，不过RTM版也有出限制、评估版的。但是和正式版本的主要程序代码都是一样的。
+ OEM：是给计算机厂商随着计算机贩卖的，也就是随机版。只能随机器出货，不能零售。只能全新安装，不能从旧有操作系统升级。包装不像零售版精美，通常只有一面CD和说明书(授权书)。
+ EVAL：而流通在网络上的EVAL版，与“评估版”类似，功能上和零售版没有区别。
+ RTL：Retail(零售版)是真正的正式版，正式上架零售版。在安装盘的i386文件夹里有一个eula.txt，最后有一行EULAID，就是你的 版本。比如简体中文正式版是EULAID:WX.4_PRO_RTL_CN，繁体中文正式版是WX.4_PRO_RTL_TW。其中：如果是WX.开头是 正式版，WB.开头是测试版。_PRE，代表家庭版；_PRO，代表专业版。
+ Demo版(演示版)：DEMO是英语单词demonstration的缩写,演示版,试用版,主要是演示正式软件的部分功能，用户可以从中得知软件的基本操作，为正式产品的发售扩大影响。如果是游戏的话，则只有一两个关卡可以玩。该版本也可以从Internet上免费下载。
还有在音乐中,Demo盘,Demo带,都是表示试听的意思.
+ Enhance版(增强版或加强版)：如果是一般软件，一般称作“增强版”，会加入一些实用的新功能。如果是游戏，一般称作“加强版”，会加入一些新的游戏场景和游戏情节等。这是正式发售的版本。
+ KB:  KB是微软对补丁的命名方式，是Knowledge Base(知识库)的简称。其指的是某个补丁对应微软知识库中哪一篇文章.。例如KB888111，就是对应知识库中888111号文章。现在一般用来表示补丁,KB1,KB2,KB3......例如:QQ2008KB3
+ SP:  升级补丁包Service Pack 的简称,如Windows XP SP2等。

#### HTTP referer
简而言之，HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器我是从哪个页面链接过来的，服务器籍此可以获得一些信息用于处理。比如从我主页上链接到一个朋友那里，他的服务器就能够从HTTP Referer中统计出每天有多少用户点击我主页上的链接访问他的网站。
Referer的正确英语拼法是referrer。由于早期HTTP规范的拼写错误，为了保持向后兼容就将错就错了。其它网络技术的规范企图修正此问题，使用正确拼法，所以目前拼法不统一


#### session和cookie区别
session和cookie的最大区别在于session是保存在服务端的内存里面，而cookie保存于浏览器或客户端文件里面；session是基于访问的进程，记录了一个访问的开始到结束，当浏览器或进程关闭之后，session也就“消失”了，而cookie更多地被用于标识用户，它可以是长久的，用于用户跟踪和识别唯一用户（Unique Visitor）。

#### 关于session
session被用于表示一个持续的连接状态，在网站访问中一般指代客户端浏览器的进程从开启到结束的过程。session其实就是网站分析的访问（visits）度量，表示一个访问的过程。    
session的常见实现形式是会话cookie（session cookie），即未设置过期时间的cookie，这个cookie的默认生命周期为浏览器会话期间，只要关闭浏览器窗口，cookie就消失了。实现机制是当用户发起一个请求的时候，服务器会检查该请求中是否包含sessionid，如果未包含，则系统会创造一个名为JSESSIONID的输出 cookie返回给浏览器(只放入内存，并不存在硬盘中)，并将其以HashTable的形式写到服务器的内存里面；当已经包含sessionid是，服务端会检查找到与该session相匹配的信息，如果存在则直接使用该sessionid，若不存在则重新生成新的 session。这里需要注意的是session始终是有服务端创建的，并非浏览器自己生成的。 
但是浏览器的cookie被禁止后session就需要用get方法的URL重写的机制或使用POST方法提交隐藏表单的形式来实现。  
这里有一个很关键性的注意点，即session失效时间的设置，这里要分两方面来看：浏览器端和服务端。对于浏览器端而言，session与访问进程直接相关，当浏览器被关闭时，session也随之消失；而服务器端的session失效时间一般是人为设置的，目的是能定期地释放内存空间，减小服务器压力，一般的设置为当会话处于非活动状态达20或30分钟时清除该 session，所以浏览器端和服务端的session并非同时消失的，session的中断也并不一定意味着用户一定离开了该网站。目前Google Analytics和Omniture都定义当间隔30分钟没有动作时，算作一次访问结束，所以上图中session的最后一步不只是离开，也有可能是静止、休眠或者发呆的状态。  
还有一点需要注意，就是现在的浏览器好像趋向于多进程的session共享，即通过多个标签或页面打开多个进程访问同一网站时共享一个 session cookie，只有当浏览器被关闭时才会被清除，也就是你有可能在标签中关闭了该网站，但只要浏览器未被关闭并且在服务器端的session未失效前重新开启该网站，那么就还是使用原session进行浏览；而某些浏览器在打开多页面时也可能建立独立的session，IE8、Chrome默认都是共享 session的，在IE8中可以通过菜单栏中的文件->新建会话来建立独立session的浏览页面。

#### 关于cookie 
cookie 是一小段文本信息，伴随着用户请求和页面在Web服务器和浏览器之间传递。用户每次访问站点时，Web应用程序都可以读取cookie包含的信息。  
session的实现机制里面已经介绍了常见的方法是使用会话cookie（session cookie）的方式，而平常所说的cookie主要指的是另一类cookie——持久cookie（persistent cookies）。持久cookie是指存放于客户端硬盘中的 cookie信息（设置了一定的有效期限），当用户访问某网站时，浏览器就会在本地硬盘上查找与该网站相关联的cookie。如果该cookie 存在，浏览器就将它与页面请求一起通过HTTP报头信息发送到您的站点，然后在系统会比对cookie中各属性和值是否与存放在服务器端的信息一致，并根据比对结果确定用户为“初访者”或者“老客户”。  
持久cookie一般会保存用户的用户ID，该信息在用户注册或第一次登录的时候由服务器生成包含域名及相关信息的cookie发送并存放到客户端的硬盘文件上，并设置cookie的过期时间，以便于实现用户的自动登录和网站内容自定义。  
Apache自带的mod_usertrack模块可以在用户首次来到当前网站的时候给用户种下一个唯一的cookie（较长时间过期），这个 cookie是用户首次来当前网站的IP地址加上一个随机字符串组成的。同时在自定义WEB日志中在最后增加%{cookie}n字段可以实现 cookie在apache日志中的输出，用于数据统计与用户跟踪。

#### 常见开源协议
现今存在的开源协议很多，而经过Open Source Initiative组织通过批准的开源协议目前有58种（http://www.opensource.org/licenses/alphabetical）。我们在常见的开源协议如BSD, GPL, LGPL,MIT等都是OSI批准的协议。如果要开源自己的代码，最好也是选择这些被批准的开源协议。
这里我们来看四种最常用的开源协议及它们的适用范围，供那些准备开源或者使用开源产品的开发人员/厂家参考。

###### BSD开源协议（original BSD license、FreeBSD license、Original BSD license）
BSD开源协议是一个给于使用者很大自由的协议。基本上使用者可以”为所欲为”,可以自由的使用，修改源代码，也可以将修改后的代码作为开源或者专有软件再发布。但”为所欲为”的前提当你发布使用了BSD协议的代码，或则以BSD协议代码为基础做二次开发自己的产品时，需要满足三个条件：
+ 如果再发布的产品中包含源代码，则在源代码中必须带有原来代码中的BSD协议。
+ 如果再发布的只是二进制类库/软件，则需要在类库/软件的文档和版权声明中包含原来代码中的BSD协议。
+ 不可以用开源代码的作者/机构名字和原来产品的名字做市场推广。

BSD 代码鼓励代码共享，但需要尊重代码作者的著作权。BSD由于允许使用者修改和重新发布代码，也允许使用或在BSD代码上开发商业软件发布和销售，因此是对商业集成很友好的协议。而很多的公司企业在选用开源产品的时候都首选BSD协议，因为可以完全控制这些第三方的代码，在必要的时候可以修改或者二次开发。

###### Apache Licence 2.0（Apache License, Version 2.0、Apache License, Version 1.1、Apache License, Version 1.0）
Apache Licence是著名的非盈利开源组织Apache采用的协议。该协议和BSD类似，同样鼓励代码共享和尊重原作者的著作权，同样允许代码修改，再发布（作为开源或商业软件）。需要满足的条件也和BSD类似：
1. 需要给代码的用户一份Apache Licence
2. 如果你修改了代码，需要再被修改的文件中说明。
3. 在延伸的代码中（修改和有源代码衍生的代码中）需要带有原来代码中的协议，商标，专利声明和其他原来作者规定需要包含的说明。
4. 如果再发布的产品中包含一个Notice文件，则在Notice文件中需要带有Apache Licence。你可以在Notice中增加自己的许可，但不可以表现为对Apache Licence构成更改。

Apache Licence也是对商业应用友好的许可。使用者也可以在需要的时候修改代码来满足需要并作为开源或商业产品发布/销售。

###### GPL（GNU General Public License）
我们很熟悉的Linux就是采用了GPL。GPL协议和BSD, Apache Licence等鼓励代码重用的许可很不一样。GPL的出发点是代码的开源/免费使用和引用/修改/衍生代码的开源/免费使用，但不允许修改后和衍生的代码做为闭源的商业软件发布和销售。这也就是为什么我们能用免费的各种linux，包括商业公司的linux和linux上各种各样的由个人，组织，以及商业软件公司开发的免费软件了。
GPL协议的主要内容是只要在一个软件中使用(“使用”指类库引用，修改后的代码或者衍生代码)GPL 协议的产品，则该软件产品必须也采用GPL协议，既必须也是开源和免费。这就是所谓的”传染性”。GPL协议的产品作为一个单独的产品使用没有任何问题，还可以享受免费的优势。
由于GPL严格要求使用了GPL类库的软件产品必须使用GPL协议，对于使用GPL协议的开源代码，商业软件或者对代码有保密要求的部门就不适合集成/采用作为类库和二次开发的基础。
其它细节如再发布的时候需要伴随GPL协议等和BSD/Apache等类似。

###### LGPL（GNU Lesser General Public License）
LGPL是GPL的一个为主要为类库使用设计的开源协议。和GPL要求任何使用/修改/衍生之GPL类库的的软件必须采用GPL协议不同。LGPL允许商业软件通过类库引用(link)方式使用LGPL类库而不需要开源商业软件的代码。这使得采用LGPL协议的开源代码可以被商业软件作为类库引用并发布和销售。
但是如果修改LGPL协议的代码或者衍生，则所有修改的代码，涉及修改部分的额外代码和衍生的代码都必须采用LGPL协议。因此LGPL协议的开源代码很适合作为第三方类库被商业软件引用，但不适合希望以LGPL协议代码为基础，通过修改和衍生的方式做二次开发的商业软件采用。
GPL/LGPL都保障原作者的知识产权，避免有人利用开源代码复制并开发类似的产品
MIT（MIT）
MIT是和BSD一样宽范的许可协议,作者只想保留版权,而无任何其他了限制.也就是说,你必须在你的发行版里包含原许可协议的声明,无论你是以二进制发布的还是以源代码发布的.

