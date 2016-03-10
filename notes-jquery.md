#jquery notes
***
#### 基础
- 第一步添加jquery库并引入你的html文件中  
- 第二步在jquery ready函数中写你的代码
```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <a href="https://www.baidu.com"  target="_blank">submit</a>
  <script>
    $(document).ready(function(){
      $("a").click(function(event){
        console.log("buuug7");
        event.preventDefault();
      });
    });
  </script>
</body>
</html>
```
