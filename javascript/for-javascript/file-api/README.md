## File API
不能直接访问用户计算机中的文件，一直都是web应用中的一大障碍。FIle API 在表单中的文件输入字段的基础上，添加了一些直接访问文件信息的接口。HTML5在DOM中为文件输入元素添加了一个files集合。files集合中包含一组File对象。每个File对象对应一个文件。每个File对象都有下列只读属性。
+ name 本地文件系统中的文件名
+ size 文件的字节大小
+ type 字符串，文件的MIME类型
+ lastModifiedDate 字符串，文件上一次被修改的时间

```javascript
var el = document.getElementById('f-id');
el.addEventListener('change', function(e) {
    let files = e.target.files;
    let len = files.length;
    for (i = 0; i < len; i++) {
        console.log(files[i]);
    }
}, false);
```

#### FileReader类型
FileReader类型读取的是文件系统而不是远程服务器。
+ readAsText(file,encoding)
+ readAsDataURL(file)
+ readAsArrayBuffer(file)
```html
    <form action="">
        <input type="file" id="f-id">
    </form>
    <div>progress: <span id="progress"></span></div>
    <div>output: <span id="output"></span></div>
    <script>
    var el = document.getElementById('f-id');
    el.addEventListener('change', function(e) {
        let info = '',
            output = document.getElementById('output'),
            progress = document.getElementById('progress'),
            type = 'default',
            files = e.target.files,
            len = files.length,
            fileReader = new FileReader();

        if (/image/.test(files[0].type)) {
            fileReader.readAsDataURL(files[0]);
            type = 'image';
        } else {
            fileReader.readAsText(files[0]);
            type = 'text';
        }
        fileReader.onerror = function() {
            output.innerHTML = 'could not read file,error code is ' + fileReader.error.code;
        };
        fileReader.onprogress = function(e) {
            if (e.lengthComputable) {
                progress.innerHTML = e.loaded + '/' + e.total;
            }
        };
        fileReader.onload = function(e) {
            let html = '';
            switch (type) {
                case 'image':
                    html = '<img src=\'' + fileReader.result + '\'>';
                    break;
                case 'text':
                    console.log(files[0].type);
                    html = files[0].type;
                    break;
            }
            output.innerHTML = html;
        };
    }, false);
    </script>
```

#### 读取部分内容
只读取文件的一部
分而不是全部内容，下面是一个通用的函数，可以在不同实现中使用。只读取文件的一部分可以节省时间，非常适合关注数据中某个特定的部分。
```javascript
files = e.target.files,
blob=files[0].slice(0,32);
```

#### 对象URL
对象URL也被称为blobURL，指的是引用保存在File或Blob中的数据的URL。使用对象URL的好处是可以不必要把文件读取到javascript中而直接使用文件内容。
```javascript
// 创建URL资源
url=window.URL.createObjectURL(blob);
// 释放URL资源
window.URL.revokeObjectURL(url);
```

#### 读取拖放的文件
把桌面上文件拖放到浏览器中会触发drop事件。可以在`event.dataTransfer.files`中读取到被放置的文件。
```javascript
event.preventDefault();
if(event.type=='drop'){
    files=event.dataTransfer.files;
    i=0;
    len=files.length;
    while(i<len){
        console.log(files[i].name+files[i].type);
    }
}
```

#### 通过XHR上传文件

