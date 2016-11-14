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
> [Live Demo](http://akhgar.net/demo/examples/)

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

## About

Slug is the part of a URL that is often used to include in the pages' URLs the respective titles to make it easy for users to learn what the pages are about looking just at their URLs.

Not all characters can be included in URLs. For instance spaces and other characters need to be encoded in a special way, so they are not easily readable by the users.

This object can take a text of a title and create the slug by replacing characters that would need to be encoded, by using dashes.

Manuel Lemos



