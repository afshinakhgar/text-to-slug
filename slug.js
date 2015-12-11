(function ( $ ) {

    $.fn.slug = function(options) {

        var settings = $.extend({
            slug_color: "green"
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
            var fixpersian = 'ا ب پ ت ث ج چ ح خ د ذ ر ز ژ س ش ص ض ط ظ ع ق ف ق ک گ ل م ن و ه ی';



            str = str.replace(/[^a-z0-9 -][fixpersian]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-'); // collapse dashes

            return str;
        }

        $('<input />', {
            'id':'slug-hidden',
            'type':'hidden',
            'name':'slug',
            'class':'slug-hidden'
        }).insertAfter(this);


        $( "<span id='slug-display'></span>" ).insertAfter(this);

        this.on('keyup',function(){
             val = string_to_slug($(this).val());
            $('input:hidden#slug-hidden').val(val).blur();
            //$('input:hidden#slug-hidden').attr('value',val);

            console.log($('#slug-hidden').val(val));
            //$(this).val(val);
            $('#slug-display').html(val);
        });

        //

        this.css( "color",settings.slug_color );
        return this;
    };

}( jQuery ));