# 基础语法与选择器
![语法](./css1.jpg "语法图")

## 注释
```
/*注释内容*/
```

## 选择器

### id选择器

```html
<div id="s1">id选择器</div>

<style type="text/css">
    #s1 {
        color: red;
    }
</style>
```

### 类选择器

```html
<div class="s2">类选择器1</div>
<div class="s2">类选择器2</div>
<div class="s3">类选择器3</div>

<style type="text/css">
    .s2{
        color: green;
    }
    
    /* 可以将多个选择器写在一起 */
    .s2,.s3,#s1{
        font-style:italic;
    }
    </style>
```