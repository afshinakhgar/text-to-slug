# Text2Slug
Text2Slug is a neat and small jquery plugin for making slugable input in a form
> Text2Slug Plugin is less than ~1kb
* Text2Slug generate slug from unicode string, URL-friendly slugify with multiple languages support.



## Install
> Requires : JQuery
* First download package text-to-slug.js or text-to-slug.min.js 
* Then put Jquery and text-to-slug.js file into your html Head
* use plug in 
* Also You can see examples in examples folder
> Add jquery and text-to-slug slug js to document
> 


>
>
### live Demo
> [Live Demo](http://akhgar.net/demo/text-to-slug/index.html)

```
<script src="src/jquery.min.js"></script>
<script src="src/text-to-slug.js"></script>
```

`<input type="text" id="slug_tmp2" name="slug_tmp2" >`
```
<script>
$(function(){
        $('#slug_tmp2').text2slug({input_name:'slug2'});
});
</script>
```


## Requests or bugs?
* [Issues](https://github.com/afshinpersian/text-to-slug/issues)
* [Pull Requests](https://github.com/afshinpersian/text-to-slug/pulls)

## Author
Afshin Akhgar , afshin@akhgar.net
> [akhgar.net](http://akhgar.net)

## License
The source files are distributed under the The MIT License (MIT).

