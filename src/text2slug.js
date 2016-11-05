(function ( $ ) {
    $.fn.text2slug = function(options) {
        var settings = $.extend({
            slug_color: "#4E8451",
            input_name : "slug",
            output_format : "form",
            separator : '-',
            urf : false
        }, options );

        function string_to_slug(str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();
            // remove accents, swap ñ for n, etc
            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to   = "aaaaeeeeiiiioooouuuunc------";
            for (var i=0, l=from.length ; i<l ; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }
            // fix special charachters
            str = str.replace(/[\^!@&\/\\#,+()$~%.'":*?<>{}]/g,'');
            var fixpersian = '';
            if(settings.utf == true){
                var fixpersian = 'ا ب پ ت ث ج چ ح خ د ذ ر ز ژ س ش ص ض ط ظ ع ق ف ق ک گ ل م ن و ه ی';
                str = str.replace(/[^a-z0-9 -][fixpersian]/g, '');
            }else{
                str = str.replace(/[^a-z0-9 -]/g, '')// remove invalid chars
            }
            str = str.replace(/\s+/g, settings.separator) // collapse whitespace and replace by separator (default : -)
                .replace('/'+settings.seperator+'+/g', settings.separator); // collapse separator (#dashes)

            return str;
        }
        var rand = Math.floor((Math.random() * 1000) + 1);


        function setVal(obj)
        {
            val = string_to_slug(obj.val());
            $('input:hidden#slug-hidden').val(val).blur();
            //$('input:hidden#slug-hidden').attr('value',val);
            //$(this).val(val);
            $('#slug-display'+rand).html(val);
        }


        this.on('keyup',function(){
            setVal($(this));
        });
        

        if(settings.output_format == 'form'){
            $('<input />', {
                'id':'slug-hidden',
                'type':'hidden',
                'name' : settings.input_name,
                'class':'slug-hidden'
            }).insertAfter(this);
            $( "<span id='slug-display"+rand+"' class='slug-display'></span>" ).insertAfter(this);
            setVal($(this));

        }else if(settings.output_format == 'form'){
            setVal($(this));

            return val;
        }

        this.css( "color",settings.slug_color );
        return this;
    };

}( jQuery ));