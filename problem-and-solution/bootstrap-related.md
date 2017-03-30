## twitter bootstrap related

#### bootstrap modal 模态框弹出瞬间消失的问题
原因是：bootstrap.min.js（bootstrap.js） 和modal.js重复引用，把 modal.js删除掉就好了。
