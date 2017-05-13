## 最佳实践

#### 可维护性
编写可维护代码很重要，因为大部分人话费很多时间在维护他人写的代码。很难从头开始开发新的代码，很多情况下是以他人的工作成果为基础的。确保自己的代码的可维护性，以便其他开发人员在此基础上更好的工作。

#### **什么是可维护的代码**
+ 可理解性，其他人可以接手代码并理解它的意图，而无需开发人员的完整解释
+ 直观性，代码中的东西一看就明白，不管其操作过程多么复杂
+ 可适应性，代码以一种数据上的变化不要求完全重写的方法撰写
+ 可扩展性，在代码架构上已考虑未来允许对代码的核心功能进行扩展
+ 可调试性，当有些地方出错时，代码可以给予足够的信息用来确认出错的原因

#### 代码约定
 一种让代码变得可维护的简单途径是形成一套javascript代码的书写约定。杰出的开源社区项目有着严格的代码约定要求，着让社区中的任何人都可以轻松地理解代码是如何组织的。
 - 可读性，要让代码可维护，首先必须可读。可读性与代码作为文本文件的格式方式有关，可读性的大部分内容都是和代码的缩进相关的，当所有人都使用一样的缩进方式时，整个项目中的代码都会更加易于阅读。
    - 函数和方法，每个函数和方法都应该包含一个注释，描述其目的和用于完成任务的可能算法。
    - 大段代码，用于完成单个任务的多行代码应该在前面放一个描述任务的注释
    - 复杂算法，如果使用了一个独特的方式解决某个问题，则要在注释中说明你是如何做到的，这不仅可以帮助其他人浏览你的代码，也可能在下次自己查阅代码的时候帮助理解。
    - Hack，因为存在浏览器的差异，javascript代码一般会存在一些hack，不要假设其他人在看代码的时候能够理解hack所要应付的浏览器问题。那么请在hack的代码片段中做出注释。
 - 变量和函数命名，适当给变量和函数起名字对于增加代码的可理解性和可维护性是非常重要的。
    - 变量名应为名字如car或者person
    - 函数名应该以动词开始，如getName().返回布尔类型值的函数一般以is开头，如isEnable()
    - 变量和函数都应该使用合乎逻辑的名字，不必要担心长度。
 - 变量类型透明，由于在javascript中变量是松散类型的，很容易就忘记变量所应包含的数据类型。合适的命名方式可以一定程度上缓解这个问题
    - 初始化，当定义了一个变量后，它应该被初始化为一个值，来暗示它将来应该如何应用。将来保存布尔类型的值应该初始化为`true`或者`false`,将来保存数字的变量就应该初始化为一个数字。初始化为一种特定的数据类型可以很好的指明变量的类型。
    ```javascript
    var found = false;
    var count = 1;
    var name = '';
    var person = null;
    ```
    - 使用匈牙利标记法来指定变量类型，匈牙利标记法在变量名之前加上一个或者多个字符来表示数据类型。这个标记法在脚本语言中很流行，曾经很长时间也是javascript所推崇的方式。用**o**代表对象，**s**代表字符串，**i**代表整数，**f**代表浮点数，**b**代表布尔型
    ```javascript
    var bFound; //布尔型
    var iCount; //整数
    var sName; //字符串
    var oPerson; //对象
    ```
    匈牙利标记法缺点是让代码某种程度上难以阅读，阻碍了没有用它时代码的直观性和句子式的特质，因此失去了一些开发者的宠爱。
    
    - 最后一种指定类型的方式是使用类型注释
    ```javascript
    var found  /*:Boolean*/ = false;
    var count /*:int*/ = 10;
    var name /*:String*/ = 'Nicholas';
    var person /*:Object*/ = null;
    ```
    类型注释维持了代码的整体可读性，同时注入了类型信息。
    三种指定变量类型的方法，各自都有优势，自己斟酌使用。

#### 松散耦合
    